import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  // 1. Basic SEO (Local & Cuisine Focused)
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.himalayancafemonroe.com"
      : "http://localhost:3000"
  ),
  title: {
    default: "Himalayan Cafe | Indian & Nepali Restaurant in Monroe, LA",
    template: "%s | Himalayan Cafe Monroe",
  },
  description:
    "Authentic Indian and Nepali cuisine in Monroe, LA. Located near ULM on Desiard St. Enjoy our lunch buffet, Momos, Butter Chicken, and Goat Curry. Dine-in and takeout available.",
  keywords: [
    "Himalayan Cafe Monroe LA",
    "Indian restaurant Monroe Louisiana",
    "Nepali food Monroe",
    "Lunch buffet Monroe LA",
    "Best curry in Monroe",
    "Himalayan food near ULM",
    "Momos Monroe LA",
    "Halal food Monroe LA",
  ],
  authors: [{ name: "Himalayan Cafe" }],

  // 2. Open Graph (Social Media)
  openGraph: {
    title: "Himalayan Cafe | Monroe, LA | Authentic Indian & Nepali Food",
    description:
      "Visit Himalayan Cafe on Desiard St for authentic flavors, a huge lunch buffet, and traditional Nepali Momos.",
    url: "https://himalayancafemonroe.com", // Replace with your actual domain
    siteName: "Himalayan Cafe",
    images: [
      {
        url: "/food.avif", // Path to an image in your /public folder
        width: 1200,
        height: 630,
        alt: "Himalayan Cafe Monroe - Indian and Nepali Buffet",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 3. Robots & Canonical
  alternates: {
    canonical: "https://himalayancafemonroe.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 4. Local Business Metadata (Specific to Monroe)
  other: {
    telephone: "+1 318-600-3439",
    address: "3600 Desiard Street, Monroe, LA 71203",
    "geo.region": "US-LA",
    "geo.placename": "Monroe",
    "geo.position": "32.5244;-92.0721",
    ICBM: "32.5244, -92.0721",
  },
};

const marcellus = localFont({
  src: [
    {
      path: "../public/Fonts/Marcellus/Marcellus-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-marcellus",
  display: "swap",
});

const ebGaramond = localFont({
  src: [
    {
      path: "../public/Fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf",
      style: "normal",
      weight: "400 800", // 👈 important for variable font
    },
    {
      path: "../public/Fonts/EB_Garamond/EBGaramond-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "400 800",
    },
  ],
  variable: "--font-ebgaramond",
  display: "swap",
});

const raleway = localFont({
  src: [
    {
      path: "../public/Fonts/Raleway/Raleway-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/Fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
});

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Himalayan Cafe",
    image: "himalayancafeonline.com",
    url: "himalayancafeonline.com",
    telephone: "+1-318-600-3439",
    priceRange: "$$",
    servesCuisine: ["Indian", "Nepali", "Himalayan", "Indo-Chinese"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "3600 Desiard Street",
      addressLocality: "Monroe",
      addressRegion: "LA",
      postalCode: "71203",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.5222,
      longitude: -92.0722,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Sunday"],
        opens: "11:00",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Sunday"],
        opens: "17:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "17:00",
        closes: "22:00",
      },
    ],
    hasMenu: "himalayancafeonline.commenu/",
    acceptsReservations: "true",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Lunch Buffet",
        value: "Daily",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Takeout",
        value: "true",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${marcellus.variable} ${ebGaramond.variable} ${raleway.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
