import Head from 'next/head';
import Layout from '../components/Layout';

export default function Multifamily() {
    return (
        <>
            <Head>
                <title>Multifamily Investments - OnDrive Realty</title>
                <meta name="description" content="Halal funding solutions for multifamily investments." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">MULTIFAMILY</h1>
                            <p className="text-xl text-gray-600">
                                Exceptional opportunity for investors looking to generate steady rental income.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Multifamily properties offer an exceptional opportunity for investors looking to generate steady rental income while building long-term wealth. At One Drive Realty, we specialize in providing Halal funding solutions for multifamily investments, ensuring that all transactions adhere to Islamic finance principles. Our goal is to help you invest in multifamily properties confidently, knowing your investment aligns with your religious and ethical values.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharia-Compliant Investment Solutions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We understand the importance of offering Shariah-compliant options for real estate investors. Our multifamily investment deals are structured to meet Islamic guidelines, utilizing equity partnerships or rent-based agreements such as Ijarah. In this model, rental payments contribute towards your ownership of the property, providing you with both an ethical and profitable investment strategy. We make it easy for you to invest without compromising on your beliefs.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consistent and Stable Revenue Streams</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Multifamily properties are ideal for generating a consistent and reliable source of income. With multiple tenants occupying a single building, you can earn steady rental income that can grow over time. This makes multifamily investments a great choice for those seeking a passive income that is not only financially rewarding but also Shariah-compliant. With proper property management, these investments can offer a stable, long-term revenue stream that fits perfectly within an Islamic financial framework.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Affordable and Ethical Ownership Models</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we provide a range of Halal financing options designed to make multifamily property ownership more affordable. One popular model is diminishing Musharakah, where ownership of the property is shared between you and the financial institution. Over time, as you make payments, your share of the property increases while the financial institution’s share diminishes. This structure ensures that no interest (riba) is involved, allowing you to invest ethically and gradually gain full ownership of the property.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose One Drive Realty for Multifamily Investments?</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Islamic Finance Expertise:</span>
                                        <p className="text-gray-700">We are dedicated to offering investment opportunities that fully comply with Islamic financial principles. Our team is experienced in structuring real estate deals that allow you to grow your wealth in an ethical, Shariah-compliant way.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Comprehensive Support:</span>
                                        <p className="text-gray-700">From finding the right multifamily property to securing Halal financing, we provide end-to-end services that make the investment process smooth and straightforward.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Ethical, Interest-Free Financing:</span>
                                        <p className="text-gray-700">Our financing solutions avoid interest and other elements that conflict with Islamic law, ensuring that your investment remains both ethical and profitable.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Invest Today</h2>
                            <p className="text-lg mb-6">
                                If you're ready to explore Shariah-compliant multifamily investment opportunities, contact us at info@onedriverealty.com
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
