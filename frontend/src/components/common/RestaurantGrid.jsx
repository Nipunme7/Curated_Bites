import React from 'react';
import RestaurantCard from './RestaurantCard';

const MapPanel = () => (
    <div className="hidden lg:block">
        <div className="sticky top-28">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-[calc(100vh-10rem)] min-h-[420px] overflow-hidden">
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
                </div>
            </div>
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

    // Map view: map always takes the space of two cards. On lg (3-cols), map spans 2 and list spans 1.
    // On xl (4-cols), map spans 2 and list spans 2. Card widths match the no-map layout.
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
            <div className="lg:col-span-1 xl:col-span-2">
                <div className="lg:h-[calc(100vh-10rem)] lg:overflow-y-auto pr-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                        {restaurants.map((restaurant, index) => (
                            <RestaurantCard key={restaurant.id || index} restaurant={restaurant} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 xl:col-span-2">
                <MapPanel />
            </div>
        </div>
    );
};

export default RestaurantGrid; 