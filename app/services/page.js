"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: "code", title: "Full Stack Web Development",
    desc: "End-to-end MERN solutions from database schema design to pixel-perfect UI. I own the entire product lifecycle, ensuring coherence at every layer.",
    features: ["System Architecture","Database Design","REST API","React Frontend","Deployment"],
    color: "text-primary-container", bg: "bg-primary-container/10", border: "border-primary-container/20",
  },
  {
    icon: "api", title: "REST API Development",
    desc: "Designing robust, secure, and well-documented API ecosystems. I implement industry best practices for authentication, rate-limiting, and performance.",
    features: ["JWT Auth","Rate Limiting","Swagger Docs","Versioning","Caching"],
    color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20",
  },
  {
    icon: "hub", title: "MERN Stack Applications",
    desc: "Full-cycle MERN application development. From interactive dashboards to consumer-facing products, built with scalability and maintainability in mind.",
    features: ["MongoDB","Express.js","React.js","Node.js","Mongoose"],
    color: "text-tertiary", bg: "bg-tertiary/10", border: "border-tertiary/20",
  },
  {
    icon: "dashboard", title: "Dashboard Development",
    desc: "Complex data visualization panels and admin control systems. I transform raw data into actionable insights through intuitive, real-time interfaces.",
    features: ["Real-time Data","Charts","Role-based Access","Export","Responsive"],
    color: "text-primary-container", bg: "bg-primary-container/10", border: "border-primary-container/20",
  },
  {
    icon: "lock_open", title: "Authentication Systems",
    desc: "Comprehensive identity and access management solutions. Building secure, scalable auth systems that protect user data without compromising experience.",
    features: ["JWT","OAuth 2.0","2FA","Session Mgmt","Password Security"],
    color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20",
  },
  {
    icon: "devices", title: "Responsive Website Design",
    desc: "Crafting interfaces that deliver flawless experiences across all device dimensions. Mobile-first, performance-optimized, and accessibility-focused.",
    features: ["Mobile-First","Tailwind CSS","CSS Grid","Animations","A11y"],
    color: "text-tertiary", bg: "bg-tertiary/10", border: "border-tertiary/20",
  },
  {
    icon: "dynamic_feed", title: "API Integration",
    desc: "Connecting disparate systems and third-party services into unified, reliable data pipelines. I ensure seamless interoperability across your tech stack.",
    features: ["Payment Gateways","Social Auth","Email Services","Maps","Analytics"],
    color: "text-primary-container", bg: "bg-primary-container/10", border: "border-primary-container/20",
  },
  {
    icon: "speed", title: "Performance Optimization",
    desc: "Analyzing and eliminating bottlenecks across the full stack. Achieving superior Lighthouse scores, faster TTFBs, and better Core Web Vitals.",
    features: ["Code Splitting","Lazy Loading","Caching","CDN","DB Indexing"],
    color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20",
  },
];

const process = [
  { step: "01", title: "Discovery", icon: "search", desc: "Deep-dive into your requirements, user needs, and technical constraints." },
  { step: "02", title: "Architecture", icon: "schema", desc: "Design the system blueprint — database, API, and frontend structure." },
  { step: "03", title: "Development", icon: "code", desc: "Iterative, test-driven development with regular progress check-ins." },
  { step: "04", title: "Delivery", icon: "rocket_launch", desc: "Deployment, documentation, and post-launch support." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="aurora-bg top-[-5%] left-[-10%]" />
        <div className="aurora-bg bottom-[10%] right-[-5%]" />

        {/* PAGE HEADER */}
        <section className="pt-32 pb-16 px-6 max-w-[1280px] mx-auto">
          <motion.div initial="hidden" animate="visible" className="space-y-4">
            <motion.p variants={fadeUp} custom={0} className="font-label-caps text-label-caps text-primary-container">
              02. SERVICES
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display-lg text-display-lg-mobile md:text-display-lg">
              Core <span className="text-primary-container">Competencies</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-body-lg text-on-surface-variant max-w-3xl">
              Comprehensive, end-to-end development services engineered for scalability, performance, and modern standards. Every engagement is treated with senior-level technical rigor.
            </motion.p>
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title}
                className={`glass-panel p-8 rounded-2xl border ${s.border} group`}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center ${s.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl mb-3">{s.title}</h3>
                <p className="text-on-surface-variant mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className={`px-3 py-1 rounded-full font-code-sm text-code-sm ${s.bg} ${s.color} border ${s.border}`}>
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 px-6 bg-surface-container-lowest/50">
          <div className="max-w-[1280px] mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="font-label-caps text-label-caps text-primary-container mb-2">HOW I WORK</p>
              <h2 className="font-headline-md text-headline-md mb-4">My Process</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">A structured, transparent workflow that keeps you informed and in control at every stage.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <motion.div key={p.step} className="glass-panel p-6 rounded-2xl text-center relative"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                  <div className="font-label-caps text-label-caps text-primary-container/40 mb-3">{p.step}</div>
                  <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mx-auto mb-4">
                    <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-on-surface-variant text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 max-w-[1280px] mx-auto">
          <motion.div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="aurora-bg top-0 left-1/2 -translate-x-1/2 opacity-30" />
            <h2 className="font-headline-md text-headline-md mb-4">Ready to Start a Project?</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-8">
              Let&apos;s discuss your requirements and build something extraordinary together.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all">
              Get In Touch <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
