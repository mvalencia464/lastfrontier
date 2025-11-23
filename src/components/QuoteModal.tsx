'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  Sparkle,
  Sun,
  Leaf,
  Snowflake,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { standardServiceItems, winterServiceItems, christmasServiceItems } from '../lib/data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string | null;
}

export default function QuoteModal({ isOpen, onClose, initialService = null }: QuoteModalProps) {
  const [modalFormStep, setModalFormStep] = useState(1);
  const [modalSelectedService, setModalSelectedService] = useState<string | null>(initialService);
  const [modalSelectedAddons, setModalSelectedAddons] = useState<string[]>([]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setModalFormStep(1);
      setModalSelectedService(initialService);
      setModalSelectedAddons([]);
    }
  }, [isOpen, initialService]);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
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
                <div className="space-y-3">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="text" placeholder="Property Address" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500" />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalFormStep(2)}
                    className="px-4 py-3.5 rounded-xl border border-slate-700 text-slate-400 font-bold hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-xl shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
