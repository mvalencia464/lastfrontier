'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Phone,
  Menu,
  X,
  Star,
  ChevronRight,
  ChevronLeft,
  Clock,
  ShieldCheck,
  Leaf,
  Snowflake,
  Sun,
  Truck,
  Calendar,
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Sparkle,
  Upload,
  ImageIcon
} from 'lucide-react';
import ReviewsSection from '../src/components/ReviewsSection';
import AddressAutocomplete from '../src/components/AddressAutocomplete';
import { submitQuote, uploadProjectImage } from './actions';
import Link from 'next/link';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Multi-step form state
  const [formStep, setFormStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({ address: '', email: '', phone: '', smsConsent: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [contactId, setContactId] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imageUploadStatus, setImageUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Modal Form State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalFormStep, setModalFormStep] = useState(1);
  const [modalSelectedService, setModalSelectedService] = useState<string | null>(null);
  const [modalSelectedAddons, setModalSelectedAddons] = useState<string[]>([]);
  const [modalContactInfo, setModalContactInfo] = useState({ address: '', email: '', phone: '', smsConsent: false });
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);
  const [modalSubmitStatus, setModalSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [modalContactId, setModalContactId] = useState<string | null>(null);
  const [modalUploadedImage, setModalUploadedImage] = useState<File | null>(null);
  const [isModalUploadingImage, setIsModalUploadingImage] = useState(false);
  const [modalImageUploadStatus, setModalImageUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleModalServiceSelect = (id: string) => {
    setModalSelectedService(id);
    setModalFormStep(2);
  };

  const toggleModalAddon = (addon: string) => {
    if (modalSelectedAddons.includes(addon)) {
      setModalSelectedAddons(modalSelectedAddons.filter(a => a !== addon));
    } else {
      setModalSelectedAddons([...modalSelectedAddons, addon]);
    }
  };

  const handleQuoteSubmit = async (isModal: boolean) => {
    const service = isModal ? modalSelectedService : selectedService;
    const addons = isModal ? modalSelectedAddons : selectedAddons;
    const info = isModal ? modalContactInfo : contactInfo;
    const setSubmitting = isModal ? setIsModalSubmitting : setIsSubmitting;
    const setStatus = isModal ? setModalSubmitStatus : setSubmitStatus;
    const setContact = isModal ? setModalContactId : setContactId;

    setSubmitting(true);
    setStatus('idle');

    try {
      const response = await submitQuote({
        service,
        addons,
        ...info,
      });

      if (response.success && response.contactId) {
        setStatus('success');
        setContact(response.contactId);
        // Don't auto-reset - let user upload image first
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleImageUpload = async (isModal: boolean) => {
    const image = isModal ? modalUploadedImage : uploadedImage;
    const contact = isModal ? modalContactId : contactId;
    const setUploading = isModal ? setIsModalUploadingImage : setIsUploadingImage;
    const setStatus = isModal ? setModalImageUploadStatus : setImageUploadStatus;

    if (!image || !contact) return;

    setUploading(true);
    setStatus('idle');

    try {
      // Convert file to base64
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          // Remove data URL prefix (e.g., "data:image/png;base64,")
          const base64Data = result.split(',')[1];
          resolve(base64Data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(image);
      });

      const response = await uploadProjectImage(contact, {
        name: image.name,
        type: image.type,
        base64: base64,
      });

      if (response.success) {
        setStatus('success');
        // Auto-close after successful upload
        setTimeout(() => {
          if (isModal) {
            setIsQuoteModalOpen(false);
            setModalFormStep(1);
            setModalSelectedService(null);
            setModalSelectedAddons([]);
            setModalContactInfo({ address: '', email: '', phone: '', smsConsent: false });
            setModalSubmitStatus('idle');
            setModalContactId(null);
            setModalUploadedImage(null);
            setModalImageUploadStatus('idle');
          } else {
            setFormStep(1);
            setSelectedService(null);
            setSelectedAddons([]);
            setContactInfo({ address: '', email: '', phone: '', smsConsent: false });
            setSubmitStatus('idle');
            setContactId(null);
            setUploadedImage(null);
            setImageUploadStatus('idle');
          }
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setStatus('error');
    } finally {
      setUploading(false);
    }
  };

  // Carousel drag state
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Check URL params for pre-selection and open modal for lights service
    const params = new URLSearchParams(window.location.search);
    if (params.get('service') === 'lights') {
      setSelectedService('lights');
      setFormStep(2);
      // Open quote modal and set modal state
      setIsQuoteModalOpen(true);
      setModalSelectedService('lights');
      setModalFormStep(1);
      // Scroll to form (optional)
      const formElement = document.querySelector('form');
      if (formElement) formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    setFormStep(2); // Auto-advance to next step
  };

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter(a => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const businessInfo = {
    name: "Last Frontier Lawns",
    owner: "Jesse Miessner",
    phone: "907-440-7160",
    email: "lastfrontierlawnco@gmail.com",
    website: "https://lastfrontierlawns.com/",
    serviceAreas: "Anchorage and The Valley",
    rating: "5.0",
    reviewCount: "50+",
  };

  const services = {
    spring: [
      { item: "Full Cleanups", price: "Starting at $220" },
      { item: "Premium Fertilizer", price: "$55" },
      { item: "Debris Removal", price: null },
      { item: "First Mow", price: null },
    ],
    summer: [
      { item: "Weekly Mowing", price: "Starting at $55" },
      { item: "Midsummer Feed", price: "$55 per bag" },
      { item: "Weed Control", price: "Starting at $85" },
    ],
    fall: [
      { item: "Fall Cleanups", price: "Starting at $220" },
      { item: "Leaf Mulching", price: null },
    ],
    winter: [
      { item: "Snow Plowing", price: "Starting at $55" },
      { item: "Ice Control / Sanding", price: "Starting at $85" },
    ]
  };

  // Flattened services list for checklist
  const standardServiceItems = [
    "Spring Cleanup", "Weekly Mowing", "Fertilizer Program", "Weed Control", "Fall Cleanup", "Debris Removal"
  ];

  const winterServiceItems = [
    "Snow Plowing (Starts at $55)", "Plow Driveway", "Walkway Clearing", "Sanding (Starts at $85)", "Ice Control"
  ];

  const christmasServiceItems = [
    "Roofline Lighting", "Tree Wrapping", "Wreaths & Garland", "Removal & Storage", "Timer/Automation"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-stone-50 selection:bg-emerald-200 selection:text-emerald-900">

      {/* --- TOP UTILITY BAR --- */}
      <div className="bg-emerald-950 text-emerald-100 text-xs font-medium py-2.5 px-4 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-emerald-900/50 px-2 py-0.5 rounded text-emerald-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Serving {businessInfo.serviceAreas}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mon-Fri: 8am - 6pm</span>
            </div>
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>{businessInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-40 h-14 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image src="/christmas-logo.webp" alt="Christmas Lights Logo" fill className="object-contain" priority />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-sm tracking-wide">
            {['Services', 'Spring', 'Summer', 'Winter', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-emerald-700 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}

          </nav>

          {/* CTA Area */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end hidden xl:flex">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Call for Estimate</span>
              <a href={`tel:${businessInfo.phone}`} className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                {businessInfo.phone}
              </a>
            </div>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top-5 duration-200">
            <div className="p-4 grid grid-cols-2 gap-3">
              {[
                { name: 'Spring Cleanup', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50', onClick: () => setIsQuoteModalOpen(true) },
                { name: 'Lawn Mowing', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50', onClick: () => setIsQuoteModalOpen(true) },
                { name: 'Snow Plowing', icon: Snowflake, color: 'text-sky-500', bg: 'bg-sky-50', onClick: () => setIsQuoteModalOpen(true) },
                { name: 'Christmas Lights', icon: Sparkle, color: 'text-red-600', bg: 'bg-red-50', onClick: () => { setIsQuoteModalOpen(true); setModalSelectedService('lights'); } },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`${item.bg} p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center active:scale-95 transition-transform w-full`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className={`text-sm font-bold ${item.color}`}>{item.name}</span>
                </button>
              ))}            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <a href={`tel:${businessInfo.phone}`} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <main className="flex-grow relative overflow-hidden">
        {/* Background */}
        {/* Background */}
        <div className="absolute inset-0 bg-[#0E172C] z-0 pb-24" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
          {/* Gradient Overlay - Left Side Only/Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E172C] via-[#0E172C] to-emerald-950/50"></div>

          {/* Right Side Image Background */}
          <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full z-0 mix-blend-overlay lg:mix-blend-normal">
            <Image
              src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/691fa1b75bbf7f1c42fb6e66.webp"
              alt="Background"
              fill
              className="object-cover opacity-60 lg:opacity-100"
              priority
            />
            {/* Fade into solid color on the left - Stronger gradient for wider image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E172C] via-[#0E172C]/80 via-30% to-transparent"></div>
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E172C] via-transparent to-transparent"></div>
          </div>

          {/* Abstract Shapes */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">

          {/* Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-emerald-100 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed & Insured in Alaska</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Professional <br />
              <span className="text-white">
                Christmas Lights
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Prices starting at <span className="text-white font-bold">$697</span> with <span className="text-red-400 font-bold">15% OFF</span> for early booking. We handle design, installation, maintenance, and removal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <button
                onClick={() => {
                  setModalFormStep(1);
                  setModalSelectedService(null);
                  setModalSelectedAddons([]);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Get Your Quote</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex -space-x-2">
                  {['JD', 'AS', 'MP', 'ER'].map((initials, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold bg-slate-800">
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">Rated 5 Stars on Google</span>
                </div>
              </div>
            </div>


          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-700 relative h-full min-h-[420px] flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-t-3xl"></div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-bold text-white">Get Your Free Quote</h3>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded-md border border-emerald-500/30">Step {formStep} of 3</span>
                </div>
                <p className="text-slate-400 text-sm">
                  {formStep === 1 ? "What do you primarily need help with?" :
                    formStep === 2 ? (selectedService === 'lights' ? "Customize your lighting package:" : "Select any additional services you're interested in:") :
                      "Where should we send the quote?"}
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                {/* Step 1: Primary Service Selection */}
                {formStep === 1 && (
                  <div className="space-y-3 animate-in slide-in-from-right fade-in duration-300">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Christmas Lights - Featured */}
                      <button
                        type="button"
                        onClick={() => handleServiceSelect('lights')}
                        className={`col-span-2 relative group p-5 rounded-xl border-2 transition-all text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 bg-slate-900 ${selectedService === 'lights' ? 'border-emerald-500 text-white ring-1 ring-emerald-500' : 'border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'}`}
                      >
                        {/* Background Glow for Active State */}
                        {selectedService === 'lights' && <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>}

                        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 border-white/20 shadow-sm">
                          <Image
                            src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/691fa1b75bbf7f1c42fb6e66.webp"
                            alt="Christmas Lights"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="block text-lg font-bold">Christmas Lights</span>
                            <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">15% OFF</span>
                          </div>
                          <p className={`text-xs font-medium leading-relaxed ${selectedService === 'lights' ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-300'}`}>
                            Packages start at <span className="text-white font-bold">$697</span>. Design, install, & storage included.
                          </p>
                        </div>
                      </button>

                      {[
                        { id: 'mowing', label: 'Mowing', icon: Sun },
                        { id: 'cleanup', label: 'Cleanups', icon: Leaf },
                        { id: 'summer', label: 'Summer Maintenance', icon: Sun },
                        { id: 'snow', label: 'Winter Services', icon: Snowflake },
                      ].map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceSelect(service.id)}
                          className={`relative group p-4 rounded-xl border-2 transition-all text-left flex flex-col gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 ${selectedService === service.id ? 'border-emerald-500 bg-emerald-900/30 text-emerald-400' : 'border-slate-700 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800 text-slate-400 hover:text-white'}`}
                        >
                          <service.icon className={`w-6 h-6 ${selectedService === service.id ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`} />
                          <span className="block text-sm font-bold">{service.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Multi-Select Services */}
                {formStep === 2 && (
                  <div className="space-y-4 animate-in slide-in-from-right fade-in duration-300">
                    <div className="grid grid-cols-1 gap-2 max-h-[240px] overflow-y-auto pr-2">
                      {(selectedService === 'lights' ? christmasServiceItems : (selectedService === 'snow' ? winterServiceItems : standardServiceItems)).map((item) => (
                        <div
                          key={item}
                          onClick={() => toggleAddon(item)}
                          className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${selectedAddons.includes(item)
                            ? 'border-emerald-500 bg-emerald-900/30'
                            : 'border-slate-700 hover:bg-slate-800'
                            }`}
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${selectedAddons.includes(item) ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600 bg-slate-800'
                            }`}>
                            {selectedAddons.includes(item) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                          <span className={`text-sm font-medium ${selectedAddons.includes(item) ? 'text-white' : 'text-slate-400'}`}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="px-4 py-3.5 rounded-xl border border-slate-700 text-slate-400 font-bold hover:bg-slate-800 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormStep(3)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {formStep === 3 && (
                  <div className="space-y-4 animate-in slide-in-from-right fade-in duration-300">
                    {submitStatus === 'success' ? (
                      <div className="text-center py-6 space-y-4">
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">Request Received!</h4>
                          <p className="text-slate-400 mt-2">We'll be in touch shortly with your free quote.</p>
                        </div>

                        {/* Optional Image Upload */}
                        {!uploadedImage && imageUploadStatus !== 'success' && (
                          <div className="mt-6 space-y-3">
                            <p className="text-sm text-slate-300 font-medium">Have a photo of your project area?</p>
                            <label className="block cursor-pointer">
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) setUploadedImage(file);
                                }}
                              />
                              <div className="border-2 border-dashed border-slate-600 hover:border-emerald-500 rounded-xl p-6 transition-colors bg-slate-800/50 hover:bg-slate-800">
                                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                <p className="text-sm text-slate-300 font-medium">Click to upload image</p>
                                <p className="text-xs text-slate-500 mt-1">JPG, PNG, or WebP (max 10MB)</p>
                              </div>
                            </label>
                          </div>
                        )}

                        {/* Show selected image */}
                        {uploadedImage && imageUploadStatus !== 'success' && (
                          <div className="mt-4 space-y-3">
                            <div className="relative bg-slate-800 rounded-xl p-3 flex items-center gap-3">
                              <ImageIcon className="w-5 h-5 text-emerald-400" />
                              <span className="text-sm text-white flex-1 truncate">{uploadedImage.name}</span>
                              <button
                                onClick={() => setUploadedImage(null)}
                                className="text-slate-400 hover:text-white"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => handleImageUpload(false)}
                              disabled={isUploadingImage}
                              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-70"
                            >
                              {isUploadingImage ? (
                                <span className="flex items-center justify-center gap-2">
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                  Uploading...
                                </span>
                              ) : (
                                'Upload Image'
                              )}
                            </button>
                          </div>
                        )}

                        {/* Upload success */}
                        {imageUploadStatus === 'success' && (
                          <div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-xl">
                            <p className="text-sm text-emerald-400 font-medium">✓ Image uploaded successfully!</p>
                          </div>
                        )}

                        {/* Upload error */}
                        {imageUploadStatus === 'error' && (
                          <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-xl">
                            <p className="text-sm text-red-400 font-medium">Failed to upload image. Please try again.</p>
                          </div>
                        )}

                        {/* Skip button */}
                        {!uploadedImage && imageUploadStatus !== 'success' && (
                          <button
                            onClick={() => {
                              setFormStep(1);
                              setSelectedService(null);
                              setSelectedAddons([]);
                              setContactInfo({ address: '', email: '', phone: '', smsConsent: false });
                              setSubmitStatus('idle');
                              setContactId(null);
                            }}
                            className="text-sm text-slate-400 hover:text-white transition-colors underline"
                          >
                            Skip for now
                          </button>
                        )}
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3">
                          <div className="relative z-20">
                            <AddressAutocomplete
                              value={contactInfo.address}
                              onChange={(val) => setContactInfo({ ...contactInfo, address: val })}
                            />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                            <input
                              type="email"
                              placeholder="Email Address"
                              value={contactInfo.email}
                              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="relative">
                            <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              value={contactInfo.phone}
                              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="flex items-start gap-3 pt-2">
                            <div className="relative flex items-start">
                              <div className="flex h-6 items-center">
                                <input
                                  id="sms-consent"
                                  name="sms-consent"
                                  type="checkbox"
                                  checked={contactInfo.smsConsent}
                                  onChange={(e) => setContactInfo({ ...contactInfo, smsConsent: e.target.checked })}
                                  className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-600 focus:ring-emerald-500/20 focus:ring-offset-0"
                                />
                              </div>
                              <div className="ml-3 text-xs leading-5">
                                <label htmlFor="sms-consent" className="font-medium text-slate-300">
                                  I agree to receive marketing messaging from Last Frontier Lawns at the phone number provided above. I understand I will receive 2 messages a month, data rates may apply, reply STOP to opt out
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {submitStatus === 'error' && (
                          <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                        )}

                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setFormStep(2)}
                            className="px-4 py-3.5 rounded-xl border border-slate-700 text-slate-400 font-bold hover:bg-slate-800 hover:text-white transition-colors"
                            disabled={isSubmitting}
                          >
                            <ArrowLeft className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleQuoteSubmit(false)}
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-emerald-900 hover:to-emerald-800 text-white font-bold py-3.5 rounded-xl shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Sending...
                              </span>
                            ) : (
                              <>
                                <span>Submit Request</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-400" />
                              </>
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-4 bg-stone-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Seasonal Care</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Services for Every Season</h3>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Special Christmas Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-700 relative group">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              <div className="grid md:grid-cols-2 gap-8 items-center p-8 lg:p-10 relative z-10">
                {/* Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    <Sparkle className="w-3 h-3" />
                    <span>Limited Time Offer</span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                      Holiday Lighting
                    </h3>
                    <p className="text-slate-400 text-lg mb-4">
                      Don't get left in the dark. We handle everything from design to takedown.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-slate-200 font-medium">
                        Prices starting at <span className="text-white font-bold text-lg">$697</span> with <span className="text-amber-400 font-bold">15% OFF</span> for early booking.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Custom Roofline Design",
                      "Commercial-Grade LED Lights",
                      "Maintenance Included",
                      "Takedown & Storage"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setModalSelectedService('lights');
                        setModalFormStep(2);
                        setModalSelectedAddons([]);
                        setIsQuoteModalOpen(true);
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-red-900/20 hover:-translate-y-1"
                    >
                      <span>View Christmas Packages</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center justify- Animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-all border border-white/10">
                      <Phone className="w-4 h-4" />
                      <span>Call for Quote</span>
                    </a>
                  </div>
                </div>

                {/* Image Area - Carousel */}
                <div className="relative h-full min-h-[300px] flex items-center">
                  {/* Carousel Container */}
                  <div className="relative w-full group/carousel">
                    <div
                      id="carousel-track"
                      ref={carouselRef}
                      className={`flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0 py-4 ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
                      style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
                      onMouseDown={handleMouseDown}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseUp}
                      onMouseMove={handleMouseMove}
                    >
                      {[
                        "https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/691fa1b75bbf7f1c42fb6e66.webp",
                        "/christmas-carousel-2.png",
                        "/christmas-carousel-3.png",
                        "/christmas-carousel-4.webp"
                      ].map((src, i) => (
                        <div
                          key={i}
                          className="min-w-[45%] md:min-w-[45%] relative aspect-[4/5] rounded-xl overflow-hidden snap-center border-4 border-red-500/80 shrink-0 first:ml-0 last:mr-0 group/image select-none"
                        >
                          <Image
                            src={src}
                            alt={`Christmas Light Project ${i + 1}`}
                            fill
                            className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Controls */}
                    <button
                      onClick={() => document.getElementById('carousel-track')?.scrollBy({ left: -300, behavior: 'smooth' })}
                      className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/10 shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => document.getElementById('carousel-track')?.scrollBy({ left: 300, behavior: 'smooth' })}
                      className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/10 shadow-lg transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card Component */}
            {[
              { id: 'spring', title: 'Spring Awakening', icon: Leaf, items: services.spring, color: 'emerald', accent: 'bg-emerald-100 text-emerald-700' },
              { id: 'summer', title: 'Summer Maintenance', icon: Sun, items: services.summer, color: 'amber', accent: 'bg-amber-100 text-amber-700' },
              { id: 'fall', title: 'Fall Prep', icon: Calendar, items: services.fall, color: 'orange', accent: 'bg-orange-100 text-orange-700' },
              { id: 'winter', title: 'Winter Defense', icon: Snowflake, items: services.winter, color: 'sky', accent: 'bg-sky-100 text-sky-700' }
            ].map((season) => (
              <div key={season.id} id={season.id} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-200 flex flex-col">
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${season.accent} flex items-center justify-center shadow-inner`}>
                      <season.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Package</span>
                      <h4 className="text-lg font-bold text-slate-900">{season.title}</h4>
                    </div>
                  </div>

                  <div className="space-y-2 flex-grow">
                    {season.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800 text-[15px]">{item.item}</span>
                        {item.price && (
                          <span className="text-[11px] font-bold text-emerald-700 bg-white px-2 py-1 rounded-md shadow-sm whitespace-nowrap border border-slate-100">
                            {item.price}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-4 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
            <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
              <Image src="/jesse.webp" alt="Jesse Miessner" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-24">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white font-medium italic text-sm mb-2">"Honest Guy! Showed up when I asked and did a great job."</p>
                <p className="text-slate-300 text-xs font-bold uppercase tracking-wider">— Elaina R.</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span>The Last Frontier Difference</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">
              Your Neighbor,<br /> Your Landscaper
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-slate-900">Jesse Miessner</strong>, and I was born and raised right here in our Alaskan community. Last Frontier Lawns isn't just a business to me—it's my way of serving the neighbors I've known my whole life.
              </p>
              <p>
                I started this company to do things the old-fashioned way. In a world of big sales teams, fancy offices, and endless middlemen designed to make you overpay, we stand for something different.
              </p>
              <p>
                We believe in honest work, quality service, and affordable prices. When you call us, you get me. Not a pushy sales rep, just a local expert who will listen to your needs and give you a fair, transparent quote personally. Our crew is 100% local, and we treat every home like it's our own.
              </p>
              <p className="font-bold text-emerald-800">
                We're proud to be your local, trustworthy choice for lawn care and holiday lighting.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-emerald-500 p-6 rounded-r-xl relative">
              <div className="absolute -top-3 -left-3 bg-emerald-500 rounded-full p-1.5">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <p className="text-slate-800 font-medium italic text-lg">
                "Quality work doesn't just meet expectations—it exceeds them. When you care about every detail, it shows. That commitment doesn't go unnoticed."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-300 border-2 border-emerald-500 shadow-sm">
                  <Image src="/jesse-avatar.webp" alt="Jesse Miessner" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Jesse Miessner</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">Owner & Operator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <ReviewsSection />

      {/* --- CTA BANNER --- */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-emerald-900 rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

          <div className="relative z-10 p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a better looking lawn?</h2>
            <p className="text-emerald-200 text-lg max-w-2xl mx-auto mb-10">Join your neighbors in Anchorage and The Valley. Get a free, no-obligation quote today and let us handle the hard work.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-emerald-900 font-bold py-4 px-8 rounded-xl shadow-xl hover:bg-emerald-50 transition-colors w-full sm:w-auto"
              >
                Get Started Now
              </button>
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-white font-bold hover:text-emerald-200 transition-colors px-6 py-4">
                <Phone className="w-5 h-5" />
                <span>{businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="relative bg-white p-2 rounded-xl shadow-lg">
                <div className="relative w-40 h-14 flex items-center justify-center">
                  <Image src="/christmas-logo.webp" alt="Christmas Lights Logo" fill className="object-contain" />
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional lawn care and snow removal services dedicated to keeping Alaska beautiful, one yard at a time.
            </p>
            <div className="flex gap-4">
              {/* Social Links */}
              <a href="https://www.facebook.com/LFLCO" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors cursor-pointer text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#spring" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Spring Cleanup</a></li>
              <li><a href="#summer" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Lawn Mowing</a></li>
              <li><a href="#fall" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Weed Control</a></li>
              <li><a href="#winter" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Snow Plowing</a></li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setIsQuoteModalOpen(true);
                    setModalSelectedService('lights');
                  }}
                  className="hover:text-red-400 transition-colors flex items-center gap-2 text-left w-full"
                >
                  <Sparkle className="w-3 h-3" /> Christmas Lights
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Jesse</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-500 mt-0.5" />
              <span className="text-sm">{businessInfo.serviceAreas}, Alaska</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-500" />
              <a href={`tel:${businessInfo.phone}`} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">{businessInfo.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-500" />
              <a href={`mailto:${businessInfo.email}`} className="text-sm hover:text-emerald-400 transition-colors">{businessInfo.email}</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved. Locally Owned & Operated.</p>
        </div>
      </footer>
      {/* --- QUOTE MODAL --- */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-red-500/20 text-red-400 p-2 rounded-lg">
                    <Sparkle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Get Your Free Quote</h3>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded-md border border-emerald-500/30">Step {modalFormStep} of 3</span>
              </div>

              <p className="text-slate-400 text-sm mb-6">
                {modalFormStep === 1 ? "What do you primarily need help with?" :
                  modalFormStep === 2 ? (modalSelectedService === 'lights' ? "Customize your lighting package:" : "Select any additional services you're interested in:") :
                    "Where should we send the quote?"}
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Step 1: Primary Service Selection */}
                {modalFormStep === 1 && (
                  <div className="space-y-3 animate-in slide-in-from-right fade-in duration-300">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Christmas Lights - Featured */}
                      <button
                        type="button"
                        onClick={() => handleModalServiceSelect('lights')}
                        className={`col-span-2 relative group p-5 rounded-xl border-2 transition-all text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 bg-slate-800 ${modalSelectedService === 'lights' ? 'border-emerald-500 text-white ring-1 ring-emerald-500' : 'border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white'}`}
                      >
                        {/* Background Glow for Active State */}
                        {modalSelectedService === 'lights' && <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>}

                        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 border-white/10 shadow-sm">
                          <Image
                            src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/691fa1b75bbf7f1c42fb6e66.webp"
                            alt="Christmas Lights"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="block text-lg font-bold">Christmas Lights</span>
                            <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">15% OFF</span>
                          </div>
                          <p className={`text-xs font-medium leading-relaxed ${modalSelectedService === 'lights' ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-300'}`}>
                            Packages start at <span className="text-white font-bold">$697</span>. Design, install, & storage included.
                          </p>
                        </div>
                      </button>

                      {[
                        { id: 'mowing', label: 'Mowing', icon: Sun },
                        { id: 'cleanup', label: 'Cleanups', icon: Leaf },
                        { id: 'summer', label: 'Summer Maintenance', icon: Sun },
                        { id: 'snow', label: 'Winter Services', icon: Snowflake },
                      ].map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleModalServiceSelect(service.id)}
                          className={`relative group p-4 rounded-xl border-2 transition-all text-left flex flex-col gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 ${modalSelectedService === service.id ? 'border-emerald-500 bg-emerald-900/30 text-emerald-400' : 'border-slate-700 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800 text-slate-400 hover:text-white'}`}
                        >
                          <service.icon className={`w-6 h-6 ${modalSelectedService === service.id ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`} />
                          <span className="block text-sm font-bold">{service.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Multi-Select Services */}
                {modalFormStep === 2 && (
                  <div className="space-y-4 animate-in slide-in-from-right fade-in duration-300">
                    <div className="grid grid-cols-1 gap-2 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                      {(modalSelectedService === 'lights' ? christmasServiceItems : (modalSelectedService === 'snow' ? winterServiceItems : standardServiceItems)).map((item) => (
                        <div
                          key={item}
                          onClick={() => toggleModalAddon(item)}
                          className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${modalSelectedAddons.includes(item)
                            ? 'border-emerald-500 bg-emerald-900/30'
                            : 'border-slate-700 hover:bg-slate-800'
                            }`}
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${modalSelectedAddons.includes(item) ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600 bg-slate-800'
                            }`}>
                            {modalSelectedAddons.includes(item) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                          <span className={`text-sm font-medium ${modalSelectedAddons.includes(item) ? 'text-white' : 'text-slate-400'}`}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setModalFormStep(1)}
                        className="px-4 py-3.5 rounded-xl border border-slate-700 text-slate-400 font-bold hover:bg-slate-800 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalFormStep(3)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {modalFormStep === 3 && (
                  <div className="space-y-4 animate-in slide-in-from-right fade-in duration-300">
                    {modalSubmitStatus === 'success' ? (
                      <div className="text-center py-8 space-y-4">
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">Request Received!</h4>
                          <p className="text-slate-400 mt-2">We'll be in touch shortly with your free quote.</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3">
                          <div className="relative z-20">
                            <AddressAutocomplete
                              value={modalContactInfo.address}
                              onChange={(val) => setModalContactInfo({ ...modalContactInfo, address: val })}
                            />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                            <input
                              type="email"
                              placeholder="Email Address"
                              value={modalContactInfo.email}
                              onChange={(e) => setModalContactInfo({ ...modalContactInfo, email: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="relative">
                            <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              value={modalContactInfo.phone}
                              onChange={(e) => setModalContactInfo({ ...modalContactInfo, phone: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="flex items-start gap-3 pt-2">
                            <div className="relative flex items-start">
                              <div className="flex h-6 items-center">
                                <input
                                  id="modal-sms-consent"
                                  name="modal-sms-consent"
                                  type="checkbox"
                                  checked={modalContactInfo.smsConsent}
                                  onChange={(e) => setModalContactInfo({ ...modalContactInfo, smsConsent: e.target.checked })}
                                  className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-600 focus:ring-emerald-500/20 focus:ring-offset-0"
                                />
                              </div>
                              <div className="ml-3 text-xs leading-5">
                                <label htmlFor="modal-sms-consent" className="font-medium text-slate-300">
                                  I agree to receive marketing messaging from Last Frontier Lawns at the phone number provided above. I understand I will receive 2 messages a month, data rates may apply, reply STOP to opt out
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {modalSubmitStatus === 'error' && (
                          <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                        )}

                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setModalFormStep(2)}
                            className="px-4 py-3.5 rounded-xl border border-slate-700 text-slate-400 font-bold hover:bg-slate-800 hover:text-white transition-colors"
                            disabled={isModalSubmitting}
                          >
                            <ArrowLeft className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleQuoteSubmit(true)}
                            disabled={isModalSubmitting}
                            className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-xl shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isModalSubmitting ? (
                              <span className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Sending...
                              </span>
                            ) : (
                              <>
                                <span>Submit Request</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                              </>
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
