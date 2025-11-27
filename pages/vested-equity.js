import Head from 'next/head';
import Layout from '../components/Layout';

export default function VestedEquity() {
    return (
        <>
            <Head>
                <title>Vested Equity - OnDrive Realty</title>
                <meta name="description" content="Manage your vested equity effectively with 1031 Exchange." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">VESTED EQUITY</h1>
                            <p className="text-xl text-gray-600">
                                Maximize the benefits of tax deferral and optimize your investment strategy.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Vested equity refers to the portion of an investment property’s value that the owner has accumulated through appreciation or mortgage payments. In the context of a 1031 Exchange, understanding and managing vested equity is crucial for maximizing the benefits of tax deferral and optimizing your investment strategy.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations for Vested Equity in 1031 Exchanges:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Reinvestment Requirements:</span>
                                        <p className="text-gray-700">To fully defer capital gains taxes under a 1031 Exchange, property owners must reinvest the entire value of their vested equity from the sold property into a new like-kind investment. If any portion of the vested equity is not reinvested, it will be subject to taxation. This reinvestment ensures that you maintain the full tax-deferral advantage of the exchange.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Building Equity Over Time:</span>
                                        <p className="text-gray-700">The 1031 Exchange provides a unique opportunity for investors to roll over their vested equity into higher-value properties continuously. By doing so, you can leverage your equity to acquire more valuable assets, enhancing your wealth and investment portfolio while deferring taxes.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Strategic Equity Management:</span>
                                        <p className="text-gray-700">At One Drive Realty, we offer expert assistance in evaluating your vested equity and strategizing its reinvestment. Our goal is to ensure that your equity is effectively utilized in acquiring new properties that not only meet IRS requirements but also offer significant growth potential and higher returns.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Leverage Your Equity</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to leverage your vested equity through a 1031 Exchange and explore new investment opportunities, reach out to One Drive Realty at info@Onedriverealty.com Our team of professionals is here to guide you through the process, ensuring you make the most of your investment and achieve your financial goals.
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
