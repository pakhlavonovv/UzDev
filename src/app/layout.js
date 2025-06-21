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
  description: "Frontend yo‘nalishini 8 oy ichida biz bilan o'rganing!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Frontend yo‘nalishini 8 oy ichida biz bilan o'rganing!" />
  <meta name="keywords" content="UzDev, frontend kurs, o'zbekcha dasturlash, web development, HTML, CSS, Sass, Bootstrap, Tailwind css, Antd, Ant design, Mui, Material ui, JavaScript, js, React, Next" />
  <meta name="author" content="UzDev Team" />
  <meta property="og:title" content="UzDev - Frontend yo‘nalishida o‘zbekcha onlayn ta'lim" />
  <meta property="og:description" content="Frontend yo‘nalishini 8 oy ichida biz bilan o'rganing!" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="UzDev - Frontend yo‘nalishida o‘zbekcha onlayn ta'lim" />
  <meta name="twitter:description" content="Frontend yo‘nalishini 8 oy ichida biz bilan o'rganing!" />
  <meta name="twitter:image" content="https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?s=612x612&w=0&k=20&c=ijjq-DLNxIaPuGvIX8k06IZxMAjGpyJeboaV_byCX9k=" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-..."
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <title>UzDev - Frontend yo‘nalishida o‘zbekcha onlayn ta'lim</title>
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
