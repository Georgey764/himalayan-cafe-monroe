import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Himalayan Cafe",
  description:
    "Casual restaurant that serves Indian, Nepali and Indo-Chinese cuisines.",
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
        className={`${marcellus.variable} ${ebGaramond.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
