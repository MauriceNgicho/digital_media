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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <TeamAndDifferentiation />
      <Portfolio />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
