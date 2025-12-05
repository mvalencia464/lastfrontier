'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsGallery() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      src: '/project-1.png',
      alt: 'Christmas Lights Project 1',
      title: 'Roofline Lighting'
    },
    {
      src: '/project-2.png',
      alt: 'Christmas Lights Project 2',
      title: 'Full House Display'
    },
    {
      src: '/project-3.png',
      alt: 'Christmas Lights Project 3',
      title: 'Yard Transformation'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/691fa1b75bbf7f1c42fb6e66.webp',
      alt: 'Christmas Lights Project 4',
      title: 'Tree Wrapping & Lights'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/6927eb7557189637cd50ee51.webp',
      alt: 'Christmas Lights Project 5',
      title: 'Professional Installation'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/69251f038e95934cb424e273.webp',
      alt: 'Christmas Lights Project 6',
      title: 'Custom Design'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/69324bd8e0f0921fcdac4911.png',
      alt: 'Christmas Lights Project 7',
      title: 'Holiday Lighting'
    }
  ];

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
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-stone-50 to-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.1]">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Beautiful holiday displays and lawn transformations from our recent projects
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative group/gallery">
          <div
            ref={carouselRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide pb-4 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="min-w-[45%] md:min-w-[35%] lg:min-w-[28%] relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group/image shrink-0 select-none border-2 border-slate-200 hover:border-emerald-400"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover/image:scale-110 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-12 group-hover/image:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover/gallery:opacity-100 group-hover/gallery:-translate-x-2 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover/gallery:opacity-100 group-hover/gallery:translate-x-2 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
