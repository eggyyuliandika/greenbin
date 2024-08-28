import Header from "@/components/header";
// import Sidebar from "@/components/sidebar";
import React, { useState } from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Sidebar sidebarOpen={false} /> */}
      <div>
        <Header />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
