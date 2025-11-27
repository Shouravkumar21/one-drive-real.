import Head from 'next/head';
import Layout from '../components/Layout';

export default function DairyFarming() {
    return (
        <>
            <Head>
                <title>Dairy Farming - OnDrive Realty</title>
                <meta name="description" content="Halal funding options for dairy farming investments." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">DAIRY FARMING</h1>
                            <p className="text-xl text-gray-600">
                                Sustainable agricultural investment opportunities aligned with ethical and religious principles.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dairy farming presents unique opportunities for sustainable agricultural investment, particularly for those who seek to align their business practices with ethical and religious principles. At One Drive Realty, we are committed to supporting Halal funding options for individuals and businesses interested in purchasing dairy farms, ensuring that your investments adhere to Islamic laws.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shariah-Compliant Financing Models</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our financing solutions are designed specifically for the agricultural sector and include:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Profit-Sharing Agreements (Mudarabah):</span>
                                        <p className="text-gray-700">This model allows investors to provide capital for the dairy farm while sharing in the profits. This partnership structure fosters a collaborative approach, aligning the interests of both the investor and the farm operator while adhering to Shariah principles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Lease-to-Own (Ijarah):</span>
                                        <p className="text-gray-700">This financing option enables you to lease the dairy farm with the intention of ownership. Throughout the lease period, you can operate the farm, with a portion of the lease payments contributing toward eventual ownership. This method ensures compliance with Islamic finance regulations while providing flexibility for your investment.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agricultural Investment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dairy farming offers a stable revenue stream, making it an attractive investment opportunity. With our Shariah-compliant funding, you can establish and operate a profitable business that aligns with your values. The dairy industry not only meets the growing demand for dairy products but also offers the potential for expansion through innovative practices and diversification.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Practices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we emphasize the importance of sustainable farming practices. We actively encourage investments in dairy farms that prioritize ethical treatment of animals, environmental stewardship, and sustainable resource management. By investing in farms that adhere to these standards, you contribute to a healthier planet and a more responsible agricultural sector.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                With our Halal funding options, you can confidently grow your dairy farming business while remaining compliant with your religious beliefs. Our team of experts is here to guide you through every step of the investment process, ensuring that your venture aligns with your ethical standards.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                            <p className="text-lg mb-6">
                                If you’re interested in exploring how Halal funding can facilitate your investment in dairy farming, contact us today.
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
