import Head from 'next/head';
import Layout from '../components/Layout';

export default function AgriculturalLand() {
    return (
        <>
            <Head>
                <title>Agricultural Land - OnDrive Realty</title>
                <meta name="description" content="Halal funding for agricultural land acquisitions." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">AGRICULTURAL LAND</h1>
                            <p className="text-xl text-gray-600">
                                Secure agricultural land with Halal funding that fully complies with Shariah principles.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Investing in agricultural land offers significant long-term potential, and at One Drive Realty, we are dedicated to providing Halal funding for buyers interested in acquiring farmland. Whether your goal is personal use or a commercial farming venture, we ensure that you can secure agricultural land in a manner that fully complies with Shariah principles.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethical Financing Solutions</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We offer a range of Halal-compliant financing models designed to facilitate your land acquisition while avoiding interest-based transactions. Our options include:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Musharakah (Equity Sharing):</span>
                                        <p className="text-gray-700">This partnership model allows you to co-invest in the agricultural land alongside One Drive Realty. Both parties share in the profits and responsibilities, promoting an ethical investment approach that aligns with Islamic finance principles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Murabaha:</span>
                                        <p className="text-gray-700">This cost-plus financing arrangement enables you to purchase agricultural land at a pre-agreed price, including a profit margin for the lender. The transparency of this model ensures that all transactions are clear and fair, adhering to Shariah requirements.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Growth Opportunities</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Agricultural land is versatile and can be developed for various purposes, such as crop farming, livestock raising, and agro-based industries. This flexibility offers solid returns for investors looking to diversify their portfolios. With the increasing demand for sustainable and locally sourced food, the potential for growth in this sector is significant, making it a timely investment.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shariah-Compliant Support</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we collaborate with financing partners who specialize in Halal funding solutions. This ensures that all aspects of your land purchase are conducted ethically and in accordance with Islamic law. Our team is committed to guiding you through the financing process, ensuring compliance at every step.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                By choosing One Drive Realty, you can confidently invest in agricultural land, knowing that your financing adheres to Islamic principles. Our dedicated professionals are here to support you in making informed investment decisions that align with your values.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Invest Today</h2>
                            <p className="text-lg mb-6">
                                If you're ready to explore the opportunities available in agricultural land through Halal funding, contact us today.
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
