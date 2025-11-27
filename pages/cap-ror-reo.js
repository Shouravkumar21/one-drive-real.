import Head from 'next/head';
import Layout from '../components/Layout';
import { FaChartPie, FaPercentage, FaHome, FaCalculator, FaChartLine, FaUniversity } from 'react-icons/fa';

export default function CapRorReo() {
    return (
        <>
            <Head>
                <title>CAP-ROR-REO - OneDrive Realty</title>
                <meta name="description" content="Understanding key real estate metrics for informed investment decisions." />
            </Head>

            <Layout>
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center animate-fade-in">
                            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-bounce">
                                <span className="text-xl font-semibold flex items-center gap-2">
                                    <FaChartLine /> Investment Metrics
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
                                CAP • ROR • REO
                            </h1>
                            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto animate-slide-up">
                                Mastering the essential metrics for real estate investment success and portfolio growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 min-h-screen py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Introduction Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 transform hover:scale-[1.01] transition duration-500">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Language of Investment</h2>
                                <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                                    At One Drive Realty, understanding key real estate metrics is essential for making informed investment decisions. We break down the complex terms to help you make smarter choices.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {/* CAP Rate Card */}
                                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition transform hover:-translate-y-2">
                                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <FaPercentage className="text-3xl text-purple-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cap Rate</h3>
                                    <p className="text-sm font-semibold text-purple-600 mb-4 uppercase tracking-wide">Capitalization Rate</p>
                                    <p className="text-gray-700 mb-6">
                                        A vital metric used to assess the potential return on an investment property, calculated by dividing NOI by current market value.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-2">Why it matters:</h4>
                                        <p className="text-sm text-gray-600">Helps compare different properties to identify high-potential assets.</p>
                                    </div>
                                </div>

                                {/* ROR Card */}
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition transform hover:-translate-y-2">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <FaChartPie className="text-3xl text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">ROR</h3>
                                    <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">Rate of Return</p>
                                    <p className="text-gray-700 mb-6">
                                        Measures the overall profitability of an investment over time, reflecting percentage gain or loss relative to the initial investment.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-2">Why it matters:</h4>
                                        <p className="text-sm text-gray-600">Critical for long-term planning and evaluating investment effectiveness.</p>
                                    </div>
                                </div>

                                {/* REO Card */}
                                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-100 hover:shadow-xl transition transform hover:-translate-y-2">
                                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <FaHome className="text-3xl text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">REO</h3>
                                    <p className="text-sm font-semibold text-indigo-600 mb-4 uppercase tracking-wide">Real Estate Owned</p>
                                    <p className="text-gray-700 mb-6">
                                        Properties repossessed by lenders after foreclosure, often available at discounted prices for savvy investors.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-2">Why it matters:</h4>
                                        <p className="text-sm text-gray-600">Presents unique opportunities for significant returns at lower entry costs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expert Analysis Section */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-l-8 border-purple-600">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0">
                                    <div className="bg-purple-100 p-6 rounded-full">
                                        <FaCalculator className="text-5xl text-purple-600" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Analysis & Guidance</h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        We use these metrics to evaluate and compare properties, ensuring you invest in assets that offer the best return relative to their cost. Our expertise allows us to identify high-potential properties that align with your financial goals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
                            </div>
                            <div className="relative z-10">
                                <FaUniversity className="text-6xl mx-auto mb-6 animate-bounce" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Your Investments?</h2>
                                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                    Don't navigate the complex world of real estate metrics alone. Let our experts guide you to profitable decisions.
                                </p>
                                <a
                                    href="mailto:info@onedriverealty.com"
                                    className="inline-block bg-white text-purple-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
