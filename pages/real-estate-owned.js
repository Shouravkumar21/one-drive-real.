import Head from 'next/head';
import Layout from '../components/Layout';

export default function RealEstateOwned() {
    return (
        <>
            <Head>
                <title>Real Estate Owned (REO) - OnDrive Realty</title>
                <meta name="description" content="Invest in discounted REO properties for maximum returns." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">REAL ESTATE OWNED (REO)</h1>
                            <p className="text-xl text-gray-600">
                                Discover discounted investment opportunities in foreclosed properties.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Real Estate Owned (REO) refers to properties owned by lenders—usually banks—after a foreclosure. These properties often present opportunities for investors looking for discounted properties that can be renovated or sold at a profit. One Drive Realty specializes in identifying REO properties, guiding investors through the purchasing process, and developing strategies to maximize the property's value.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Investing in REO Properties:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Lower Purchase Prices:</span>
                                        <p className="text-gray-700">REO properties are typically sold at discounted prices, offering potential for higher returns on investment once the property is restored.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Faster Transactions:</span>
                                        <p className="text-gray-700">Since the bank or lender owns the property, transactions can be quicker and more straightforward than purchasing from private sellers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Investment Potential:</span>
                                        <p className="text-gray-700">One Drive Realty helps investors evaluate the condition of REO properties, estimating renovation costs and potential rental or resale value.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Unlock REO Opportunities</h2>
                            <p className="text-lg mb-6">
                                Ready to explore REO investment opportunities? Contact us at info@onedriverealty.com for expert guidance on foreclosed properties.
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
