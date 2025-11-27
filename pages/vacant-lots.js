import Head from 'next/head';
import Layout from '../components/Layout';

export default function VacantLots() {
    return (
        <>
            <Head>
                <title>Vacant Lots - OnDrive Realty</title>
                <meta name="description" content="Connect vacant lots with the right buyers." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">VACANT LOTS</h1>
                            <p className="text-xl text-gray-600">
                                Maximize the value and future potential of your vacant land.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Vacant lots hold immense potential for development, and at One Drive Realty, we specialize in connecting these properties with the right buyers. Whether your vacant land is intended for residential, commercial, or agricultural use, we provide the expertise and support to help property owners sell or develop their land effectively. Our services are tailored to ensure that your lot attracts the attention of serious developers and investors, maximizing its value and future potential.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Aspects of Our Vacant Lot Services:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Development and Investment Leads via APS-LEADS-DFLX:</span>
                                        <p className="text-gray-700">One of the most powerful tools we offer to vacant lot owners is access to APS-LEADS-DFLX, an advanced platform that connects you with developers and investors specifically interested in new projects. This system ensures that your lot gains visibility among those actively seeking to purchase and develop land, making it easier to find the right buyer who understands the property's potential.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Zoning and Land Use Consulting:</span>
                                        <p className="text-gray-700">Understanding zoning regulations and land use possibilities is crucial when selling or developing a vacant lot. Our team of experts provides consulting services to help both sellers and buyers understand the full potential of the property. We offer guidance on local zoning laws, restrictions, and opportunities for development, ensuring a smooth transaction and helping buyers see the value in the lot.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Strategic Marketing Plans:</span>
                                        <p className="text-gray-700">Vacant lots require specialized marketing to reach the right audience. At One Drive Realty, we craft strategic marketing plans that target developers and investors who are actively seeking new opportunities. Our marketing efforts are designed to highlight the lot’s potential, whether for residential homes, commercial buildings, or agricultural projects. We focus on presenting your land in a way that resonates with serious buyers, ensuring a faster and more profitable sale.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Sell or Develop Your Lot</h2>
                            <p className="text-lg mb-6">
                                For property owners looking to sell or develop their vacant lots, One Drive Realty is your trusted partner. Contact us at info@onedriverealty.com to learn more about our comprehensive services and how we can help you make the most of your land. Whether you're ready to sell or exploring development options, we're here to guide you every step of the way.
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
