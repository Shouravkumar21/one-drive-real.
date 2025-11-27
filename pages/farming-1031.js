import Head from 'next/head';
import Layout from '../components/Layout';

export default function Farming1031() {
    return (
        <>
            <Head>
                <title>Farming 1031 Exchange - OnDrive Realty</title>
                <meta name="description" content="Defer taxes and reinvest in agricultural land with 1031 Exchange." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">FARMING 1031 EXCHANGE</h1>
                            <p className="text-xl text-gray-600">
                                Specialized assistance for farmers and agricultural landowners.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Agricultural land, including crop and dairy farms, offers excellent opportunities for investors to utilize the 1031 Exchange, allowing them to defer taxes and reinvest in new farmland or other income-generating real estate. One Drive Realty specializes in assisting farmers and agricultural landowners with this process, ensuring they make the most of their investments while adhering to IRS regulations.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Aspects of Farming 1031 Exchanges:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Agricultural Investment Flexibility:</span>
                                        <p className="text-gray-700">Farming properties can be exchanged for other like-kind agricultural land or even different types of real estate, such as commercial or residential investment properties. This flexibility enables you to diversify your portfolio and explore various investment opportunities that align with your financial goals.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Deferring Large Capital Gains Taxes:</span>
                                        <p className="text-gray-700">As land values rise, the potential for significant capital gains taxes increases. By utilizing a 1031 Exchange, farming property owners can defer these taxes and reinvest the full amount into new opportunities. This strategy allows you to leverage the increased value of your land to acquire more valuable or strategically advantageous properties.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Expert Guidance:</span>
                                        <p className="text-gray-700">At One Drive Realty, we offer detailed consulting on the nuances of exchanging agricultural properties. Our team ensures that you navigate the complexities of federal tax codes and achieve a seamless transition to new investments. We provide expert advice to help you understand and comply with all requirements, making the process as smooth as possible.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Maximize Your Investment</h2>
                            <p className="text-lg mb-6">
                                If you're considering a 1031 Exchange for your agricultural land and want to explore how this strategy can benefit you, contact One Drive Realty today at info@Onedriverealty.com Our experienced professionals are here to provide the guidance and support you need to maximize your investment potential and achieve your financial objectives.
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
