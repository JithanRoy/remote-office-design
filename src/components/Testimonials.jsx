import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <p className="mt-4 text-gray-700">
          Read testimonials from our happy clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-gray-100 shadow-md rounded-md">
            <p className="text-gray-600 italic">
              "This is the best service I have ever used!"
            </p>
            <h4 className="mt-4 text-xl font-semibold">- Client 1</h4>
          </div>
          <div className="p-6 bg-gray-100 shadow-md rounded-md">
            <p className="text-gray-600 italic">
              "Amazing experience and outstanding support!"
            </p>
            <h4 className="mt-4 text-xl font-semibold">- Client 2</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
