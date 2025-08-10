import React, { useMemo, useState } from 'react';
import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';
import RestaurantGrid from '../components/common/RestaurantGrid';
import Footer from '../components/common/Footer';

const MainPage = () => {
    const [showMap, setShowMap] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [dealsOnly, setDealsOnly] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    // Sample restaurant data matching the design
    const restaurants = [
        {
            id: 1,
            name: "Sizzle & Spice",
            cuisine: "American",
            rating: "4.8",
            timing: "15-25 min",
            distance: "0.3 mi",
            priceRange: "$$",
            promotion: "20% off first order",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tag: "FoodieLife",
            tags: ["People's Pick", "Influencer Picks"]
        },
        {
            id: 2,
            name: "Bamboo Garden",
            cuisine: "Asian Fusion",
            rating: "4.6",
            timing: "25-35 min",
            distance: "0.8 mi",
            priceRange: "$$",
            promotion: "Save up to $15",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ['Trending']
        },
        {
            id: 3,
            name: "Fresh & Fit",
            cuisine: "Healthy",
            rating: "4.7",
            timing: "20-30 min",
            distance: "0.5 mi",
            priceRange: "$$",
            promotion: "Free delivery",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tag: "HealthyEats",
            tags: ["New & Noteworthy", "Influencer Picks"]
        },
        {
            id: 4,
            name: "Sunset Bistro",
            cuisine: "American",
            rating: "4.6",
            timing: "20-30 min",
            distance: "0.7 mi",
            priceRange: "$$",
            promotion: "$0 delivery fee",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
            isFavorite: true,
            tags: ["People's Pick"]
        },
        {
            id: 5,
            name: "Spice Route",
            cuisine: "Indian",
            rating: "4.9",
            timing: "25-35 min",
            distance: "1.2 mi",
            priceRange: "$$",
            promotion: "20% off orders $25+",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ['Trending']
        },
        {
            id: 6,
            name: "Pizza Palace",
            cuisine: "Italian",
            rating: "4.5",
            timing: "15-25 min",
            distance: "0.4 mi",
            priceRange: "$",
            promotion: "Buy 1 Get 1 Free",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tag: "PizzaLovers",
            tags: ["Pizza", "Influencer Picks"]
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
            isFavorite: false,
            tags: ['Sushi', 'Influencer Picks']
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
            isFavorite: false,
            tags: ['Fast Food', 'Trending']
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
            isFavorite: false,
            tags: ["Fast Food", "Influencer Picks"]
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
            isFavorite: true,
            tags: ['Chinese']
        },
        {
            id: 11,
            name: "Mediterranean Delight",
            cuisine: "Mediterranean",
            rating: "4.7",
            timing: "25-35 min",
            distance: "1.1 mi",
            priceRange: "$$",
            promotion: "Free hummus",
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tag: "MediterraneanLife",
            tags: ["New & Noteworthy", "Influencer Picks"]
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
            isFavorite: false,
            tags: []
        },
        {
            id: 13,
            name: "Fresh Catch",
            cuisine: "Seafood",
            rating: "4.8",
            timing: "30-40 min",
            distance: "1.8 mi",
            priceRange: "$$$",
            promotion: "Free appetizer",
            image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tag: "SeafoodLovers",
            tags: ["Deals", "Influencer Picks"]
        },
        {
            id: 14,
            name: "Vegan Paradise",
            cuisine: "Vegan",
            rating: "4.6",
            timing: "20-30 min",
            distance: "1.2 mi",
            priceRange: "$$",
            promotion: "Plant-based special",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tag: "VeganLife",
            tags: ["New & Noteworthy", "Influencer Picks"]
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
            isFavorite: true,
            tags: ['Deals']
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
            isFavorite: false,
            tags: []
        },
        {
            id: 17,
            name: "Dragon Express",
            cuisine: "Chinese",
            rating: "4.1",
            timing: "20-30 min",
            distance: "0.8 mi",
            priceRange: "$$",
            promotion: "",
            image: "https://images.unsplash.com/photo-1541542684-4a3a5c1a1f9b?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ['Chinese']
        },
        {
            id: 18,
            name: "Sakura Roll House",
            cuisine: "Japanese",
            rating: "4.2",
            timing: "25-35 min",
            distance: "1.3 mi",
            priceRange: "$$",
            promotion: "",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ['Sushi']
        },
        {
            id: 19,
            name: "SliceTown",
            cuisine: "Italian",
            rating: "4.0",
            timing: "20-30 min",
            distance: "0.9 mi",
            priceRange: "$",
            promotion: "",
            image: "https://images.unsplash.com/photo-1548365328-9f547fb0950b?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ['Pizza']
        },
        {
            id: 20,
            name: "Quick Bite",
            cuisine: "Fast Food",
            rating: "3.9",
            timing: "10-20 min",
            distance: "0.4 mi",
            priceRange: "$",
            promotion: "",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ['Fast Food']
        },
        {
            id: 21,
            name: "Chef's Table",
            cuisine: "American",
            rating: "4.7",
            timing: "30-40 min",
            distance: "1.9 mi",
            priceRange: "$$$",
            promotion: "",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ['Trending']
        },
        {
            id: 22,
            name: "Neighborhood Deli",
            cuisine: "American",
            rating: "4.3",
            timing: "15-20 min",
            distance: "0.6 mi",
            priceRange: "$",
            promotion: "",
            image: "https://images.unsplash.com/photo-1550547660-eaf6a6a59f86?w=400&h=300&fit=crop&crop=center",
            isFavorite: false,
            tags: ["People's Pick"]
        }
    ];

    const isDeal = (r) => {
        const promo = (r.promotion || '').toLowerCase();
        return promo.includes('off') || promo.includes('free') || (r.tags || []).includes('Deals');
    };

    const filteredRestaurants = useMemo(() => {
        let result = restaurants;

        // Category filter
        if (selectedCategory !== null) {
            const tagCategories = new Set(["People's Pick", 'Influencer Picks', 'Trending', 'New & Noteworthy', 'Fast Food', 'Sushi', 'Pizza', 'Chinese']);
            if (tagCategories.has(selectedCategory)) {
                result = result.filter(r => (r.tags || []).includes(selectedCategory) || r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase()));
            }
        }

        // Deals intersection
        if (dealsOnly) {
            result = result.filter(isDeal);
        }

        // Price filter
        if (selectedPrice !== null) {
            result = result.filter(r => r.priceRange === selectedPrice);
        }

        return result;
    }, [restaurants, selectedCategory, dealsOnly, selectedPrice]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Navbar
                showMap={showMap}
                onToggleMap={() => setShowMap(!showMap)}
                selectedCategory={selectedCategory}
                onChangeCategory={setSelectedCategory}
                dealsOnly={dealsOnly}
                onToggleDeals={() => setDealsOnly(!dealsOnly)}
                selectedPrice={selectedPrice}
                onPriceChange={setSelectedPrice}
            />

            {/* Restaurant Grid Section */}
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <RestaurantGrid restaurants={filteredRestaurants} showMap={showMap} />
            </div>

            <Footer />
        </div>
    );
};

export default MainPage; 