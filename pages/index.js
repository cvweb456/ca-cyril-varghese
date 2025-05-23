import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Head>
        <title>CA Cyril Varghese & Co</title>
      </Head>
      <header className="bg-blue-800 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">CA Cyril Varghese & Co</h1>
        <p className="text-sm mt-2">Chartered Accountants | India & Australia</p>
      </header>
      <main className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white border rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Income Tax Filing</h2>
          <p className="mt-2">Expert assistance for all types of income tax returns in India.</p>
        </div>
        <div className="bg-white border rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">GST Registration & Filing</h2>
          <p className="mt-2">Complete GST compliance support for businesses.</p>
        </div>
        <div className="bg-white border rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Australian Taxation</h2>
          <p className="mt-2">Professional tax services tailored for clients in Australia.</p>
        </div>
      </main>
      <footer className="bg-blue-100 text-center p-4 text-xs text-gray-600">
        &copy; 2025 CA Cyril Varghese & Co. All rights reserved.
      </footer>
    </div>
  );
}
