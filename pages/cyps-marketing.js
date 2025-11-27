import Head from 'next/head';
import Layout from '../components/Layout';

export default function CypsMarketing() {
    return (
        <>
            <Head>
                <title>CYPS Marketing - OnDrive Realty</title>
                <meta name="description" content="Innovative marketing strategies with CYPS technology." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">CYPS MARKETING</h1>
                            <p className="text-xl text-gray-600">
                                Enhance your property listing experience with cutting-edge technology.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we leverage cutting-edge technology and innovative marketing strategies through our partnership with CYPS to enhance your property listing experience. Here’s how CYPS Marketing can make a significant impact on how your property is showcased and sold:
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Virtual Open Home Tours</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Dragnet Virtual Open Home Tour Camera revolutionizes property showings by allowing prospective buyers to experience homes in 360° detail. This technology offers a comprehensive virtual walkthrough of your property, enabling potential buyers to explore every corner without needing to visit in person. This immersive experience not only captures attention but also allows buyers to visualize themselves in the space, increasing engagement and interest.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Enhanced Visibility</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With up to 90% of property buyers initially driving by before contacting an agent, the CYPS marketing strategy integrates virtual tours with creative yard post signage to effectively capture interest. This dual approach ensures that your property stands out and is easily remembered, increasing the likelihood of inquiries from serious buyers.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data-Driven Insights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                CYPS operates on the principle of "Data Equity Capital," providing actionable insights through access to real estate commercial datasets. This means that your property listing benefits from strategic analysis of market trends, buyer behavior, and competitive pricing. By leveraging this data, we can position your property more effectively in the market, ensuring it reaches the right audience.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seamless Marketing Integration</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Data Marketplace and Data Commerce Cloud (DCC) facilitate seamless transactions for commercial data, empowering us to make informed decisions based on comprehensive datasets. This integration allows us to tailor marketing strategies that resonate with potential buyers, enhancing your property’s visibility and appeal.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Comprehensive Support</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                CYPS Marketing not only focuses on technology but also emphasizes the importance of personalized service. Our team at One Drive Realty is dedicated to working closely with you to ensure your property is presented in the best possible light, with effective marketing strategies that align with your goals.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                By harnessing the innovative capabilities of CYPS Marketing, One Drive Realty ensures that your property listing is not only seen but also remembered by potential buyers. From virtual tours to data-driven insights, our comprehensive approach maximizes your property’s exposure and appeal.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Take Advantage of CYPS</h2>
                            <p className="text-lg mb-6">
                                If you're ready to list your property and want to take advantage of CYPS Marketing, contact us today. Let’s work together to make your property listing a success!
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
