import Head from 'next/head';
import Layout from '../components/Layout';

export default function ApiLeadsDflx() {
    return (
        <>
            <Head>
                <title>API-LEADS-DFLX - OnDrive Realty</title>
                <meta name="description" content="Curated high-quality leads for real estate professionals." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">API-LEADS-DFLX</h1>
                            <p className="text-xl text-gray-600">
                                A powerful tool for agents looking to connect with potential clients efficiently.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The API-LEADS-DFLX software offered by One Drive Realty is designed to provide real estate professionals with a curated list of high-quality leads. While it does not offer financing options directly, the platform is an invaluable tool for agents looking to connect with potential clients efficiently.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Here’s how the process works:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Lead Generation:</span>
                                        <p className="text-gray-700">The API-LEADS-DFLX software generates and delivers leads tailored to your specific market and client preferences. This allows you to focus on engaging with prospects who are more likely to convert into successful transactions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Customization:</span>
                                        <p className="text-gray-700">The software offers customization options, enabling you to filter leads based on various criteria, such as property type, location, and client interest.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Integration:</span>
                                        <p className="text-gray-700">DFLX seamlessly integrates with your existing CRM systems, ensuring that all leads are captured and managed in one place for easy follow-up.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                By utilizing API-LEADS-DFLX, agents can save time, increase efficiency, and improve their chances of closing deals by targeting the right clients with the right properties. While financing options are not part of this software, its powerful lead generation capabilities are a significant asset for any real estate professional looking to grow their business.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Grow Your Business</h2>
                            <p className="text-lg mb-6">
                                And if you want to make the most of it, email at info@onedriverealty.com will open your doors to avail it.
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
