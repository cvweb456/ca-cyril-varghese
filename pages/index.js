import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">CA Cyril Varghese</h1>
        <p className="text-sm">Chartered Accountant | Professional Services</p>
      </header>

      <main className="p-6 grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Tax Consultation",
              "Audit & Assurance",
              "Accounting & Bookkeeping",
              "Company Registration",
              "GST Services",
              "Financial Planning",
              "Income Tax Services",
              "Australian Taxation"
            ].map(service => (
              <div key={service} className="border p-4 rounded-xl shadow">
                <h3 className="text-xl font-medium mb-2">{service}</h3>
                <p>Expert and reliable {service.toLowerCase()} to support your business growth.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Inquiry</h2>
          <form className="grid gap-4 md:grid-cols-2">
            <input placeholder="Your Name" className="p-2 border rounded" />
            <input placeholder="Email Address" type="email" className="p-2 border rounded" />
            <input placeholder="Phone Number" type="tel" className="p-2 border rounded" />
            <input className="md:col-span-2 p-2 border rounded" placeholder="Your Inquiry" />
            <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-2 rounded">Submit</button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <div className="p-4 border rounded-2xl bg-white shadow-sm">
            <p>Your cart is currently empty.</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Browse Services</button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-700 text-white text-center p-4 mt-12">
        &copy; 2025 CA Cyril Varghese. All rights reserved.
      </footer>
    </div>
  );
}
