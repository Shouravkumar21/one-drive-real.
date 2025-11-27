import Head from 'next/head';
import Layout from '../components/Layout';

export default function BoardMembers() {
    return (
        <>
            <Head>
                <title>Board Members - OnDrive Realty</title>
                <meta name="description" content="Information about board-related matters and governance." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">BOARD MEMBERS</h1>
                            <p className="text-xl text-gray-600">
                                Information about governance and board-related matters.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we do not operate with a traditional membership structure. Our focus is on providing real estate services and solutions to property owners, investors, and tenants rather than managing memberships.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">For Board-Related Matters:</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have questions or need assistance regarding board matters or governance, these concerns are typically addressed by the relevant State Board or regulatory authority. They oversee licensing, compliance, and other regulatory aspects that may pertain to real estate practices in your area.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                For specific inquiries or issues related to board regulations or governance, please refer to the State Board or appropriate regulatory body.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
                            <p className="text-lg mb-6">
                                For general inquiries about our services, contact us at info@onedriverealty.com
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
