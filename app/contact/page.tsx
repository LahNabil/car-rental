import React from 'react'

const ContactPage = () => {
    return (
        <main className="max-w-screen-xl mx-auto px-4 py-20 ">
          <section className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 md:p-12 mt-5">
            
            {/* Contact Info Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're interested in a car, have a question about financing, or just want to say hello — we're happy to hear from you!
              </p>
    
              <div className="space-y-4 text-blue-900">
                <p className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                  </svg>
                  1234 Dream Car St, Casablanca, MA
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v4a2 2 0 002 2h14a2 2 0 002-2v-4" />
                  </svg>
                  contact@dreamcar.com
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h8a1 1 0 00.92-.62l3-7A1 1 0 0019 8H7" />
                  </svg>
                  +212 6 12 34 56 78
                </p>
              </div>
            </div>
    
            {/* Contact Form Section */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Full Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Email Address</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Message</label>
                  <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                </div>
    
                <button type="submit" className="w-full py-3 rounded-full bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      );
    
}

export default ContactPage