import Head from 'next/head';
import Layout from '../components/Layout';

export default function ConnectWithUs() {
    return (
        <>
            <Head>
                <title>Connect With Us - OnDrive Realty</title>
                <meta name="description" content="Get in touch with One Drive Realty for all your real estate needs." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">CONNECT WITH US</h1>
                            <p className="text-xl text-gray-600">
                                We value strong relationships with our clients, partners, and agents.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At One Drive Realty, we value strong relationships with our clients, partners, and agents. We believe that open communication is key to successful real estate transactions and partnerships. Whether you're looking to buy, sell, invest, or join our team, connecting with us is the first step toward achieving your real estate goals.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Connect with One Drive Realty</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Contact Us:</span>
                                        <p className="text-gray-700">You can reach out to us via email at <a href="mailto:info@onedriverealty.com" className="text-primary-600 hover:underline">info@onedriverealty.com</a> or through our website's contact form. Our team is available to answer your questions, provide information, and assist with any real estate needs you may have.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Follow Us on Social Media:</span>
                                        <p className="text-gray-700">Stay updated on the latest news, listings, and real estate trends by following One Drive Realty on our social media channels. Engage with our content, participate in discussions, and be part of our growing community.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Schedule a Consultation:</span>
                                        <p className="text-gray-700">If you're interested in a more personalized conversation, you can schedule a consultation with one of our experienced agents. We'll take the time to understand your needs and offer tailored advice and solutions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Join Our Team:</span>
                                        <p className="text-gray-700">Are you a real estate professional looking to join a dynamic and supportive brokerage? One Drive Realty offers a range of opportunities for agents who are passionate about real estate and committed to excellence. Connect with us to learn more about our programs and how we can help you succeed.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Partner with Us:</span>
                                        <p className="text-gray-700">If you offer services or products in the real estate space, we're always looking to collaborate with professionals and companies that share our commitment to quality. Connect with us to explore partnership opportunities.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Connect with One Drive Realty?</h2>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Expert Guidance:</span>
                                        <p className="text-gray-700">Our team of experienced real estate professionals is here to provide expert guidance, whether you're navigating the complexities of a real estate transaction or seeking advice on market trends.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Comprehensive Services:</span>
                                        <p className="text-gray-700">One Drive Realty offers a wide range of services, from residential and commercial real estate to investment opportunities and beyond. By connecting with us, you gain access to a full suite of real estate solutions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">❖</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Personalized Support:</span>
                                        <p className="text-gray-700">We understand that every client's needs are unique. That's why we offer personalized support to ensure that you receive the attention and service you deserve.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-lg mb-6">
                                Ready to start your real estate journey with us? Reach out today!
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
