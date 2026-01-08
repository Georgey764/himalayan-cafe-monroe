import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Himalayan Cafe",
  description:
    "Casual restaurant that serves Indian, Nepali and Indo-Chinese cuisines.",
};

const cinzelDecorative = localFont({
  src: [
    {
      path: "../public/Fonts/Cinzel_Decorative/CinzelDecorative-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/Fonts/Cinzel_Decorative/CinzelDecorative-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/Fonts/Cinzel_Decorative/CinzelDecorative-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-cinzel",
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
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} ${ebGaramond.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
