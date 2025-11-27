import Head from 'next/head';
import Layout from '../components/Layout';

export default function Business() {
    return (
        <>
            <Head>
                <title>Business Real Estate - OnDrive Realty</title>
                <meta name="description" content="Halal funding solutions for business real estate investments." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">BUSINESS</h1>
                            <p className="text-xl text-gray-600">
                                Ethical and Shariah-compliant solutions for businesses investing in real estate.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we are committed to providing ethical and Shariah-compliant solutions for businesses looking to invest in real estate. Our Halal Funding services offer business owners and investors the ability to grow their enterprises while adhering to Islamic financial principles. Whether you're acquiring commercial properties or expanding your portfolio, our Halal funding models ensure that your investments are free from interest (riba) and speculative risks, promoting transparency and trust.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Halal Funding with One Drive Realty?</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Shariah-Compliant Financial Solutions:</span>
                                        <p className="text-gray-700">We specialize in providing Halal financing models such as Musharakah (profit-sharing partnerships) and Ijarah (lease-to-own agreements). These financing options are designed to align with the principles of Islamic finance, offering businesses a way to invest without compromising their values.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Tailored Commercial Real Estate Services:</span>
                                        <p className="text-gray-700">At One Drive Realty, we understand the complexities of commercial real estate transactions. Whether you need retail space, office buildings, industrial properties, or land for business development, our Halal funding options can be customized to suit the unique needs of your business.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Ethical Growth Opportunities:</span>
                                        <p className="text-gray-700">With Halal funding, business owners can confidently pursue real estate investments that align with their religious and ethical values. Our approach ensures that your commercial real estate dealings are conducted with full transparency, helping you build a sustainable and morally sound business.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits of Our Halal Funding Services</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Interest-Free Financing:</span>
                                        <p className="text-gray-700">Our Halal funding models eliminate interest, ensuring all transactions comply with Islamic law and offer ethical growth opportunities for business owners.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Customizable Investment Solutions:</span>
                                        <p className="text-gray-700">We tailor our services to meet the specific needs of each business, offering flexible financing models that best suit your operational goals, whether you’re looking for long-term leases or shared ownership.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Long-Term Investment Stability:</span>
                                        <p className="text-gray-700">Commercial real estate offers stable, long-term returns, making it an ideal investment for businesses. Our Halal funding solutions ensure that your real estate investments align with both your financial and ethical objectives.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Guidance from Experienced Professionals:</span>
                                        <p className="text-gray-700">One Drive Realty offers expert consultation throughout the financing process. We ensure that every step of your commercial property acquisition is compliant with Shariah law and optimized for success.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Invest Ethically</h2>
                            <p className="text-lg mb-6">
                                Invest in real estate the ethical way with One Drive Realty. Our Halal funding solutions provide you with peace of mind, ensuring that your business can thrive while remaining true to Islamic principles.
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
