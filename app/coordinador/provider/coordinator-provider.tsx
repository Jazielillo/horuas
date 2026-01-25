// CoordinatorProvider.tsx
"use client";

import CoordinatorContext from "../context/coordinator-context";

export function CoordinatorProvider({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) {
  return (
    <CoordinatorContext.Provider value={{ role }}>
      {children}
    </CoordinatorContext.Provider>
  );
}
