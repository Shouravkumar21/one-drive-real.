import Head from 'next/head';
import Layout from '../components/Layout';

export default function BusinessListing() {
    return (
        <>
            <Head>
                <title>Business Listings - OnDrive Realty</title>
                <meta name="description" content="Strategic approach to selling business properties." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">BUSINESS</h1>
                            <p className="text-xl text-gray-600">
                                Navigate the complexities of commercial real estate sales with ease.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Owning and selling business properties requires a strategic approach that not only understands market trends but also caters to the specific needs of buyers. At One Drive Realty, we are dedicated to helping business owners navigate the complexities of commercial real estate sales. With our innovative APS-LEADS-DFLX platform, we ensure that your property reaches a pool of qualified and serious buyers who are actively looking for commercial spaces. Our approach is designed to maximize visibility and facilitate seamless transactions for business property owners.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Business Property Services Include:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Lead Generation through APS-LEADS-DFLX:</span>
                                        <p className="text-gray-700">One of the most significant advantages we offer is our exclusive access to the APS-LEADS-DFLX platform. This advanced system allows your business property to receive maximum exposure to potential buyers who are specifically interested in commercial real estate. By connecting with qualified leads, we ensure that your property gets the attention it deserves, increasing the likelihood of a fast and profitable sale.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Tailored Business Property Valuation:</span>
                                        <p className="text-gray-700">Pricing your property correctly is crucial to attracting serious buyers. Our team of experienced professionals provides in-depth property assessments and valuations to ensure your business property is listed at a competitive and accurate price. We take into account market conditions, local trends, and the unique aspects of your property to deliver a valuation that reflects its true worth.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Marketing for Business Expansion:</span>
                                        <p className="text-gray-700">At One Drive Realty, we understand that many buyers are looking to expand their existing businesses. Our marketing strategies are tailored to target these potential buyers, ensuring your property is presented as an ideal solution for their expansion needs. By aligning your property with businesses that are actively seeking to grow, we increase the chances of a successful and timely sale.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Make the Most of Your Property</h2>
                            <p className="text-lg mb-6">
                                Ready to make the most of your business property? Contact us today at info@onedriverealty.com to learn more about our services and how we can help you achieve your real estate goals. Our team is here to guide you every step of the way, from listing to closing, ensuring that your property finds the right buyer at the right price.
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
