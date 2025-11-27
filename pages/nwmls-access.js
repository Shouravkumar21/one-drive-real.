import Head from 'next/head';
import Layout from '../components/Layout';

export default function NWMLSAccess() {
    return (
        <>
            <Head>
                <title>NWMLS Access - OnDrive Realty</title>
                <meta name="description" content="Gain access to the Northwest Multiple Listing Service (NWMLS)." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">NWMLS ACCESS</h1>
                            <p className="text-xl text-gray-600">
                                Unique opportunity for individuals to gain access to the Northwest Multiple Listing Service.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty offers a unique opportunity for individuals, including those who are unlicensed, to gain access to the Northwest Multiple Listing Service (NWMLS).
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How One Drive Realty Provides NWMLS Access</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Membership Through One Drive Realty:</span>
                                        <p className="text-gray-700">One Drive Realty is a member of the NWMLS, which allows us to extend access to qualified individuals. Even if you are unlicensed, you can be approved for NWMLS access through our membership.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Qualification and Approval Process:</span>
                                        <p className="text-gray-700">To gain access, individuals must meet specific criteria set by the NWMLS. This includes adhering to the rules and regulations of the service. One Drive Realty assists in the application and approval process, ensuring that all requirements are met.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Payment and Compliance:</span>
                                        <p className="text-gray-700">Approved individuals must pay the necessary fees to join the NWMLS and must comply with all NWMLS regulations. One Drive Realty facilitates this process, making it easier for you to gain access.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Using NWMLS through One Drive Realty</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Comprehensive Property Listings:</span>
                                        <p className="text-gray-700">NWMLS provides access to a vast database of property listings, giving you the ability to view and manage a wide range of real estate opportunities across the region.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Enhanced Market Insights:</span>
                                        <p className="text-gray-700">By using NWMLS, you gain valuable insights into the real estate market, including property details, pricing trends, and market conditions, which can help you, make informed decisions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Networking Opportunities:</span>
                                        <p className="text-gray-700">Access to NWMLS through One Drive Realty connects you with a broader network of real estate professionals, enhancing your ability to collaborate and find new opportunities.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Professional Tools and Resources:</span>
                                        <p className="text-gray-700">NWMLS offers various tools and resources that can help you streamline your real estate activities, whether you're searching for properties, analyzing market data, or managing transactions.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty provides a pathway for individuals, including those without a real estate license, to access the powerful tools and resources of the NWMLS. By partnering with us, you can leverage the extensive property listings, market insights, and networking opportunities available through the NWMLS, enhancing your real estate experience and success.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
