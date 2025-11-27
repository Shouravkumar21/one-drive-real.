import Head from 'next/head';
import Layout from '../components/Layout';

export default function Plan01() {
    return (
        <>
            <Head>
                <title>Plan 01 - OnDrive Realty</title>
                <meta name="description" content="Plan 1: 100% Commission for independent agents." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">PLAN 01</h1>
                            <p className="text-xl text-gray-600">
                                Designed for real estate agents who thrive on independence and simplicity.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Plan 1 is designed for real estate agents who thrive on independence and simplicity. This plan empowers you to take full control of your earnings, allowing you to retain 100% of your commission on every transaction. If you're confident in your ability to manage your own business operations without requiring extensive support, Plan 1 is your perfect match. You get the freedom to run your real estate business your way, without sharing your hard-earned profits.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Maximize Your Earnings</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At the core of Plan 1 is the opportunity to keep every dollar you earn. With 100% commission on all transactions, you won't have to worry about splitting your commission with the brokerage or dealing with hidden fees. You get to focus on what you do best—closing deals—while keeping your entire commission in your pocket.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Services to Enhance Your Success</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While Plan 1 is streamlined to offer you the maximum financial benefit, we also recognize that having access to the right tools can take your business to the next level. That’s why we offer a range of additional services that you can choose from, each designed to enhance your real estate practice. These services are not included in the plan but are available to you at competitive rates whenever you need them.
                            </p>

                            <ul className="space-y-6 mb-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Errors and Omissions Insurance (E&O):</span>
                                        <p className="text-gray-700">E&O insurance is highly recommended for all real estate agents to safeguard against potential legal claims that may arise from your transactions. This essential protection helps cover legal expenses in case of a dispute. Though it is not included in Plan 1, you have the option to add it for an additional cost.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Professional Transaction Management System:</span>
                                        <p className="text-gray-700">If you're looking for an efficient way to keep track of all your deals, our paperless transaction management system is available. It helps you stay organized, streamlines your workflow, and allows you to manage your transactions seamlessly. This system is an optional add-on and is not part of the base plan.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Custom Marketing Materials:</span>
                                        <p className="text-gray-700">Want to market yourself more effectively? We offer personalized business cards, brochures, yard signs, and more to help you stand out from the competition. Each item is tailored to your branding needs and can be purchased separately, providing you with a cost-effective way to boost your visibility.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Agent Website:</span>
                                        <p className="text-gray-700">A professional, customized website can be a game-changer in building your online presence and showcasing your listings. Our team can create a sleek, user-friendly website for you at an additional fee. This optional service is perfect for agents who want to elevate their digital footprint.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-2">●</span>
                                    <div>
                                        <span className="font-bold text-gray-900">Property Websites and Virtual Tours:</span>
                                        <p className="text-gray-700">Enhance your listings by opting for individual property websites and virtual tours, allowing potential buyers to experience properties in a more immersive way. These marketing tools can significantly boost interest in your listings but are not part of the basic plan. You can add them at your discretion.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Flexibility Without Compromise</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Plan 1 gives you the ultimate flexibility by allowing you to choose only the services you need, without locking you into any extras. Nothing in the plan is complimentary or included; every additional service comes at a cost, ensuring that you have full control over what you spend and how you invest in your business. You are free to enhance your business with the tools and resources that work for you.
                            </p>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Take Charge of Your Career</h2>
                            <p className="text-lg mb-6">
                                If you're ready to take charge of your real estate career with Plan 1 or want to learn more about how our additional services can support your business, reach out to us today.
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
