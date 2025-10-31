export default function ModernReviewSection() {
  const reviews = [
    {
      name: 'Raj Sharma',
      location: 'Ahmedabad, GJ',
      rating: 5,
      comment:
        'Excellent installation service. The team was professional and completed the work on time. Highly recommend!',
    },
    {
      name: 'Megha Patel',
      location: 'Vadodara, GJ',
      rating: 5,
      comment:
        'Smooth installation process and good support after setup. Just took a day extra due to rain.',
    },
    {
      name: 'Sanjay Yadav',
      location: 'Nagpur, MH',
      rating: 5,
      comment:
        'Clean work, on-time completion, and great after-sales service. Will refer to others!',
    },
  ];

  return (
    <section className="bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold text-gray-900  mb-4 sm:text-5xl">
          What Our <span className="text-indigo-600">Customers Say</span>
        </h2>
        <p className="text-xl text-gray-600  mb-12 max-w-3xl mx-auto">
          Hear from the people who trust our service and expertise.
        </p>

        {/* Reviews Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white  h-full p-4 rounded-2xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-amber-700/50 transition duration-300 transform hover:-translate-y-1 border-3 border-gray-900/15"
            >
              {/* Star Rating */}
              <div className="mb-2 flex items-center justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < r.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Comment with Quote Styling */}
              <blockquote className="relative mb-3 flex-1">
                <p className="text-gray-800 italic text-base leading-relaxed">
                  {r.comment}
                </p>
              </blockquote>

              {/* Reviewer Details pinned at bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-lg font-semibold text-gray-900">{r.name}</div>
                <div className="text-sm text-indigo-600 font-medium">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
