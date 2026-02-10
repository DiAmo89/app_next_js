"use client";
import { ThemeProvider as TProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <TProvider {...props}>{children}</TProvider>;
}