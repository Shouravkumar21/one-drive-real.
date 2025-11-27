import Head from 'next/head';
import Layout from '../components/Layout';

export default function EmergingMarkets() {
    return (
        <>
            <Head>
                <title>Emerging Markets - OnDrive Realty</title>
                <meta name="description" content="Invest in emerging markets in Africa with One Drive Realty." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">EMERGING MARKETS</h1>
                            <p className="text-xl text-gray-600">
                                Unlock the immense growth potential of Africa's real estate market.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty is strategically targeting emerging markets in Africa, recognizing the immense growth potential and untapped opportunities across the continent. Africa is experiencing rapid urbanization, a growing middle class, and increased foreign investment, making it a prime location for real estate development.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Specific Opportunities in Africa:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Residential Developments:</span>
                                        <p className="text-gray-700">With a rising population and increasing demand for housing, there are significant opportunities in residential real estate, including affordable housing and luxury developments.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Commercial Real Estate:</span>
                                        <p className="text-gray-700">As businesses expand across Africa, there is a growing need for office spaces, retail centers, and industrial parks.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Tourism and Hospitality:</span>
                                        <p className="text-gray-700">Africa's rich cultural heritage and natural beauty are driving growth in the tourism sector, creating opportunities for investments in hotels, resorts, and vacation properties.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Agricultural Land:</span>
                                        <p className="text-gray-700">With abundant land and favorable climates, Africa presents unique opportunities for investment in agricultural real estate, including farms and agribusiness ventures.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How One Drive Realty Helps Clients Invest in Africa:</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty provides clients with comprehensive market analysis, identifying the most promising investment opportunities in Africa. By leveraging local expertise and global insights, we help clients navigate the complexities of the African real estate market. Our platform offers tailored investment solutions, connecting clients with high-potential projects and providing the support needed to ensure successful investments.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Invest in Africa</h2>
                            <p className="text-lg mb-6">
                                Whether you're looking to invest in residential, commercial, or agricultural real estate, One Drive Realty is your trusted partner in unlocking the potential of Africa's emerging markets so drop an email at info@Onedriverealty.com and let’s get started.
                            </p>
                            <a href="mailto:info@onedriverealty.com" className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                                Email us at info@onedriverealty.com
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
