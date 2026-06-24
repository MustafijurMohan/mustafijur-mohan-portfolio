"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import blog from './images/Blog.png'
import ecom from './images/Ecommerce.png'
import quickcart from './images/QuickCart.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const services = [
  { icon: "code", title: "Full Stack Web Development", desc: "End-to-end web solutions using the MERN stack for robust applications." },
  { icon: "api", title: "REST API Development", desc: "Designing secure, optimized, and scalable API architectures." },
  { icon: "hub", title: "MERN Stack Applications", desc: "Bespoke MongoDB, Express, React, and Node solutions." },
  { icon: "dashboard", title: "Dashboard Development", desc: "Complex data visualization and administrative control panels." },
  { icon: "lock_open", title: "Authentication Systems", desc: "Secure JWT and OAuth implementations for user protection." },
  { icon: "devices", title: "Responsive Website Design", desc: "Flawless user experiences across all screen dimensions." },
  { icon: "dynamic_feed", title: "API Integration", desc: "Seamless connection of third-party services and internal tools." },
  { icon: "speed", title: "Performance Optimization", desc: "Enhancing speed, SEO, and overall system efficiency." },
];

const projects = [
  {
    title: "QuickCart Ecommerce",
    desc: "A full-featured clothing e-commerce platform with a role-based admin panel, real-time product/order management, and Stripe integration.",
    tags: [{ label: "Full Stack", cls: "bg-primary-container/20 text-primary-container" }, { label: "Stripe API", cls: "bg-secondary/20 text-secondary" }],
    gradient: "from-[#00d2ff]/20 via-[#9d50bb]/10 to-transparent",
    image: quickcart,
    liveLink: "https://quick-cart-git-main-mustafijurmohans-projects.vercel.app",
    gitHubLink: "https://github.com/MustafijurMohan/QuickCart",
  },
  {
    title: "Multiple Author Blog Platform",
    desc: "A complex ecosystem featuring granular author roles, a custom rich text editor, and a deep-dive admin dashboard for content management.",
    tags: [{ label: "MERN", cls: "bg-primary-container/20 text-primary-container" }, { label: "Authentication", cls: "bg-secondary/20 text-secondary" }],
    gradient: "from-[#00d2ff]/20 via-[#3a7bd5]/10 to-transparent",
    image: blog,
    liveLink: "https://multiple-author-blog-eacg.vercel.app/",
    gitHubLink: "https://github.com/MustafijurMohan/Multiple_Author_Blog",
  },
  {
    title: "Premium Ecommerce App",
    desc: "Scalable product management system with real-time inventory tracking, secure Stripe payments, and a dynamic admin control panel.",
    tags: [{ label: "Full Stack", cls: "bg-primary-container/20 text-primary-container" }, { label: "Stripe API", cls: "bg-secondary/20 text-secondary" }],
    gradient: "from-[#9d50bb]/20 via-[#3a7bd5]/10 to-transparent",
    image: ecom,
    liveLink: "https://next-gadget-one.vercel.app/",
    gitHubLink: "https://github.com/MustafijurMohan/NextGadget",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="aurora-bg top-[-10%] left-[-10%]" />
        <div className="aurora-bg top-[40%] right-[-10%]" />

        {/* HERO */}
        <section className="min-h-screen flex items-center pt-24 pb-16 px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <motion.div className="lg:col-span-7 space-y-6" initial="hidden" animate="visible">
              <motion.div variants={fadeUp} custom={0}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/30 bg-primary-container/10 text-primary-fixed-dim font-label-caps text-label-caps">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
                </span>
                AVAILABLE FOR WORK
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
                Hi, I&apos;m <span className="text-primary-container">Mustafijur Mohan</span>
              </motion.h1>
              <motion.h2 variants={fadeUp} custom={2} className="font-headline-md text-headline-md text-on-surface-variant">
                MERN Stack Developer with 5 Years Experience
              </motion.h2>
              <motion.p variants={fadeUp} custom={3} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Architecting high-performance web ecosystems through elegant logic and modern engineering. I specialize in building scalable MERN applications that prioritize user experience and technical integrity.
              </motion.p>
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3 pt-4">
                <Link href="/projects" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all">
                  View Projects <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/contact" className="glass-panel px-8 py-4 rounded-xl font-bold border border-outline-variant text-on-surface hover:bg-surface-variant/20 transition-all">
                  Hire Me
                </Link>
                <a href="/Mustafijur_Mohan_Resume.pdf" download="Mustafijur_Mohan_Resume.pdf" className="glass-panel px-8 py-4 rounded-xl font-bold border border-outline-variant text-on-surface hover:bg-surface-variant/20 transition-all flex items-center gap-2">
                  Download CV <span className="material-symbols-outlined">download</span>
                </a>
              </motion.div>
              <motion.div variants={fadeUp} custom={5} className="flex gap-8 pt-4">
                {[{ label: "Years Exp.", value: "5+" }, { label: "Projects", value: "50+" }, { label: "Clients", value: "30+" }].map((s) => (
                  <div key={s.label}>
                    <p className="font-display-lg text-2xl font-extrabold text-primary-container">{s.value}</p>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Terminal */}
            <motion.div className="lg:col-span-5 relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <div className="glass-panel p-1 rounded-2xl overflow-hidden">
                <div className="terminal-header flex gap-2 p-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-surface-container-lowest p-6 font-code-sm text-code-sm space-y-2">
                  <p className="text-secondary"><span className="text-primary">const</span> developer = &#123;</p>
                  <p className="pl-4 text-on-surface">name: <span className="text-tertiary-container">&apos;Mustafijur Mohan&apos;</span>,</p>
                  <p className="pl-4 text-on-surface">role: <span className="text-tertiary-container">&apos;Senior MERN Stack&apos;</span>,</p>
                  <p className="pl-4 text-on-surface">experience: <span className="text-primary-fixed-dim">5</span>,</p>
                  <p className="pl-4 text-on-surface">skills: [<span className="text-tertiary-container">&apos;React&apos;, &apos;Node&apos;, &apos;Mongo&apos;</span>],</p>
                  <p className="pl-4 text-on-surface">status: <span className="text-tertiary-container">&apos;Available&apos;</span></p>
                  <p className="text-secondary">&#125;;</p>
                  <div className="pt-4 border-t border-outline-variant/20">
                    <p className="text-on-surface-variant">{"// Delivering scalable solutions"}</p>
                    <p className="text-primary">console.log(developer.status);</p>
                    <p className="text-primary-container animate-pulse">&gt; Available ✓</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="py-[120px] px-6 max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-label-caps text-label-caps text-primary-container mb-2">01. EXPERTISE</p>
            <h2 className="font-headline-md text-headline-md mb-4">Technical Mastery</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "database", title: "Backend Architecture", color: "text-primary-container", bg: "bg-primary-container/20",
                skills: ["Node.js","Express.js","MongoDB","Mongoose","REST API","JWT","Database Security","API Optimization"] },
              { icon: "layers", title: "Frontend Excellence", color: "text-secondary", bg: "bg-secondary/20",
                skills: ["React.js","Next.js","Tailwind CSS","Framer Motion","Responsive Design","UI/UX Design","Claude AI","Prompt Engineering"] },
            ].map((card, i) => (
              <motion.div key={card.title} className="glass-panel p-6 rounded-2xl"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center ${card.color}`}>
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-2xl">{card.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {card.skills.map((s) => (
                    <span key={s} className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm border border-outline-variant/10">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-[120px] px-6 bg-surface-container-lowest/50">
          <div className="max-w-[1280px] mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="font-label-caps text-label-caps text-primary-container mb-2">02. SERVICES</p>
              <h2 className="font-headline-md text-headline-md mb-4">Core Competencies</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">Comprehensive development services tailored for scalability and modern performance standards.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <motion.div key={s.title} className="glass-panel p-6 rounded-2xl"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.3}>
                  <span className="material-symbols-outlined text-primary-container mb-3 text-4xl block">{s.icon}</span>
                  <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                  <p className="text-on-surface-variant text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 border border-primary-container/40 text-primary-container px-8 py-3 rounded-xl font-bold hover:bg-primary-container/10 transition-all">
                View All Services <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-[120px] px-6 max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-label-caps text-label-caps text-primary-container mb-2">03. WORK</p>
            <h2 className="font-headline-md text-headline-md mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((p, i) => (
              <motion.article key={p.title} className={`glass-panel rounded-3xl overflow-hidden group flex flex-col justify-between ${i === 0 ? "lg:col-span-2" : ""}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div>
                  <div className={`relative h-56 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority={i === 0}
                      />
                    ) : (
                      <span className="material-symbols-outlined text-8xl text-primary-container/30 group-hover:scale-110 transition-transform duration-700">web</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>
                  <div className="p-8 pb-0">
                    <div className="flex gap-2 mb-4">
                      {p.tags.map((t) => (
                        <span key={t.label} className={`px-3 py-1 ${t.cls} rounded-full text-xs font-bold`}>{t.label}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-on-surface">{p.title}</h3>
                    <p className="text-on-surface-variant mb-6">{p.desc}</p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <div className="flex gap-4">
                    <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-xl bg-primary-container text-on-primary-container font-bold hover:opacity-90 transition-opacity">Live Demo</a>
                    <a href={p.gitHubLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-xl border border-outline-variant text-on-surface font-bold hover:bg-surface-variant/20 transition-all">GitHub</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-flex items-center gap-2 border border-primary-container/40 text-primary-container px-8 py-3 rounded-xl font-bold hover:bg-primary-container/10 transition-all">
              View All Projects <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-[120px] px-6 max-w-[1280px] mx-auto">
          <motion.div className="glass-panel rounded-3xl p-12 overflow-hidden relative"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="aurora-bg top-0 right-0 opacity-40" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <p className="font-label-caps text-label-caps text-primary-container">04. CONTACT</p>
                <h2 className="font-headline-md text-headline-md">Let&apos;s build something extraordinary.</h2>
                <p className="text-on-surface-variant font-body-lg text-body-lg">Ready to take your digital product to the next level? I&apos;m currently available for freelance opportunities and full-time senior positions.</p>
                <div className="space-y-4 pt-4">
                  {[
                    { icon: "mail", label: "contact@mustafijur.com", href: "mailto:contact@mustafijur.com" },
                    { icon: "link", label: "linkedin.com/in/mustafijur", href: "https://www.linkedin.com/in/mustafijur-mohan-7a9958209/" },
                  ].map((c) => (
                    <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                        <span className="material-symbols-outlined">{c.icon}</span>
                      </div>
                      <span className="text-lg font-medium">{c.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[{ label: "Full Name", type: "text", placeholder: "John Doe" }, { label: "Email Address", type: "email", placeholder: "john@example.com" }].map((f) => (
                      <div key={f.label}>
                        <label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant">{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all text-on-surface placeholder:text-on-surface-variant/50" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant">Subject</label>
                    <input type="text" placeholder="Project Inquiry" className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all text-on-surface placeholder:text-on-surface-variant/50" />
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant">Message</label>
                    <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all resize-none text-on-surface placeholder:text-on-surface-variant/50" />
                  </div>
                  <button type="submit" className="w-full cursor-pointer py-4 rounded-xl bg-primary-container text-on-primary-container font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-primary-container/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
