import React, { useEffect, useRef, useState } from 'react';

const LandingPage = () => {
    const featuresRef = useRef(null);
    const statsRef = useRef(null);
    const ctaRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Scroll to top when page loads/refreshes
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, []);

    useEffect(() => {
        // Only run IntersectionObserver in browser environment
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                        }
                    });
                },
                { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
            );

            const elements = document.querySelectorAll('.scroll-animate');
            elements.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                {/* Mobile menu backdrop */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CE</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900">CuratedEats</span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#features" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                                    Features
                                </a>
                                <a href="#reviews" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                                    Reviews
                                </a>
                                <a href="#about" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                                    About
                                </a>
                                <a href="#contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                                    Sign In
                                </button>
                                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                                {/* Icon when menu is closed. */}
                                <svg
                                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                {/* Icon when menu is open. */}
                                <svg
                                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 px-4 py-6 space-y-3 z-50 animate-slide-down">
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-8 h-8 text-gray-500 hover:text-orange-600 flex items-center justify-center transition-colors duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-2">
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-orange-600 block py-3 px-4 text-base font-medium transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Features
                            </a>

                            <a
                                href="#reviews"
                                className="text-gray-700 hover:text-orange-600 block py-3 px-4 text-base font-medium transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Reviews
                            </a>

                            <a
                                href="#about"
                                className="text-gray-700 hover:text-orange-600 block py-3 px-4 text-base font-medium transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </a>

                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-orange-600 block py-3 px-4 text-base font-medium transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>

                        <div className="pt-4 border-t border-gray-100 space-y-3">
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg block w-full text-center transition-colors duration-300">
                                Sign In
                            </button>

                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg block w-full text-center transition-colors duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative overflow-hidden py-24 sm:py-32 lg:py-40 text-center">
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 text-sm py-1 px-3 rounded-full shadow-sm mb-6">
                        <span role="img" aria-label="pin">📍</span>
                        <span>Now serving San Francisco, CA</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4">
                        <span className="inline-block animate-fade-in-up">Food</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-200">Worth</span>{' '}
                        <span className="inline-block text-orange-600 animate-fade-in-up animation-delay-400">Waiting</span>{' '}
                        <span className="inline-block text-orange-600 animate-fade-in-up animation-delay-600 animate-pulse">For</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Skip the mediocre. Hand-picked by your favorite foodies for
                        exceptional quality and taste.
                    </p>
                    <button className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in">
                        <span className="mr-2 animate-pulse">▶</span> Get Started Now
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                        No ads. No chains. Just real food.
                    </p>
                    <h2 className="text-4xl font-bold text-gray-800 mt-16">
                        <span className="inline-block animate-fade-in-up animation-delay-200">Curating</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-400">one</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-600">city</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-800">at</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-1000">a</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-1200">time.</span>
                    </h2>
                    <div className="mt-16 text-gray-500 text-sm">
                        Discover quality
                        <svg
                            className="mx-auto mt-2 h-6 w-6 animate-bounce"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <div ref={featuresRef} id="features" className="bg-gray-50 py-24 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6 scroll-animate">
                            Why Food Lovers Choose Us
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed scroll-animate">
                            We're not just another delivery app. We're your gateway to the city's best culinary experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Curated Excellence</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Every restaurant is personally vetted by our food experts
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Support Local</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Discover hidden gems and support your community
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Real-Time Tracking</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Know exactly when your perfectly prepared meal arrives
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="bg-white py-24 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-gray-900 mb-16 scroll-animate">
                        Trusted by food lovers across the globe
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-20">
                        <div className="text-center scroll-animate">
                            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">5,000+</div>
                            <div className="text-gray-600 text-base sm:text-lg">Happy Customers</div>
                        </div>
                        <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
                        <div className="text-center scroll-animate">
                            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">200+</div>
                            <div className="text-gray-600 text-base sm:text-lg">Partner Restaurants</div>
                        </div>
                        <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
                        <div className="text-center scroll-animate">
                            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">50,000+</div>
                            <div className="text-gray-600 text-base sm:text-lg">Orders Delivered</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section and Footer Container */}
            <div className="scroll-animate">
                {/* CTA Section */}
                <div ref={ctaRef} className="bg-gradient-to-r from-orange-500 to-orange-600 py-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-5xl font-bold text-white mb-8">
                            Ready to Taste the Difference?
                        </h2>
                        <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of food lovers who've discovered their new favorite restaurants through CuratedEats.
                        </p>
                        <button className="bg-white text-orange-500 px-6 sm:px-12 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6">
                            Start Exploring in San Francisco
                        </button>
                        <p className="text-orange-100 text-base">
                            Available for pickup and delivery • No signup required to browse
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CE</span>
                                </div>
                                <span className="text-white font-bold text-xl">CuratedEats</span>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
                                © 2025 CuratedEats. Bringing you the city's finest food, one meal at a time.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounce-in 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s forwards;
          opacity: 0;
        }
        .scroll-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-slide-down {
          animation: slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.3s;
        }
        .animation-delay-300 {
          animation-delay: 0.6s;
        }
        .animation-delay-400 {
          animation-delay: 0.9s;
        }
        .animation-delay-600 {
          animation-delay: 1.2s;
        }
        .animation-delay-800 {
          animation-delay: 1.4s;
        }
        .animation-delay-1000 {
          animation-delay: 1.6s;
        }
        .animation-delay-1200 {
          animation-delay: 1.8s;
        }
        .animation-delay-1400 {
          animation-delay: 2.0s;
        }
        .animation-delay-1600 {
          animation-delay: 2.2s;
        }
        .animation-delay-1800 {
          animation-delay: 2.4s;
        }
      `}</style>
        </div>
    );
};

export default LandingPage; 