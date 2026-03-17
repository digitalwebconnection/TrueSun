import { useEffect, useState } from "react";

interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
  video: string;
}
// import video1 from "../../assets/TestiminialVideo/Testimonial-1.mp4"

export default function ModernReviewSection() {
  const reviews: Review[] = [
    {
      name: "Drashti sadrani",
      location: "Mumbai, Maharashtra",
      rating: 5,
      comment:
        "Excellent solar installation service by TrueSun Energy. Professional team, good quality work, and noticeable savings on electricity bills.",
      video:"https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Vrushali Kulkarni",
      location: "Mumbai, Maharashtra",
      rating: 5,
      comment:
        "Delivers reliable and efficient solutions with great professionalism and support.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Gauri ThunderBird",
      location: "Nagpur, MH",
      rating: 5,
      comment:
        "Visionary Team aligned with eco-friendly structures. Best wishes to the Team.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#686868] mb-4">
            What Our <span className="text-[#FC763A]">Customers Say</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from customers who trust our solar solutions and services.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT VIDEO */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              key={current}
              src={review.video}
              className="w-full h-[350px]"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              "{review.comment}"
            </p>

            {/* Name */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                {review.name}
              </h4>

              <p className="text-[#FC763A] font-medium">
                {review.location}
              </p>
            </div>
          </div>

        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full ${i === current ? "bg-[#FC763A]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}