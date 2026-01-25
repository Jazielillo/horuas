"use client";
import { createContext } from "react";

// coordinator-context.tsx
const CoordinatorContext = createContext<{ role: string }>({
  role: "",
});

export default CoordinatorContext;
