import Banner from "@/components/home/banner";
import Features from "@/components/home/features";
import Gallery from "@/components/home/gallery";
import Newsletter from "@/components/home/newsLetter";
import RecentEvents from "@/components/home/recent-events";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Features />
      <RecentEvents />
      <Gallery />
      <Newsletter />
    </div>
  );
}
