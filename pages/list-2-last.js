import Head from 'next/head';
import Layout from '../components/Layout';

export default function List2Last() {
    return (
        <>
            <Head>
                <title>CYPS List 2 Last - OnDrive Realty</title>
                <meta name="description" content="Simplifying your property search with precision through CYPS LIST." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">CYPS LIST 2 LAST</h1>
                            <p className="text-xl text-gray-600">
                                Simplifying Your Property Search with Precision.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we know that real estate success comes from precision, foresight, and the right partnerships. Whether you're looking for an ideal property to invest in, or you need a customized space to meet the unique needs of your business, our CYPS LIST and Build-to-Suit programs offer tailor-made solutions that can help you realize your real estate goals.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">CYPS LIST: Simplifying Your Property Search with Precision</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The CYPS LIST program is designed to take the hassle out of the property search process. We understand that searching for the perfect property can be overwhelming, especially with so many listings and options on the market. That's why CYPS LIST focuses on simplifying this process by providing a curated list of properties that match your exact requirements.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Through this service, we conduct in-depth research and analysis based on your specific preferences, investment goals, and budget. Whether you’re searching for a residential property in a desirable neighbourhood or a commercial space with high foot traffic, CYPS LIST narrows down the options, offering you only the most relevant properties that fit your criteria.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why CYPS LIST Works for You:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Tailored to Your Needs:</span>
                                        <p className="text-gray-700">No more time-consuming searches. Our expert team handles the legwork, reviewing properties and presenting you with options that align with your specifications.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Efficient and Focused:</span>
                                        <p className="text-gray-700">We streamline the property search process, allowing you to focus on making informed decisions, not scrolling through endless listings.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Diverse Property Options:</span>
                                        <p className="text-gray-700">Whether you're seeking residential, multifamily, commercial, or vacant land, we ensure a comprehensive selection is made available to you.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing the CYPS LIST program means that your property search becomes personalized, efficient, and results-driven.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
                            <p className="text-lg mb-6">
                                Contact us at info@onedriverealty.com to get started with CYPS LIST, and let us help you find the perfect property that fits your needs and goals.
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
