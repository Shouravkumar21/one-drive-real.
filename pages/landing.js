import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaShoppingCart, FaHome, FaBuilding, FaHandshake,
  FaMoneyBillWave, FaExchangeAlt, FaBars, FaTimes
} from 'react-icons/fa';

export default function Landing() {
  const [cartCount] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);

  const floatingButtons = [
    { id: 'why-ondrive', label: 'Why OneDrive Realty', color: '#8B5CF6', position: { top: '25%', left: '10%' }, tail: 'right', href: '/why-one-drive' },
    { id: 'halal-funding', label: 'Halal Funding', color: '#7C3AED', position: { top: '37%', left: '8%' }, tail: 'right', href: '/halal-funding' },
    { id: 'build-2-suit', label: 'Build 2 Suit', color: '#D4AF37', position: { top: '52%', left: '12%' }, tail: 'right', href: '/build-2-suit' },
    { id: 'list-property', label: 'List Your Property', color: '#DC2626', position: { bottom: '30%', left: '18%' }, tail: 'right', href: '/list-property' },
    { id: 'agent-commission', label: 'Agent 100% Commission', color: '#1F2937', position: { bottom: '10%', left: '41%' }, tail: 'top', href: '/agent-commission' },
    { id: 'cap-ror-reo', label: 'CAP-ROR-REO', color: '#DC2626', position: { top: '25%', right: '10%' }, tail: 'left', href: '/cap-ror-reo' },
    { id: 're-blogs', label: 'R/E BLOGS', color: '#7F1D1D', position: { top: '37%', right: '8%' }, tail: 'left', href: '/blog' },
    { id: '1031-exchange', label: '1031 Exchange', color: '#EC4899', position: { top: '52%', right: '12%' }, tail: 'left', href: '/1031-exchange' },
    { id: 'api-leads', label: 'API-LEADS-DFLX', color: '#DB2777', position: { bottom: '30%', right: '15%' }, tail: 'left', href: '/api-leads-dflx' },
  ];

  const products = [
    { title: 'RESIDENTIAL', color: 'border-red-500', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
    { title: 'MARINA', color: 'border-green-500', image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80' },
    { title: 'AGRICULTURE', color: 'border-blue-600', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80' },
    { title: 'MIX-USE DEVELOPMENT', color: 'border-green-400', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
    { title: 'HIGHRISE BUILDING', color: 'border-blue-400', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80' },
  ];

  const footerLinks = [
    { label: 'Partners', color: '#8B5CF6' },
    { label: 'Board Members', color: '#166534' },
    { label: 'We Support GF', color: '#1E3A8A' },
    { label: 'Connect With Us', color: '#991B1B' },
    { label: 'License Regulators', color: '#6B21A8' },
    { label: 'Terms & Condition', color: '#92400E' },
    { label: 'Obtain Real Estate', color: '#BE185D' },
  ];

  return (
    <>
      <Head>
        <title>OneDrive Realty - Interactive Hub</title>
      </Head>

      <div className="fixed top-6 right-6 z-50 flex gap-4">
        <button className="relative bg-white rounded-lg p-3 shadow-xl hover:scale-110 transition">
          <FaShoppingCart size={24} className="text-red-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">02</span>
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="bg-white rounded-lg p-3 shadow-xl hover:scale-110 transition">
          <FaBars size={24} className="text-[#1E3A8A]" />
        </button>
      </div>

      {/* Hamburger Menu - Full Screen Services Hub */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 z-[60] overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end mb-4">
              <button onClick={() => setMenuOpen(false)} className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition">
                <FaTimes size={28} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
              <ServiceBubble label="Agent 100% Commission" color="#1E3A8A" link="/agent-commission" />
              <ServiceBubble label="Why OneDrive Realty" color="#7C3AED" link="/why-one-drive" />
              <ServiceBubble label="Halal Funding" color="#6D28D9" link="/halal-funding" />
              <ServiceBubble label="Build 2 Suit" color="#7C3AED" link="/build-2-suit" />
              <ServiceBubble label="List Your Property" color="#7C3AED" link="/list-property" />
              <ServiceBubble label="API-LEADS-DFLX" color="#6D28D9" link="/api-leads-dflx" />
              <ServiceBubble label="1031 Exchange" color="#1E3A8A" link="/1031-exchange" />
              <ServiceBubble label="R/E BLOGS" color="#6D28D9" link="/blog" />
              <ServiceBubble label="CAP-ROR-REO" color="#6D28D9" link="/cap-ror-reo" />

              <ServiceBubble label="Full Sponsorship" color="#6D28D9" link="/sponsorship" />
              <ServiceBubble label="Plan 1" color="#4C1D95" link="/plan-01" />
              <ServiceBubble label="Residential" color="#581C87" link="/residential" />
              <ServiceBubble label="Envelope Structures" color="#6D28D9" link="/envelope-structures" />
              <ServiceBubble label="Residential" color="#581C87" link="/residential-listing" />
              <ServiceBubble label="Property Owners" color="#4C1D95" link="/property-owners" />
              <ServiceBubble label="Residential" color="#581C87" link="/residential-listing" />
              <ServiceBubble label="Emerging Markets" color="#4C1D95" />
              <ServiceBubble label="Capitalization Rate" color="#581C87" />

              <ServiceBubble label="Referrals Fees" color="#BE185D" link="/referral-fees" />
              <ServiceBubble label="Plan 2" color="#9D174D" link="/plan-02" />
              <ServiceBubble label="Multi Family" color="#BE185D" link="/multifamily" />
              <ServiceBubble label="Multi Family" color="#9D174D" link="/multifamily-build" />
              <ServiceBubble label="Multi Family" color="#BE185D" link="/multifamily-listing" />
              <ServiceBubble label="Multi Family" color="#9D174D" link="/multifamily-listing" />
              <ServiceBubble label="Multi Family" color="#BE185D" link="/multifamily-owners" />
              <ServiceBubble label="Global" color="#9D174D" />
              <ServiceBubble label="Rate Of Return Rate" color="#BE185D" />

              <ServiceBubble label="Park Your License" color="#DC2626" link="/park-license" />
              <ServiceBubble label="CYPS Patent" color="#B91C1C" link="/cyps-patent" />
              <ServiceBubble label="Commercial" color="#DC2626" link="/commercial" />
              <ServiceBubble label="Residential" color="#B91C1C" link="/residential-build" />
              <ServiceBubble label="Commercial" color="#DC2626" link="/commercial-listing" />
              <ServiceBubble label="Residential" color="#B91C1C" link="/residential-listing" />
              <ServiceBubble label="Commercial" color="#DC2626" link="/commercial-listing" />
              <ServiceBubble label="National" color="#B91C1C" />
              <ServiceBubble label="Real Estate Owned" color="#DC2626" />

              <ServiceBubble label="Marketing Fees" color="#B91C1C" link="/marketing-fees" />
              <ServiceBubble label="Membership" color="#DC2626" link="/membership" />
              <ServiceBubble label="Vacant Land" color="#B91C1C" link="/vacant-land" />
              <ServiceBubble label="Commercial" color="#DC2626" link="/commercial-build" />
              <ServiceBubble label="Vacant Lots" color="#B91C1C" link="/vacant-lots" />
              <ServiceBubble label="Commercial" color="#DC2626" link="/commercial-listing" />
              <ServiceBubble label="Vacant Land" color="#B91C1C" link="/vacant-land" />
              <ServiceBubble label="Regional" color="#DC2626" />
              <ServiceBubble label="Residential" color="#B91C1C" link="/residential-listing" />

              <ServiceBubble label="C/E Training" color="#EC4899" link="/ce-training" />
              <ServiceBubble label="Partners" color="#DB2777" link="/partners" />
              <ServiceBubble label="Dairy Farming" color="#EC4899" link="/dairy-farming" />
              <ServiceBubble label="Dairy Farming" color="#DB2777" link="/dairy-farming-build" />
              <ServiceBubble label="Vacant Acreage" color="#EC4899" link="/vacant-acreage" />
              <ServiceBubble label="Business" color="#DB2777" link="/business-listing" />
              <ServiceBubble label="Farming" color="#EC4899" />
              <ServiceBubble label="Residential" color="#DB2777" link="/residential-owners" />
              <ServiceBubble label="Multi-Family" color="#EC4899" link="/multifamily" />

              <ServiceBubble label="Broker Mentors" color="#EC4899" link="/broker-mentors" />
              <ServiceBubble label="Our Listings" color="#DB2777" link="/our-listings" />
              <ServiceBubble label="Agriculture Land" color="#EC4899" link="/agricultural-land" />
              <ServiceBubble label="Log Homes Kit" color="#DB2777" link="/log-home-kits" />
              <ServiceBubble label="Business" color="#EC4899" link="/business-listing" />
              <ServiceBubble label="Vacant Lots" color="#DB2777" link="/vacant-lots" />
              <ServiceBubble label="Vested Equity" color="#EC4899" />
              <ServiceBubble label="Commercial" color="#DB2777" link="/commercial-listing" />
              <ServiceBubble label="Commercial" color="#EC4899" link="/commercial-owners" />

              <ServiceBubble label="Build 2 Suite" color="#7F1D1D" link="/build-2-suit" />
              <ServiceBubble label="Search Four Listing" color="#92400E" link="/search-listings" />
              <ServiceBubble label="Development" color="#7F1D1D" link="/development" />
              <ServiceBubble label="CYPS List 2 Last" color="#92400E" link="/list-2-last" />
              <ServiceBubble label="SMS-MMS BLAST" color="#7F1D1D" link="/sms-mms-blast" />
              <ServiceBubble label="Vacant Acreage" color="#92400E" link="/vacant-acreage" />
              <ServiceBubble label="REIT-TRADE" color="#7F1D1D" />
              <ServiceBubble label="Financing" color="#92400E" link="/halal-funding" />
              <ServiceBubble label="Vacant Land" color="#7F1D1D" link="/vacant-land" />

              <ServiceBubble label="List 2 Last Agents" color="#EF4444" link="/list-2-last" />
              <ServiceBubble label="NWMLS Access" color="#F87171" link="/nwmls-access" />
              <ServiceBubble label="Business" color="#EF4444" link="/business" />
              <ServiceBubble label="Development" color="#F87171" link="/development-build" />
              <ServiceBubble label="1 Drive Listings" color="#EF4444" link="/one-drive-listings" />
              <ServiceBubble label="CYPS Patent" color="#F87171" link="/cyps-patent" />
              <ServiceBubble label="MRAUT-TRADE" color="#EF4444" />
              <ServiceBubble label="Investment" color="#F87171" link="/invest-with-us" />
              <ServiceBubble label="Crop Farming" color="#EF4444" />

              <ServiceBubble label="Branch Offices" color="#1D4ED8" link="/branch-offices" />
              <ServiceBubble label="RE Contract Forms" color="#2563EB" link="/re-contracts" />
              <ServiceBubble label="Unit Share Cert" color="#1D4ED8" link="/unit-share-cert" />
              <ServiceBubble label="Vacant Land API" color="#2563EB" link="/vacant-land-api" />
              <ServiceBubble label="CYPS Marketing" color="#1D4ED8" link="/cyps-marketing" />
              <ServiceBubble label="Short-Code Data" color="#2563EB" />
              <ServiceBubble label="USA Escrow Title" color="#1D4ED8" />
              <ServiceBubble label="Blogger Biography" color="#2563EB" />
              <ServiceBubble label="Livestock Farm" color="#1D4ED8" />

              <ServiceBubble label="Own R/E Website" color="#EC4899" link="/own-website" />
              <ServiceBubble label="List Your Property" color="#DB2777" link="/list-property" />
              <ServiceBubble label="Invest With Us" color="#EC4899" link="/invest-with-us" />
              <ServiceBubble label="SMS-MMS BLAST" color="#DB2777" link="/sms-mms-blast" />
              <ServiceBubble label="Property Trade" color="#EC4899" link="/property-trade" />
              <ServiceBubble label="SMS-MMS BLAST" color="#DB2777" link="/sms-mms-blast" />
              <ServiceBubble label="World Escrow Title" color="#EC4899" />
              <ServiceBubble label="Blogger Police Report" color="#DB2777" />
              <ServiceBubble label="Build 2 Suit Profit" color="#EC4899" link="/build-2-suit" />
            </div>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/assets/backgrounds/backgrorund.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-blue-500/30"></div>
        {floatingButtons.map((btn) => (
          <Link key={btn.id} href={btn.href}>
            <button
              className="absolute px-6 py-3 text-white font-bold shadow-xl hover:scale-110 transition-all duration-300 text-sm whitespace-nowrap flex items-center justify-center"
              style={{
                backgroundColor: btn.color,
                ...btn.position,
                zIndex: 10,
                borderRadius: '50px',
                minWidth: '160px'
              }}
            >
              {btn.label}
              {/* Speech Bubble Tail - refined */}
              <div
                className={`absolute w-0 h-0 border-8 border-transparent ${btn.tail === 'right' ? 'border-l-[12px] -right-3 top-1/2 -translate-y-1/2' :
                  btn.tail === 'left' ? 'border-r-[12px] -left-3 top-1/2 -translate-y-1/2' :
                    btn.tail === 'top' ? 'border-b-[12px] -top-3 left-1/2 -translate-x-1/2' : ''
                  }`}
                style={{
                  borderLeftColor: btn.tail === 'right' ? btn.color : 'transparent',
                  borderRightColor: btn.tail === 'left' ? btn.color : 'transparent',
                  borderBottomColor: btn.tail === 'top' ? btn.color : 'transparent',
                  filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.1))'
                }}
              ></div>
            </button>
          </Link>
        ))}
        <div className="relative z-20">
          {/* Central Logo Image with Country Flags */}
          <div className="flex items-center justify-center relative">
            {/* Washington State Flag - Left */}
            <div className="absolute left-6 top-[32%] -translate-y-1/2 w-12 h-auto z-20">
              <img src="/assets/flags/washington_flag.png" alt="Washington Flag" className="w-full h-full object-cover rounded-sm mix-blend-multiply" />
            </div>

            <img
              src="/assets/logos/logomain.png"
              alt="OneDriveRealty Hub"
              className="w-[450px] h-auto relative z-10 drop-shadow-2xl"
            />

            {/* USA Flag - Right */}
            <div className="absolute right-6 top-[32%] -translate-y-1/2 w-12 h-auto z-20">
              <img src="/assets/flags/united-states-of-america.png" alt="USA Flag" className="w-full h-full object-cover rounded-sm shadow-sm" />
            </div>

            {/* Golf Flag - Bottom Center */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-24 z-20 bg-[#2D5BA6] rounded-full flex items-center justify-center p-2">
              <img src="/assets/flags/golf flag icon.png" alt="Golf Flag" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[5%] left-[45%] md:left-[48%] -translate-x-1/2 w-8 h-8 bg-[#FF0000] rounded-full border-4 border-[#00FF00] shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 text-6xl opacity-60"></div>
      </section>

      <section className="py-8 relative min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #FFC0CB 0%, #FFB6C1 50%, #FFA0B0 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 w-full">
          {/* Our Products Title */}
          <div className="flex justify-center mb-6">
            <div className="relative bg-[#9B59B6] text-white px-12 py-2 shadow-lg" style={{ borderRadius: '80px' }}>
              <span className="text-xl font-bold">Our Products</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0" style={{
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderTop: '15px solid #9B59B6'
              }}></div>
            </div>
          </div>

          {/* Grid Layout - 3 columns with special structure */}
          <div className="grid grid-cols-3 gap-3">
            {/* Column 1 & 2 Container */}
            <div className="col-span-2 grid gap-3">

              {/* Row 1 - Two cards side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-2 shadow-lg border-3 border-red-500 hover:scale-105 transition cursor-pointer">
                  <div className="h-24 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={products[0].image} alt="RESIDENTIAL" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-center text-sm font-bold text-[#00AEEF]">RESIDENTIAL</h3>
                </div>

                <div className="bg-white rounded-lg p-2 shadow-lg border-3 border-green-500 hover:scale-105 transition cursor-pointer">
                  <div className="h-24 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={products[1].image} alt="MARINA" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-center text-sm font-bold text-[#00AEEF]">MARINA</h3>
                </div>
              </div>

              {/* Row 2 - One wide card (bigger) with left and right padding */}
              <div className="px-6">
                <div className="bg-white rounded-lg p-3 shadow-lg border-3 border-blue-600 hover:scale-105 transition cursor-pointer">
                  <div className="h-28 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={products[2].image} alt="AGRICULTURE" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-center text-base font-bold text-[#00AEEF]">AGRICULTURE</h3>
                </div>
              </div>

              {/* Row 3 - Two cards side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-2 shadow-lg border-3 border-green-500 hover:scale-105 transition cursor-pointer">
                  <div className="h-24 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={products[3].image} alt="MIX-USE DEVELOPMENT" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-center text-xs font-bold text-[#00AEEF] leading-tight">MIX-USE DEVELOPMENT</h3>
                </div>

                <div className="bg-white rounded-lg p-2 shadow-lg border-3 border-gray-400 hover:scale-105 transition cursor-pointer">
                  <div className="h-24 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={products[4].image} alt="HIGHRISE BUILDING" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-center text-xs font-bold text-[#00AEEF] leading-tight">HIGHRISE BUILDING</h3>
                </div>
              </div>
            </div>

            {/* Column 3 - Image with blue text card below */}
            <div className="flex flex-col gap-3">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                alt="Luxury Homes"
                className="w-full h-[280px] object-cover rounded-lg shadow-lg"
              />

              {/* Blue Text Card */}
              <div className="bg-[#1E5BA8] rounded-lg p-3 shadow-lg text-center">
                <h3 className="text-base font-bold text-[#FFD700] leading-tight">Luxury Homes Exclusive Marketing</h3>
                <p className="text-xs text-white mt-1">&</p>
                <p className="text-base font-bold text-[#FFD700]">Build 2 Suite Plans</p>
              </div>
            </div>
          </div>

          {/* Home Button - Bottom Right */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-20 h-20 bg-blue-700 rounded-xl flex items-center justify-center shadow-2xl hover:bg-blue-800 hover:scale-110 transition z-40"
            aria-label="Scroll to top"
          >
            <FaHome className="text-white text-4xl" />
          </button>
        </div>
      </section >
      <footer className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 py-12 relative">
        <div className="absolute top-8 right-8 text-white text-2xl bg-blue-600 px-6 py-3 rounded-lg shadow-lg">لا إله إلا ٱلله محمد رسول ٱلله</div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className="text-white text-sm mb-2">OneDriveRealty.com</div>
              <div className="mx-auto flex items-center justify-center">
                <img src="/assets/logos/logomain.png" alt="OneDrive Realty" className="w-64 md:w-80 h-auto object-contain drop-shadow-lg" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">{footerLinks.map((link, index) => (<button key={index} className="px-4 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition text-sm" style={{ backgroundColor: link.color }}>{link.label}</button>))}</div>
          <div className="text-center"><div className="inline-block bg-red-600 text-white px-8 py-4 rounded-full shadow-lg relative"><p className="font-bold">2024 Copyrights OneDriveRealty</p><p className="text-sm">All Rights Reserved</p><div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[15px] border-l-transparent border-r-transparent border-b-red-600"></div></div></div>
        </div>
      </footer>
    </>
  );
}

// ServiceBubble Component for Hamburger Menu
function ServiceBubble({ label, color, link }) {
  const content = (
    <div className="relative group cursor-pointer flex justify-center hover:scale-110 transition-transform duration-300">
      <div
        className="relative flex items-center justify-center text-center px-2 py-1 w-full h-[60px] shadow-lg border-2 border-white/40"
        style={{
          backgroundColor: color,
          borderRadius: '50%',
        }}
      >
        <span className="text-white font-bold text-[10px] leading-tight drop-shadow-md z-10">{label}</span>

        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r-2 border-b-2 border-white/40"
          style={{ backgroundColor: color }}
        ></div>

        <div className="absolute top-1 left-1/4 w-1/2 h-[40%] bg-gradient-to-b from-white/40 to-transparent rounded-full"></div>
      </div>
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
}
