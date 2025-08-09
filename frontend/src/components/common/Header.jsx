import React, { useState } from 'react';

const Header = () => {
    const [selectedService, setSelectedService] = useState('Pickup');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            {/* Main Navbar */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4">

                    {/* Left Section - Logo & Service Selector */}
                    <div className="flex items-center justify-between lg:justify-start mb-4 lg:mb-0">
                        <div className="flex items-center space-x-6">
                            {/* Logo + Burger */}
                            <div className="flex items-center space-x-2">
                                {/* Hamburger (moved to the left of the logo) */}
                                <button
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="mr-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    aria-label="Open menu"
                                >
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CE</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900">CuratedEats</span>
                            </div>

                            {/* Service Selector - Hidden on mobile, shown on desktop */}
                            <div className="hidden lg:flex items-center space-x-1">
                                <button
                                    onClick={() => setSelectedService('Delivery')}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedService === 'Delivery'
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                                    </svg>
                                    <span>Delivery</span>
                                </button>

                                <button
                                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 cursor-not-allowed"
                                    disabled
                                >
                                    <span>Coming Soon</span>
                                </button>

                                <button
                                    onClick={() => setSelectedService('Pickup')}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedService === 'Pickup'
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Pickup</span>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button - removed (replaced by universal burger next to logo) */}
                    </div>

                    {/* Center Section - Location & Search */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0 lg:flex-1 lg:max-w-2xl lg:mx-8">

                        {/* Location Selector */}
                        <button className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Pick up now • Montreal, QC</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Search Bar */}
                        <div className="flex-1 relative">
                            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                                <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search for restaurants, cuisine, or dishes..."
                                    className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - User Actions */}
                    <div className="flex items-center justify-center space-x-3">
                        <button className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                            Log in
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200">
                            Sign up
                        </button>
                    </div>
                </div>

                {/* Mobile Service Selector */}
                <div className="lg:hidden flex items-center justify-center space-x-1 pb-4">
                    <button
                        onClick={() => setSelectedService('Delivery')}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${selectedService === 'Delivery'
                            ? 'bg-orange-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                        <span>Delivery</span>
                    </button>

                    <button
                        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 cursor-not-allowed"
                        disabled
                    >
                        <span>Coming Soon</span>
                    </button>

                    <button
                        onClick={() => setSelectedService('Pickup')}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${selectedService === 'Pickup'
                            ? 'bg-orange-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Pickup</span>
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white z-[60] shadow-xl transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-4 border-b">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-sm">CE</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900">Welcome</span>
                                <span className="text-xs text-gray-500">Manage account</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-100"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 px-2 py-3 space-y-1">
                        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800">
                            <span className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4-9 4-9-4z" />
                                </svg>
                                <span>Orders</span>
                            </span>
                        </button>

                        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800">
                            <span className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>Favorites</span>
                            </span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">2</span>
                        </button>

                        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800">
                            <span className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 0 16 0z" />
                                </svg>
                                <span>Account</span>
                            </span>
                        </button>

                        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800">
                            <span className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
                                </svg>
                                <span>Help</span>
                            </span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="border-t px-3 py-3">
                        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-red-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                            </svg>
                            <span>Sign out</span>
                        </button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Header; 