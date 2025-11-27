import Head from 'next/head';
import Layout from '../components/Layout';

export default function ReferralFees() {
    return (
        <>
            <Head>
                <title>Referrals Fees - OnDrive Realty</title>
                <meta name="description" content="Comprehensive referral fee program rewarding agents." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">REFERRALS FEES</h1>
                            <p className="text-xl text-gray-600">
                                Rewards for referring clients to our services.
                            </p>
                        </div>

                        {/* Introduction */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty offers a comprehensive referral fee program that rewards agents for referring clients to our services. Understanding how the program works, the potential earnings, and the criteria involved can help agents maximize their income through referrals.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Referral Fee Program Works</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Basic Structure:</span>
                                        <p className="text-gray-700">The referral fee program is designed to compensate agents who refer clients to One Drive Realty for various real estate services. When a referred client completes a transaction, the referring agent receives a referral fee as a percentage of the transaction value or a flat fee, depending on the service.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Referral Process:</span>
                                        <p className="text-gray-700">Agents can refer clients through a simple process, typically by submitting the client’s information to One Drive Realty. The referral must be documented to ensure that the referring agent receives credit once the transaction is completed.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Referral Fee Percentages and Amounts</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Varied Rates:</span>
                                        <p className="text-gray-700">The referral fees at One Drive Realty can range from 0.5% to 25% of the transaction value, depending on the specific product or service being referred. The exact percentage is determined by the type of service and the agreement between the agents and One Drive Realty.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Potential Earnings:</span>
                                        <p className="text-gray-700">Agents have the opportunity to earn significant income through the referral fee program, especially for high-value transactions. The flexible fee structure allows for different levels of compensation based on the complexity and value of the service provided.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Criteria for Referral Bonuses</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Product and Service-Specific Criteria:</span>
                                        <p className="text-gray-700">The criteria for referral bonuses vary depending on the product or service being referred. For example, higher percentages may be offered for more complex or higher-value transactions, while standard services may have lower referral fees.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Consideration of the Referral's Quality:</span>
                                        <p className="text-gray-700">One Drive Realty may also consider the quality and potential value of the referral when determining the referral bonus. Referrals that lead to long-term client relationships or multiple transactions may qualify for higher bonuses.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Periodic Review:</span>
                                        <p className="text-gray-700">The criteria for referral bonuses are subject to periodic review and adjustment based on market conditions and the success of the referral program. One Drive Realty aims to ensure that the program remains competitive and rewarding for participating agents.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed">
                                One Drive Realty’s referral fee program offers agents a lucrative opportunity to earn additional income by referring clients to our services. With flexible referral fees ranging from 0.5% to 25%, depending on the product or service, agents can tailor their referral efforts to maximize their earnings. The criteria for bonuses are based on the specific service and the value of the referral, ensuring that agents are fairly compensated for their efforts.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
                            <p className="text-lg mb-6">
                                To make most out of referral program, you need to connect with One Drive Realty through info@onedriverealty.com where you can join.
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
