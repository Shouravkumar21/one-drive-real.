import Head from 'next/head';
import Layout from '../components/Layout';

export default function Copyright() {
    return (
        <>
            <Head>
                <title>Copyright - OnDrive Realty</title>
                <meta name="description" content="Copyright and intellectual property information for One Drive Realty." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">2024 COPYRIGHT NOTICE</h1>
                            <p className="text-xl text-gray-600">
                                © 2024 OneDriveRealty - All Rights Reserved
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Copyright Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The copyright restrictions at One Drive Realty are in place to protect the company's intellectual property and ensure that all content and images are used appropriately. Unauthorized use of these assets can result in serious legal consequences, reinforcing the importance of respecting copyright laws. One Drive Realty remains vigilant in protecting its rights to maintain the integrity and value of its content and services.
                            </p>

                            <div className="bg-gray-100 rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Protected Content Includes:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>All text, images, and multimedia content on our websites</li>
                                    <li>Company logos, trademarks, and branding materials</li>
                                    <li>Software, applications, and proprietary technology</li>
                                    <li>Marketing materials and promotional content</li>
                                    <li>Business processes and methodologies</li>
                                    <li>Educational and training materials</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Registered Names</h3>
                            <p className="text-gray-700 mb-4">
                                Copyrights and other intellectual property rights are owned by One Drive Realty and its affiliates, registered under the names of:
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <p className="text-gray-800 font-mono text-sm">
                                    One Drive Realty, 1digitalrealtor.com, 1digitalrealty.com, 1drivedata.com, 1driverealty.com, drivepixel.com, globalfaiths.net, globalfaiths.org, mlscompanies.com, onedrivedata.com, onedriverealty.com, skyperealtor.com, skyperealtors.com
                                </p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Authorized Use</h3>
                            <p className="text-gray-700 mb-4">
                                Users are allowed to view the contents of the website, cite the contents by printing, downloading to hard disk, and distributing to others for non-commercial purposes only, provided that proper attribution is given to One Drive Realty.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Prohibited Uses</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                <li>Content may not be used for sale or distribution for profit</li>
                                <li>Content may not be edited or included in any other publication or website without written permission</li>
                                <li>Trademarks and logos may not be used without explicit authorization</li>
                                <li>Proprietary software and technology may not be reverse-engineered or copied</li>
                            </ul>

                            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                                <p className="text-red-800 font-bold">
                                    ⚠️ Legal Notice: Unauthorized use of copyrighted material may result in civil and criminal penalties, including statutory damages and attorney's fees.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Questions About Copyright?</h2>
                            <p className="text-lg mb-6">
                                For permissions, licensing inquiries, or copyright concerns, contact us at info@onedriverealty.com
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
