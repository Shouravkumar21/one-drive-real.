import Head from 'next/head';
import Layout from '../components/Layout';

export default function OneDriveListings() {
    return (
        <>
            <Head>
                <title>1 Drive Listings - OnDrive Realty</title>
                <meta name="description" content="Exclusive 1 Drive Listing service for advanced property management." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">1 DRIVE LISTINGS</h1>
                            <p className="text-xl text-gray-600">
                                Advanced platform for listing properties with ease and efficiency.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty's exclusive 1 Drive Listing service offers an advanced platform for listing properties, ensuring a user-friendly experience for both sellers and buyers. This service combines advanced technology with streamlined processes, making it easier than ever to manage your property listings.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of the 1 Drive Listing:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Easy Property Management:</span>
                                        <p className="text-gray-700">Upload property details, photos, and documents in one place, making it easy to manage your listing.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Enhanced Visibility:</span>
                                        <p className="text-gray-700">Your property gets priority placement on our platform, ensuring it stands out to potential buyers and investors.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Integrated Marketing:</span>
                                        <p className="text-gray-700">Our system automatically connects your listing to our marketing channels, including email campaigns, social media promotions, and targeted digital ads.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">24/7 Access:</span>
                                        <p className="text-gray-700">Manage and update your listing anytime with our intuitive online platform, providing maximum convenience and flexibility.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                This robust platform helps you list your property quickly and efficiently while ensuring that it gets maximum exposure to qualified buyers.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
                            <p className="text-lg mb-6">
                                Experience the ease of listing with 1 Drive Listings. Contact us at info@onedriverealty.com to learn more.
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
