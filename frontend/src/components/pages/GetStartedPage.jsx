import React, { useState } from 'react';

const GetStartedPage = () => {
    const [selectedService, setSelectedService] = useState('Delivery');
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="flex justify-between items-center h-10 lg:h-12 xl:h-14">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-500 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-xs lg:text-sm">CE</span>
                                </div>
                                <span className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">CuratedEats</span>
                            </div>

                            {/* Service Options */}
                            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                                <button
                                    onClick={() => setSelectedService('Delivery')}
                                    className={`px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 ${selectedService === 'Delivery'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    Delivery
                                </button>
                                <button
                                    onClick={() => setSelectedService('Coming Soon')}
                                    className="px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium text-gray-400 cursor-not-allowed"
                                    disabled
                                >
                                    Coming Soon
                                </button>
                                <button
                                    onClick={() => setSelectedService('Pickup')}
                                    className={`px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 ${selectedService === 'Pickup'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    Pickup
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 lg:space-x-6">
                            {/* Location */}
                            <div className="hidden md:flex items-center space-x-2 text-xs lg:text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300">
                                <span>Pick up now • San Francisco, CA</span>
                                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Search Bar */}
                            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1 lg:px-4 lg:py-2 flex-1 max-w-md mx-4 hover:bg-gray-200 transition-colors duration-300">
                                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search CuratedEats"
                                    className="bg-transparent outline-none text-xs lg:text-sm flex-1"
                                />
                            </div>

                            {/* User Actions */}
                            <button className="text-gray-700 hover:text-gray-900 text-xs lg:text-sm font-medium transition-colors duration-300 px-2 py-1 lg:px-3 lg:py-2 rounded-lg hover:bg-gray-50">
                                Log in
                            </button>
                            <button className="bg-black text-white px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm">
                                Sign up
                            </button>
                        </div>
                    </div>


                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                        Pickup nearby
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300">
                            Show Map
                        </button>
                        <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                            </svg>
                            <span>Deals</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300">
                            <span>$ Price</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex items-center space-x-6 mb-8 overflow-x-auto pb-2">
                    {[
                        { name: 'All', icon: null, selected: selectedCategory === 'All' },
                        { name: "People's Pick", icon: '👥', selected: selectedCategory === "People's Pick" },
                        { name: 'Influencer Picks', icon: '⭐', selected: selectedCategory === 'Influencer Picks' },
                        { name: 'Trending', icon: '🔥', selected: selectedCategory === 'Trending' },
                        { name: 'New & Noteworthy', icon: null, badge: 'NEW', selected: selectedCategory === 'New & Noteworthy' },
                        { name: 'Fast Food', icon: '🍔', selected: selectedCategory === 'Fast Food' },
                        { name: 'Sushi', icon: '🍣', selected: selectedCategory === 'Sushi' },
                        { name: 'Pizza', icon: '🍕', selected: selectedCategory === 'Pizza' },
                        { name: 'Chinese', icon: '🥢', selected: selectedCategory === 'Chinese' }
                    ].map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${category.selected
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category.badge && (
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                    {category.badge}
                                </span>
                            )}
                            {category.icon && <span>{category.icon}</span>}
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Restaurant Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[
                        {
                            name: 'Bamboo Garden',
                            cuisine: 'Asian Fusion',
                            rating: 4.8,
                            time: '25-35 min',
                            distance: '0.3 mi',
                            price: '$$',
                            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
                            deal: 'Save up to $15'
                        },
                        {
                            name: 'Sunset Bistro',
                            cuisine: 'American',
                            rating: 4.6,
                            time: '30-45 min',
                            distance: '0.5 mi',
                            price: '$$$',
                            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
                            deal: '$0 delivery fee'
                        },
                        {
                            name: 'Spice Route',
                            cuisine: 'Indian',
                            rating: 4.9,
                            time: '20-30 min',
                            distance: '0.2 mi',
                            price: '$$',
                            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
                            deal: '20% off orders $25+'
                        },
                        {
                            name: 'Ocean Breeze',
                            cuisine: 'Seafood',
                            rating: 4.7,
                            time: '35-50 min',
                            distance: '0.8 mi',
                            price: '$$$',
                            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
                            deal: 'Free item with $30+'
                        },
                        {
                            name: 'Verde Garden',
                            cuisine: 'Healthy',
                            rating: 4.5,
                            time: '15-25 min',
                            distance: '0.1 mi',
                            price: '$',
                            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                            deal: 'New customer deal'
                        },
                        {
                            name: 'Mama Mia Pizza',
                            cuisine: 'Italian',
                            rating: 4.4,
                            time: '20-35 min',
                            distance: '0.4 mi',
                            price: '$$',
                            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
                            deal: 'Buy 1 Get 1 Free'
                        },
                        {
                            name: 'Tokyo Sushi Bar',
                            cuisine: 'Japanese',
                            rating: 4.8,
                            time: '25-40 min',
                            distance: '0.6 mi',
                            price: '$$$',
                            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
                            deal: '15% off first order'
                        },
                        {
                            name: 'Burger Palace',
                            cuisine: 'Fast Food',
                            rating: 4.3,
                            time: '10-20 min',
                            distance: '0.2 mi',
                            price: '$',
                            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
                            deal: '$5 off orders $20+'
                        }
                    ].map((restaurant, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-2 left-2">
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-medium">
                                        {restaurant.deal}
                                    </span>
                                </div>
                                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-1">
                                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-900">{restaurant.rating}</span>
                                    </div>
                                    <span className="text-sm text-gray-600">{restaurant.time} {restaurant.distance}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-sm text-gray-600">{restaurant.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 py-16 w-full">
                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CE</span>
                                </div>
                                <span className="text-white font-bold text-xl">CuratedEats</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity duration-300">
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12"
                                    />
                                </a>
                                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity duration-300">
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="GET IT ON Google Play"
                                        className="h-16 -ml-2"
                                    />
                                </a>
                            </div>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Help & Support */}
                        <div className="space-y-3">
                            <h3 className="text-white font-semibold text-lg">Get Help</h3>
                            <ul className="space-y-2">
                                <li><a href="/help" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Get Help</a></li>
                                <li><a href="/apply" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Apply to get featured</a></li>
                            </ul>
                        </div>

                        {/* Restaurants & Cities */}
                        <div className="space-y-3">
                            <h3 className="text-white font-semibold text-lg">Restaurants</h3>
                            <ul className="space-y-2">
                                <li><a href="/restaurants" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Restaurants near me</a></li>
                                <li><a href="/cities" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">View all cities</a></li>
                                <li><a href="/pickup" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Pickup near me</a></li>
                                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">About CuratedEats</a></li>
                            </ul>
                        </div>

                        {/* Language Selector */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                <select className="bg-transparent text-gray-400 text-sm border-none outline-none">
                                    <option>English</option>
                                    <option>Français</option>
                                    <option>Español</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
                                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
                                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms</a>
                                <a href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Pricing</a>
                                <a href="/privacy-settings" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Do not sell or share my personal information</a>
                            </div>
                            <p className="text-gray-400 text-sm">
                                © 2025 CuratedEats Technologies Inc.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GetStartedPage; 