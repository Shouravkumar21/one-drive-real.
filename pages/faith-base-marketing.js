import Head from 'next/head';
import Layout from '../components/Layout';

export default function FaithBaseMarketing() {
    return (
        <>
            <Head>
                <title>Faith Base Marketing - OnDrive Realty</title>
                <meta name="description" content="Our mission statement and faith-based marketing approach." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">FAITH BASE MARKETING</h1>
                            <p className="text-xl text-gray-600">
                                Building our mission with purpose and integrity.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
                            <div className="py-16">
                                <div className="text-6xl mb-4">🏢</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission Statement in Process</h2>
                                <p className="text-xl text-gray-600 mb-6">
                                    We are currently developing our comprehensive Faith Base Marketing mission statement.
                                </p>
                                <p className="text-gray-700">
                                    Our mission will reflect our commitment to ethical real estate practices rooted in faith-based principles, serving our community with integrity and compassion.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Stay Tuned</h2>
                            <p className="text-lg mb-6">
                                For updates on our Faith Base Marketing initiative, contact us at info@onedriverealty.com
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
