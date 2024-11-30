import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="mt-4 text-gray-700">Discover our amazing features.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold">Feature 1</h3>
            <p className="mt-2 text-gray-600">Description of feature 1.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold">Feature 2</h3>
            <p className="mt-2 text-gray-600">Description of feature 2.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold">Feature 3</h3>
            <p className="mt-2 text-gray-600">Description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
