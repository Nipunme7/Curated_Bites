import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';

const RestaurantDetailPage = () => {
    const { restaurantName } = useParams();

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Restaurant Detail Page
                    </h1>
                    <p className="text-gray-600">
                        Restaurant: {restaurantName}
                    </p>
                    <p className="text-gray-500 mt-2">
                        This page is under construction. More details coming soon!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetailPage; 