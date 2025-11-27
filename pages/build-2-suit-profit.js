import Head from 'next/head';
import Layout from '../components/Layout';

export default function Build2SuitProfit() {
    return (
        <>
            <Head>
                <title>Build 2 Suit Profit - OnDrive Realty</title>
                <meta name="description" content="Maximize returns with Build-to-Suit commercial real estate model." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">BUILD 2 SUIT PROFIT</h1>
                            <p className="text-xl text-gray-600">
                                Strategic investment opportunities with guaranteed tenants.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Build-to-Suit (BTS) model offers a strategic opportunity for investors and developers looking to maximize returns while minimizing risks. This model revolves around constructing properties specifically tailored to the needs of a tenant, typically within the commercial real estate sector. One Drive Realty provides comprehensive support for investors throughout the BTS process, ensuring projects are aligned with tenant expectations and generate optimal financial outcomes.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of the Build-to-Suit Model:</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Guaranteed Tenants:</span>
                                        <p className="text-gray-700">One of the most attractive features of the Build-to-Suit model is the security it offers. In most cases, tenants are secured before construction even begins. This approach guarantees immediate occupancy once the project is completed, significantly reducing the financial risks associated with vacant properties and ensuring that you have a steady stream of income from day one.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Tailored Customization:</span>
                                        <p className="text-gray-700">In the Build-to-Suit model, every aspect of the construction is designed with the tenant's specific needs in mind. Whether it's the layout, technology integration, or specialized infrastructure, the property is customized to meet the exact requirements of the tenant. This results in long-term lease stability, as tenants are more likely to stay in a space built to their specifications.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Premium Rental Rates:</span>
                                        <p className="text-gray-700">Because the property is designed precisely to meet the needs of the tenant, investors can typically command higher rental rates compared to traditional properties. The combination of a secure tenant, custom-built space, and high demand for specialized real estate leads to increased profitability for the developer and investor.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Reduced Vacancy Risks:</span>
                                        <p className="text-gray-700">With a pre-leased, purpose-built property, the chances of facing vacancies or turnover costs are significantly lower. The tailored nature of the building also reduces the risk of tenant dissatisfaction, ensuring they are likely to extend leases or renew contracts.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Long-Term Investment Stability:</span>
                                        <p className="text-gray-700">The Build-to-Suit model offers long-term investment security. Tenants in BTS properties often sign extended leases, ensuring predictable revenue over time. This makes it easier to plan and manage finances, with the added benefit of reducing the operational risks associated with short-term leases or frequent tenant turnover.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose One Drive Realty for Your Build-to-Suit Projects?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty offers hands-on expertise, guiding you through each phase of the Build-to-Suit process—from initial project consultation to securing tenants and overseeing construction. With a deep understanding of commercial real estate, we help developers, investors, and property owners capitalize on this model's advantages, while ensuring projects are completed efficiently, on time, and within budget.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Invest for Tomorrow</h2>
                            <p className="text-lg mb-6">
                                Invest now to furnish tomorrow. Contact us at info@onedriverealty.com and let our team guide you through the process.
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
