import Head from 'next/head';
import Layout from '../components/Layout';

export default function VacantAcreage() {
    return (
        <>
            <Head>
                <title>Vacant Acreage - OnDrive Realty</title>
                <meta name="description" content="Sell or lease your vacant acreage with One Drive Realty." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">VACANT ACREAGE</h1>
                            <p className="text-xl text-gray-600">
                                Maximize the value and development potential of your land.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Vacant acreage offers endless possibilities, whether for agricultural development, residential subdivisions, or commercial projects. At One Drive Realty, we specialize in helping property owners sell or lease their vacant acreage by providing the tools, insights, and connections needed to attract serious buyers. Our tailored approach ensures that your land is marketed effectively, reaching the right audience to maximize its value and development potential.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Services for Vacant Acreage Listings:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Targeted Land Development Leads:</span>
                                        <p className="text-gray-700">Through our advanced APS-LEADS-DFLX system, we connect property owners with developers and investors who are specifically seeking large tracts of land for development. Whether the land is suitable for residential subdivisions, commercial use, or agricultural ventures, our system ensures that your property gets in front of the right buyers, saving time and effort in the sales process</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Land Use Consulting:</span>
                                        <p className="text-gray-700">Understanding the full potential of your vacant acreage is essential when selling or leasing it. One Drive Realty offers comprehensive land use consulting to help both sellers and potential buyers evaluate the best possible use of the land. Our experts provide guidance on zoning laws, potential development opportunities, and the feasibility of agricultural, residential, or commercial projects, giving buyers the confidence to move forward with their investment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Marketing to Key Investors:</span>
                                        <p className="text-gray-700">Our marketing strategies are designed to target key investors and developers who are actively searching for prime real estate opportunities. We promote your vacant acreage to a broad network of serious buyers, highlighting its unique features and potential for development. By focusing on the needs of investors and developers, we ensure your property receives maximum exposure and attracts qualified interest.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Maximize Your Land's Potential</h2>
                            <p className="text-lg mb-6">
                                Whether you're looking to sell or lease your vacant acreage, One Drive Realty offers the expertise and connections you need to achieve your goals. Contact us today at info@onedriverealty.com to learn more about our services and how we can assist in maximizing the potential of your land. Let us help you turn your vacant acreage into a valuable investment.
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
