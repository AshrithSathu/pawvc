import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PawVc",
  description: "PawVc is a video conferencing app created By Ashrith Sathu",
  icons: {
    icon: "/icons/logo.svg",
  },
};

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-col flex-1 px-6 pb-6 pt-28 max-md:pd-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      Footer
    </main>
  );
}

export default HomeLayout;
