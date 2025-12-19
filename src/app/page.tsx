"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Coffee, Users, Globe, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="animatedGrid"
      cardStyle="elevated-accent"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156756497-ti4bf9tw.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew Haven"
          button={{
            text: "Reserve Now",
            href: "contact"
          }}
          className="bg-transparent"
          buttonClassName="rounded-full"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          tag="Specialty Coffee"
          tagIcon={Coffee}
          title="Discover Your Perfect Cup"
          description="Handcrafted coffee from ethically sourced beans, expertly roasted and carefully brewed to perfection. Experience the art of coffee making."
          buttons={[
            {
              text: "Reserve a Table",
              href: "contact"
            },
            {
              text: "View Our Menu",
              href: "feature"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156762677-7lz9g9so.jpg"
          imageAlt="Premium specialty coffee"
          frameStyle="browser"
          className="bg-gradient-to-b from-orange-50 to-transparent"
          containerClassName="max-w-6xl"
          titleClassName="text-5xl font-bold"
          descriptionClassName="text-lg text-gray-700"
          tagClassName="text-orange-600 font-semibold"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="At Brew Haven we celebrate the craft of exceptional coffee by sourcing the finest beans and mastering every brewing technique to create unforgettable experiences"
          useInvertedBackground="noInvert"
          metrics={[
            {
              icon: Coffee,
              label: "Years Crafting Excellence",
              value: "12+"
            },
            {
              icon: Users,
              label: "Happy Coffee Lovers",
              value: "8,000+"
            },
            {
              icon: Globe,
              label: "Ethically Sourced Origins",
              value: "15+"
            },
            {
              icon: Award,
              label: "Industry Awards",
              value: "23"
            }
          ]}
          containerClassName="py-20"
          titleClassName="text-4xl font-serif text-center mb-12"
          metricsContainerClassName="gap-8"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardEleven
          tag="Our Craft"
          title="The Coffee Experience"
          description="From bean selection to the perfect cup, discover our meticulous process that defines quality"
          features={[
            {
              id: 1,
              title: "Single-Origin Selection",
              description: "We carefully source beans from premium coffee farms across Ethiopia, Colombia, and Kenya. Each origin brings unique flavor profiles and sustainability practices we deeply respect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156768491-lxfqu4h7.jpg",
              imageAlt: "Premium coffee beans from around the world"
            },
            {
              id: 2,
              title: "Master Roasting",
              description: "Our expert roasters use traditional methods to unlock the full potential of each bean. Small batch roasting ensures consistency and exceptional taste in every package.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156769836-2k7hubrp.jpg",
              imageAlt: "Professional espresso machine preparation"
            },
            {
              id: 3,
              title: "Precision Brewing",
              description: "From espresso to pour-over, our baristas master multiple brewing techniques. Each method is tailored to highlight the unique characteristics of the selected bean.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156763884-0nwk6jpy.jpg",
              imageAlt: "Latte art creation by skilled barista"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
          containerClassName="py-16"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Coffee Community Says"
          description="Real stories from passionate coffee enthusiasts who trust us for their daily ritual"
          testimonials={[
            {
              id: "1",
              title: "Best Coffee in the City",
              quote: "The attention to detail in every cup is remarkable. From the moment I taste their espresso, I know I'm getting something special. This is my daily destination.",
              name: "Sarah Mitchell",
              role: "Coffee Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156771260-g7cbxwu8.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              title: "Ethical and Exceptional",
              quote: "Knowing that my coffee comes from ethically sourced farms makes each sip taste even better. Brew Haven combines conscience with quality perfectly.",
              name: "Marcus Chen",
              role: "Sustainability Advocate",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156772371-8kjz5z9k.jpg",
              imageAlt: "Marcus Chen"
            },
            {
              id: "3",
              title: "A Welcoming Haven",
              quote: "The baristas here genuinely care about their craft. They remember your order and take time to explain each origin. It's more than coffee, it's community.",
              name: "Emily Rodriguez",
              role: "Local Resident",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156773707-5f9xit9p.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              title: "Consistently Outstanding",
              quote: "I've tried many coffee shops, but the consistency here is unmatched. Every visit delivers the same exceptional quality and warmth.",
              name: "David Park",
              role: "Business Owner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156774965-q3hv7slz.jpg",
              imageAlt: "David Park"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonialTitleClassName="text-4xl font-serif mb-4"
          containerClassName="py-16"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Featured In and Partnered With"
          description="Trusted by leading coffee brands and publications"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156757829-h1cajwau.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156758878-lo4qdomy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156759881-7vznhked.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156760941-lc99miw4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156757829-h1cajwau.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156758878-lo4qdomy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156759881-7vznhked.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156760941-lc99miw4.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={50}
          topMarqueeDirection="left"
          containerClassName="py-16"
          textBoxTitleClassName="text-3xl font-serif text-center mb-6"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience the perfect cup? Reserve your table or stop by for a conversation with our baristas."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Reserve Now",
              href: "#contact"
            },
            {
              text: "Get Directions",
              href: "#footer"
            }
          ]}
          useInvertedBackground="noInvert"
          containerClassName="py-20"
          textClassName="text-3xl font-serif text-center"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766156766631-d6u4u1ra.jpg"
          imageAlt="Brew Haven interior"
          columns={[
            {
              title: "Explore",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "feature"
                },
                {
                  label: "Sourcing",
                  href: "about"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Reserve",
                  href: "contact"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            },
            {
              title: "Follow",
              items: [
                {
                  label: "Instagram",
                  href: "#"
                },
                {
                  label: "Facebook",
                  href: "#"
                },
                {
                  label: "Newsletter",
                  href: "#"
                }
              ]
            }
          ]}
          logoText="Brew Haven"
          copyrightText="© 2025 Brew Haven Coffee. All rights reserved."
          containerClassName="bg-warm-900"
        />
      </div>
    </ThemeProvider>
  );
}