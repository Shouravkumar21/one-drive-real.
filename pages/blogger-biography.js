import Head from 'next/head';
import Layout from '../components/Layout';

export default function BloggerBiography() {
    return (
        <>
            <Head>
                <title>Blogger Biography - OnDrive Realty</title>
                <meta name="description" content="Learn about our real estate bloggers and contributors." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">BLOGGER BIOGRAPHY</h1>
                            <p className="text-xl text-gray-600">
                                Meet our real estate experts and content contributors.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
                            <div className="py-16">
                                <div className="text-6xl mb-4">📝</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                                <p className="text-xl text-gray-600 mb-6">
                                    We're preparing detailed biographies of our expert contributors. Check back soon!
                                </p>
                                <p className="text-gray-700">
                                    This section will feature profiles of our experienced real estate professionals who share their insights through our blog.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                            <p className="text-lg mb-6">
                                For more information or to contribute to our blog, contact us at info@onedriverealty.com
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
