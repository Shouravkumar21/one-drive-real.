import Head from 'next/head';
import Layout from '../components/Layout';

export default function Financing() {
    return (
        <>
            <Head>
                <title>Financing - OnDrive Realty</title>
                <meta name="description" content="Comprehensive financing solutions for real estate investments." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">FINANCING</h1>
                            <p className="text-xl text-gray-600">
                                Tailored financing solutions for every real estate need.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we understand that financing is a crucial aspect of the real estate process, whether you're purchasing a home, investing in property, or developing a project. We offer a range of financing options tailored to meet the diverse needs of our clients, ensuring that each transaction is smooth, transparent, and aligned with your financial goals.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Financing Options for Homebuyers and Investors</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty partners with a network of trusted lenders to provide competitive mortgage rates and financing solutions. Whether you're a first-time homebuyer or a seasoned investor, our team works closely with you to explore all available options, including conventional loans, FHA loans, VA loans, and other specialized financing programs.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Usury-Free and Ethical Financing</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For clients seeking ethical financing solutions, One Drive Realty offers programs that adhere to usury-free principles, including Halal and Kosher financing options. These programs are designed to meet the needs of clients who require financing solutions that comply with their religious or ethical standards, ensuring that all transactions are conducted in a manner that respects these values.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Development Project Financing</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty also provides financing support for development projects. Our financing solutions are available for both small-scale and large-scale developments, offering flexible terms that can be tailored to the specific needs of each project. We work with developers to secure the necessary funds while providing guidance on the best financing strategies to ensure the success of the project.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customized Financial Guidance</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding that every client's financial situation is unique, One Drive Realty offers personalized financial guidance. Our experienced team provides insights and advice on the best financing options available, helping clients make informed decisions that align with their long-term financial objectives.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Secure Your Financing</h2>
                            <p className="text-lg mb-6">
                                Ready to explore financing options? Contact us at info@onedriverealty.com for personalized financial guidance.
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
