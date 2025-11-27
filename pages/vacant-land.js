import Head from 'next/head';
import Layout from '../components/Layout';

export default function VacantLand() {
    return (
        <>
            <Head>
                <title>Vacant Land - OnDrive Realty</title>
                <meta name="description" content="Halal financing solutions for vacant land acquisitions." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">VACANT LAND</h1>
                            <p className="text-xl text-gray-600">
                                Rewarding ventures in vacant land development and investment through Halal funding.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Purchasing vacant land for development or investment can be a highly rewarding venture, especially when you choose to do so through Halal funding. At One Drive Realty, we provide financing solutions for vacant land acquisitions that adhere strictly to Shariah principles, allowing you to invest confidently without engaging in interest-based lending.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Halal Financing Solutions</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our financing options are specifically designed to facilitate land purchases while ensuring Shariah compliance. Key options include:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Murabaha:</span>
                                        <p className="text-gray-700">This cost-plus financing structure allows you to purchase land with a transparent pricing model. We acquire the land and sell it to you at a markup, with the payment terms clearly defined, ensuring that all transactions are conducted ethically.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Istisna:</span>
                                        <p className="text-gray-700">Ideal for construction financing, Istisna enables you to finance the development of the land. This structure allows you to pay in installments as the construction progresses, giving you flexibility while adhering to Islamic finance principles.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Opportunities</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Investing in vacant land offers numerous possibilities, whether you intend to develop it for residential or commercial purposes. Our team of experts is committed to providing you with strategic advice on how to maximize the value of your investment. We analyze market trends and local demand, helping you identify the best development opportunities that align with your vision.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethical Development</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, our commitment to Halal funding means that we support ethically sound real estate development. We help you build projects that not only comply with Islamic principles but also contribute positively to the community and environment. This approach ensures that your investments promote sustainable growth and ethical business practices.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Invest with Confidence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With our Halal funding options, you can confidently acquire vacant land, knowing that your investment adheres to the rules of Islamic finance. Our dedicated team is here to guide you every step of the way, ensuring a smooth and compliant transaction.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Start Your Investment</h2>
                            <p className="text-lg mb-6">
                                If you're ready to explore the potential of acquiring vacant land through Halal funding, contact us today. Let’s discuss how we can turn your investment goals into reality while adhering to your ethical principles.
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
