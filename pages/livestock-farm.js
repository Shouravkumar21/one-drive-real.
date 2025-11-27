import Head from 'next/head';
import Layout from '../components/Layout';

export default function LivestockFarm() {
    return (
        <>
            <Head>
                <title>Livestock Farm - OnDrive Realty</title>
                <meta name="description" content="Livestock farming investment opportunities and property acquisitions." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">LIVESTOCK FARM</h1>
                            <p className="text-xl text-gray-600">
                                Profitable opportunities in livestock farming and ranching.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Livestock farming focuses on raising animals for food production, such as cattle, pigs, and chickens. One Drive Realty assists investors in acquiring land and facilities suitable for livestock farming, providing support in evaluating land size, infrastructure needs, and potential income streams.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Livestock Farming Considerations:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Land Size and Infrastructure:</span>
                                        <p className="text-gray-700">Livestock farming requires significant space and appropriate infrastructure, including barns, water systems, and grazing areas. One Drive Realty helps investors find land that meets these needs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Market Prices:</span>
                                        <p className="text-gray-700">The profitability of livestock farming is tied to market prices for meat, dairy, and other animal products. One Drive Realty offers insights into market trends to help farmers maximize their returns.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Sustainability:</span>
                                        <p className="text-gray-700">As consumers become more concerned with sustainable and ethical farming practices, investors can benefit by incorporating environmentally friendly farming techniques.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Start Your Livestock Venture</h2>
                            <p className="text-lg mb-6">
                                Ready to invest in livestock farming? Contact us at info@onedriverealty.com for comprehensive support in acquiring the perfect property.
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
