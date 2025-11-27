import Head from 'next/head';
import Layout from '../components/Layout';

export default function Commercial() {
    return (
        <>
            <Head>
                <title>Commercial Real Estate - OnDrive Realty</title>
                <meta name="description" content="Halal funding for commercial real estate acquisitions." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">COMMERCIAL</h1>
                            <p className="text-xl text-gray-600">
                                Halal funding for business owners and investors seeking commercial real estate.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For business owners and investors seeking to acquire commercial real estate, Halal funding presents a unique opportunity to ensure that your investment aligns with Islamic principles. This approach guarantees that your financial dealings remain free of interest (riba) and speculative elements (gharar). Whether you're interested in office spaces, retail locations, or industrial properties, One Drive Realty's extensive commercial portfolio is anchored in Shariah-compliant financial structures.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Islamic Finance Models</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our Halal funding model incorporates a variety of Islamic finance mechanisms, including:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Ijarah:</span>
                                        <p className="text-gray-700">A leasing structure where One Drive Realty retains ownership of the property while allowing the investor to use it for a specified period. This arrangement can provide both flexibility and cost-effectiveness for businesses looking to minimize upfront capital expenditures.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Musharakah:</span>
                                        <p className="text-gray-700">A profit-sharing partnership where investors co-own the property alongside One Drive Realty. This model promotes shared risk and rewards, ensuring that both parties are motivated to maintain and enhance the property’s value.</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These models are designed to accommodate diverse commercial needs while upholding the values of Islamic finance.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Investing in commercial real estate offers long-term stability and the potential for significant appreciation. Our Shariah-compliant financing options provide investors with peace of mind, knowing their investments are ethically sound. The commercial real estate sector typically boasts lower volatility compared to other investment avenues, making it a strategic choice for long-term growth.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we recognize that each commercial property is unique. That’s why we offer flexible financing solutions tailored to the specific nature of the property being acquired. Our team of experts works closely with you to understand your goals, ensuring a seamless transaction that aligns with your business strategy.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethical Investment for a Sustainable Future</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By choosing One Drive Realty, you not only make a sound investment but also contribute to an ethical financial ecosystem. Our commitment to Shariah-compliant practices means you can build a sustainable future for your business while adhering to your values.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                            <p className="text-lg mb-6">
                                If you're ready to explore how Halal funding can facilitate your commercial real estate investments, contact us today. Let’s work together to achieve your investment goals ethically and effectively.
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
