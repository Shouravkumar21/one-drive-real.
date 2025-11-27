import Head from 'next/head';
import Layout from '../components/Layout';

export default function InvestWithUs() {
    return (
        <>
            <Head>
                <title>Invest With Us - OnDrive Realty</title>
                <meta name="description" content="Explore diverse investment opportunities with One Drive Realty." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">INVEST WITH US</h1>
                            <p className="text-xl text-gray-600">
                                Unlock a world of opportunities in real estate and beyond.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Invest with Us at One Drive Realty and unlock a world of opportunities in real estate and beyond. Here’s why you should consider partnering with us:
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diverse Investment Opportunities</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Real Estate:</span>
                                        <p className="text-gray-700">Explore a range of investment options in residential, commercial, and industrial properties. Whether you’re interested in developing new projects or acquiring existing assets, we offer tailored solutions to meet your investment goals.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Agricultural Ventures:</span>
                                        <p className="text-gray-700">Invest in crop and livestock farming with access to expert guidance and resources. Our network connects you with specialists and provides the tools needed for successful agricultural investments.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Professional Support:</span>
                                        <p className="text-gray-700">Our team of experts offers personalized support throughout your investment journey. From initial planning to execution, we ensure that you have the knowledge and resources to make informed decisions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Market Insights:</span>
                                        <p className="text-gray-700">Stay ahead with our in-depth market analysis and trends. We provide valuable insights to help you identify profitable opportunities and manage your investments effectively.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Flexible Investment Plans</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Customized Solutions:</span>
                                        <p className="text-gray-700">We understand that each investor has unique needs. Our flexible investment plans are designed to cater to your specific requirements, ensuring that your investment strategy aligns with your financial goals.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethical Practices</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Transparency:</span>
                                        <p className="text-gray-700">We prioritize transparency in all our dealings, providing clear and honest information about investment opportunities and potential risks.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Compliance:</span>
                                        <p className="text-gray-700">Our practices adhere to industry standards and ethical guidelines, ensuring that your investments are handled with integrity and professionalism.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Long-Term Growth</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Sustainable Investments:</span>
                                        <p className="text-gray-700">We focus on investments that offer long-term growth and stability. Our strategies are designed to help you build wealth and achieve sustainable returns over time.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                            <p className="text-lg mb-6">
                                Investing with One Drive Realty means partnering with a trusted team dedicated to your success. Contact us today to explore investment opportunities and take the first step towards achieving your financial objectives.
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
