import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    const [isFavorite, setIsFavorite] = useState(restaurant.isFavorite || false);
    const navigate = useNavigate();

    const handleFavoriteToggle = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    const handleCardClick = () => {
        // Convert restaurant name to URL-friendly format
        const urlName = restaurant.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        navigate(`/store/${urlName}`);
    };

    return (
        <div
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden border border-gray-100"
            onClick={handleCardClick}
        >
            {/* Image Container */}
            <div className="relative">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-52 object-cover"
                />

                {/* Promotional Badge - Top Left */}
                {restaurant.promotion && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-orange-500 text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow-sm">
                            {restaurant.promotion}
                        </span>
                    </div>
                )}

                {/* Recommendation Badge - Bottom Left */}
                {restaurant.tag && (
                    <div className="absolute bottom-3 left-3">
                        <span className="bg-gradient-to-r from-purple-700 to-purple-500 text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow-sm">
                            ✨ {restaurant.tag}
                        </span>
                    </div>
                )}

                {/* Favorite Icon - Top Right */}
                <button
                    onClick={handleFavoriteToggle}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
                >
                    <svg
                        className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                        fill={isFavorite ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
            </div>

            {/* Restaurant Info */}
            <div className="p-5">
                {/* Restaurant Name and Rating */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight pr-4">
                        {restaurant.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-900 font-bold">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span>{restaurant.rating}</span>
                    </div>
                </div>

                {/* Cuisine Type - Left Aligned */}
                <p className="text-gray-600 text-sm mb-3 text-left">
                    {restaurant.cuisine}
                </p>

                {/* Recommendation Tag */}
                {restaurant.tag && (
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="text-purple-600 text-sm">✨</span>
                        <span className="text-purple-600 text-sm font-medium">
                            Recommended by {restaurant.tag}
                        </span>
                    </div>
                )}

                {/* Timing, Distance and Price Range */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3 text-gray-500">
                        <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{restaurant.timing}</span>
                        </div>
                        <span>•</span>
                        <span>{restaurant.distance}</span>
                    </div>

                    {/* Price Range - Green and Bold */}
                    <div className="text-green-600 font-bold text-sm">
                        {restaurant.priceRange}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard; 