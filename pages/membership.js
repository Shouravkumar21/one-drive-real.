import Head from 'next/head';
import Layout from '../components/Layout';

export default function Membership() {
    return (
        <>
            <Head>
                <title>Affiliate Membership - OnDrive Realty</title>
                <meta name="description" content="Join One Drive Realty as an Affiliate Member and earn referral fees." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">MEMBERSHIP</h1>
                            <p className="text-xl text-gray-600">
                                Unique Affiliate Membership for individuals interested in the real estate industry.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we offer a unique Affiliate Membership for individuals who do not possess a real estate license but are interested in participating in the real estate industry.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Affiliate Membership?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Affiliate Membership is designed for those who want to be involved in real estate without becoming licensed agents. As an affiliate member, you can earn marketing referral fees by connecting potential clients or leads to One Drive Realty.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Affiliate Membership</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Earn Referral Fees:</span>
                                        <p className="text-gray-700">Affiliate members can earn marketing referral fees for every successful lead or client they refer to One Drive Realty. This provides a way to generate income without needing a real estate license.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">No Licensing Requirement:</span>
                                        <p className="text-gray-700">This membership is ideal for individuals who want to be part of the real estate industry but do not want to go through the process of obtaining a real estate license.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Flexible Participation:</span>
                                        <p className="text-gray-700">As an affiliate, you can participate on your own schedule, making it a great option for those who want to earn extra income without committing to full-time work in real estate.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Value Proposition of the Membership</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Low Barrier to Entry:</span>
                                        <p className="text-gray-700">The Affiliate Membership offers an easy and cost-effective way to engage with the real estate market. Without the need for a license or significant financial investment, anyone can start earning from real estate referrals.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Income Potential:</span>
                                        <p className="text-gray-700">The ability to earn referral fees provides a tangible financial benefit, making this membership valuable for those looking to supplement their income or explore real estate as a side business.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Network Expansion:</span>
                                        <p className="text-gray-700">By becoming an affiliate, you gain access to One Drive Realty's extensive network, allowing you to build connections and learn more about the real estate industry.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Affiliate Membership at One Drive Realty is an excellent opportunity for those who want to be involved in the real estate industry without the commitment of becoming a licensed agent. It offers a straightforward way to earn income through referrals, providing both flexibility and financial rewards.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
                            <p className="text-lg mb-6">
                                To have a stable passive source of income via Affiliate membership drop us an email at info@onedriverealty.com so our team can let you in!
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
