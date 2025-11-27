import Head from 'next/head';
import Layout from '../components/Layout';

export default function ResidentialListing() {
    return (
        <>
            <Head>
                <title>Residential Listings - OnDrive Realty</title>
                <meta name="description" content="List your residential property with One Drive Realty for maximum visibility." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">RESIDENTIAL LISTINGS</h1>
                            <p className="text-xl text-gray-600">
                                Reach potential buyers quickly and efficiently with our comprehensive support.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you list your residential property with One Drive Realty, you ensure that your home reaches potential buyers quickly and efficiently. Whether you have a single-family home, townhouse, or condo, we provide comprehensive support to help your listing stand out in a competitive market.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Services:</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Detailed Property Marketing</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">High-Quality Presentation:</span>
                                        <p className="text-gray-700">We utilize professional photography, engaging virtual tours, and expert staging recommendations to showcase your home in the best possible light. Our goal is to create an emotional connection with potential buyers from the very first glance.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Market Expertise</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">In-Depth Insights:</span>
                                        <p className="text-gray-700">Our experienced agents provide valuable insights into neighbourhood trends, pricing strategies, and buyer preferences. This knowledge helps you set the right price for your home, maximizing its appeal and potential return.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Wide Network Exposure</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Maximum Visibility:</span>
                                        <p className="text-gray-700">Your property will gain extensive exposure through our multiple listing platforms, targeted social media marketing, and proactive local outreach efforts. We leverage our network to ensure your listing reaches the right audience.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Support</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Comprehensive Guidance:</span>
                                        <p className="text-gray-700">We partner with you every step of the way—from preparing your home for sale to closing the deal. Our dedicated team is committed to ensuring a smooth and efficient transaction process, addressing any questions or concerns you may have along the way.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                With One Drive Realty, you can be confident that your residential property is in good hands. Our tailored approach and commitment to client satisfaction ensure that your home attracts the right buyers for a successful sale.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">List Your Home</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to list your property or have any questions about the process, contact us today. Let’s work together to make your selling experience a success!
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
