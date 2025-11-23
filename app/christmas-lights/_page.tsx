'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowLeft, Sparkle, CheckCircle2, DollarSign, Calendar, Lightbulb, Snowflake, Home, Leaf, ChevronRight } from 'lucide-react';

const businessInfo = {
  name: "Last Frontier Lawns",
  phone: "907-440-7160",
  email: "lastfrontierlawnco@gmail.com",
  serviceAreas: "Anchorage, Palmer & Wasilla",
};

export default function ChristmasLightsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-stone-50">
      {/* --- HEADER (Re-used for consistency) --- */}
      <header className="bg-white shadow-md py-5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-40 h-14 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image src="/christmas-logo.webp" alt="Christmas Lights Logo" fill className="object-contain" priority />
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Call for Quote</span>
              <a href={`tel:${businessInfo.phone}`} className="text-lg font-bold text-slate-900 hover:text-red-600 transition-colors">
                {businessInfo.phone}
              </a>
            </div>
            <a href="#get-quote" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group">
              <span>Get a Quote</span>
              <Sparkle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-20 lg:py-32 text-white overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 opacity-95 z-10"></div>
             {/* Floating Gallery Background */}
             <div className="absolute inset-0 flex gap-8 opacity-30 -rotate-12 scale-125 z-0 pointer-events-none">
                <div className="flex flex-col gap-8 animate-[scrollY_30s_linear_infinite]">
                    {[1,2,3,4].map(i => (
                        <div key={`c1-${i}`} className="w-64 h-96 bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             {/* Placeholder Images */}
                             {i % 2 === 0 ? <Image src="/christmas-install1.webp" alt="Gallery" fill className="object-cover" /> : <Image src="/christmas-install2.webp" alt="Gallery" fill className="object-cover" />}
                        </div>
                    ))}
                     {[1,2,3,4].map(i => (
                        <div key={`c1-dup-${i}`} className="w-64 h-96 bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             {i % 2 === 0 ? <Image src="/christmas-install1.webp" alt="Gallery" fill className="object-cover" /> : <Image src="/christmas-install2.webp" alt="Gallery" fill className="object-cover" />}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-8 animate-[scrollY_40s_linear_infinite_reverse] -mt-20">
                     {[1,2,3,4].map(i => (
                        <div key={`c2-${i}`} className="w-64 h-96 bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             {i % 2 !== 0 ? <Image src="/christmas-install1.webp" alt="Gallery" fill className="object-cover" /> : <Image src="/christmas-install2.webp" alt="Gallery" fill className="object-cover" />}
                        </div>
                    ))}
                     {[1,2,3,4].map(i => (
                        <div key={`c2-dup-${i}`} className="w-64 h-96 bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             {i % 2 !== 0 ? <Image src="/christmas-install1.webp" alt="Gallery" fill className="object-cover" /> : <Image src="/christmas-install2.webp" alt="Gallery" fill className="object-cover" />}
                        </div>
                    ))}
                </div>
                 <div className="flex flex-col gap-8 animate-[scrollY_35s_linear_infinite] hidden md:flex">
                     {[1,2,3,4].map(i => (
                        <div key={`c3-${i}`} className="w-64 h-96 bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             {i % 2 === 0 ? <Image src="/christmas-install1.webp" alt="Gallery" fill className="object-cover" /> : <Image src="/christmas-install2.webp" alt="Gallery" fill className="object-cover" />}
                        </div>
                    ))}
                     {[1,2,3,4].map(i => (
                        <div key={`c3-dup-${i}`} className="w-64 h-96 bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             {i % 2 === 0 ? <Image src="/christmas-install1.webp" alt="Gallery" fill className="object-cover" /> : <Image src="/christmas-install2.webp" alt="Gallery" fill className="object-cover" />}
                        </div>
                    ))}
                </div>
             </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-red-900/50 border border-red-500/30 backdrop-blur-md rounded-full px-4 py-1.5 text-red-200 text-sm font-medium mb-6 animate-in fade-in zoom-in duration-500">
              <Sparkle className="w-4 h-4 text-red-400" />
              <span>Now Booking for {new Date().getFullYear()} Season</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
              Dazzling <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-200">Christmas Lights</span><br/>
              Without the Hassle
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 drop-shadow-md">
              Professional design, installation, maintenance, and removal. <br/>Starting at <span className="text-white font-bold">$697</span> with <span className="text-amber-400 font-bold">15% OFF</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#pricing" className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-red-600/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>View Packages</span>
                <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#get-quote" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2">
                    <span>Get a Free Quote</span>
                </a>
            </div>
          </div>
        </section>

        {/* Introduction / Why Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Experience the Magic, Without the Hassle
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Transform your home into a winter wonderland this holiday season with Last Frontier Lawns.
                Our expert team handles everything from custom design to safe installation, maintenance, and post-season removal.
                You enjoy the festive glow, we handle the hard work.
              </p>
              <ul className="space-y-4 text-slate-700 text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" /> Custom Design & Professional Installation</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" /> High-Quality, Commercial-Grade Lighting</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" /> Maintenance & Bulb Replacement Included</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" /> Stress-Free Removal & Storage Options</li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/christmas-install3.webp" alt="Team installing lights" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-stone-100 border-t border-b border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Sparkle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Pricing for a Brighter Holiday</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Due to the unique nature of each home, we offer custom quotes to ensure fair and accurate pricing.
                Here's a general guide for our professional Christmas light installation services in the Mat-Su Valley.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Package 1: Temporary Holiday Lights */}
              <div className="bg-white rounded-3xl shadow-lg border border-red-100 p-8 flex flex-col items-center text-center group">
                <Lightbulb className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Temporary Holiday Lights</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Perfect for a dazzling display that lasts all season. We provide and install commercial-grade LED lights.
                </p>
                <div className="text-4xl font-extrabold text-red-600 mb-4">Quote Based</div>
                <ul className="text-left text-slate-700 space-y-2 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Custom Design Consultation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Professional Installation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> All Commercial-Grade Lights Provided</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Full Season Maintenance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Post-Season Removal Included</li>
                </ul>
                <a href="/?service=lights" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl w-full transition-all shadow-md">
                  Get a Free Estimate
                </a>
              </div>

              {/* Package 2: Permanent Lighting System */}
              <div className="bg-white rounded-3xl shadow-lg border border-red-100 p-8 flex flex-col items-center text-center group">
                <Home className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Permanent Lighting System</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Enjoy year-round architectural lighting with a discreet, color-changing LED track system.
                </p>
                <div className="text-4xl font-extrabold text-red-600 mb-4">Quote Based</div>
                <ul className="text-left text-slate-700 space-y-2 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Hidden LED Track System</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Customizable Colors & Patterns</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Year-Round Use (Holiday & Accent)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Long-Lasting & Energy Efficient</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Integrated Smart Controls</li>
                </ul>
                <a href="/?service=lights" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl w-full transition-all shadow-md">
                  Request a Consultation
                </a>
              </div>

              {/* General Pricing Factors */}
              <div className="bg-white rounded-3xl shadow-lg border border-red-100 p-8 flex flex-col text-center lg:col-span-1">
                <DollarSign className="w-16 h-16 text-red-500 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Pricing Factors & Averages</h3>
                <p className="text-slate-600 mb-6 text-left flex-grow">
                  Costs vary based on roofline complexity, home size, and specific design requests.
                  General estimates for professional installation (including lights):
                </p>
                <ul className="text-left text-slate-700 space-y-3 mb-8">
                  <li><strong className="text-slate-900">Per Linear Foot:</strong> $5.00 – $12.00 (includes lights)</li>
                  <li><strong className="text-slate-900">Labor Only:</strong> $2.50 – $5.00 per foot (if you provide approved lights)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-red-500" /> <strong className="text-slate-900">Lease vs. Own:</strong> Leasing includes maintenance, you don't store lights.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-red-500" /> <strong className="text-slate-900">Removal Fees:</strong> Ensure takedown is included in your quote.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong className="text-slate-900">Early Bird Discounts:</strong> Ask about October installation savings!</li>
                </ul>
                <a href="/?service=lights" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl w-full transition-all shadow-md">
                  Get a Personalized Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Our Work in Action</h2>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl mx-auto max-w-4xl">
                <Image src="/christmas-install2.webp" alt="Another angle of Christmas lights installation" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Call to Action for Quote (re-used from homepage structure) */}
        <section id="get-quote" className="py-20 px-4 bg-emerald-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative z-10 p-12 text-center text-white max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to light up your home?</h2>
                <p className="text-emerald-200 text-lg max-w-2xl mx-auto mb-10">Don't stress about the ladders and tangled lights. Get a free, no-obligation quote today!</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/?service=lights" className="bg-white text-emerald-900 font-bold py-4 px-8 rounded-xl shadow-xl hover:bg-emerald-50 transition-colors w-full sm:w-auto">
                        Request Your Holiday Quote
                    </a>
                    <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-white font-bold hover:text-emerald-200 transition-colors px-6 py-4">
                        <Phone className="w-5 h-5" />
                        <span>{businessInfo.phone}</span>
                    </a>
                </div>
            </div>
        </section>

      </main>

      {/* --- FOOTER (Re-used for consistency) --- */}
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#spring" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Spring Cleanup</Link></li>
              <li><Link href="/#summer" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Lawn Mowing</Link></li>
              <li><Link href="/#fall" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Weed Control</Link></li>
              <li><Link href="/#winter" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Snow Plowing</Link></li>
              <li><Link href="/christmas-lights" className="hover:text-red-400 transition-colors flex items-center gap-2"><Sparkle className="w-3 h-3" /> Christmas Lights</Link></li>
            </ul>
          </div>
          
           <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#about" className="hover:text-emerald-400 transition-colors">About Jesse</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Our Process</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
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
    </div>
  );
}
