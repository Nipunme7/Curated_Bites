import React, { useState } from 'react';
import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';
import RestaurantGrid from '../components/common/RestaurantGrid';
import Footer from '../components/common/Footer';

const MainPage = () => {
    const [showMap, setShowMap] = useState(false);
    // Sample restaurant data matching the design
    const restaurants = [
        {
            id: 1,
            name: "Bamboo Garden",
            cuisine: "Asian Fusion",
            rating: "4.8",
            timing: "25-35 min",
            distance: "0.3 mi",
            priceRange: "$$",
            promotion: "Save up to $15",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 2,
            name: "Sunset Bistro",
            cuisine: "American",
            rating: "4.6",
            timing: "20-30 min",
            distance: "0.7 mi",
            priceRange: "$$",
            promotion: "$0 delivery fee",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
            isFavorite: true
        },
        {
            id: 3,
            name: "Spice Route",
            cuisine: "Indian",
            rating: "4.9",
            timing: "25-35 min",
            distance: "1.2 mi",
            priceRange: "$$",
            promotion: "20% off orders $25+",
            tag: "FoodieLife",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 4,
            name: "Ocean Breeze",
            cuisine: "Seafood",
            rating: "4.7",
            timing: "30-40 min",
            distance: "2.1 mi",
            priceRange: "$$$",
            promotion: "Free item with $30+",
            image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 5,
            name: "Verde Garden",
            cuisine: "Healthy",
            rating: "4.5",
            timing: "15-20 min",
            distance: "0.5 mi",
            priceRange: "$$",
            promotion: "New customer deal",
            tag: "HealthyEats",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center",
            isFavorite: true
        },
        {
            id: 6,
            name: "Mama Mia Pizza",
            cuisine: "Italian",
            rating: "4.4",
            timing: "20-30 min",
            distance: "1.5 mi",
            priceRange: "$$",
            promotion: "Buy 1 Get 1 Free",
            tag: "PizzaLovers",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 7,
            name: "Tokyo Sushi Bar",
            cuisine: "Japanese",
            rating: "4.8",
            timing: "25-35 min",
            distance: "1.2 mi",
            priceRange: "$$",
            promotion: "15% off first order",
            tag: "TokyoEats",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 8,
            name: "Burger Palace",
            cuisine: "Fast Food",
            rating: "4.3",
            timing: "10-15 min",
            distance: "0.4 mi",
            priceRange: "$",
            promotion: "$5 off orders $20+",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 9,
            name: "Taco Fiesta",
            cuisine: "Mexican",
            rating: "4.6",
            timing: "15-25 min",
            distance: "0.8 mi",
            priceRange: "$",
            promotion: "Free chips & salsa",
            tag: "TacoTuesday",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 10,
            name: "Golden Dragon",
            cuisine: "Chinese",
            rating: "4.7",
            timing: "20-30 min",
            distance: "1.0 mi",
            priceRange: "$$",
            promotion: "Family meal deal",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
            isFavorite: true
        },
        {
            id: 11,
            name: "Mediterranean Delight",
            cuisine: "Mediterranean",
            rating: "4.8",
            timing: "25-35 min",
            distance: "1.8 mi",
            priceRange: "$$",
            promotion: "20% off lunch",
            tag: "MediterraneanLife",
            image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 12,
            name: "BBQ Smokehouse",
            cuisine: "BBQ",
            rating: "4.5",
            timing: "30-45 min",
            distance: "2.5 mi",
            priceRange: "$$",
            promotion: "Free side with entrée",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 13,
            name: "Fresh Catch",
            cuisine: "Seafood",
            rating: "4.9",
            timing: "35-45 min",
            distance: "3.0 mi",
            priceRange: "$$$",
            promotion: "Catch of the day special",
            tag: "SeafoodLovers",
            image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 14,
            name: "Vegan Paradise",
            cuisine: "Vegan",
            rating: "4.4",
            timing: "20-30 min",
            distance: "1.1 mi",
            priceRange: "$$",
            promotion: "Plant-based special",
            tag: "VeganLife",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        },
        {
            id: 15,
            name: "Dessert Heaven",
            cuisine: "Desserts",
            rating: "4.6",
            timing: "15-20 min",
            distance: "0.6 mi",
            priceRange: "$$",
            promotion: "Buy 2 get 1 free",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
            isFavorite: true
        },
        {
            id: 16,
            name: "Street Food Express",
            cuisine: "Street Food",
            rating: "4.3",
            timing: "10-20 min",
            distance: "0.9 mi",
            priceRange: "$",
            promotion: "Street food combo",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center",
            isFavorite: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Navbar showMap={showMap} onToggleMap={() => setShowMap((s) => !s)} />

            {/* Restaurant Grid Section */}
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <RestaurantGrid restaurants={restaurants} showMap={showMap} />
            </div>

            <Footer />
        </div>
    );
};

export default MainPage; 