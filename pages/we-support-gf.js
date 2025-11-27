import Head from 'next/head';
import Layout from '../components/Layout';

export default function WeSupportGF() {
    return (
        <>
            <Head>
                <title>We Support Global Faith - OnDrive Realty</title>
                <meta name="description" content="One Drive Realty proudly supports Global Faith and community welfare initiatives." />
            </Head>

            <Layout>
                <div className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary-600 mb-4">WE SUPPORT GLOBAL FAITH</h1>
                            <p className="text-xl text-gray-600">
                                Real estate with a purpose - Building homes and futures.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One Drive Realty stands as more than just a real estate company—it is a driving force behind meaningful change. With a deep commitment to global and community welfare, One Drive Realty proudly supports Global Faith, a charitable organization dedicated to uplifting lives and fostering interfaith harmony around the world. While excelling in the real estate sector, One Drive Realty has chosen to direct a significant portion of its earnings toward advancing the impactful work of Global Faith.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Global Faith operates with a mission rooted in compassion and service, focusing on public welfare projects that touch countless lives. Whether it's providing essential healthcare services, improving access to education, or supporting initiatives that promote understanding among different faiths, Global Faith's reach is vast and heart-driven. Every property sold or leased through One Drive Realty helps fuel these vital missions, transforming everyday business into a beacon of hope for those in need.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                This collaboration goes beyond corporate responsibility—it embodies a shared vision of creating a better world. By choosing One Drive Realty, clients and agents alike become part of something larger, knowing that their contributions help to build homes and futures, both in the real estate market and in the lives of people across the globe. Through the power of real estate, One Drive Realty empowers Global Faith to keep its promise of love, unity, and support, ensuring that the impact of every transaction echoes far beyond business.
                            </p>

                            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 mt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Impact Together</h2>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-4xl font-bold text-primary-600 mb-2">❤️</div>
                                        <h3 className="font-bold text-gray-900 mb-2">Compassion</h3>
                                        <p className="text-gray-700 text-sm">Supporting communities in need through charitable initiatives</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-primary-600 mb-2">🤝</div>
                                        <h3 className="font-bold text-gray-900 mb-2">Unity</h3>
                                        <p className="text-gray-700 text-sm">Fostering interfaith harmony and understanding worldwide</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-primary-600 mb-2">🌍</div>
                                        <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                                        <p className="text-gray-700 text-sm">Touching lives across the globe with every transaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-600 rounded-lg shadow-lg p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
                            <p className="text-lg mb-6">
                                Every property transaction with One Drive Realty contributes to Global Faith's mission of compassion and service. Together, we're building more than properties—we're building hope.
                            </p>
                            <a href="mailto:info@onedriverealty.com" className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                                Learn More - info@onedriverealty.com
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
