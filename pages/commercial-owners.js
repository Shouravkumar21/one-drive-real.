import Head from 'next/head';
import Layout from '../components/Layout';

export default function CommercialOwners() {
    return (
        <>
            <Head>
                <title>Commercial Owners - OnDrive Realty</title>
                <meta name="description" content="Specialized services for commercial property owners." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">COMMERCIAL OWNERS</h1>
                            <p className="text-xl text-gray-600">
                                Strategically positioning your commercial property to maximize its value.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Commercial real estate is an ever-evolving and competitive sector, and at One Drive Realty, we excel at helping property owners navigate it successfully. Whether you're looking to sell, lease, or attract new tenants, our specialized services ensure that your commercial property is strategically positioned to maximize its value. Our focus is on connecting property owners with businesses and investors who are actively seeking prime locations to expand or establish their operations.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Features of Our Commercial Property Listings:</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">APS-LEADS-DFLX for Business Inquiries</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We utilize the powerful APS-LEADS-DFLX platform to provide property owners with direct access to qualified lessees or buyers. This technology-driven system connects you with serious business inquiries, ensuring that your property is seen by those actively seeking commercial spaces. It’s a targeted approach that saves time and increases the likelihood of securing the right tenant or buyer for your property.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Business-centric Marketing Strategies</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our marketing strategies are tailored specifically for commercial properties. We leverage our extensive business networks, industry connections, and proven marketing techniques to position your property in front of the right audience. This business-focused approach ensures your property gets the attention of potential investors and companies, optimizing your chances of a successful transaction.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">In-depth Market Knowledge</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At One Drive Realty, our agents bring a wealth of local and regional market knowledge to the table. We provide insightful guidance on market trends, allowing you to set competitive pricing and capitalize on emerging opportunities. Whether you’re dealing with office spaces, retail locations, or industrial properties, our expertise ensures you get the best possible returns on your commercial real estate investment.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Elevate Your Property</h2>
                            <p className="text-lg mb-6">
                                If you're ready to elevate your commercial property to its full potential, reach out to us at info@onedriverealty.com Our team is here to guide you every step of the way, ensuring a seamless and profitable experience in the commercial real estate market.
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
