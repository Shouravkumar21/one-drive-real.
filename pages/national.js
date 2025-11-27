import Head from 'next/head';
import Layout from '../components/Layout';

export default function National() {
    return (
        <>
            <Head>
                <title>National Services - OnDrive Realty</title>
                <meta name="description" content="Extensive coverage across all 50 states with national real estate services." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">NATIONAL</h1>
                            <p className="text-xl text-gray-600">
                                Extensive coverage across all 50 states.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Within the United States, One Drive Realty offers extensive coverage across all 50 states. Our national presence allows us to serve clients in both urban and rural areas, providing them with the market knowledge and resources needed to succeed in the competitive U.S. real estate market.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key National Services:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Residential and Commercial Listings:</span>
                                        <p className="text-gray-700">A comprehensive database of properties available nationwide, including homes, commercial buildings, and investment properties.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">National Market Analysis:</span>
                                        <p className="text-gray-700">Detailed reports and insights on market trends, property values, and economic factors influencing real estate in different regions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">National Network of Agents:</span>
                                        <p className="text-gray-700">A team of experienced real estate agents located across the country, ready to assist clients with buying, selling, or leasing properties.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Coast to Coast Coverage</h2>
                            <p className="text-lg mb-6">
                                From coast to coast, One Drive Realty is here to serve you. Contact us at info@onedriverealty.com to explore our national services.
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
