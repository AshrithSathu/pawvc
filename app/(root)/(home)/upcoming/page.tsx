import CallList from "@/components/CallList";
import React from "react";

function Upcoming() {
  return (
    <section className="flex size-full flex-col text-white">
      <h1 className="text-3xl font-bold mb-10">Upcoming</h1>
      <CallList type="upcoming" />
    </section>
  );
}

export default Upcoming;
