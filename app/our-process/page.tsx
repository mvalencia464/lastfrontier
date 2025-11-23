import React from 'react';
import PageWrapper from '../../src/components/PageWrapper';
import { ClipboardCheck, Calendar, Truck, Smile } from 'lucide-react';

export const metadata = {
  title: 'Our Process | Last Frontier Lawns',
  description: 'Learn how we work: from quote to completion.',
};

export default function OurProcessPage() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "1. Request a Quote",
      description: "Fill out our simple online form or give us a call. We'll gather some details about your property and what you need."
    },
    {
      icon: Calendar,
      title: "2. Schedule Service",
      description: "Once you approve the estimate, we'll get you on the schedule. We offer flexible timing to minimize disruption to your day."
    },
    {
      icon: Truck,
      title: "3. We Do The Work",
      description: "Our professional crew arrives on time, in uniform, and ready to work. We treat your property with respect and care."
    },
    {
      icon: Smile,
      title: "4. Enjoy Your Lawn",
      description: "We double-check our work before leaving. If you're not happy, we're not done. Enjoy your beautiful outdoor space!"
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-lawn.png')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Process</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Simple, transparent, and hassle-free. Here's what you can expect when you work with us.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to get started?</h2>
           <p className="text-lg text-slate-600 mb-8">Join hundreds of happy neighbors in Anchorage & Palmer.</p>
           {/* The user can click 'Get a Quote' in the header, so we don't strictly need a button here, but it's good UX. 
               Since the PageWrapper handles the modal, we can't easily trigger it from here without context or prop drilling.
               For simplicity, we'll just encourage them to use the header button or call. */}
        </div>
      </section>
    </PageWrapper>
  );
}
