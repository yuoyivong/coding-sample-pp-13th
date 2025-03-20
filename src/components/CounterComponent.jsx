"use client";
import { useCounter } from "@/stores/useStore";
import React from "react";

export default function CounterComponent() {
  const { count, increment } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment} className="bg-blue-600 rounded-xl p-2">
        Click
      </button>
    </div>
  );
}
