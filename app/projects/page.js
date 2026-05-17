"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import blog from "../images/Blog.png";
import ecom from "../images/Ecommerce.png";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const projects = [
  {
    id: 1, category: "MERN",
    title: "Multiple Author Blog Platform",
    desc: "A complex ecosystem featuring granular author roles, a custom rich text editor, and a deep-dive admin dashboard for content management at scale.",
    tags: ["MongoDB","Express","React","Node.js","JWT","Rich Text Editor"],
    tagColors: ["MERN","Auth"],
    gradient: "from-[#00d2ff]/20 via-[#3a7bd5]/15 to-transparent",
    icon: "article",
    features: ["Role-based access control","Custom rich text editor","Admin analytics dashboard","Multi-author workflow","SEO optimization"],
    image: blog,
    liveLink: "https://multiple-author-blog-eacg.vercel.app/",
    gitHubLink: "https://github.com/MustafijurMohan/Multiple_Author_Blog",
  },
  {
    id: 2, category: "Ecommerce",
    title: "Premium Ecommerce App",
    desc: "Scalable product management system with real-time inventory tracking, secure Stripe payments, and a dynamic admin control panel.",
    tags: ["React","Node.js","MongoDB","Stripe","Redux","AWS S3"],
    tagColors: ["Full Stack","Stripe API"],
    gradient: "from-[#9d50bb]/20 via-[#3a7bd5]/15 to-transparent",
    icon: "shopping_cart",
    features: ["Stripe payment gateway","Real-time inventory","Admin dashboard","Product variants","Order tracking"],
    image: ecom,
    liveLink: "https://next-gadget-one.vercel.app/",
    gitHubLink: "https://github.com/MustafijurMohan/NextGadget",
  },
  {
    id: 3, category: "SaaS",
    title: "Project Management SaaS",
    desc: "Collaborative project management tool with real-time updates via Socket.io, Kanban boards, and team workspace management.",
    tags: ["Next.js","Socket.io","MongoDB","Tailwind","JWT","Vercel"],
    tagColors: ["SaaS","Real-time"],
    gradient: "from-[#00d2ff]/15 via-[#9d50bb]/10 to-transparent",
    icon: "task_alt",
    features: ["Real-time collaboration","Kanban board","Team management","File sharing","Activity timeline"],
  },
  {
    id: 4, category: "Dashboard",
    title: "Analytics Dashboard",
    desc: "Enterprise-grade analytics and data visualization dashboard with real-time metrics, custom report generation, and role-based access.",
    tags: ["React","D3.js","Node.js","PostgreSQL","Redis","Docker"],
    tagColors: ["Dashboard","Analytics"],
    gradient: "from-[#3a7bd5]/20 via-[#00d2ff]/10 to-transparent",
    icon: "analytics",
    features: ["Real-time charts","Custom reports","Data export","Role-based views","Email alerts"],
  },
  {
    id: 5, category: "MERN",
    title: "Social Media API",
    desc: "A scalable, high-performance REST API for a social media platform with feeds, notifications, follows, and media uploads.",
    tags: ["Node.js","Express","MongoDB","Cloudinary","Socket.io","Redis"],
    tagColors: ["MERN","API"],
    gradient: "from-[#9d50bb]/15 via-[#00d2ff]/10 to-transparent",
    icon: "hub",
    features: ["News feed algorithm","Push notifications","Follow/Unfollow","Media uploads","Real-time chat"],
  },
  {
    id: 6, category: "Ecommerce",
    title: "Restaurant Ordering System",
    desc: "Full-stack food ordering application with real-time order tracking, multi-restaurant support, and a comprehensive restaurant admin panel.",
    tags: ["React","Node.js","MongoDB","Stripe","Socket.io","Google Maps"],
    tagColors: ["Full Stack","Real-time"],
    gradient: "from-[#00d2ff]/10 via-[#9d50bb]/15 to-transparent",
    icon: "restaurant",
    features: ["Live order tracking","Multi-restaurant","GPS integration","Push notifications","Driver app"],
  },
];

const filters = ["All", "MERN", "Ecommerce", "SaaS", "Dashboard"];

const tagColorMap = {
  "MERN": "bg-primary-container/20 text-primary-container",
  "Auth": "bg-secondary/20 text-secondary",
  "Full Stack": "bg-primary-container/20 text-primary-container",
  "Stripe API": "bg-secondary/20 text-secondary",
  "SaaS": "bg-tertiary/20 text-tertiary",
  "Real-time": "bg-secondary/20 text-secondary",
  "Dashboard": "bg-primary-container/20 text-primary-container",
  "Analytics": "bg-tertiary/20 text-tertiary",
  "API": "bg-secondary/20 text-secondary",
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="aurora-bg top-[-5%] left-[-10%]" />
        <div className="aurora-bg bottom-[20%] right-[-5%]" />

        {/* PAGE HEADER */}
        <section className="pt-32 pb-16 px-6 max-w-[1280px] mx-auto">
          <motion.div initial="hidden" animate="visible" className="space-y-4">
            <motion.p variants={fadeUp} custom={0} className="font-label-caps text-label-caps text-primary-container">
              03. WORK
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display-lg text-display-lg-mobile md:text-display-lg">
              Featured <span className="text-primary-container">Projects</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-body-lg text-on-surface-variant max-w-3xl">
              A curated selection of production-grade applications — each one a testament to scalable architecture, clean code, and user-centered design.
            </motion.p>
          </motion.div>
        </section>

        {/* FILTER TABS */}
        <section className="px-6 max-w-[1280px] mx-auto mb-10">
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`cursor-pointer px-5 py-2 rounded-full font-label-caps text-label-caps transition-all ${
                  active === f
                    ? "bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(0,210,255,0.3)]"
                    : "glass-panel text-on-surface-variant hover:text-primary-container border border-outline-variant/30"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS GRID */}
        <section className="px-6 pb-24 max-w-[1280px] mx-auto">
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-panel rounded-3xl overflow-hidden group flex flex-col"
                >
                  {/* Card Visual */}
                  <div className={`relative h-56 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority={p.id === 1 || p.id === 2}
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-5"
                          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                        <span className="material-symbols-outlined text-8xl text-primary-container/30 group-hover:scale-110 group-hover:text-primary-container/50 transition-all duration-700">
                          {p.icon}
                        </span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] to-transparent opacity-70" />
                    <div className="absolute bottom-4 left-4">
                      <span className="font-label-caps text-label-caps text-primary-container bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tagColors.map((t) => (
                        <span key={t} className={`px-3 py-1 rounded-full text-xs font-bold ${tagColorMap[t] || "bg-surface-container-high text-on-surface-variant"}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-on-surface">{p.title}</h3>
                    <p className="text-on-surface-variant mb-5 flex-1">{p.desc}</p>

                    {/* Features */}
                    <div className="mb-5">
                      <p className="font-label-caps text-label-caps text-on-surface-variant mb-3">KEY FEATURES</p>
                      <ul className="space-y-1.5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <span className="material-symbols-outlined text-primary-container text-base">check_circle</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant font-code-sm text-xs border border-outline-variant/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={p.liveLink || "#"} target={p.liveLink ? "_blank" : undefined} rel={p.liveLink ? "noopener noreferrer" : undefined} className="flex-1 text-center py-3 rounded-xl bg-primary-container text-on-primary-container font-bold hover:opacity-90 hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all">
                        Live Demo
                      </a>
                      <a href={p.gitHubLink || "#"} target={p.gitHubLink ? "_blank" : undefined} rel={p.gitHubLink ? "noopener noreferrer" : undefined} className="flex-1 text-center py-3 rounded-xl border border-outline-variant text-on-surface font-bold hover:bg-surface-variant/20 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-base">code</span>
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-surface-container-lowest/50">
          <div className="max-w-[1280px] mx-auto">
            <motion.div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="aurora-bg top-0 left-1/2 -translate-x-1/2 opacity-30" />
              <p className="font-label-caps text-label-caps text-primary-container mb-3">HAVE A PROJECT IN MIND?</p>
              <h2 className="font-headline-md text-headline-md mb-4">Let&apos;s Build Something Together</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto mb-8">
                Whether it&apos;s a startup MVP or enterprise-grade system, I bring the same level of technical rigor and attention to detail.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all">
                Start a Project <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
