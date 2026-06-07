import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Mustafijur Mohan | Senior MERN Stack Developer",
  description: "Architecting high-performance web ecosystems through elegant logic and modern engineering.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%2300d2ff'/><text x='50%25' y='54%25' font-family='monospace' font-weight='900' font-size='13' fill='%23000' text-anchor='middle' dominant-baseline='middle'>MM</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-fixed overflow-x-hidden min-h-full flex flex-col antialiased"
      >
        {children}
      </body>
    </html>
  );
}
