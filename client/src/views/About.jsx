import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

export default function About() {
return ( <div className="min-h-screen bg-white text-black font-sans"> <Navbar /> <header className="py-16 mt-20 px-6"> <div className="max-w-4xl mx-auto text-center"> <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight">
About MindDraft </h1> <p className="mt-4 text-lg text-gray-700">
A digital space for stories that inspire, reflect, and endure. </p> <div className="mt-8 w-24 h-px bg-gray-200 mx-auto" /> </div> </header>


        <main>
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
                            alt="Creative workspace"
                            className="w-full h-64 object-cover"
                        />
                    </div>

                    <div className="text-gray-800">
                        <h2 className="font-serif text-2xl mb-4">Our Story</h2>
                        <p className="leading-relaxed text-base">
                            MindDraft started as a vision to create a calm digital home for readers and writers alike. 
                            In a fast-paced world, we slow down to honor thoughtful storytelling. 
                            Every post is carefully curated to inspire reflection, creativity, and curiosity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 transform transition duration-200 hover:shadow-lg hover:-translate-y-1">
                        <h3 className="font-serif text-xl mb-2">Inspiration</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Every idea begins with curiosity — we nurture imagination and meaningful insights.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 transform transition duration-200 hover:shadow-lg hover:-translate-y-1">
                        <h3 className="font-serif text-xl mb-2">Community</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            We foster connections between writers and readers, creating spaces for shared reflection and discussion.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 transform transition duration-200 hover:shadow-lg hover:-translate-y-1">
                        <h3 className="font-serif text-xl mb-2">Vision</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            To be a hub for timeless writing, where clarity, elegance, and depth are celebrated.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=60&grayscale"
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover opacity-10 filter blur-sm"
                    />
                   
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto bg-black rounded-lg py-12 px-6 text-center">
                    <blockquote className="text-white italic text-2xl md:text-3xl font-serif leading-relaxed">
                        “Writing isn’t filling space — it’s creating room for thought.”
                    </blockquote>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="font-serif text-2xl mb-4">Looking Ahead</h3>
                        <p className="text-gray-800 leading-relaxed">
                            MindDraft is committed to growing a space for writers and readers who value depth, reflection, and timeless storytelling. 
                            Our vision is a vibrant digital home for voices that matter.
                        </p>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                            alt="Workspace and inspiration"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="font-serif text-3xl mb-4">Join the MindDraft Journey</h3>
                    <p className="text-gray-800 mb-8 leading-relaxed">
                        Explore stories, share your ideas, and be part of a community that values thoughtful writing.
                    </p>
                    <Link
                        to="/blogs"
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium shadow-sm hover:opacity-90 transition"
                    >
                        Read Our Stories
                    </Link>
                </div>
            </section>
        </main>

        <footer className="border-t border-gray-200 py-8 px-6">
            <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
                © 2025 MindDraft — Crafted with words.
            </div>
        </footer>
    </div>
);
}
