'use client';

import SelectSmall from "@/components/dropdown";
import SearchBox from "@/components/searchBox";
import { useState } from "react";

export default function Page() {
  return (
    <div className="h-full flex bg-purple-50 justify-center items-center">
      <SearchBox />
    </div>

  )
}
