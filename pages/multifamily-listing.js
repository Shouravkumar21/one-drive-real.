import Head from 'next/head';
import Layout from '../components/Layout';

export default function MultifamilyListing() {
    return (
        <>
            <Head>
                <title>Multifamily Listings - OnDrive Realty</title>
                <meta name="description" content="List your multifamily property with One Drive Realty for maximum returns." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">MULTIFAMILY LISTINGS</h1>
                            <p className="text-xl text-gray-600">
                                Comprehensive solutions for property owners looking to maximize their returns.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty specializes in listing multifamily properties, providing comprehensive solutions for property owners looking to maximize their returns. Whether you own duplexes, triplexes, or apartment buildings, multifamily properties offer excellent opportunities for long-term rental income. When you list your multifamily property with us, we ensure it receives the exposure needed to attract serious investors and buyers.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits of Listing Multifamily Properties:</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Investor Network</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>Targeted Connections:</strong> We connect you with a robust network of local and international investors actively seeking multifamily assets. Our extensive reach increases your chances of finding the right buyer quickly.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Property Valuation Services</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>Competitive Pricing:</strong> Our team conducts thorough market analyses to help you set a competitive and accurate listing price. This strategic approach ensures that your property attracts serious offers while maximizing its value.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Marketing and Advertising Support</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>Advanced Techniques:</strong> We utilize innovative property marketing strategies, including virtual tours, 3D walkthroughs, and high-visibility online listings. This ensures that your property effectively reaches its target audience and stands out in a competitive market.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Tenant Information Inclusion</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Comprehensive Listings:</span>
                                        <p className="text-gray-700">Our listing services include detailed tenant data, potential rental income, and maintenance history. Providing this information helps potential buyers make informed decisions and enhances the attractiveness of your property.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you choose One Drive Realty to list your multifamily property, you gain a dedicated partner committed to your success. Our expertise and tailored marketing strategies ensure that your property receives the attention it deserves, leading to a successful sale.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">List Your Property</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to list your multifamily property or have any questions about the process, contact us today. Let’s work together to achieve your real estate goals!
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
