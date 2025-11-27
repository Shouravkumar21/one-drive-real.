import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function ParkLicense() {
    return (
        <>
            <Head>
                <title>Park Your License - OnDrive Realty</title>
                <meta name="description" content="Cost-effective solution for agents to maintain their license." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">PARK YOUR LICENSE</h1>
                            <p className="text-xl text-gray-600">
                                A cost-effective solution for agents.
                            </p>
                        </div>

                        {/* Introduction */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The "Park Your License" program at One Drive Realty is a cost-effective solution for agents who don't need or want to pay the high fees associated with Board, Association, and MLS memberships. This program is ideal for agents who primarily work with referrals or non-residential properties.
                            </p>
                            <p className="text-gray-700 font-bold mb-4">Here's everything you need to know:</p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of Parking Your License</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Cost Savings:</span>
                                        <p className="text-gray-700">Avoid paying Board, Association, and MLS dues.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Flexibility:</span>
                                        <p className="text-gray-700">Continue to earn income through regular real estate business, referrals, leads, and new home sales.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Non-Residential Opportunities:</span>
                                        <p className="text-gray-700">Engage in commercial, farming, and ranch property transactions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Maintain Active License:</span>
                                        <p className="text-gray-700">Use titles such as sales agent, salesperson, real estate agent, or real estate salesperson.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disadvantages of Parking Your License</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Loss of Realtor® Title:</span>
                                        <p className="text-gray-700">You will no longer be able to use the term Realtor®.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Limited Access:</span>
                                        <p className="text-gray-700">You will not have personal access to Board, Association, and MLS services during this period.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">MLS Listings:</span>
                                        <p className="text-gray-700">Although you won't have direct MLS access, we can usually get your listings loaded onto the MLS for a fee.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Returning to a Realtor Agent License Status</h2>
                            <p className="text-gray-700 mb-6">
                                You can return to being a Realtor agent with access to Board, Association, and MLS services at any time. Contact us to make this change.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Split for the Park Your License Program</h2>
                            <p className="text-gray-700 mb-6">
                                The "Park Your License" program allows you to earn 85% of all your commissions per deal, provided you are not a brand-new licensee.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fee Structure</h2>
                            <p className="text-gray-700 mb-6">
                                Depending on the state you are licensed in, you will pay a yearly fee broken down into smaller equal payments. This fee grants you access to all our tools, benefits, features, training, and the Agent Virtual Back office. Additionally, you will receive business cards upon joining.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Join the Park Your License Program Today</h2>
                            <p className="text-lg mb-6">
                                Save money and maintain your real estate license with One Drive Realty’s "Park Your License" program.
                            </p>
                            <div className="flex justify-center gap-4">
                                <a href="mailto:info@onedriverealty.com" className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                                    Contact Us
                                </a>
                            </div>
                            <p className="mt-4 text-sm">
                                For more details on the "Park Your License" program or any of our other offerings, please contact us at info@onedriverealty.com or visit our website. We look forward to supporting your success at One Drive Realty!
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
