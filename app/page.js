import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import TeamAndDifferentiation from '@/components/TeamAndDifferentiation';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Pricing from '@/components/pricing';
import Script from 'next/script';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a 'High Volume Retainer'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A high volume retainer means you get frequent, ongoing support across multiple service areas. For example, a client might receive weekly sales reporting, weekly blog publishing and daily social media engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with staff recruitment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our HR & Recruitment service include everything from posting job adverts and reviewing applications to conducting DBS checks and helping with staff onboarding and form management."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you update my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We regularly handle tasks like website updates, design, migrations, and adding weekly blog posts. We can agree on a schedule that works for you."
        }
      },
      {
        "@type": "Question",
        "name": "Which service areas do your clients use most often?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many of our retainer clients use a mix of services, but our most common activities include Executive/Admin Support, Digital Content Creation, and Social & Community Management."
        }
      },
    ]
  };

  return (
    <main className="min-h-screen">
      {/* Inject SEO Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      <Navigation />
      <Hero />
      <About />
      <Services />
      <TeamAndDifferentiation />
      {/* <Portfolio /> */}
      <Pricing />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
