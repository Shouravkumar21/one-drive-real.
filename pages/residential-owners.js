import Head from 'next/head';
import Layout from '../components/Layout';

export default function ResidentialOwners() {
    return (
        <>
            <Head>
                <title>Residential Owners - OnDrive Realty</title>
                <meta name="description" content="Personalized services for homeowners looking to sell or lease." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">RESIDENTIAL OWNERS</h1>
                            <p className="text-xl text-gray-600">
                                Personalized, innovative services that make a significant impact.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For homeowners looking to sell or lease residential properties, One Drive Realty is committed to delivering personalized, innovative services that make a significant impact. Our approach combines cutting-edge technology with strategic marketing to ensure your property stands out in the competitive real estate market.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights of Our Residential Listings Services:</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Enhanced Digital Presence</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Utilizing the APS-LEADS-DFLX system, we enhance your property's visibility by reaching a broad and targeted audience across multiple platforms. This advanced lead generation tool connects your listing with potential buyers and tenants who are actively searching for properties like yours, ensuring that your home garners the attention it deserves.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Property Staging and Photography</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To present your home in its best light, we offer professional staging and high-quality photography services. Our expert staging helps highlight your property's best features, creating an inviting and appealing atmosphere that attracts buyers and renters. Coupled with stunning imagery, your listing will capture the interest of potential clients and stand out in a crowded market.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Exclusive Residential Leads</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                With APS-LEADS-DFLX, you gain access to a curated list of high-quality leads specifically matched to the type and price point of your home. This targeted approach increases the likelihood of a successful sale or lease by connecting you with serious prospects who are genuinely interested in your property.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Achieve Your Goals</h2>
                            <p className="text-lg mb-6">
                                At One Drive Realty, we are dedicated to making your property sale or lease process as smooth and successful as possible. Reach out to us at info@onedriverealty.com to learn how our innovative solutions can help you achieve your real estate goals.
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
