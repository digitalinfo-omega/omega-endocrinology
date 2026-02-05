import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import NavBar from "@/components/layout/NavBar";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/providers/AOSProvider";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import BookAppointment from "@/components/layout/BookAppointment";
import { questions } from "@/components/constants/LetTalkQuestions";
import LetTalkQuestions from "@/components/layout/LetTalkQuestions";
import OurCenters from "@/components/layout/OurCenters";
import Emergency from "@/components/layout/Emergency";
import RequestCallbackSection from "@/components/layout/RequestCallbackSection";
import WhatWeOffer from "@/components/layout/WhatWeOffer";
import { Toaster } from "sonner";
import { QueryClient } from "@tanstack/react-query";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omega Hospitals Endocrinology",
  description:
    "Leading cancer & multispecialty hospital in Surat with AI-powered treatment, expert oncologists, 24/7 emergency care. Book appointment: 0261-226-5552",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased`}>
        <AOSProvider />
        <Toaster />
        <ReactQueryProvider>
          <NavBar />
          {children}
          <OurCenters />
          <WhatWeOffer />
          <RequestCallbackSection />
          <LetTalkQuestions title="Let’s Tak Any Questions" items={questions} />
          <Emergency />
          <Footer />
          <BookAppointment />
          <MobileBottomNav />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
