import Head from 'next/head';
import Layout from '../components/Layout';

export default function Plan02() {
    return (
        <>
            <Head>
                <title>Plan 02 - OnDrive Realty</title>
                <meta name="description" content="Plan 2: Balance between earnings and essential tools." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">PLAN 02</h1>
                            <p className="text-xl text-gray-600">
                                Offers a range of resources while maintaining flexibility in commission structure.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Plan 2 offers a range of resources while maintaining flexibility in their commission structure. This plan strikes a balance between maximizing your earnings and offering the essential tools and services to help you close deals more efficiently. With Plan 2, you’ll enjoy a competitive commission structure, along with the opportunity to leverage premium resources that enhance your business operations.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Competitive Commission Structure</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With Plan 2, you continue to keep a substantial portion of your commission. This allows you to maintain strong earning potential while benefiting from the added services that can help you streamline your work and close deals more effectively. Whether you're handling multiple transactions or looking for ways to optimize your business, Plan 2 gives you the flexibility to do so, all while keeping your earnings in focus.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Services for Enhanced Success</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Plan 2 provides you with the option to access a variety of additional services, each designed to elevate your business. These services are available separately and are not included in the base plan, allowing you to choose the tools and support you need. Nothing in Plan 2 comes included; all optional services come at a cost, ensuring you only invest in what is valuable to your business.
                            </p>

                            <ul className="space-y-6 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Errors and Omissions Insurance (E&O):</span>
                                        <p className="text-gray-700">This essential insurance helps protect you from potential legal claims related to your real estate transactions. It’s highly recommended for all agents to ensure peace of mind, but it is not automatically included in Plan 2. You can opt for E&O insurance for an additional fee to safeguard your business.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Advanced Marketing Support:</span>
                                        <p className="text-gray-700">Plan 2 allows you to access enhanced marketing strategies that can help you stand out in a competitive market. This may include personalized marketing materials and comprehensive promotional support. These services are tailored to your needs and can be purchased separately based on your marketing goals.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Transaction Coordination Services:</span>
                                        <p className="text-gray-700">For agents who prefer to focus on client relationships rather than managing administrative tasks, transaction coordination services can be a valuable asset. These services assist with paperwork, deadlines, and transaction details, allowing you to concentrate on closing deals. This option is available for an extra fee, ensuring seamless deal management.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Enhanced Property Marketing Systems:</span>
                                        <p className="text-gray-700">To maximize the exposure of your listings, Plan 2 offers access to advanced marketing systems that promote your properties online to a wider audience. This can include targeted online marketing campaigns, social media promotions, and listing enhancements. These tools are not part of the base plan and come at an additional cost, helping you reach more potential buyers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">In-House Design & Branding Services:</span>
                                        <p className="text-gray-700">Plan 2 also provides you with the opportunity to work with professional designers for custom marketing materials, logos, and branding. Whether you need personalized business cards or a complete branding package, these services are available to help you stand out in the market. These options are available for purchase and are not included in the base plan.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Plan 2 gives you access to premium resources, but nothing is included in the base price. All additional services are optional and come at a cost, allowing you to tailor your business operations without any unnecessary expenses. This ensures that you only pay for the services you choose, giving you complete control over your investment in your business.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Grow Your Career</h2>
                            <p className="text-lg mb-6">
                                For more details on how Plan 2 can help you grow your real estate career, or to explore the optional services we offer, feel free to reach out to us.
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
