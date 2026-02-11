"use client";
import { createContext } from "react";

// alumno-context.tsx
const AlumnoContext = createContext<{ id: string }>({
  id: "",
});

export default AlumnoContext;