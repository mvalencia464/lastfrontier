'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  Mail,
  ChevronRight,
  Sparkle
} from 'lucide-react';
import { businessInfo } from '../lib/data';

export default function Footer() {
  return (
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
            <li><Link href="/#spring" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Spring Cleanup</Link></li>
            <li><Link href="/#summer" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Lawn Mowing</Link></li>
            <li><Link href="/#fall" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Weed Control</Link></li>
            <li><Link href="/#winter" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Snow Plowing</Link></li>
            <li><Link href="/?service=lights" className="hover:text-red-400 transition-colors flex items-center gap-2"><Sparkle className="w-3 h-3" /> Christmas Lights</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/#about" className="hover:text-emerald-400 transition-colors">About Jesse</Link></li>
            <li><Link href="/our-process" className="hover:text-emerald-400 transition-colors">Our Process</Link></li>
            <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
            <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
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
  );
}
