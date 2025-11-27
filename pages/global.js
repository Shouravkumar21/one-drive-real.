import Head from 'next/head';
import Layout from '../components/Layout';

export default function Global() {
    return (
        <>
            <Head>
                <title>Global Real Estate - OnDrive Realty</title>
                <meta name="description" content="Global real estate services and international property listings." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">GLOBAL</h1>
                            <p className="text-xl text-gray-600">
                                Connecting you to real estate opportunities around the world.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty operates with a global perspective, recognizing that real estate markets are increasingly interconnected. We have established a network of international partners and resources that enable us to assist clients with cross-border transactions, global investment opportunities, and the management of international real estate portfolios.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Global Services:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">International Property Listings:</span>
                                        <p className="text-gray-700">Access to a wide range of properties across major international markets.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Cross-Border Transactions:</span>
                                        <p className="text-gray-700">Expertise in handling the legal, financial, and logistical aspects of buying and selling properties in different countries.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Global Market Insights:</span>
                                        <p className="text-gray-700">Up-to-date analysis and trends in global real estate, helping clients make informed decisions.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Go Global</h2>
                            <p className="text-lg mb-6">
                                Ready to explore international real estate opportunities? Contact us at info@onedriverealty.com to learn more about our global services.
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
