import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Portfolio - Your Name" },
    { name: "description", content: "Full Stack Developer Portfolio" },
  ];
}

export default function Home() {
  return <Hero />;
}