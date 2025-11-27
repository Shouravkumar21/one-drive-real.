import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-3">
                    {/* Left Menu Items */}
                    <nav className="flex items-center gap-6">
                        <Link href="/why-one-drive" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            Why OneDrive Realty
                        </Link>
                        <Link href="/halal-funding" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            Halal Funding
                        </Link>
                        <Link href="/build-2-suit" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            Build 2 Suit
                        </Link>
                        <Link href="/list-property" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            List Your Property
                        </Link>
                    </nav>

                    {/* Center Logo */}
                    <Link href="/" className="flex-shrink-0 mx-8">
                        <img src="/assets/logos/logomain.png" alt="OneDrive Realty" className="h-12 w-auto" />
                    </Link>

                    {/* Right Menu Items */}
                    <nav className="flex items-center gap-6">
                        <Link href="/agent-commission" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            Agent 100% Commission
                        </Link>
                        <Link href="/cap-ror-reo" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            CAP-ROR-REO
                        </Link>
                        <Link href="/blog" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            R/E BLOGS
                        </Link>
                        <Link href="/1031-exchange" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            1031 Exchange
                        </Link>
                        <Link href="/api-leads-dflx" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition whitespace-nowrap">
                            API-LEADS-DFLX
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
