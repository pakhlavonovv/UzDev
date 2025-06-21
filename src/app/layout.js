import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UzDev - Frontend yo‘nalishida o‘zbekcha onlayn ta'lim",
  description: "Frontend yo‘nalishini 8 oy ichida biz bilan o‘rganing!",
  openGraph: {
    title: "UzDev - Frontend yo‘nalishida o‘zbekcha onlayn ta'lim",
    description: "Frontend yo‘nalishini 8 oy ichida biz bilan o‘rganing!",
    siteName: "UzDev",
    images: [
      {
        url: "https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?s=612x612&w=0&k=20&c=ijjq-DLNxIaPuGvIX8k06IZxMAjGpyJeboaV_byCX9k=", 
        width: 1200,
        height: 630,
        alt: "UzDev kursi preview",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "UzDev - Frontend yo‘nalishida o‘zbekcha onlayn ta'lim",
    description: "Frontend yo‘nalishini 8 oy ichida biz bilan o‘rganing!",
    images: ["https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?s=612x612&w=0&k=20&c=ijjq-DLNxIaPuGvIX8k06IZxMAjGpyJeboaV_byCX9k="],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
