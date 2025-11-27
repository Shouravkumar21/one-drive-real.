import Head from 'next/head';
import Layout from '../components/Layout';

export default function WorldEscrowTitle() {
    return (
        <>
            <Head>
                <title>World Escrow Title - OnDrive Realty</title>
                <meta name="description" content="Secure and efficient global escrow title services for 1031 exchanges." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">WORLD ESCROW TITLE</h1>
                            <p className="text-xl text-gray-600">
                                Ensuring secure and efficient transactions for your global investments.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the context of a 1031 exchange, escrow services play a pivotal role in ensuring secure and efficient transactions. Here’s how world escrow title services integrate with the 1031 exchange process:
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Role and Function</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Neutral Third Party:</span>
                                        <p className="text-gray-700">Escrow services act as a neutral third party that holds funds during the 1031 exchange. This ensures that all parties adhere to the terms of the exchange agreement, safeguarding the investment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Trustee for Funds:</span>
                                        <p className="text-gray-700">The escrow agent holds the proceeds from the sale of the relinquished property until they are ready to be applied toward the purchase of the replacement property. This is crucial for complying with the 1031 exchange requirements.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Funds Disbursement:</span>
                                        <p className="text-gray-700">The escrow agent releases funds according to the agreed-upon terms of the exchange, ensuring payments are made only when all conditions are fulfilled.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Security:</span>
                                        <p className="text-gray-700">Funds are protected in escrow and only released when the conditions of the 1031 exchange are satisfied, significantly reducing the risk of financial loss.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Impartial Handling:</span>
                                        <p className="text-gray-700">As a neutral entity, the escrow service ensures fairness throughout the transaction, maintaining compliance with 1031 exchange regulations.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Dispute Resolution:</span>
                                        <p className="text-gray-700">In the event of disagreements, the escrow agent can help resolve issues based on the terms of the escrow agreement, providing additional peace of mind.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">One Drive Realty’s Escrow Services</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Professional Management:</span>
                                        <p className="text-gray-700">Our experienced escrow team expertly handles all aspects of the escrow process related to 1031 exchanges, ensuring funds are managed securely and released as agreed.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Clear Communication:</span>
                                        <p className="text-gray-700">We maintain transparent communication with all parties involved, providing updates and addressing any questions or concerns throughout the process.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Compliance Expertise:</span>
                                        <p className="text-gray-700">Our team is well-versed in the specific requirements of 1031 exchanges, ensuring that every step adheres to IRS regulations.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Global Security</h2>
                            <p className="text-lg mb-6">
                                Utilizing One Drive Realty’s world escrow title services for your 1031 exchange provides you with the security and expertise needed for a smooth transaction. If you’re considering a 1031 exchange or curious about our escrow services, contact us today at info@onedriverealty.com
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
