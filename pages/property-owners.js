import Head from 'next/head';
import Layout from '../components/Layout';

export default function PropertyOwners() {
    return (
        <>
            <Head>
                <title>Property Owners - OnDrive Realty</title>
                <meta name="description" content="Tailored services for property owners to maximize asset value." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">PROPERTY OWNERS</h1>
                            <p className="text-xl text-gray-600">
                                Maximize the value of your assets with efficient management and strategic marketing.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Property owners play a crucial role in the real estate market; and One Drive Realty offers tailored services that cater to their needs, whether they own residential, multifamily, commercial properties, or vacant land. Our goal is to ensure that property owners maximize the value of their assets through efficient management, strategic marketing, and detailed support. We offer exclusive access to real estate leads via our proprietary APS-LEADS-DFLX platform, which connects owners with serious buyers and investors.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services for Property Owners:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Comprehensive Market Analysis:</span>
                                        <p className="text-gray-700">We provide in-depth reports to property owners, enabling them to make informed decisions based on current market trends and projections.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">APS-LEADS-DFLX Integration:</span>
                                        <p className="text-gray-700">With this platform, property owners gain access to targeted leads that match their property type, increasing their chances of securing deals.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Property Management and Support:</span>
                                        <p className="text-gray-700">We offer resources for maintaining and enhancing property value through regular assessments and tailored marketing plans.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Level Up Your Game</h2>
                            <p className="text-lg mb-6">
                                Interested in taking your real estate game to the next level? Are you looking for expert services that integrate APS-LEADS-DFLX to generate leads for property owners, we've got you covered! Feel free to reach out at info@onedriverealty.com to get started.
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
