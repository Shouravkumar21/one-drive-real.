import Head from 'next/head';
import Layout from '../components/Layout';

export default function MultifamilyOwners() {
    return (
        <>
            <Head>
                <title>Multifamily Owners - OnDrive Realty</title>
                <meta name="description" content="Maximize returns on your multifamily investment." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">MULTIFAMILY OWNERS</h1>
                            <p className="text-xl text-gray-600">
                                Comprehensive services to help you make the most of your multifamily investment.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Multifamily properties offer a tremendous opportunity for investors looking to achieve higher returns and long-term stability. At One Drive Realty, we provide a comprehensive suite of services designed to help you make the most of your multifamily investment, from targeted marketing to complete property management. Our expertise ensures you’ll not only attract the right buyers or tenants but also optimize your property’s profitability.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features of Our Multifamily Services:</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Targeted Marketing for Investors</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our team utilizes the powerful APS-LEADS-DFLX system to connect property owners with investors specifically interested in multifamily units. This focused outreach means you’ll be connecting with the right audience, saving time and effort while ensuring your listings attract serious buyers.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Property Management Solutions</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For investors who want hassle-free ownership, we offer full-service property management that covers everything from tenant sourcing and leasing to property maintenance and financial tracking. Our management solutions are designed to help streamline your operations, ensuring smooth day-to-day running and tenant satisfaction.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Profit Optimization Through Strategic Planning</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At One Drive Realty, we understand that profitability is key. Our detailed rent analysis and financial strategies are built to maximize the revenue potential of your multifamily property, helping you boost returns without added stress.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                            <p className="text-lg mb-6">
                                Whether you're just starting in multifamily investing or looking to improve your current returns, we're here to help. Contact us at info@onedriverealty.com to learn more about how we can partner with you to make your multifamily investments successful!
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
