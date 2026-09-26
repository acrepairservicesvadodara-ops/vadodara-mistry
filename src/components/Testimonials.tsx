"use client";

import { testimonials } from "@/lib/business-config";
import { Star } from "lucide-react";

interface TestimonialsProps {
  filterService?: string;
  limit?: number;
  showAll?: boolean;
}

export default function Testimonials({ filterService, limit = 6, showAll = false }: TestimonialsProps) {
  // Filter by service if provided, otherwise show random mix
  let displayTestimonials = showAll 
    ? testimonials 
    : filterService 
      ? testimonials.filter(t => t.service.toLowerCase().includes(filterService.toLowerCase())).slice(0, limit)
      : testimonials.slice(0, limit);
  
  // If no matching testimonials, show random ones
  if (displayTestimonials.length < 3) {
    displayTestimonials = testimonials.slice(0, limit);
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real reviews from our valued customers across Vadodara. 
            We take pride in delivering quality work and excellent service.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.8/5</span>
            <span className="text-gray-500">based on 2500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Service Badge */}
              <div className="mb-3">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
                  {testimonial.service}
                </span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-4">
                {new Date(testimonial.date).toLocaleDateString("en-IN", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/vadodaramistry/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-6 py-3 rounded-lg transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
