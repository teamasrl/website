import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import NewsletterForm from '../components/NewsletterForm';

interface BlogPost {
  title: string;
  date: string; // ISO date, e.g. '2026-11-15'
  author: string;
  summary: string;
  link?: string;
}

// Add new posts at the top of this list.
const blogPosts: BlogPost[] = [];

const Blogs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-about-pattern bg-cover bg-center pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ASRL Blogs</h1>
            <p className="text-xl text-white/80">
              What's new in the aerospace industry, written by the ASRL club.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle
            title="Latest Posts"
            subtitle="News, breakthroughs and trends from across the aerospace world."
          />

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-space-900/40 backdrop-blur-sm rounded-lg p-6 border border-space-800 flex flex-col"
                >
                  <div className="flex items-center text-white/60 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span className="mx-2">·</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-white/70 flex-grow">{post.summary}</p>
                  {post.link && (
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium"
                    >
                      Read more →
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="bg-space-900/40 backdrop-blur-sm rounded-lg p-8 border border-space-800 text-center">
              <p className="text-white/80">Our first posts are on the way. Check back soon!</p>
            </div>
          )}

          {/* Signup */}
          <div className="mt-20 max-w-md mx-auto bg-space-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-space-700">
            <h3 className="text-2xl font-bold mb-2">Subscribe to the ASRL Newsletter</h3>
            <p className="text-white/70 text-sm mb-6">
              Your name, email address and mobile number will be used to send you ASRL club blog
              updates about what's new in the aerospace industry.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
