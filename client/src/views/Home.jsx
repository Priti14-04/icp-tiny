import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FEATURED_ARTICLES, CATEGORIES, LATEST_ARTICLES } from "../constants";

export default function Home() {
return ( <main className="font-sans text-black bg-white"> <Navbar />

```
        <section
            className="relative h-[70vh] min-h-[520px] flex items-center"
            aria-label="Hero"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://th.bing.com/th/id/OIP.u8MKqUQl5jFXPNgeXZnjlgAAAA?w=178&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3')",
                }}
            />
            <div className="relative container mx-auto max-w-5xl px-6 text-center text-black">
                <div>
               <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                    Welcome to <span className="text-orange-400">MindDraft</span>
                  </h1>
                  <p className="text-lg text-gray-200 mb-8 max-w-2xl">&nbsp;&nbsp;&nbsp;&nbsp;MindDraft is a tranquil haven for readers and writers seeking depth and reflection in storytelling. Here, every post is a carefully crafted journey designed to inspire curiosity, creativity, and meaningful insights.
                  </p>
                  </div>

                <div className="flex justify-center">
                    <Link
                        to="/blogs"
                        className="inline-block bg-orange-500 text-white px-6 py-3 text-sm  tracking-wide transition-opacity hover:opacity-90"
                    >
                        Explore Stories
                    </Link>
                </div>
            </div>
        </section>

        <section className="container mx-auto max-w-7xl px-6 py-16">
            <h3 className="text-center font-serif text-3xl mb-10">My Featured Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEATURED_ARTICLES.map((a) => (
                    <article
                        key={a.id}
                        className="group bg-white shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={a.image}
                                alt={a.title}
                                className="w-full h-56 md:h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-xs uppercase tracking-wide text-gray-600">
                                {a.category}
                            </span>
                            <h4 className=" text-xl mt-2 mb-2">{a.title}</h4>
                            <p className="text-gray-700 text-sm mb-4">{a.excerpt}</p>
                            <Link
                                to="/blog/:slug"
                                className="inline-block text-sm border border-gray-800 bg-amber-500 text-white px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                Read More
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>

       <section className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-24">
    <div className="container mx-auto max-w-4xl px-6 text-center">
        <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-indigo-600 mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <h3 className="font-serif text-4xl md:text-5xl mb-8 text-gray-800 drop-shadow-sm">Writing in Color.</h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            MindDraft isn’t about trends — it’s about timelessness.
            <br />
            Every story is crafted with care, stripped of noise, and designed to
            let words speak for themselves.
        </p>
        <div className="mt-10">
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>
    </div>
</section>

        <section className="container mx-auto max-w-7xl px-6 py-16">
            <div className="flex items-baseline justify-between mb-8">
                <h3 className=" text-2xl">Explore Topics</h3>
                <Link
                    to="/blogs"
                    className="text-sm border  border-gray-800 px-3 py-2 text-white  hover:text-white transition-colors bg-orange-500"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map((c) => (
                    <Link
                        key={c.id}
                        to="/blogs"
                        className="relative group flex items-end h-48 overflow-hidden"
                    >
                        <img
                            src={c.image}
                            alt={c.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="relative z-10 p-6">
                            <h4 className="text-white  text-lg">{c.title}</h4>
                            <p className="text-sm text-white/90 mt-1">{c.line}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

        <section className="bg-gray-100 text-black py-20">
            <div className="container mx-auto max-w-4xl px-6 text-center">
                <blockquote className="text-2xl md:text-3xl leading-relaxed">
                    "The art of writing is the art of discovering what you believe."
                </blockquote>
            </div>
        </section>

        <section className="container mx-auto max-w-7xl px-6 py-16">
            <h3 className="font-serif text-2xl mb-8">Latest from MindDraft</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {LATEST_ARTICLES.map((a) => (
                    <article key={a.id} className="bg-white">
                        <img
                            src={a.image}
                            alt={a.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <span className="text-xs uppercase tracking-wide text-gray-600">
                                {a.category}
                            </span>
                            <h4 className="font-serif text-xl mt-2 mb-2">{a.title}</h4>
                            <p className="text-gray-700 text-sm mb-4">{a.excerpt}</p>
                            <Link
                                to="/blog/:slug"
                                className="inline-block text-sm border border-gray-800 text-white bg-orange-500 px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                Read More
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>

        

        <Footer />
    </main>
);

}
