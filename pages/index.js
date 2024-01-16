import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
