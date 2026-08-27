import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryRow from "@/components/CategoryRow";
import StatsBar from "@/components/StatsBar";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyUs from "@/components/WhyUs";
import LocationMap from "@/components/LocationMap";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <CategoryRow />
        <StatsBar />
        <AboutUs />
        <FeaturedProducts />
        <WhyUs />
        <CtaBanner />
        <Faq />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
