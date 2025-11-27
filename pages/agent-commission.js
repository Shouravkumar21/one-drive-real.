import Head from 'next/head';
import Layout from '../components/Layout';
import { FaDollarSign, FaShieldAlt, FaChartLine, FaLaptopCode, FaTrophy, FaRocket } from 'react-icons/fa';

export default function AgentCommission() {
    return (
        <>
            <Head>
                <title>Agent 100% Commission - OneDrive Realty</title>
                <meta name="description" content="Maximize your earnings with our 100% commission model." />
            </Head>

            <Layout>
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full filter blur-3xl animate-pulse"></div>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center">
                            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-bounce">
                                <span className="text-2xl font-bold">💰 100% COMMISSION</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Keep What You Earn
                            </h1>
                            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
                                Empowering real estate agents by maximizing their earnings with our revolutionary commission model.
                            </p>
                            <div className="flex justify-center gap-8 text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                    <div className="text-4xl font-bold mb-2">100%</div>
                                    <div className="text-sm">Commission</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                    <div className="text-4xl font-bold mb-2">$0</div>
                                    <div className="text-sm">Hidden Fees</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                    <div className="text-4xl font-bold mb-2">24/7</div>
                                    <div className="text-sm">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 min-h-screen py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Introduction */}
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
                            <div className="text-center mb-12">
                                <FaDollarSign className="text-6xl text-green-600 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">The Future of Real Estate Commissions</h2>
                                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                                    At One Drive Realty, we offer a 100% commission model designed to empower real estate agents by maximizing their earnings while providing top-notch support and resources.
                                </p>
                            </div>

                            {/* Feature Cards */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border-2 border-green-200 transform hover:scale-105 transition duration-300 hover:shadow-xl">
                                    <FaDollarSign className="text-4xl text-green-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">100% Commission</h3>
                                    <p className="text-gray-700">Keep 100% of your commission, minus a simple flat fee</p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 transform hover:scale-105 transition duration-300 hover:shadow-xl">
                                    <FaShieldAlt className="text-4xl text-blue-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Hidden Costs</h3>
                                    <p className="text-gray-700">Complete transparency—no surprise fees or hidden charges</p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 transform hover:scale-105 transition duration-300 hover:shadow-xl">
                                    <FaChartLine className="text-4xl text-purple-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Support</h3>
                                    <p className="text-gray-700">E&O insurance, paperless transactions, and agent websites</p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200 transform hover:scale-105 transition duration-300 hover:shadow-xl">
                                    <FaLaptopCode className="text-4xl text-orange-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Training & Tools</h3>
                                    <p className="text-gray-700">24/7 virtual back-office with all the tools you need</p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Section */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                                Why Choose One Drive Realty?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
                                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <FaTrophy className="text-3xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">More Income Retained</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        With our 100% commission plan, you can afford to invest in your business and create the work environment that suits you—whether it's a home office, shared executive suite, or private space.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
                                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <FaRocket className="text-3xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Top-Notch Resources</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our industry-leading technology, marketing support, and business development coaching are all designed to help you succeed in today's competitive market.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
                                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <FaLaptopCode className="text-3xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Flexibility</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Work from anywhere with our online tools and resources available at your fingertips. No office required, no desk fees, complete freedom.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
                                    <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <FaChartLine className="text-3xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Success</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Join thousands of successful agents who have already made the switch and are earning more while working smarter, not harder.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Section */}
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                                See The Difference
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left py-4 px-4">Feature</th>
                                            <th className="text-center py-4 px-4 bg-green-50">
                                                <div className="text-green-600 font-bold text-lg">OneDrive Realty</div>
                                            </th>
                                            <th className="text-center py-4 px-4">Traditional Brokerage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 px-4 font-semibold">Commission Split</td>
                                            <td className="text-center py-4 px-4 bg-green-50">
                                                <span className="text-green-600 font-bold text-xl">100%</span>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-500">50-70%</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 px-4 font-semibold">Monthly Desk Fees</td>
                                            <td className="text-center py-4 px-4 bg-green-50">
                                                <span className="text-green-600 font-bold">$0</span>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-500">$200-500</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 px-4 font-semibold">Hidden Fees</td>
                                            <td className="text-center py-4 px-4 bg-green-50">
                                                <span className="text-green-600 font-bold">None</span>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-500">Many</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 px-4 font-semibold">Work Location</td>
                                            <td className="text-center py-4 px-4 bg-green-50">
                                                <span className="text-green-600 font-bold">Anywhere</span>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-500">Office Required</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                            </div>
                            <div className="relative z-10">
                                <FaRocket className="text-6xl mx-auto mb-6 animate-bounce" />
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Join One Drive Realty Today</h2>
                                <p className="text-xl mb-8 max-w-3xl mx-auto">
                                    Why work harder for less? Take control of your real estate career with the freedom to grow your business on your terms, backed by the best support in the industry.
                                </p>
                                <a
                                    href="mailto:info@onedriverealty.com"
                                    className="inline-block bg-white text-green-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-110 shadow-xl"
                                >
                                    Email us at info@onedriverealty.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
