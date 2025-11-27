import Head from 'next/head';
import Layout from '../components/Layout';

export default function Residential() {
    return (
        <>
            <Head>
                <title>Residential Properties - OnDrive Realty</title>
                <meta name="description" content="Halal funding options for residential properties." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">RESIDENTIAL</h1>
                            <p className="text-xl text-gray-600">
                                Offering a wide array of residential properties with Halal funding options.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we recognize that purchasing a residential property is one of the most significant decisions in your life. Whether you're a first-time homebuyer or looking to expand your real estate investments, we are committed to offering a wide array of residential properties that cater to your needs while strictly adhering to Islamic finance principles. We understand the importance of finding a home that not only meets your lifestyle requirements but also aligns with your religious values. That's why our Halal funding options provide a Shariah-compliant, interest-free solution, ensuring your investment remains ethical and in harmony with Islamic law.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shariah-Compliant Residential Financing Solutions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our Halal funding approach is designed to give Muslim buyers the confidence to invest in real estate without compromising their beliefs. We collaborate with financial institutions that specialize in Halal-compliant products to provide financing options that follow Islamic guidelines. Unlike conventional loans, our Halal funding solutions eliminate interest (riba) and other practices that conflict with Shariah law.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tailored Islamic Financing Options</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We provide a variety of Halal funding structures to match your financial needs. Our solutions include:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Murabaha (Cost-Plus Financing):</span>
                                        <p className="text-gray-700">In this model, the property is purchased by the financial institution and sold to you at a pre-agreed profit margin. Payments are made in instalments, with no interest involved, ensuring full transparency in the transaction.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Ijarah (Lease-to-Own):</span>
                                        <p className="text-gray-700">This structure allows you to lease the property with the option to purchase it over time. As you make lease payments, a portion goes towards eventual ownership, all while adhering to Islamic finance principles.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diverse Range of Residential Listings</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we take pride in offering a comprehensive selection of residential properties to fit every preference and budget. Whether you're seeking a cozy single-family home or a high-end luxury residence, our listings are carefully curated to offer you a wide range of choices. We understand that every buyer has unique needs, and our team works diligently to ensure you find a home that suits your lifestyle while adhering to your values.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Flexible, Ethical Payment Plans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our payment plans are designed with flexibility in mind, ensuring that you can find a financing option that works for you. Whether you opt for Murabaha or Ijarah, you can rest assured that our plans are structured to comply with Islamic law, providing peace of mind for your investment. With our Halal funding, there are no hidden fees or interest charges, allowing you to focus on securing your future home in an ethically sound manner.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose One Drive Realty?</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Islamic Finance Expertise:</span>
                                        <p className="text-gray-700">Our team has extensive experience in Shariah-compliant real estate transactions, ensuring that every step of your home-buying process is aligned with Islamic values.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Personalized Service:</span>
                                        <p className="text-gray-700">We understand the emotional and financial significance of purchasing a home. Our team is dedicated to guiding you through every stage, offering expert advice and support to make your experience seamless and stress-free.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Commitment to Ethics:</span>
                                        <p className="text-gray-700">At One Drive Realty, we are deeply committed to offering real estate solutions that are ethical, transparent, and tailored to your specific needs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Find Your Dream Home</h2>
                            <p className="text-lg mb-6">
                                Ready to find your dream home? Contact us today at info@onedriverealty.com to explore our Halal funding options and residential listings. Let us make your home-buying journey smooth, ethical, and aligned with your values.
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
