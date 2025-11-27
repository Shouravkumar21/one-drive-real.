import Head from 'next/head';
import Layout from '../components/Layout';

export default function DevelopmentBuild() {
    return (
        <>
            <Head>
                <title>Development Build to Suit - OnDrive Realty</title>
                <meta name="description" content="Expert real estate development and Build to Suit services." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">DEVELOPMENT</h1>
                            <p className="text-xl text-gray-600">
                                Comprehensive development services for residential and commercial projects.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we bring extensive experience in real estate development, spanning both residential and commercial projects. Our Built to Suit services are designed to support investors, developers, and contractors, ensuring that your projects are completed on time and within budget.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Site Selection</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We assist in identifying the most profitable locations for new developments, taking into account factors such as market demand, accessibility, and growth potential. Our expert team conducts thorough research to help you make informed decisions that maximize your investment.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Project Planning</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our comprehensive support covers every phase of your development project:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Design and Permitting:</span>
                                        <p className="text-gray-700">We collaborate with architects and planners to create designs that meet your specifications and navigate the permitting process efficiently.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Construction Management:</span>
                                        <p className="text-gray-700">Our team oversees the construction phase, ensuring that all work is completed to high standards and within the established timeline.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Marketing & Sales</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Once your development is complete, we help you effectively market and sell the properties:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Strategic Marketing Campaigns:</span>
                                        <p className="text-gray-700">Utilizing our extensive network and innovative digital tools, we create targeted marketing strategies to attract potential buyers or tenants.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Sales Support:</span>
                                        <p className="text-gray-700">Our experienced team provides ongoing support throughout the sales process, from negotiations to closing, ensuring a smooth transaction.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our commitment to quality and client satisfaction makes One Drive Realty the ideal partner for your Built to Suit development needs. We work closely with you to turn your vision into reality, creating spaces that meet your specific goals.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Build Something Exceptional</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to explore how our Built to Suit development services can benefit your project, contact us today. Let’s work together to build something exceptional!
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
