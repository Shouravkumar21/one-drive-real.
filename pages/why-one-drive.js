import Head from 'next/head';
import Layout from '../components/Layout';
import { FaCheckCircle, FaRocket, FaUsers, FaChartLine, FaLaptop, FaHandshake } from 'react-icons/fa';

export default function WhyOneDrive() {
    return (
        <>
            <Head>
                <title>Why One Drive Realty? - OneDrive Realty</title>
                <meta name="description" content="Discover why One Drive Realty is the market-leading online real estate company." />
            </Head>

            <Layout>
                {/* Hero Section with Gradient Background */}
                <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
                                WHY ONE DRIVE REALTY?
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-slide-up">
                                A market-leading online real estate company.
                            </p>
                            <div className="flex justify-center gap-4 animate-fade-in-delay">
                                <FaRocket className="text-4xl animate-bounce" />
                                <FaUsers className="text-4xl animate-bounce delay-100" />
                                <FaChartLine className="text-4xl animate-bounce delay-200" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 min-h-screen py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Introduction Section */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 transform hover:scale-105 transition duration-300">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        Welcome to the Future of Real Estate
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        The One Drive Realty, founded in 2020, is a market-leading online real estate company. We provide a comprehensive range of services for residential, commercial, and broker-of-record needs, all virtually.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Unlike other brokerages, we strengthen our agents. You'll receive unparalleled support, coaching, benefits, leads, and commission programs that are meant to propel your success.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition duration-300">
                                        <FaLaptop className="text-6xl mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">100% Virtual</h3>
                                        <p>Work from anywhere, anytime</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What Sets Us Apart */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                                What Sets Us Apart?
                            </h2>
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                                    Forget about corporate ladders and excessive bureaucracy. At One Drive Realty, you have direct contact with your managing broker; there is no need to deal with office managers or team leaders.
                                </p>

                                {/* Feature Cards Grid */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition transform hover:-translate-y-2">
                                        <div className="text-green-600 text-4xl mb-4">💰</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable</h3>
                                        <p className="text-gray-700">Top-quality support without exceeding your budget</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition transform hover:-translate-y-2">
                                        <div className="text-blue-600 text-4xl mb-4">⏰</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Schedule</h3>
                                        <p className="text-gray-700">Work part-time or full-time; it's up to you</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition transform hover:-translate-y-2">
                                        <div className="text-purple-600 text-4xl mb-4">🔓</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Lock-In</h3>
                                        <p className="text-gray-700">Leave whenever you want, no strings attached</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Better Way Section */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                                We Created a Better Way
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <FaCheckCircle className="text-blue-600 text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-State</h3>
                                            <p className="text-gray-700">Work from wherever you wish across multiple states</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-100 p-3 rounded-lg">
                                            <FaCheckCircle className="text-green-600 text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Paperless & Mobile</h3>
                                            <p className="text-gray-700">Environmentally friendly and convenient</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <FaCheckCircle className="text-purple-600 text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Agent-Driven</h3>
                                            <p className="text-gray-700">You are in complete control of your success</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-100 p-3 rounded-lg">
                                            <FaCheckCircle className="text-orange-600 text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">New Agent Training</h3>
                                            <p className="text-gray-700">We assist you in launching your profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Virtual Back Office Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12 mb-12 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <FaHandshake className="text-5xl" />
                                <h2 className="text-3xl md:text-4xl font-bold">Agent Virtual Back Office</h2>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Your all-in-one command centre, available from anywhere. It's like having a marketing department, a printing press, and a training centre all in one place.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="font-semibold">✓ Property Brochures</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="font-semibold">✓ Business Cards</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="font-semibold">✓ Training Videos</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white transform hover:scale-105 transition duration-300">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us Today</h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto">
                                Are you ready to improve your real estate career? Join our industry-leading virtual brokerage and avoid the 9-to-5 grind.
                            </p>
                            <a
                                href="mailto:info@onedriverealty.com"
                                className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-110 shadow-xl"
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
                    .animate-fade-in-delay {
                        animation: fade-in 1s ease-out 0.5s backwards;
                    }
                    .delay-100 {
                        animation-delay: 0.1s;
                    }
                    .delay-200 {
                        animation-delay: 0.2s;
                    }
                    .delay-1000 {
                        animation-delay: 1s;
                    }
                `}</style>
            </Layout>
        </>
    );
}
