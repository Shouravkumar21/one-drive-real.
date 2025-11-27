import Head from 'next/head';
import Layout from '../components/Layout';
import { FaHardHat, FaDraftingCompass, FaCity, FaMapMarkedAlt, FaChartLine, FaTools } from 'react-icons/fa';

export default function Build2Suit() {
    return (
        <>
            <Head>
                <title>Build to Suit - OneDrive Realty</title>
                <meta name="description" content="Tailored Build-to-Suit solutions for custom-built properties." />
            </Head>

            <Layout>
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]"></div>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center animate-fade-in">
                            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-bounce">
                                <span className="text-xl font-semibold flex items-center gap-2">
                                    <FaHardHat /> Custom Development
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
                                Build to Suit Solutions
                            </h1>
                            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto animate-slide-up">
                                Bringing your vision to life with custom-built properties designed specifically for your needs.
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
                                        <FaDraftingCompass className="text-orange-600" />
                                        What is Build-to-Suit?
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                        Build-to-Suit is a real estate development approach where the property is constructed to the specifications of a particular tenant or buyer.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        This process allows for a high degree of customization, ensuring that the final property perfectly matches the intended use and style of the occupant, whether for commercial or residential purposes.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 border border-orange-200">
                                        <h3 className="text-xl font-bold text-orange-800 mb-4">Our Process</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full text-orange-600 font-bold">1</div>
                                                <span className="text-gray-800 font-medium">Consultation & Planning</span>
                                            </div>
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full text-orange-600 font-bold">2</div>
                                                <span className="text-gray-800 font-medium">Site Selection</span>
                                            </div>
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full text-orange-600 font-bold">3</div>
                                                <span className="text-gray-800 font-medium">Design & Development</span>
                                            </div>
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full text-orange-600 font-bold">4</div>
                                                <span className="text-gray-800 font-medium">Construction & Delivery</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 border-b-4 border-orange-500">
                                    <FaTools className="text-4xl text-orange-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customization</h3>
                                    <p className="text-gray-700">Influence the design, layout, and features to align perfectly with your operations.</p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 border-b-4 border-red-500">
                                    <FaChartLine className="text-4xl text-red-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Efficiency</h3>
                                    <p className="text-gray-700">Avoid retrofitting costs by building exactly what you need from the start.</p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 border-b-4 border-orange-500">
                                    <FaMapMarkedAlt className="text-4xl text-orange-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Optimal Location</h3>
                                    <p className="text-gray-700">We help select the ideal site based on accessibility and market potential.</p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 border-b-4 border-red-500">
                                    <FaCity className="text-4xl text-red-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Value</h3>
                                    <p className="text-gray-700">Enhance property value with a design specifically tailored for its intended use.</p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 md:p-16 text-white mb-16 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
                            <div className="relative z-10 text-center max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose OneDrive Realty?</h2>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    We bring together a team of experienced developers, architects, and project managers to guide you through every step. From initial consultation to final construction, we prioritize quality, efficiency, and client satisfaction.
                                </p>
                                <div className="grid md:grid-cols-3 gap-8 mt-12">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">Expert</div>
                                        <div className="text-gray-400">Team</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">On-Time</div>
                                        <div className="text-gray-400">Delivery</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">Quality</div>
                                        <div className="text-gray-400">Assured</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Vision?</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Whether it's a new headquarters, retail space, or customized residence, let's bring your project to life.
                            </p>
                            <a
                                href="mailto:info@onedriverealty.com"
                                className="inline-block bg-orange-600 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
