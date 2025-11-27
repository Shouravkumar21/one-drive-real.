import Head from 'next/head';
import Layout from '../components/Layout';
import { FaHome, FaBullhorn, FaSearchDollar, FaHandshake, FaChartBar, FaCamera } from 'react-icons/fa';

export default function ListProperty() {
    return (
        <>
            <Head>
                <title>List Your Property - OneDrive Realty</title>
                <meta name="description" content="List your property with One Drive Realty for maximum exposure and expert guidance." />
            </Head>

            <Layout>
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center animate-fade-in">
                            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-bounce">
                                <span className="text-xl font-semibold flex items-center gap-2">
                                    <FaHome /> Sell with Confidence
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
                                List Your Property
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
                                Maximize your property's potential with our expert listing services and comprehensive marketing strategies.
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
                                        <FaBullhorn className="text-blue-600" />
                                        Simple & Effective
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                        One Drive Realty makes the process of listing your property simple and effective, whether you're selling a home, commercial space, or investment property.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Gain access to a team of experienced real estate professionals who will guide you through every step of the process, from evaluation to closing.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4">Our Strategy</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                                    <FaSearchDollar className="text-xl" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Evaluation</h4>
                                                    <p className="text-sm text-gray-600">Accurate market value assessment</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                                    <FaCamera className="text-xl" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Marketing</h4>
                                                    <p className="text-sm text-gray-600">High-quality photos & virtual tours</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                                    <FaHandshake className="text-xl" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Closing</h4>
                                                    <p className="text-sm text-gray-600">Expert negotiation & support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why List With Us?</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-blue-500">
                                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <FaChartBar className="text-3xl text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Maximized Exposure</h3>
                                    <p className="text-gray-700 text-center">
                                        Your property will be featured on major real estate platforms, social media, and our extensive network to reach serious buyers.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-indigo-500">
                                    <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <FaHandshake className="text-3xl text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Expert Guidance</h3>
                                    <p className="text-gray-700 text-center">
                                        From setting the right price to negotiating offers, we provide expert advice and support throughout the entire selling process.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-blue-500">
                                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <FaSearchDollar className="text-3xl text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Targeted Leads</h3>
                                    <p className="text-gray-700 text-center">
                                        Our Listing Leads program ensures that your property is seen by qualified buyers who are actively searching for properties like yours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Sell?</h2>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Reach out to us today and get your property listed without breaking the bank. Let's achieve a successful sale together.
                                </p>
                                <a
                                    href="mailto:info@onedriverealty.com"
                                    className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Email us at info@onedriverealty.com
                                </a>
                            </div>
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
