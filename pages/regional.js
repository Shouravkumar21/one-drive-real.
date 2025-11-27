import Head from 'next/head';
import Layout from '../components/Layout';

export default function Regional() {
    return (
        <>
            <Head>
                <title>Regional Services - OnDrive Realty</title>
                <meta name="description" content="Localized real estate services with deep regional market knowledge." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">REGIONAL</h1>
                            <p className="text-xl text-gray-600">
                                Highly localized services reflecting unique regional characteristics.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At the regional level, One Drive Realty focuses on providing highly localized services that reflect the unique characteristics of specific areas. Our regional experts have deep knowledge of local markets, enabling them to offer personalized advice and strategies tailored to the specific needs of clients in each region.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Regional Services:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Local Market Expertise:</span>
                                        <p className="text-gray-700">In-depth understanding of regional trends, including property values, buyer preferences, and economic factors that impact real estate.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Community Engagement:</span>
                                        <p className="text-gray-700">Active participation in local communities, ensuring that we are connected to the people and businesses that shape the regional market.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Customized Marketing Strategies:</span>
                                        <p className="text-gray-700">Targeted marketing plans designed to reach the right audience in specific regions, maximizing the visibility and appeal of properties.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Local Expertise, Regional Impact</h2>
                            <p className="text-lg mb-6">
                                Benefit from our deep regional knowledge. Contact us at info@onedriverealty.com to learn more about our regional services.
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
