import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div>
        <section className="bg-white text-gray-800 py-20">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    {/* Header */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        About <span className="text-blue-600">Us</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        We're passionate about helping you find the perfect vehicle. Learn more about our journey, mission, and the values that drive us.
      </p>
    </div>

    {/* Content */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image / Illustration */}
      <Image
        src="/assets/about-us-car.webp"
        alt="Our Team"
        className="rounded-2xl shadow-xl w-full h-auto object-cover"
        width={600}
        height={400}
      />

      {/* Textual Content */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Driving Innovation & Trust
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Founded with a vision to simplify car buying and renting experiences, our platform bridges the gap between customers and top-quality vehicles. With a user-friendly interface, verified listings, and expert support, we’re redefining how people find and trust their dream cars.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-xl">✔</span>
            Transparent & trustworthy service
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-xl">✔</span>
            Thousands of satisfied clients
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-xl">✔</span>
            Passionate team of car enthusiasts
          </li>
        </ul>
      </div>
    </div>

    {/* Team / Stats / Mission Section (Optional) */}
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        To empower individuals with the knowledge and tools they need to make confident car decisions while delivering top-tier customer service.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default AboutPage