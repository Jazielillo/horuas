// CoordinatorProvider.tsx
"use client";

import AlumnoContext from "../context/alumno-context";


export function AlumnoProvider({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <AlumnoContext.Provider value={{ id}}>
      {children}
    </AlumnoContext.Provider>
  );
}
