import Head from 'next/head';
import Layout from '../components/Layout';

export default function MultifamilyBuild() {
    return (
        <>
            <Head>
                <title>Multifamily Build to Suit - OnDrive Realty</title>
                <meta name="description" content="Build to Suit solutions for multifamily properties." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">MULTIFAMILY BUILD TO SUIT</h1>
                            <p className="text-xl text-gray-600">
                                Acquisition, sale, and development of multi-family properties.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we specialize in the acquisition, sale, and development of multi-family properties through our Build to Suit program. Whether you’re an investor looking to expand your portfolio or a developer seeking the ideal plot for your next project, we provide the expertise needed to navigate the complexities of multi-family real estate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Multi-family units, such as duplexes, town homes, and apartment buildings, offer unique investment opportunities, allowing for multiple income streams from a single property.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Property Sourcing</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We assist clients in identifying and acquiring the most lucrative multi-family properties in prime locations. Our team leverages extensive market knowledge and industry connections to source properties that align with your investment goals, ensuring you have access to the best opportunities available.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Investment Strategy</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our tailored advice is designed to maximize returns on your multi-family investments. Our services include:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Renovations:</span>
                                        <p className="text-gray-700">Strategic guidance on cost-effective improvements to enhance property value and attract quality tenants.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Tenant Management:</span>
                                        <p className="text-gray-700">Effective strategies for tenant relations and retention, helping to ensure stable income and minimize vacancies.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Market Positioning:</span>
                                        <p className="text-gray-700">Insights into optimal rental rates and occupancy strategies that help your properties stand out in a competitive market.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Development Support</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For those looking to build multi-family units from the ground up, our Build to Suit program offers comprehensive support throughout every stage of development. Our services encompass:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Land Acquisition:</span>
                                        <p className="text-gray-700">Expert assistance in identifying and securing the right land for your multi-family development project.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Project Management:</span>
                                        <p className="text-gray-700">Coordination of all phases of development, from initial planning and permitting to construction oversight and final project completion.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Regulatory Guidance:</span>
                                        <p className="text-gray-700">Expertise in navigating local zoning laws and regulations to ensure compliance and facilitate a smooth development process.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Partner with One Drive Realty</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With our extensive experience in multi-family real estate and a commitment to your success, One Drive Realty is your trusted partner for Build to Suit projects. We are dedicated to helping you create properties that meet your specific needs and goals.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to explore the possibilities of multi-family development or need assistance with your next project, contact us today.
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
