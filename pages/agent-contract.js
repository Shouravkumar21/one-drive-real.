import Head from 'next/head';
import Layout from '../components/Layout';

export default function AgentContract() {
    return (
        <>
            <Head>
                <title>Agent Contract - OnDrive Realty</title>
                <meta name="description" content="Independent Contractor Agreement for One Drive Realty agents." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">AGENT CONTRACT</h1>
                            <p className="text-xl text-gray-600">
                                Independent Contractor Agreement for Real Estate Professionals
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Independent Contractor Agreement</h2>
                                <p className="text-center text-gray-600 mb-6">(Between Broker and Licensee)</p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                                <p className="text-blue-900 font-bold mb-2">📋 Contract Information Request</p>
                                <p className="text-blue-800">
                                    To obtain the complete Independent Contractor Agreement, Office Policy and Procedure Manual, and all associated addenda, please contact our team.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Overview</h2>
                                <p className="text-gray-700 mb-4">
                                    This Independent Contractor Agreement is made between One Drive Realty (ODR) and licensed real estate professionals. The agreement establishes the relationship, responsibilities, and compensation structure for independent contractor agents.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Agreement Elements</h2>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">1. Broker Information</h3>
                                        <p className="text-gray-700">
                                            One Drive Realty is a duly licensed Designated-Managing Broker in Washington State, operating under registered names and DBA's.
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">2. Licensee Requirements</h3>
                                        <p className="text-gray-700">
                                            Licensees must maintain valid real estate licenses and comply with all state regulations and continuing education requirements.
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">3. Independent Contractor Relationship</h3>
                                        <p className="text-gray-700">
                                            The agreement establishes an independent contractor relationship, not an employment relationship. Licensees are responsible for their own taxes and business expenses.
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">4. Commission Plans</h3>
                                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                            <li>100% Flat Fee Plan (varies by state)</li>
                                            <li>Park Your License Plan (85%-15% split)</li>
                                            <li>Brand New Agent Plan (75%-25% split)</li>
                                            <li>Unlimited Plan ($499/month)</li>
                                            <li>Team Plan (customizable)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">5. Business Expenses</h3>
                                        <p className="text-gray-700">
                                            Licensees are responsible for their own professional licenses, office supplies, marketing materials, and other business expenses.
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">6. Compliance Requirements</h3>
                                        <p className="text-gray-700">
                                            All licensees must comply with federal and state laws, including fair housing laws, RESPA regulations, and professional ethics codes.
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">7. Termination</h3>
                                        <p className="text-gray-700">
                                            Either party may terminate the agreement at any time with or without cause, with proper notice.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Office Policy and Procedure Manual</h2>
                                <p className="text-gray-700 mb-4">
                                    The comprehensive Office Policy and Procedure Manual covers:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>Transaction Management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>Commission Schedules</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>MLS Services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>File Maintenance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>Trust Funds Handling</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>Marketing Guidelines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>Licensing Requirements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>E&O Insurance</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                                <p className="text-yellow-900 font-bold mb-2">⚠️ Legal Document Notice</p>
                                <p className="text-yellow-800">
                                    This is a summary only. The complete Independent Contractor Agreement consists of multiple pages of legal terms and conditions. All agents must review and sign the complete agreement before affiliation with One Drive Realty.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                            <p className="text-lg mb-6">
                                Interested in becoming an independent contractor with One Drive Realty? Contact us to receive the complete contract and learn about our commission plans.
                            </p>
                            <a href="mailto:info@onedriverealty.com" className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                                Request Complete Contract - info@onedriverealty.com
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
