import Head from 'next/head';
import Layout from '../components/Layout';

export default function BranchOffices() {
    return (
        <>
            <Head>
                <title>Branch Offices - OnDrive Realty</title>
                <meta name="description" content="Our centralized approach to serving clients nationwide and globally." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">BRANCH OFFICES</h1>
                            <p className="text-xl text-gray-600">
                                Serving clients nationwide and globally with efficiency and consistency.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we operate differently from traditional real estate firms. Instead of multiple branch offices, we manage all our operations from our main office located in Washington State. This centralized approach allows us to serve clients nationwide and globally with efficiency and consistency.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nationwide and Global Presence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While we do not have physical branch offices, our services are available across the United States and internationally. This is made possible through our advanced digital platform, which connects clients and agents seamlessly, regardless of location.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Support Agents</h2>
                            <p className="text-gray-700 mb-4">Even without physical branch offices, One Drive Realty provides comprehensive support to our agents through the following:</p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Virtual Office Infrastructure:</span>
                                        <p className="text-gray-700">Agents have access to a full suite of virtual tools that allow them to conduct business from anywhere. This includes CRM systems, marketing platforms, and communication tools.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Centralized Resources:</span>
                                        <p className="text-gray-700">All resources, including training, marketing materials, and customer support, are centrally managed from our Washington State office. This ensures that agents receive uniform support and have access to the same high-quality resources regardless of where they are located.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Nationwide and Global Network:</span>
                                        <p className="text-gray-700">Agents benefit from being part of a global network. This allows them to collaborate with other agents, share leads, and expand their reach far beyond their local markets.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Online Training and Mentorship:</span>
                                        <p className="text-gray-700">We offer extensive online training programs and mentorship from experienced professionals, ensuring that agents are equipped with the knowledge and skills they need to succeed.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Interaction</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a client visits our website and clicks on any location on the national or global map, they are directed to our main office in Washington State. Our team there is ready to handle inquiries and provide services to clients regardless of their location. As we grow and recruit agents outside of Washington State, this structure may evolve to include more localized support.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                            <p className="text-lg mb-6">
                                In case of any queries, reach out to us at info@onedriverealty.com
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
