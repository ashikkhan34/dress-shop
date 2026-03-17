"use client";
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, MessageSquare, Filter, Plus } from 'lucide-react';

// --- Types ---
interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  dressName: string;
  comment: string;
  image: string;
  date: string;
}

const ReviewPage: React.FC = () => {
  // --- Sample Data ---
  const featuredReviews: Review[] = [
    {
      id: 1,
      name: "Sophia Montgomery",
      location: "New York, NY",
      rating: 5,
      dressName: "Midnight Silk Gala Gown",
      comment: "I wore this to a charity gala and I've never received so many compliments in my life. The fit was absolute perfection, and the silk felt like a second skin. Truly a masterpiece of tailoring!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      date: "Oct 12, 2025"
    },
    {
      id: 2,
      name: "Isabella Rossi",
      location: "Milan, Italy",
      rating: 5,
      dressName: "Summer Petal Sundress",
      comment: "The attention to detail in the embroidery is stunning. It's light, breathable, and fits exactly as the measurements suggested. Shipping to Italy was faster than expected!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      date: "Nov 05, 2025"
    },
    {
      id: 3,
      name: "Elena Gilbert",
      location: "London, UK",
      rating: 5,
      dressName: "Velvet Emerald Evening Wrap",
      comment: "Customer service helped me choose the right size for my body type. The dress arrived in a beautiful box, smelling like lavender. It’s the little things that make DressShop the best.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      date: "Dec 20, 2025"
    }
  ];

  const allReviews: Review[] = [
    { id: 4, name: "Chloe T.", location: "Paris", rating: 5, dressName: "Lace Bridal", comment: "Breathtaking quality.", image: "", date: "2 days ago" },
    { id: 5, name: "Sarah M.", location: "Sydney", rating: 4, dressName: "Boho Maxi", comment: "Slightly long, but beautiful fabric.", image: "", date: "1 week ago" },
    { id: 6, name: "Amara K.", location: "Lagos", rating: 5, dressName: "Cocktail Mini", comment: "The color is so vibrant!", image: "", date: "2 weeks ago" },
    { id: 7, name: "Jessica R.", location: "LA", rating: 5, dressName: "Workwear Midi", comment: "Perfect for the office.", image: "", date: "1 month ago" },
  ];

  // --- Carousel Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featuredReviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredReviews.length - 1 : prev - 1));
  };

  // Star Helper
  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      
      {/* 1. HERO & STATS */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 italic">The DressShop <br/>Experience</h1>
            <p className="text-slate-400 text-lg mb-8">Join over 10,000 women worldwide who found their perfect silhouette with us. Real stories, real confidence.</p>
            <div className="flex gap-10">
              <div>
                <p className="text-4xl font-bold text-rose-500">4.9/5</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Average Rating</p>
              </div>
              <div className="w-px h-12 bg-slate-700 hidden sm:block"></div>
              <div>
                <p className="text-4xl font-bold text-rose-500">12k+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Verified Reviews</p>
              </div>
            </div>
          </div>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-rose-500 hover:text-white transition-all">
            <Plus size={20} /> Write a Review
          </button>
        </div>
      </section>

      {/* 2. FEATURED CAROUSEL SECTION */}
      <section className="py-24 px-6 bg-rose-50/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold tracking-widest uppercase text-sm">Top Testimonials</span>
            <h2 className="text-4xl font-bold mt-2">What Our VIPs Are Saying</h2>
          </div>

          <div className="relative group">
            {/* The Main Slide */}
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] transition-all duration-500">
              <div className="md:w-1/2 relative">
                <img 
                  src={featuredReviews[currentIndex].image} 
                  className="w-full h-full object-cover" 
                  alt="Customer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-xs font-bold text-slate-800 uppercase">Verified Purchase</span>
                </div>
              </div>

              <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <Quote size={48} className="text-rose-100 mb-6" />
                {renderStars(featuredReviews[currentIndex].rating)}
                <h3 className="text-2xl font-bold mt-4 mb-2">{featuredReviews[currentIndex].dressName}</h3>
                <p className="text-xl text-slate-600 italic leading-relaxed mb-8">
                  {featuredReviews[currentIndex].comment}
                </p>
                <div>
                  <p className="font-bold text-lg text-slate-900">{featuredReviews[currentIndex].name}</p>
                  <p className="text-slate-500">{featuredReviews[currentIndex].location} • {featuredReviews[currentIndex].date}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-10">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-md bg-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-md bg-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Decorative element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-200 rounded-full blur-[100px] opacity-20 -z-0"></div>
      </section>

      {/* 3. ALL REVIEWS GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Latest Feedback</h2>
            <p className="text-slate-500">Read thoughts from our global community</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50 transition-colors">
              <Filter size={18} /> Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allReviews.map((review) => (
            <div key={review.id} className="p-8 border border-slate-100 rounded-3xl bg-white hover:shadow-xl transition-shadow group">
              <div className="mb-4">{renderStars(review.rating)}</div>
              <p className="text-slate-700 mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300 italic">
                {review.comment}
              </p>
              <div className="pt-6 border-t border-slate-50">
                <p className="font-bold text-sm uppercase tracking-tight">{review.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-rose-500 font-medium">{review.dressName}</span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-slate-900 font-bold border-b-2 border-rose-500 pb-1 hover:text-rose-600 transition-colors">
            Load More Reviews
          </button>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <MessageSquare size={120} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
          <h2 className="text-4xl font-bold mb-6">Are you happy with your purchase?</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">Share your photos and story with us to get featured and receive 15% off your next order.</p>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full font-bold transition-transform hover:scale-105 relative z-10">
            Submit Your Story
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;