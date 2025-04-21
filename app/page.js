import FeaturedEvents from "@/component/FeaturedEvents";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import Work from "@/component/Work";

export default function Home() {
  return (
    <div >
      <ResponsiveAppBar/>
      <Hero/>
      <FeaturedEvents/>
      <Work/>
      <Footer/>
    </div>
  );
}
