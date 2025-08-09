import React, { useState } from 'react';

const Navbar = ({ showMap = false, onToggleMap = () => { } }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        { name: 'All', icon: null },
        { name: "People's Pick", icon: '👥' },
        { name: 'Influencer Picks', icon: '⭐' },
        { name: 'Trending', icon: '🔥' },
        { name: 'New & Noteworthy', badge: 'NEW' },
        { name: 'Fast Food', icon: '🍔' },
        { name: 'Sushi', icon: '🍣' },
        { name: 'Pizza', icon: '🍕' },
        { name: 'Chinese', icon: '🥢' }
    ];

    return (
        <div className="bg-white border-b border-gray-100">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-6">

                {/* Top Section - Title and Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">

                    {/* Page Title */}
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-0">
                        Pickup nearby
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={onToggleMap}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${showMap ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                            </svg>
                            <span>{showMap ? 'Hide Map' : 'Show Map'}</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                            </svg>
                            <span>Deals</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                            <span>$ Price</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Category Filter Bar */}
                <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${selectedCategory === category.name
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category.badge && (
                                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                                    {category.badge}
                                </span>
                            )}
                            {category.icon && <span className="text-base">{category.icon}</span>}
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar; 