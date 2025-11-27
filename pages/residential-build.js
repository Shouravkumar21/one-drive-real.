import Head from 'next/head';
import Layout from '../components/Layout';

export default function ResidentialBuild() {
    return (
        <>
            <Head>
                <title>Residential Build to Suit - OnDrive Realty</title>
                <meta name="description" content="Custom residential Build to Suit services." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">RESIDENTIAL BUILD TO SUIT</h1>
                            <p className="text-xl text-gray-600">
                                Comprehensive Built to Suit services tailored to your unique residential needs.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we leverage years of experience in the residential real estate market to offer comprehensive Built to Suit services tailored to your unique needs. Whether you're looking to create your dream home or develop a property for investment, we provide personalized support throughout the entire process.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services Include:</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Customized Buyer Assistance</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We understand that buying a property is a significant decision. Our team is here to guide you:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Personalized Property Searches:</span>
                                        <p className="text-gray-700">We work closely with you to identify your specific requirements, curating a selection of properties that match your vision.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">In-Depth Market Analysis:</span>
                                        <p className="text-gray-700">Our thorough market insights help you make informed decisions about pricing, location, and potential investments.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Strategic Seller Representation</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When it’s time to sell, we ensure your property is positioned for success:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Targeted Marketing Strategies:</span>
                                        <p className="text-gray-700">We utilize a blend of traditional and digital marketing tools, including virtual tours and 360-degree views, to attract potential buyers and facilitate quick sales at competitive prices.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Expert Negotiation:</span>
                                        <p className="text-gray-700">Our experienced team negotiates on your behalf to secure the best terms for your sale.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">New Construction Development</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For those interested in building custom properties, we collaborate with developers to bring your vision to life:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Site Selection:</span>
                                        <p className="text-gray-700">We help identify prime locations that align with market demands and your specific goals.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Project Support:</span>
                                        <p className="text-gray-700">From planning and design to construction oversight, we assist you every step of the way to ensure your project meets your expectations and market needs.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our commitment to tailored service and client satisfaction makes One Drive Realty the ideal partner for your Built to Suit project. Whether you’re buying, selling, or developing, we’re dedicated to helping you achieve your real estate goals.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to explore how our Built to Suit services can fulfill your vision, contact us today. Let’s work together to create the perfect property for you!
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
