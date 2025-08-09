import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';

const LandingPage = () => {
    const featuresRef = useRef(null);
    const statsRef = useRef(null);
    const ctaRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

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
            <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
                {/* Mobile menu backdrop */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="flex justify-between items-center h-14 lg:h-16 xl:h-18">
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-sm lg:text-base">CE</span>
                                </div>
                                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">CuratedEats</span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 lg:ml-16 xl:ml-20 flex items-baseline space-x-4 lg:space-x-6 xl:space-x-8">
                                <a
                                    href="#features"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('features')?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'center'
                                        });
                                    }}
                                    className="text-gray-700 hover:text-orange-600 px-3 py-2 lg:px-4 lg:py-3 rounded-md text-sm lg:text-base font-medium transition duration-300 ease-in-out cursor-pointer"
                                >
                                    Features
                                </a>
                                <a
                                    href="#testimonials"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('testimonials')?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'center'
                                        });
                                    }}
                                    className="text-gray-700 hover:text-orange-600 px-3 py-2 lg:px-4 lg:py-3 rounded-md text-sm lg:text-base font-medium transition duration-300 ease-in-out cursor-pointer"
                                >
                                    Reviews
                                </a>
                                <a
                                    href="#about"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('about')?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'center'
                                        });
                                    }}
                                    className="text-gray-700 hover:text-orange-600 px-3 py-2 lg:px-4 lg:py-3 rounded-md text-sm lg:text-base font-medium transition duration-300 ease-in-out cursor-pointer"
                                >
                                    About
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'center'
                                        });
                                    }}
                                    className="text-gray-700 hover:text-orange-600 px-3 py-2 lg:px-4 lg:py-3 rounded-md text-sm lg:text-base font-medium transition duration-300 ease-in-out cursor-pointer"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <button className="text-gray-700 hover:text-orange-600 px-3 py-2 lg:px-4 lg:py-3 rounded-md text-sm lg:text-base font-medium transition duration-300 ease-in-out">
                                    Sign In
                                </button>
                                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                    Login
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

                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    navigate('/bites');
                                }}
                                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg block w-full text-center transition-colors duration-300"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative overflow-hidden min-h-screen flex items-start sm:items-center justify-center text-center bg-[#fef4ef] pt-20 sm:pt-0">
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 text-sm py-1 px-3 rounded-full shadow-sm mb-12 sm:mb-4">
                        <span role="img" aria-label="pin">📍</span>
                        <span>Now serving San Francisco, CA</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight mb-12 sm:mb-4">
                        <span className="inline-block animate-fade-in-up">Food</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-200">Worth</span>{' '}
                        <span className="inline-block text-orange-600 animate-fade-in-up animation-delay-400">Waiting</span>{' '}
                        <span className="inline-block text-orange-600 animate-fade-in-up animation-delay-600 animate-pulse">For</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-16 sm:mb-6 max-w-3xl mx-auto">
                        Skip the mediocre. Hand-picked by your favorite foodies for
                        exceptional quality and taste.
                    </p>
                    <button
                        onClick={() => navigate('/bites')}
                        className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 sm:py-2 sm:px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in mb-16 sm:mb-4"
                    >
                        <span className="mr-2 animate-pulse">▶</span> Get Started Now
                    </button>
                    <p className="text-sm text-gray-600 mb-16 sm:mb-4">
                        No ads. No chains. Just real food.
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-16 sm:mb-4">
                        <span className="inline-block animate-fade-in-up animation-delay-200">Curating</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-400">one</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-600">city</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-800">at</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-1000">a</span>{' '}
                        <span className="inline-block animate-fade-in-up animation-delay-1200">time.</span>
                    </h2>
                    <div className="text-gray-500 text-sm">
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
            <div ref={featuresRef} id="features" className="bg-white py-16 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 scroll-animate">
                            Why Food Lovers Choose Us
                        </h2>
                        <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed scroll-animate">
                            We're not just another delivery app. We're your gateway to the city's best culinary experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="w-12 h-12 bg-[#fef4ef] rounded-2xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Curated Excellence</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Every restaurant is personally vetted by our food experts
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="w-12 h-12 bg-[#fef4ef] rounded-2xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Support Local</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Discover hidden gems and support your community
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="w-12 h-12 bg-[#fef4ef] rounded-2xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Real-Time Tracking</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Know exactly when your perfectly prepared meal arrives
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div id="testimonials" className="bg-[#fef4ef] py-16 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 scroll-animate">
                            What Food Lovers Say
                        </h2>
                        <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed scroll-animate">
                            Real reviews from real people in your city
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="flex items-center mb-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">Sarah Chen</h3>
                                    <p className="text-sm text-gray-600">Downtown San Francisco</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                "Finally, a food app that actually cares about quality. Every restaurant is hand-picked and the food always exceeds expectations."
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="flex items-center mb-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">Marcus Rodriguez</h3>
                                    <p className="text-sm text-gray-600">Mission District</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                "No more scrolling through endless mediocre options. CuratedEats only shows the best, and they deliver on that promise."
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                            <div className="flex items-center mb-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">Emma Thompson</h3>
                                    <p className="text-sm text-gray-600">North Beach</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                "The local discovery feature helped me find my new favorite restaurant. Support local, eat better - that's the CuratedEats way."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="bg-white py-16 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 scroll-animate">
                            About CuratedEats
                        </h2>
                        <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed scroll-animate">
                            Founded by food enthusiasts who were tired of sifting through mediocre options, CuratedEats is on a mission to connect you with only the finest dining experiences in your city.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg scroll-animate">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                To elevate your dining experience by curating only the highest quality restaurants and dishes, ensuring every meal is worth your time and money.
                            </p>
                        </div>

                        {/* Promise */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg scroll-animate">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Every restaurant on our platform is personally visited and vetted by our team of food experts. No algorithms, just genuine recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="bg-white py-16 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 scroll-animate">
                        Trusted by food lovers across the globe
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-16">
                        <div className="text-center scroll-animate">
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">5,000+</div>
                            <div className="text-gray-600 text-sm sm:text-base">Happy Customers</div>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                        <div className="text-center scroll-animate">
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">200+</div>
                            <div className="text-gray-600 text-sm sm:text-base">Partner Restaurants</div>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                        <div className="text-center scroll-animate">
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50,000+</div>
                            <div className="text-gray-600 text-sm sm:text-base">Orders Delivered</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section and Footer Container */}
            <div className="scroll-animate">
                {/* CTA Section */}
                <div ref={ctaRef} className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                            Ready to Taste the Difference?
                        </h2>
                        <p className="text-lg lg:text-xl xl:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Join thousands of food lovers who've discovered their new favorite restaurants through CuratedEats.
                        </p>
                        <button
                            onClick={() => navigate('/bites')}
                            className="bg-white text-orange-500 px-6 py-3 rounded-xl text-base font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4"
                        >
                            Start Exploring in San Francisco
                        </button>
                        <p className="text-orange-100 text-sm">
                            Available for pickup and delivery • No signup required to browse
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
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