import Head from 'next/head';
import Layout from '../components/Layout';

export default function Sponsorship() {
    return (
        <>
            <Head>
                <title>Full Sponsorship - OnDrive Realty</title>
                <meta name="description" content="Full sponsorship exclusively to real estate agents." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">FULL SPONSORSHIP</h1>
                            <p className="text-xl text-gray-600">
                                Empowering agents to succeed through comprehensive support systems.
                            </p>
                        </div>

                        {/* Content */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, our primary focus is on sponsoring real estate agents and empowering them to succeed through our comprehensive support systems. We take pride in offering full sponsorship exclusively to real estate agents, enabling them to leverage our Affiliate Marketing Real Estate Referral Program. This program is designed to help agents expand their networks, generate leads, and close more deals, all while benefiting from the strong backing of our firm.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our sponsorship goes beyond mere financial backing; it includes access to valuable resources, tools, and guidance that are crucial for building a successful real estate career. We understand that real estate agents need more than just a commission split—they need ongoing support, education, and opportunities to grow.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While we are in the process of re-establishing our own Real Estate School, which will offer tailored training programs (NOTE: Hyperlink to the list of courses) to our agents, we are currently providing access to a selection of high-quality third-party courses. These courses have been carefully vetted to ensure they meet our high standards for agent education. They cover a wide range of topics, from fundamental real estate principles to advanced strategies for closing deals and growing a real estate business.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our list of recommended courses is designed to bridge the gap between theoretical knowledge and practical application, ensuring that our agents are well-prepared for the challenges of the real estate market. Whether you are a seasoned professional or just starting your career, these courses will provide you with the knowledge and skills necessary to excel.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                At One Drive Realty, we are committed to helping our agents succeed by offering unparalleled support, training, and opportunities. Our full sponsorship program is just one of the many ways we demonstrate this commitment. Join us, and experience the difference that dedicated sponsorship and a strong support system can make in your real estate career.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
                            <p className="text-lg mb-6">
                                To join, we are just an email away. Send us an email at info@onedriverealty.com and get yourself enrolled today for forever growing and glowing future.
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
