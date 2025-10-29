

export default function SimpleReviewSection() {
  const reviews = [
    {
      name: 'Raj Sharma',
      location: 'Ahmedabad, GJ',
      rating: 5,
      comment: 'Excellent installation service. The team was professional and completed the work on time. Highly recommend!'
    },
    {
      name: 'Megha Patel',
      location: 'Vadodara, GJ',
      rating: 4,
      comment: 'Smooth installation process and good support after setup. Just took a day extra due to rain.'
    },
    {
      name: 'Sanjay Yadav',
      location: 'Nagpur, MH',
      rating: 5,
      comment: 'Clean work, on-time completion, and great after-sales service. Will refer to others!'
    }
  ];

  return (
    <section className="bg-white py-5">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">
          Customer Reviews
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-3 flex items-center justify-center gap-1">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{r.comment}</p>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{r.name}</div>
              <div className="text-xs text-gray-500">{r.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
