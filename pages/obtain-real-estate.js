import Head from 'next/head';
import Layout from '../components/Layout';

export default function ObtainRealEstate() {
    return (
        <>
            <Head>
                <title>Obtain Real Estate License - OnDrive Realty</title>
                <meta name="description" content="Get guidance on obtaining your real estate license." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">OBTAIN REAL ESTATE LICENSE</h1>
                            <p className="text-xl text-gray-600">
                                Your pathway to a rewarding career in real estate.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While One Drive Realty does not directly offer assistance with obtaining a real estate license, we do provide guidance for those interested in pursuing a career in real estate.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What One Drive Realty Offers:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Referral to Washington DOL:</span>
                                        <p className="text-gray-700">We direct prospective agents to the Washington State Department of Licensing (DOL) Real Estate Department for information on licensing requirements, application procedures, and necessary qualifications.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Temporary Referral to Third-Party Real Estate Schools:</span>
                                        <p className="text-gray-700">Until we re-establish our own real estate school, we refer candidates to trusted third-party real estate schools where they can complete the required pre-licensing courses and prepare for the licensing exam.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Plans:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">One Drive Realty Real Estate School:</span>
                                        <p className="text-gray-700">We are in the process of re-establishing our own real estate school. Once operational, it will offer the same comprehensive courses that cover all aspects of real estate, providing a convenient and streamlined path to obtaining a real estate license.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Target Audience:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Aspiring Real Estate Agents:</span>
                                        <p className="text-gray-700">Individuals who are interested in starting a career in real estate and need to obtain the necessary education and licensing.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Career Changers:</span>
                                        <p className="text-gray-700">Professionals from other fields looking to transition into real estate and seeking guidance on how to get licensed.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed">
                                While One Drive Realty currently provides referrals and guidance, our future real estate school will offer a more direct and comprehensive pathway for those looking to enter the real estate industry.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Start Your Real Estate Journey</h2>
                            <p className="text-lg mb-6">
                                Eager to obtain a Real Estate License? Drop us an email at info@onedriverealty.com and we will provide you with the best courses and guidance out there to achieve your goal. See you soon!
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
