import React from 'react';

function Newsletter() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-16 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0">
            <img
              src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=2000&h=1000"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1">
            <h2 className="text-3xl font-serif text-white sm:text-4xl">
              Stay Updated with Art Trends
            </h2>
            <p className="mt-6 text-lg text-indigo-100">
              Subscribe to our newsletter to receive curated art selections, artist interviews, and exclusive previews of upcoming exhibitions.
            </p>
          </div>
          <div className="relative mt-12 sm:mt-16 lg:mt-0">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                placeholder="Enter your email"
              />
              <button className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50">
                Subscribe Now
              </button>
            </div>
            <p className="mt-4 text-sm text-indigo-100">
              We care about your privacy. Read our{' '}
              <a href="#" className="font-medium text-white underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;