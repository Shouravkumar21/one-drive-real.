import Head from 'next/head';
import Layout from '../components/Layout';

export default function CommercialListing() {
    return (
        <>
            <Head>
                <title>Commercial Listings - OnDrive Realty</title>
                <meta name="description" content="Premium listing services for commercial properties." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">COMMERCIAL LISTINGS</h1>
                            <p className="text-xl text-gray-600">
                                Tailored listing services designed to attract the right buyers for your commercial property.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the high-stakes market of commercial real estate, One Drive Realty offers premium listing services designed to attract the right buyers for your office buildings, retail spaces, warehouses, and industrial properties. We recognize that commercial properties require a tailored approach due to the complexities involved in leasing, zoning, and investment return expectations.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Services:</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Valuation</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Optimal Pricing:</span>
                                        <p className="text-gray-700">Our team conducts detailed market analyses to ensure your commercial property is listed at an optimal price. This strategic pricing attracts serious buyers and tenants, maximizing your investment potential.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Targeted Marketing</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Effective Exposure:</span>
                                        <p className="text-gray-700">We utilize a combination of direct outreach, online listings, and our exclusive investor databases to position your commercial property in front of qualified buyers. Our marketing strategies are designed to generate serious inquiries quickly.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Details</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">In-Depth Information:</span>
                                        <p className="text-gray-700">We highlight critical elements of your commercial property, including lease agreements, tenant stability, zoning laws, and future development potential. This information is essential for buyers and tenants to make informed decisions.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Investor and Business Network</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Access to Opportunities:</span>
                                        <p className="text-gray-700">We connect you with local and national business owners actively seeking expansion opportunities. By leveraging our extensive network, we bring serious inquiries directly to your commercial listings.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you list your commercial property with One Drive Realty, you gain a dedicated partner focused on your success. Our expertise and tailored marketing strategies ensure that your property receives the attention it deserves, leading to successful transactions.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">List Your Commercial Property</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to list your commercial property or have any questions about the process, contact us today. Let’s work together to achieve your commercial real estate goals!
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
