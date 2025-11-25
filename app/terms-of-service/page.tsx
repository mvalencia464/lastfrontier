import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsOfService() {
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
                        <FileText className="w-5 h-5" />
                        <span>Terms of Service</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
                    <p className="text-slate-500 mb-10">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-emerald-600 hover:prose-a:text-emerald-500">
                        <p>
                            Welcome to <strong>{businessInfo.name}</strong>. By accessing our website <strong>{businessInfo.website}</strong> or using our services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
                        </p>

                        <h3>1. Services</h3>
                        <p>
                            {businessInfo.name} provides lawn care, landscaping, snow removal, and holiday lighting services. We reserve the right to refuse service to anyone for any reason at any time. Quotes provided are estimates and may be subject to change based on actual site conditions.
                        </p>

                        <h3>2. Payments and Billing</h3>
                        <p>
                            Payment terms will be specified in your service agreement or invoice. We accept major credit cards and other payment methods as indicated. Late payments may be subject to late fees.
                        </p>

                        <h3>3. Cancellations and Refunds</h3>
                        <p>
                            <strong>Service Cancellation:</strong> Please provide at least 24 hours' notice for cancellations. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee.
                        </p>
                        <p>
                            <strong>Refunds:</strong> We strive for 100% customer satisfaction. If you are not satisfied with our service, please contact us within 24 hours of the service completion, and we will do our best to rectify the issue. Refunds are handled on a case-by-case basis.
                        </p>

                        <h3>4. SMS/Text Messaging Terms</h3>
                        <p>
                            By opting in to receive SMS messages from {businessInfo.name}, you agree to the following terms:
                        </p>
                        <ul>
                            <li>You consent to receive transactional and marketing messages at the phone number provided.</li>
                            <li>Message and data rates may apply.</li>
                            <li>Message frequency varies.</li>
                            <li>You can reply <strong>STOP</strong> to opt out at any time.</li>
                            <li>You can reply <strong>HELP</strong> for assistance.</li>
                            <li>Carriers are not liable for delayed or undelivered messages.</li>
                        </ul>

                        <h3>5. Limitation of Liability</h3>
                        <p>
                            To the fullest extent permitted by law, {businessInfo.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use our services; (b) any unauthorized access to or use of our servers and/or any personal information stored therein.
                        </p>

                        <h3>6. Intellectual Property</h3>
                        <p>
                            All content on this website, including text, graphics, logos, images, and software, is the property of {businessInfo.name} or its content suppliers and is protected by copyright laws.
                        </p>

                        <h3>7. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the State of Alaska, without regard to its conflict of law provisions.
                        </p>

                        <h3>8. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
                        </p>

                        <h3>9. Contact Us</h3>
                        <p>If you have any questions about these Terms, please contact us:</p>
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
