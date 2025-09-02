import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import { Suspense } from "react";
import { lazy } from "react";

const About = lazy(() => import("./sections/About"));
// const Projects = lazy(() => import("./sections/Projects"));
// const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />

      {/* Lazy load sekcija */}
      <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}
