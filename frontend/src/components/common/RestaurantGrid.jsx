import React from 'react';
import RestaurantCard from './RestaurantCard';

const MapPanel = () => (
    <div className="hidden lg:block bg-white rounded-xl border border-gray-200 shadow-sm h-full min-h-[420px]">
        <div className="w-full h-full rounded-xl overflow-hidden">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
        </div>
    </div>
);

const RestaurantGrid = ({ restaurants, className = '', showMap = false }) => {
    if (!showMap) {
        return (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard
                        key={restaurant.id || index}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        );
    }

    // When map is shown: insert a 2-column-wide panel after the first two cards on lg+.
    // Cards keep the same size because the grid template remains 4 columns and all cards still span 1 col.
    const firstTwo = restaurants.slice(0, 2);
    const rest = restaurants.slice(2);

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
            {/* First two cards */}
            {firstTwo.map((restaurant, index) => (
                <RestaurantCard key={restaurant.id || index} restaurant={restaurant} />
            ))}

            {/* Map occupies two columns on lg+, full width on small */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
                <MapPanel />
            </div>

            {/* Remaining cards flow below and to the right naturally */}
            {rest.map((restaurant, index) => (
                <RestaurantCard key={restaurant.id || `rest-${index}`} restaurant={restaurant} />
            ))}
        </div>
    );
};

export default RestaurantGrid; 