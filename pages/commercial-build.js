import Head from 'next/head';
import Layout from '../components/Layout';

export default function CommercialBuild() {
    return (
        <>
            <Head>
                <title>Commercial Build to Suit - OnDrive Realty</title>
                <meta name="description" content="Tailored commercial Build to Suit services." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">COMMERCIAL BUILD TO SUIT</h1>
                            <p className="text-xl text-gray-600">
                                Tailored services for businesses and investors in the commercial real estate market.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, our Built to Suit services are tailored to meet the specific needs of businesses and investors in the commercial real estate market. Whether you’re seeking retail spaces, office buildings, or industrial sites, we have the expertise to help you design and develop a property that perfectly aligns with your vision.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Market Research</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We provide comprehensive insights into current commercial real estate trends, helping you make informed decisions about prime locations for your business or investment. Our detailed market analysis identifies opportunities that suit your specific requirements.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Development Projects</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For those looking to develop new commercial properties, we assist in every aspect of the process:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Site Selection:</span>
                                        <p className="text-gray-700">We help you find the ideal land for your commercial project, considering factors such as market demand and accessibility.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Project Management:</span>
                                        <p className="text-gray-700">Our team ensures smooth construction by overseeing all phases of development, including zoning compliance and regulatory approvals.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Leasing and Sales</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When it’s time to lease or sell your commercial property, we offer strategic support:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Property Listing and Marketing:</span>
                                        <p className="text-gray-700">We assist property owners in effectively listing and marketing their commercial spaces to attract potential tenants or buyers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Negotiation and Closing:</span>
                                        <p className="text-gray-700">Our experienced team negotiates on your behalf to secure the best terms and facilitate a seamless transaction.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our commitment to providing tailored services and deep market knowledge makes One Drive Realty the ideal partner for your Built to Suit commercial real estate needs. We are dedicated to helping you create a property that fits your operational goals and maximizes your investment potential.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to explore how our Built to Suit services can bring your commercial property vision to life, contact us today. Let’s work together to create the perfect space for your business!
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
