import { JSX } from "react/jsx-runtime";

export interface Category {
  map(arg0: (category: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
