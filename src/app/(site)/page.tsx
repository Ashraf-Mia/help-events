import { Suspense } from "react";
import { FeaturesSection } from "@/components/home/features-section";
import { GallerySection } from "@/components/home/gallery-section";
import { EventsSkeleton } from "@/components/home/events-skeleton";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactStrip } from "@/components/home/impact-strip";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { UpcomingEventsSection } from "@/components/home/upcoming-events-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStrip />
      <FeaturesSection />
      <Suspense fallback={<EventsSkeleton />}>
        <UpcomingEventsSection />
      </Suspense>
      <GallerySection />
      <NewsletterSection />
    </>
  );
}
