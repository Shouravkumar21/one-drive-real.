import Head from 'next/head';
import Layout from '../components/Layout';

export default function SmsMmsBlast() {
    return (
        <>
            <Head>
                <title>SMS MMS Blast - OnDrive Realty</title>
                <meta name="description" content="Innovative SMS/MMS Blast service for maximum exposure." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">SMS MMS BLAST</h1>
                            <p className="text-xl text-gray-600">
                                Maximize exposure and immediate engagement with targeted audiences.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The APS-LEADS-DFLX platform offers an innovative SMS/MMS Blast service, enabling property owners to send mass marketing messages to potential buyers or tenants. This powerful tool ensures maximum exposure and immediate engagement with a targeted audience, making it an essential feature for real estate marketing.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features of SMS/MMS Blast:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">1.</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Wide Reach</span>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li><strong>Mass Distribution:</strong> Instantly send property listings to thousands of potential buyers or renters at once. This broad reach maximizes your property's visibility and ensures it gets in front of the right audience quickly.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">2.</span>
                                    <div>
                                        <span className="font-bold text-gray-900">High Engagement Rates</span>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li><strong>Increased Attention:</strong> SMS/MMS messages boast higher open rates than traditional emails, making it more likely that your property listing will be seen and considered. This immediate visibility is crucial in a competitive market.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">3.</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Immediate Results</span>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li><strong>Real-Time Responses:</strong> The instant nature of SMS/MMS communication allows property owners to gauge interest quickly. This means you can set up viewings or initiate negotiations in real time, streamlining the sales process and improving your chances of closing deals.</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SMS/MMS Blast service integrated within the APS-LEADS-DFLX platform revolutionizes how property owners connect with potential buyers and tenants. By leveraging the power of mass messaging, you can enhance your marketing efforts, ensure higher engagement, and achieve quicker results.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Maximize Your Exposure</h2>
                            <p className="text-lg mb-6">
                                If you're ready to maximize your property's exposure and streamline your marketing strategy, contact us today at info@onedriverealty.com. Let APS-LEADS-DFLX elevate your real estate success!
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
