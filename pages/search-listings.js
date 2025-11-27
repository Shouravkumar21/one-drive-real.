import Head from 'next/head';
import Layout from '../components/Layout';

export default function SearchListings() {
    return (
        <>
            <Head>
                <title>Search Four Listing - OnDrive Realty</title>
                <meta name="description" content="Seamlessly browse through a wide array of properties." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">SEARCH FOUR LISTING</h1>
                            <p className="text-xl text-gray-600">
                                Finding the perfect property has never been easier.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finding the perfect property has never been easier with One Drive Realty's Search Four Listing tool. Whether you're a buyer, tenant, or investor, this feature offers a seamless way to browse through a wide array of properties across various categories—residential, commercial, multi-family, and vacant land.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Search Four Listing Works:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Advanced Search Filters:</span>
                                        <p className="text-gray-700">Narrow down your options with criteria such as location, property type, price range, square footage, and more.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Real-Time Updates:</span>
                                        <p className="text-gray-700">Our listings are updated in real-time, ensuring that you always have access to the latest available properties.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Map Integration:</span>
                                        <p className="text-gray-700">View properties on a map for better understanding of neighborhood dynamics, proximity to amenities, and other key factors that influence property value.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Virtual Tours & Photos:</span>
                                        <p className="text-gray-700">Many of the properties come with high-quality images and virtual tours, allowing you to explore properties from the comfort of your home.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Direct Communication:</span>
                                        <p className="text-gray-700">Once you find a property you're interested in, you can easily contact the listing agent for more details or to schedule a viewing.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you're looking for your dream home or your next big investment, Search Four Listing makes property hunting simple and effective.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Start Your Search</h2>
                            <p className="text-lg mb-6">
                                Let One Drive Realty do this for you. Avail our services by dropping an email at info@onedriverealty.com
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
