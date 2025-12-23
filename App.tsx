import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickFixes from './components/QuickFixes';
import CallToAction from './components/CallToAction';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickFixes />
        <CallToAction />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;