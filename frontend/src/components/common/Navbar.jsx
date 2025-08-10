import React from 'react';

const Navbar = ({
    showMap,
    onToggleMap,
    selectedCategory,
    onChangeCategory,
    dealsOnly,
    onToggleDeals,
    selectedPrice,
    onPriceChange
}) => {
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

                        <button
                            onClick={onToggleDeals}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${dealsOnly
                                ? 'bg-orange-500 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            aria-pressed={dealsOnly}
                        >
                            Deals
                        </button>

                        {/* Price Filter Dropdown */}
                        <div className="relative">
                            <select
                                value={selectedPrice || ''}
                                onChange={(e) => onPriceChange(e.target.value || null)}
                                className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-none cursor-pointer pr-8"
                            >
                                <option value="">All Prices</option>
                                <option value="$">$</option>
                                <option value="$$">$$</option>
                                <option value="$$$">$$$</option>
                                <option value="$$$$">$$$$</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Filter Bar */}
                <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => onChangeCategory(category.name)}
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