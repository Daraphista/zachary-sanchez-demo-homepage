import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Listings from '@/components/Listings';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Communities from '@/components/Communities';
import Services from '@/components/Services';
import Guides from '@/components/Guides';
import Press from '@/components/Press';
import FeaturedVideos from '@/components/FeaturedVideos';
import AppSpotlight from '@/components/AppSpotlight';
import MagazineSpotlight from '@/components/MagazineSpotlight';
import CustomServices from '@/components/CustomServices';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Philanthropy from '@/components/Philanthropy';
import SocialMedia from '@/components/SocialMedia';
import ContactForm from '@/components/ContactForm';
import Offices from '@/components/Offices';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* 1. Navigation Bar (include) */}
      <Navbar />
      {/* 2. Hero (include) */}
      <Hero />
      {/* 3. Listings (include) */}
      <Listings />
      {/* 4. About / Founder Spotlight (include) */}
      <About />
      {/* 5. Stats / Why Choose Us (include) */}
      <Stats />
      {/* 6. Communities / Areas Served (include) */}
      <Communities />
      {/* 7. Navigation CTA — Offers & Services (include) */}
      <Services />
      {/* 8. Guides (include) */}
      <Guides />
      {/* 9. Press / Media (example) */}
      <Press />
      {/* 10. Featured Videos (include) */}
      <FeaturedVideos />
      {/* 11. App Spotlight (example) */}
      <AppSpotlight />
      {/* 12. Magazine Spotlight (example) */}
      <MagazineSpotlight />
      {/* 13. Custom Services — Compass Concierge (include) */}
      <CustomServices />
      {/* 14. Testimonials (include) */}
      <Testimonials />
      {/* 15. Blog (include) */}
      <Blog />
      {/* 16. Philanthropy (example) */}
      <Philanthropy />
      {/* 17. Social Media (example) */}
      <SocialMedia />
      {/* 18. CTA Contact Form (include) */}
      <ContactForm />
      {/* 19. Office Locations (example) */}
      <Offices />
      {/* 20. Newsletter CTA (include) */}
      <Newsletter />
      {/* 21. Footer (include) */}
      <Footer />
    </main>
  );
}
