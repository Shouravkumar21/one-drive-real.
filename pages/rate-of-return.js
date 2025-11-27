import Head from 'next/head';
import Layout from '../components/Layout';

export default function RateOfReturn() {
    return (
        <>
            <Head>
                <title>Rate of Return - OnDrive Realty</title>
                <meta name="description" content="Maximize your investment returns with expert ROR analysis." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">RATE OF RETURN (ROR)</h1>
                            <p className="text-xl text-gray-600">
                                Measure and maximize the profitability of your real estate investments.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Rate of Return (ROR) is a critical metric in real estate investments, representing the profitability of an investment over a specific period, usually calculated annually. One Drive Realty focuses on helping clients achieve favourable ROR through strategic investments in various property types, including residential, multifamily, commercial, and vacant land.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors Influencing ROR in Real Estate:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Property Appreciation:</span>
                                        <p className="text-gray-700">As property values increase over time, the ROR rises, enhancing the profitability of the investment. One Drive Realty assists clients in identifying markets with high growth potential.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Rental Income:</span>
                                        <p className="text-gray-700">For income-generating properties like residential rentals, multifamily units, or commercial spaces, consistent rental income can significantly boost the ROR.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Cost Management:</span>
                                        <p className="text-gray-700">Operating expenses such as property taxes, insurance, and maintenance fees can impact the ROR. One Drive Realty advises clients on how to reduce these costs through efficient property management.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty helps investors monitor and improve their ROR by providing detailed analyses of market conditions, property management strategies, and potential risks.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Enhance Your Returns</h2>
                            <p className="text-lg mb-6">
                                Ready to maximize your investment returns? Contact us at info@onedriverealty.com for comprehensive ROR analysis and strategic investment guidance.
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
