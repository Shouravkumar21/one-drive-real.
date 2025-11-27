import Head from 'next/head';
import Layout from '../components/Layout';

export default function DairyFarmingBuild() {
    return (
        <>
            <Head>
                <title>Dairy Farming Build to Suit - OnDrive Realty</title>
                <meta name="description" content="Build to Suit services for dairy farming operations." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">DAIRY FARMING BUILD TO SUIT</h1>
                            <p className="text-xl text-gray-600">
                                Tailored services for establishing or expanding dairy operations.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we understand the unique value of dairy farming as both a lifestyle choice and a profitable investment opportunity. Our Built to Suit services are tailored specifically for those looking to establish or expand dairy operations, ensuring you find the ideal location and resources for success.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Built to Suit Dairy Farming Services</h2>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Land Acquisition</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We specialize in helping you locate fertile land that’s perfectly suited for dairy farming. Our services encompass:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Site Identification:</span>
                                        <p className="text-gray-700">We evaluate potential properties based on critical factors such as soil quality, water access, and proximity to markets to ensure optimal conditions for your dairy operation.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Zoning and Permits</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Navigating local regulations can be complex, but we make it easier for you:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Regulatory Guidance:</span>
                                        <p className="text-gray-700">We assist in determining zoning requirements and ensuring the land is approved for agricultural use, so you can focus on building your farm.</p>
                                    </div>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Dairy Farm Development</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For those looking to build or upgrade dairy facilities, we provide comprehensive support:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Facility Planning:</span>
                                        <p className="text-gray-700">Our team helps design modern dairy facilities and infrastructure that meet industry standards and enhance productivity.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Project Management:</span>
                                        <p className="text-gray-700">We oversee the construction process to ensure that your dairy farm is developed efficiently and to your specifications.</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our expertise in agricultural land acquisition and dairy farm development makes One Drive Realty the ideal partner for your Built to Suit dairy farming project. We are committed to helping you create a thriving operation that meets both your personal and financial goals.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Start Your Farm</h2>
                            <p className="text-lg mb-6">
                                If you’re ready to explore how our Built to Suit services can help you establish a successful dairy farm, contact us today. Let’s work together to make your dairy farming vision a reality!
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
