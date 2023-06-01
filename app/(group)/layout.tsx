import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>
    <h1 className="bg-green-500"> customer nav </h1>
    {children}
    <h1 className="bg-green-500"> customer footer </h1>


  </div>
}
