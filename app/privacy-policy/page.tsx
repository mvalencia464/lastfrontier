import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
    const businessInfo = {
        name: "Last Frontier Lawns",
        email: "lastfrontierlawnco@gmail.com",
        phone: "907-440-7160",
        address: "Anchorage and The Valley, Alaska",
        website: "https://lastfrontierlawns.com"
    };

    return (
        <div className="min-h-screen bg-stone-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors font-bold text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-2 text-emerald-700 font-bold">
                        <ShieldCheck className="w-5 h-5" />
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
                    <p className="text-slate-500 mb-10">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-emerald-600 hover:prose-a:text-emerald-500">
                        <p>
                            At <strong>{businessInfo.name}</strong> ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website <strong>{businessInfo.website}</strong> or use our services.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>We may collect personal information that you voluntarily provide to us when you:</p>
                        <ul>
                            <li>Request a quote or service.</li>
                            <li>Contact us via phone, email, or our website contact forms.</li>
                            <li>Sign up for our newsletter or marketing communications.</li>
                        </ul>
                        <p>The types of information we collect may include:</p>
                        <ul>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Service address</li>
                            <li>Project details and images</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use your information for the following purposes:</p>
                        <ul>
                            <li>To provide and manage our lawn care and lighting services.</li>
                            <li>To communicate with you regarding your quotes, appointments, and invoices.</li>
                            <li>To send you marketing messages, promotions, and updates (only with your consent).</li>
                            <li>To improve our website and customer service.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>

                        <h3>3. SMS/Text Messaging</h3>
                        <p>
                            By providing your phone number and opting in, you consent to receive text messages from {businessInfo.name} regarding your quotes, service reminders, and marketing offers.
                        </p>
                        <ul>
                            <li><strong>Frequency:</strong> Message frequency varies. You may receive up to 2 marketing messages per month.</li>
                            <li><strong>Cost:</strong> Message and data rates may apply depending on your mobile carrier plan.</li>
                            <li><strong>Opt-Out:</strong> You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message.</li>
                            <li><strong>Help:</strong> For assistance, reply <strong>HELP</strong> or contact us at {businessInfo.phone}.</li>
                            <li><strong>Privacy:</strong> We do not share or sell your mobile phone number or SMS consent data with third parties or affiliates for marketing/promotional purposes.</li>
                        </ul>

                        <h3>4. Information Sharing and Disclosure</h3>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business (e.g., payment processors, CRM software), provided that those parties agree to keep this information confidential.
                        </p>
                        <p>
                            We may also disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                        </p>

                        <h3>5. Data Security</h3>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                        </p>

                        <h3>6. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal information we hold about you.</li>
                            <li>Request correction of inaccurate information.</li>
                            <li>Request deletion of your information (subject to legal retention requirements).</li>
                            <li>Opt-out of marketing communications at any time.</li>
                        </ul>

                        <h3>7. Changes to This Policy</h3>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>

                        <h3>8. Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <ul className="list-none pl-0 space-y-2 mt-4">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-600" />
                                <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-600" />
                                <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-emerald-600" />
                                <span>{businessInfo.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    );
}
