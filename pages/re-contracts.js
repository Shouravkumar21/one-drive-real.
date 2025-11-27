import Head from 'next/head';
import Layout from '../components/Layout';

export default function REContracts() {
    return (
        <>
            <Head>
                <title>R/E Contracts Form - OnDrive Realty</title>
                <meta name="description" content="Access essential real estate contract forms through NWMLS." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">R/E CONTRACTS FORM</h1>
                            <p className="text-xl text-gray-600">
                                Access to essential real estate contract forms through our membership with NWMLS.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty offers access to essential real estate contract forms through our membership with the Northwest Multiple Listing Service (NWMLS). These forms are crucial for anyone involved in real estate transactions, ensuring that all legal and procedural requirements are met.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Real Estate Contract Forms Available</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">NWMLS Contract Forms:</span>
                                        <p className="text-gray-700">The primary forms available through One Drive Realty are those provided by the NWMLS. These include various types of real estate contracts, such as purchase and sale agreements, listing agreements, and disclosure forms.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Flat Fee Listing Contracts:</span>
                                        <p className="text-gray-700">For those who list their property with One Drive Realty under a flat fee arrangement, specific contract forms will be made available, ensuring that the transaction complies with NWMLS regulations.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance with Local and State Regulations</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">NWMLS Compliance:</span>
                                        <p className="text-gray-700">All contract forms provided through One Drive Realty are compliant with local and state regulations. As part of the NWMLS, these forms are regularly updated to reflect changes in laws and real estate practices, ensuring that all transactions are legally sound.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ease of Use</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">User-Friendly Integration:</span>
                                        <p className="text-gray-700">One Drive Realty’s IT team will integrate the NWMLS contract forms directly into your website, making them easily accessible to those who qualify. This integration simplifies the process of obtaining and completing the necessary documents.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Guidance and Support:</span>
                                        <p className="text-gray-700">We provide guidance on how to use these forms, ensuring that even those new to real estate transactions can complete them accurately and efficiently. Our team is available to assist with any questions or issues that may arise during the process.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                By offering access to NWMLS real estate contract forms, One Drive Realty ensures that our clients and agents have the tools they need to complete transactions smoothly and in full compliance with legal standards. These forms are easy to access and use, with the added assurance that they meet all required regulations.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Get Access</h2>
                            <p className="text-lg mb-6">
                                You can benefit from this opportunity by contacting us at info@onedriverealty.com
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
