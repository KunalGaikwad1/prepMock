"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col">
      {/* Header Section */}
      <header className="w-full py-6 px-8 flex justify-between items-center bg-opacity-50 backdrop-blur-md fixed top-0 z-10">
        <h1 className="text-3xl font-bold tracking-wide cursor-pointer hover:text-teal-400 transition duration-300">
          prep<span className="text-teal-400">Mock</span>
        </h1>
        <nav className="space-x-6">
          <a
            href="#features"
            className="hover:text-teal-400 transition duration-300"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-teal-400 transition duration-300"
          >
            How It Works
          </a>
          <a
            href="#contact"
            className="hover:text-teal-400 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-24">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in">
          Ace Your Next Interview with{" "}
          <span className="text-teal-400">prepMock</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8 animate-fade-in-delay">
          Experience AI-powered mock interviews tailored to your profile, with
          real-time feedback to help you improve.
        </p>
        <div
          onClick={() => router.push("/dashboard")}
          className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition duration-8000 animate-bounce"
        >
          Get Started
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 px-8 bg-gray-800">
        <h3 className="text-4xl font-semibold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-teal-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L15.09 8H24L17.45 13L20.54 21L12 16L3.46 21L6.55 13L0 8H8.91L12 0Z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold mb-2">Personalized Interviews</h4>
            <p className="text-gray-400">
              Get mock interviews tailored to your specific skills and job role.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-teal-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L15.09 8H24L17.45 13L20.54 21L12 16L3.46 21L6.55 13L0 8H8.91L12 0Z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold mb-2">Real-Time AI Feedback</h4>
            <p className="text-gray-400">
              Receive instant feedback to improve your answers and confidence.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-teal-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L15.09 8H24L17.45 13L20.54 21L12 16L3.46 21L6.55 13L0 8H8.91L12 0Z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold mb-2">Progress Tracking</h4>
            <p className="text-gray-400">
              Monitor your improvement over time with detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-8">
        <h3 className="text-4xl font-semibold text-center mb-12">
          How It Works
        </h3>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-12 md:space-y-0">
          <div className="flex-1 text-center animate-fade-in-up">
            <div className="mb-4">
              <span className="text-6xl font-bold text-teal-400">1</span>
            </div>
            <h4 className="text-2xl font-bold mb-2">Enter Your Details</h4>
            <p className="text-gray-400">
              Provide your background and the position you're applying for.
            </p>
          </div>
          <div className="flex-1 text-center animate-fade-in-up delay-200">
            <div className="mb-4">
              <span className="text-6xl font-bold text-teal-400">2</span>
            </div>
            <h4 className="text-2xl font-bold mb-2">Start Mock Interview</h4>
            <p className="text-gray-400">
              Engage in a simulated interview with AI-generated questions.
            </p>
          </div>
          <div className="flex-1 text-center animate-fade-in-up delay-400">
            <div className="mb-4">
              <span className="text-6xl font-bold text-teal-400">3</span>
            </div>
            <h4 className="text-2xl font-bold mb-2">Get Instant Feedback</h4>
            <p className="text-gray-400">
              Receive detailed feedback to refine your answers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-8 bg-gradient-to-r from-teal-500 to-blue-600 text-center">
        <h3 className="text-4xl font-semibold mb-6">
          Ready to Elevate Your Interview Skills?
        </h3>
        <a
          href="#get-started"
          className="bg-white text-teal-600 font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-gray-100 shadow-lg transform hover:scale-105"
        >
          Get Started Now
        </a>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="py-8 px-8 bg-gray-900 text-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">
            prep<span className="text-teal-400">Mock</span>
          </h1>
        </div>
        <p className="text-gray-500 mb-4">
          &copy; {new Date().getFullYear()} prepMock. All rights reserved.
        </p>
        <p className="text-gray-500">
          Contact us at:{" "}
          <a
            href="mailto:support@prepmock.com"
            className="text-teal-400 hover:underline"
          >
            support@prepmock.com
          </a>
        </p>
      </footer>
    </div>
  );
}
