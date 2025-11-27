import Head from 'next/head';
import Layout from '../components/Layout';
import { FaHandHoldingUsd, FaBalanceScale, FaMosque, FaCheckCircle, FaHandshake, FaGlobe } from 'react-icons/fa';

export default function HalalFunding() {
    return (
        <>
            <Head>
                <title>Halal Funding - OneDrive Realty</title>
                <meta name="description" content="Ethical and Shariah-compliant real estate financing options." />
            </Head>

            <Layout>
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center animate-fade-in">
                            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-bounce">
                                <span className="text-xl font-semibold flex items-center gap-2">
                                    <FaMosque /> Ethical Financing
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
                                Halal Funding Solutions
                            </h1>
                            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-slide-up">
                                Empowering your real estate journey with Shariah-compliant financing options that align with your values.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 min-h-screen py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Introduction Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 transform hover:scale-[1.01] transition duration-500">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <FaBalanceScale className="text-emerald-600" />
                                        What is Halal Funding?
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                        Halal Funding refers to financial products and services that comply with Islamic law, which prohibits interest-based transactions (Riba) and requires investments to be made in ethical and permissible (Halal) ventures.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        In real estate, this often means structuring transactions in a way that avoids traditional interest-bearing loans, ensuring your investment is pure and ethically sound.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 border border-emerald-200">
                                        <h3 className="text-xl font-bold text-emerald-800 mb-4">Key Principles</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3">
                                                <FaCheckCircle className="text-emerald-600 text-xl" />
                                                <span className="text-gray-800">No Interest (Riba)</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <FaCheckCircle className="text-emerald-600 text-xl" />
                                                <span className="text-gray-800">Ethical Investment</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <FaCheckCircle className="text-emerald-600 text-xl" />
                                                <span className="text-gray-800">Risk Sharing</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <FaCheckCircle className="text-emerald-600 text-xl" />
                                                <span className="text-gray-800">Asset-Backed Transactions</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Approach Section */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Approach</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-emerald-500">
                                    <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <FaHandshake className="text-3xl text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Expert Referrals</h3>
                                    <p className="text-gray-700 text-center">
                                        We collaborate with specialized financial institutions that provide Halal-compliant mortgage and investment products, connecting you with the right partners.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-teal-500">
                                    <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <FaGlobe className="text-3xl text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Comprehensive Guidance</h3>
                                    <p className="text-gray-700 text-center">
                                        We provide clear guidance on what Halal funding entails, helping you understand the principles so you can make informed decisions about your investments.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-emerald-500">
                                    <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <FaHandHoldingUsd className="text-3xl text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Seamless Integration</h3>
                                    <p className="text-gray-700 text-center">
                                        We ensure all aspects of your real estate transaction align with Islamic finance principles by working closely with our financial partners.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 md:p-16 text-white mb-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefits of Choosing Us</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6">
                                        <div className="bg-emerald-500/20 p-4 rounded-xl h-fit">
                                            <FaCheckCircle className="text-2xl text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Ethical & Compliant</h3>
                                            <p className="text-gray-300">Be confident that your real estate investments are structured ethically and in full accordance with Islamic principles.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="bg-emerald-500/20 p-4 rounded-xl h-fit">
                                            <FaCheckCircle className="text-2xl text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Specialized Access</h3>
                                            <p className="text-gray-300">Gain access to specialized financing options and products that may not be readily available through traditional channels.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="bg-emerald-500/20 p-4 rounded-xl h-fit">
                                            <FaCheckCircle className="text-2xl text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Full Support</h3>
                                            <p className="text-gray-300">From understanding the basics to closing the deal, we support you through every step of the process.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="bg-emerald-500/20 p-4 rounded-xl h-fit">
                                            <FaCheckCircle className="text-2xl text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Peace of Mind</h3>
                                            <p className="text-gray-300">Invest with the assurance that your financial decisions align perfectly with your faith and values.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Your Ethical Journey</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Looking for Shariah-compliant financing for your real estate needs? Contact us today to learn more about our services and partners.
                            </p>
                            <a
                                href="mailto:info@onedriverealty.com"
                                className="inline-block bg-emerald-600 text-white font-bold py-4 px-10 rounded-full hover:bg-emerald-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Email us at info@onedriverealty.com
                            </a>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fade-in {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes slide-down {
                        from { transform: translateY(-30px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    @keyframes slide-up {
                        from { transform: translateY(30px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    .animate-fade-in {
                        animation: fade-in 1s ease-out;
                    }
                    .animate-slide-down {
                        animation: slide-down 0.8s ease-out;
                    }
                    .animate-slide-up {
                        animation: slide-up 0.8s ease-out 0.2s backwards;
                    }
                `}</style>
            </Layout>
        </>
    );
}
