import Head from 'next/head';
import Layout from '../components/Layout';

export default function CropFarming() {
    return (
        <>
            <Head>
                <title>Crop Farming - OnDrive Realty</title>
                <meta name="description" content="Agricultural land investment opportunities for crop farming." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">CROP FARMING</h1>
                            <p className="text-xl text-gray-600">
                                Invest in fertile farmland for agricultural production.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Investing in crop farming involves purchasing farmland for agricultural purposes, focusing on the production of crops for local, national, or global markets. One Drive Realty works with investors interested in acquiring farmland, offering insights into market trends, soil quality, and crop profitability.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations for Crop Farming:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Land Quality:</span>
                                        <p className="text-gray-700">Fertile soil and access to water are critical for successful farming operations. One Drive Realty helps clients evaluate these factors when purchasing agricultural land.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Market Demand:</span>
                                        <p className="text-gray-700">Crop prices fluctuate based on demand and supply. One Drive Realty provides market analysis to help investors choose crops that yield the best returns.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Government Subsidies:</span>
                                        <p className="text-gray-700">Certain crops may qualify for subsidies or tax breaks, adding to the financial attractiveness of crop farming investments.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Invest in Agriculture</h2>
                            <p className="text-lg mb-6">
                                Ready to explore crop farming opportunities? Contact us at info@onedriverealty.com for expert guidance on agricultural investments.
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
