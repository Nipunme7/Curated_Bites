import React from 'react';

const footerLinksLeft = [
    { label: 'Get Help', href: '/help' },
    // Removed: Buy gift cards
    { label: 'Add your restaurant', href: '/add-restaurant' },
    // Removed: Sign up to deliver
    { label: 'Create a business account', href: '/business' },
    { label: 'Promotions', href: '/promotions' }
];

const footerLinksRight = [
    // Removed: Restaurants near me
    { label: 'View all cities', href: '/cities' },
    // Removed: View all countries
    // Removed: Pickup near me
    { label: 'About CuratedEats', href: '/about' }
    // Removed: Shop groceries
];

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Pricing', href: '/pricing' },
    { label: "Do not sell or share my personal information", href: '/privacy#do-not-sell' }
];

const AppBadge = ({ type }) => {
    const isApple = type === 'apple';
    return (
        <a href={isApple ? 'https://apps.apple.com/' : 'https://play.google.com/store'} className="inline-flex items-center px-3 py-2 bg-black text-white rounded-lg shadow-sm hover:opacity-90 transition mr-3" target="_blank" rel="noopener noreferrer">
            {isApple ? (
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.365 1.43c0 1.14-.473 2.252-1.254 3.06-.81.838-2.16 1.49-3.293 1.406-.144-1.1.405-2.278 1.2-3.06.84-.835 2.273-1.45 3.347-1.406zM20.48 17.365c-.63 1.452-1.39 2.884-2.51 4.145-1.017 1.135-2.2 2.427-3.8 2.451-1.623.024-2.042-.789-3.797-.789-1.758 0-2.215.763-3.816.812-1.55.046-2.734-1.223-3.753-2.356C.95 19.827-.59 15.74.686 12.62c.782-1.957 2.46-3.201 4.384-3.227 1.62-.03 3.146 1.025 3.796 1.025.649 0 2.63-1.266 4.437-1.083.754.031 2.874.313 4.231 2.368-.108.068-2.53 1.478-2.555 4.31-.028 3.431 3.125 4.594 3.5 4.352z" />
                </svg>
            ) : (
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M1.5 4.5a3 3 0 0 1 3-3H15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H4.5a3 3 0 0 1-3-3v-15z" />
                </svg>
            )}
            <div className="flex flex-col leading-tight">
                <span className="text-[10px] opacity-70">{isApple ? 'Download on the' : 'GET IT ON'}</span>
                <span className="text-sm font-semibold">{isApple ? 'App Store' : 'Google Play'}</span>
            </div>
        </a>
    );
};

const SocialIcon = ({ type }) => {
    const paths = {
        facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
        twitter: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.5 4.5 0 00-4.5 4.5c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.38 13.38 0 01-8 2c9 5 20 0 20-11.5 0-.28-.01-.56-.04-.84A7.72 7.72 0 0023 3z',
        instagram: 'M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z'
    };
    const hoverColors = {
        facebook: 'hover:text-[#1877F2]',
        twitter: 'hover:text-[#1DA1F2]',
        instagram: 'hover:text-[#E1306C]'
    };
    const socialHref = {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
    }[type];
    return (
        <a href={socialHref} className={`p-2 rounded-md transition ${hoverColors[type]} hover:bg-white/5 text-gray-300`} aria-label={type} target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={paths[type]} />
            </svg>
        </a>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#1E1E1E] to-[#202124] text-gray-300">
            {/* Top area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">CE</span>
                            </div>
                            <span className="text-white font-bold text-2xl">CuratedEats</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <AppBadge type="apple" />
                            <AppBadge type="google" />
                        </div>
                        <div className="flex items-center gap-3">
                            <SocialIcon type="facebook" />
                            <SocialIcon type="twitter" />
                            <SocialIcon type="instagram" />
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12 xl:gap-16">
                        <ul className="space-y-3">
                            {footerLinksLeft.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className="transition-colors hover:text-[#FF7F32]">{l.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <ul className="space-y-3">
                                {footerLinksRight.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="transition-colors hover:text-[#FF7F32]">{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                            {/* Language */}
                            <button className="mt-6 inline-flex items-center space-x-2 text-gray-300 hover:text-[#FF7F32] transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm7 9a7 7 0 01-1.21 3.94h-2.57a16.1 16.1 0 00.4-3.94h3.38zM12 5c.9 0 2.18 1.52 2.73 5H9.27C9.82 6.52 11.1 5 12 5zM5 12a7 7 0 011.21-3.94h2.57A16.1 16.1 0 008.38 12H5zm0 2h3.38c.1 1.38.24 2.69.4 3.94H6.21A7 7 0 015 14zm4.27 0h5.46c-.55 3.48-1.83 5-2.73 5s-2.18-1.52-2.73-5zm6.35 3.94c.16-1.25.3-2.56.4-3.94H19a7 7 0 01-1.38 3.94h-.01z" />
                                </svg>
                                <span>English</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Bottom area with slightly different shade */}
            <div className="bg-[#181A1B]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0">
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                            {legalLinks.map((l) => (
                                <a key={l.label} href={l.href} className="transition-colors hover:text-[#FF7F32]">{l.label}</a>
                            ))}
                        </div>
                        <div className="text-gray-400 text-sm">© 2025 CuratedEats Inc.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
