// src/App.jsx
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Home from "./sections/Home";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Pricing = lazy(() => import("./sections/Pricing"));
const Footer = lazy(() => import("./sections/Footer"));

export default function App() {
  return (
    <div>
      <Navbar />

      <Suspense
        fallback={
          <div className="text-center py-20 text-gray-400 dark:text-white/60">
            Loading…
          </div>
        }
      >
        <Routes>
          {/* Glavna single-page ruta */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Posebna stranica samo za cenovnik */}
          <Route
            path="/pricing"
            element={
              <>
                <Pricing />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}
