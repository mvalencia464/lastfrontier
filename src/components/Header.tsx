'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Menu,
  X,
  MapPin,
  Mail,
  Clock,
  ArrowRight,
  Leaf,
  Sun,
  Snowflake,
  Sparkle
} from 'lucide-react';
import { businessInfo } from '../lib/data';

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-40 h-14 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image src="/christmas-logo.webp" alt="Christmas Lights Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-sm tracking-wide">
            <Link href="/" className="relative hover:text-emerald-700 transition-colors">Home</Link>
            <Link href="/our-process" className="relative hover:text-emerald-700 transition-colors">Our Process</Link>
            <Link href="/careers" className="relative hover:text-emerald-700 transition-colors">Careers</Link>
            <Link href="/#services" className="relative hover:text-emerald-700 transition-colors">Services</Link>
            <Link href="/#about" className="relative hover:text-emerald-700 transition-colors">About</Link>
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
              onClick={onQuoteClick}
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
                { name: 'Spring Cleanup', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50', onClick: () => onQuoteClick() },
                { name: 'Lawn Mowing', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50', onClick: () => onQuoteClick() },
                { name: 'Snow Plowing', icon: Snowflake, color: 'text-sky-500', bg: 'bg-sky-50', onClick: () => onQuoteClick() },
                { name: 'Christmas Lights', icon: Sparkle, color: 'text-red-600', bg: 'bg-red-50', onClick: () => onQuoteClick() }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (item.onClick) item.onClick();
                  }}
                  className={`${item.bg} p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center active:scale-95 transition-transform w-full`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className={`text-sm font-bold ${item.color}`}>{item.name}</span>
                </button>
              ))}
            </div>
             <div className="p-4 border-t border-slate-100 flex flex-col gap-2">
                <Link href="/our-process" className="p-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700 block text-center">Our Process</Link>
                <Link href="/careers" className="p-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700 block text-center">Careers</Link>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <a href={`tel:${businessInfo.phone}`} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
