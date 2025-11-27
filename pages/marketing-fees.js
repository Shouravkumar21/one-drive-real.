import Head from 'next/head';
import Layout from '../components/Layout';

export default function MarketingFees() {
    return (
        <>
            <Head>
                <title>Marketing Fees - OnDrive Realty</title>
                <meta name="description" content="Transparent and value-driven marketing fees structure." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">MARKETING FEES</h1>
                            <p className="text-xl text-gray-600">
                                High-quality, value-driven solutions to empower our agents.
                            </p>
                        </div>

                        {/* Introduction */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we understand the importance of effective marketing in the competitive real estate industry. While we offer a range of marketing tools and resources, it is important to note that our services are not free. We believe in providing high-quality, value-driven solutions that empower our agents to succeed, and this includes a structured approach to marketing fees.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Fees Structure:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Agent Websites:</span>
                                        <p className="text-gray-700">We provide personalized agent websites with integrated IDX search functionality to enhance your online presence. This service, however, comes with a setup and maintenance fee to ensure you receive top-notch technical support and regular updates.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Property Listings & Virtual Tours:</span>
                                        <p className="text-gray-700">High-quality property marketing is key to attracting potential buyers. Our comprehensive marketing package includes professional photography, virtual tours, and listing syndication across major platforms. These services are available for a fee, ensuring your properties stand out in the market.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Custom Marketing Materials:</span>
                                        <p className="text-gray-700">Our in-house design department creates customized marketing materials, such as flyers, brochures, and social media graphics. These materials are crafted to align with your branding and marketing goals, with associated design and printing fees.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Advertising Campaigns:</span>
                                        <p className="text-gray-700">We offer targeted digital and print advertising campaigns to increase your property’s visibility. Whether through social media ads, email campaigns, or local print advertising, these services are available at competitive rates tailored to your budget.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Ongoing Marketing Support:</span>
                                        <p className="text-gray-700">For agents seeking continuous marketing efforts, we provide subscription-based packages that cover a range of marketing activities. These packages offer ongoing support and are billed monthly, ensuring you have a consistent marketing presence.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed">
                                At One Drive Realty, our goal is to equip you with the best marketing tools to grow your business while maintaining a transparent and fair fee structure. Imagine your minor investment can do wonders in near future, then why wait?
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
                            <p className="text-lg mb-6">
                                Contact us at info@onedriverealty.com to learn more about our marketing services and how they can be tailored to your specific needs.
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
