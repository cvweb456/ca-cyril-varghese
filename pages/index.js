
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  'Income Tax Filing',
  'GST Consultation',
  'Company Registration',
  'Accounting & Bookkeeping',
  'Audit Services',
  'Other Services'
];

const otherServices = [
  'Australian Tax Assistance',
  'Financial Planning',
  'Investment Advisory'
];

export default function Home() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      {/* CA India Logo */}
      <header className="bg-white shadow-md p-4 flex items-center justify-center">
        <Image src="/ca-logo.jpg" alt="CA India Logo" width={150} height={80} />
      </header>

      {/* Hero Section */}
      <div className="relative h-64">
        <Image
          src="/tax1.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="blur-sm opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-blue-900">CA CYRIL VARGHESE</h1>
        </div>
      </div>

      <main className="p-6 space-y-6">
        {/* Service Selection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Select a Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map(service => (
              <Button
                key={service}
                variant="outline"
                onClick={() => setSelectedService(service)}
              >
                {service}
              </Button>
            ))}
          </div>

          {/* Dropdown for other services */}
          {selectedService === 'Other Services' && (
            <div className="mt-4">
              <label className="block mb-2 font-medium">Choose a service:</label>
              <select
                className="w-full p-2 border rounded"
                onChange={e => {
                  const val = e.target.value;
                  if (val !== 'Select') setSelectedService(val);
                }}
              >
                <option>Select</option>
                {otherServices.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}

          {selectedService && selectedService !== 'Other Services' && (
            <p className="mt-2 text-blue-800 font-semibold">
              Selected Service: {selectedService}
            </p>
          )}
        </section>

        {/* Gallery of Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["/tax1.jpg", "/tax2.jpg", "/tax3.jpg", "/tax4.jpg"].map((img, idx) => (
            <Card key={idx}>
              <CardContent>
                <Image
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
