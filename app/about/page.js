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

const skills = [
  { category: "Backend", icon: "database", color: "text-primary-container", bg: "bg-primary-container/20",
    items: ["Node.js","Express.js","MongoDB","Mongoose","REST API","JWT","GraphQL","Socket.io","Redis","Database Security","API Optimization","Microservices"] },
  { category: "Frontend", icon: "layers", color: "text-secondary", bg: "bg-secondary/20",
    items: ["React.js","Next.js","Tailwind CSS","Framer Motion","TypeScript","Redux","Zustand","HTML5","CSS3","Responsive Design","UI/UX Design","Figma"] },
  { category: "DevOps & Tools", icon: "terminal", color: "text-tertiary", bg: "bg-tertiary/20",
    items: ["Git","GitHub","Docker","Vercel","Netlify","AWS S3","Linux","Postman","VS Code","NPM","Webpack","CI/CD"] },
  { category: "AI & Emerging", icon: "smart_toy", color: "text-on-secondary-container", bg: "bg-secondary-container/20",
    items: ["Prompt Engineering","Claude AI","OpenAI API","LangChain","Vector DBs","AI Integration"] },
];

const experience = [
  { role: "Senior MERN Stack Developer", company: "Freelance / Remote", period: "2022 — Present", desc: "Architecting full-stack MERN applications for global clients. Delivering scalable SaaS products, ecommerce platforms, and admin dashboards with modern UI/UX." },
  { role: "Full Stack Developer", company: "Tech Startup, Dhaka", period: "2020 — 2022", desc: "Built and maintained production-ready Node.js/React applications. Led backend API design, database modeling, and frontend component architecture." },
  { role: "Junior Web Developer", company: "Digital Agency", period: "2019 — 2020", desc: "Developed responsive websites and implemented REST API integrations. Gained experience in the full software development lifecycle." },
];

export default function AboutPage() {
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
              01. ABOUT ME
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display-lg text-display-lg-mobile md:text-display-lg">
              The <span className="text-primary-container">Invisible Engine</span> Behind Your Next Project
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-body-lg text-on-surface-variant max-w-3xl">
              I&apos;m Mustafijur Mohan — a Senior MERN Stack Developer with 5 years of experience building high-performance, scalable web applications. I combine deep technical expertise with a sharp eye for user experience to deliver products that truly matter.
            </motion.p>
          </motion.div>
        </section>

        {/* BIO + TERMINAL */}
        <section className="py-16 px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div className="lg:col-span-7 space-y-6"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="glass-panel p-8 rounded-2xl">
                <h2 className="font-headline-md text-2xl mb-4">My Story</h2>
                <div className="space-y-4 text-on-surface-variant text-body-md">
                  <p>My journey into software engineering started with a fascination for how the web works — how a few lines of code could create something millions of people interact with daily. That curiosity drove me to master the MERN stack from the ground up.</p>
                  <p>Over 5 years, I&apos;ve evolved from a junior developer writing basic CRUD applications to architecting complex, multi-tenant SaaS platforms handling thousands of concurrent users. Every project has sharpened my understanding of scalability, security, and developer experience.</p>
                  <p>I believe great software is the intersection of technical precision and human-centered design. I bring both to every engagement — from initial architecture decisions to pixel-perfect frontend implementations.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "99%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-panel p-4 rounded-xl text-center">
                    <p className="font-display-lg text-2xl font-extrabold text-primary-container">{stat.value}</p>
                    <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="glass-panel p-1 rounded-2xl overflow-hidden">
                <div className="terminal-header flex items-center gap-2 p-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-code-sm text-code-sm text-on-surface-variant">about.js</span>
                </div>
                <div className="bg-surface-container-lowest p-6 font-code-sm text-code-sm space-y-2">
                  <p className="text-on-surface-variant">// Mustafijur Mohan — Engineer Profile</p>
                  <p className="text-secondary"><span className="text-primary">const</span> profile = &#123;</p>
                  <p className="pl-4 text-on-surface">location: <span className="text-tertiary-container">&apos;Bangladesh 🇧🇩&apos;</span>,</p>
                  <p className="pl-4 text-on-surface">specialization: <span className="text-tertiary-container">&apos;MERN Stack&apos;</span>,</p>
                  <p className="pl-4 text-on-surface">experience: <span className="text-primary-fixed-dim">5</span>,</p>
                  <p className="pl-4 text-on-surface">languages: [</p>
                  <p className="pl-8 text-tertiary-container">&apos;JavaScript&apos;, &apos;TypeScript&apos;,</p>
                  <p className="pl-8 text-tertiary-container">&apos;Python&apos;, &apos;Bash&apos;</p>
                  <p className="pl-4 text-on-surface">],</p>
                  <p className="pl-4 text-on-surface">interests: [</p>
                  <p className="pl-8 text-tertiary-container">&apos;System Design&apos;, &apos;AI/ML&apos;,</p>
                  <p className="pl-8 text-tertiary-container">&apos;Open Source&apos;</p>
                  <p className="pl-4 text-on-surface">],</p>
                  <p className="pl-4 text-on-surface">available: <span className="text-primary-container">true</span></p>
                  <p className="text-secondary">&#125;;</p>
                  <div className="pt-4 border-t border-outline-variant/20">
                    <p className="text-primary-container animate-pulse">&gt; Open to opportunities ✓</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-20 px-6 bg-surface-container-lowest/50">
          <div className="max-w-[1280px] mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="font-label-caps text-label-caps text-primary-container mb-2">02. SKILLS</p>
              <h2 className="font-headline-md text-headline-md mb-4">Full-Stack Expertise</h2>
              <div className="h-1 w-20 bg-primary-container mx-auto rounded-full" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((s, i) => (
                <motion.div key={s.category} className="glass-panel p-6 rounded-2xl"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}>
                      <span className="material-symbols-outlined text-xl">{s.icon}</span>
                    </div>
                    <h3 className="font-headline-md text-xl">{s.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm border border-outline-variant/10 hover:border-primary-container/30 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-20 px-6 max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-label-caps text-label-caps text-primary-container mb-2">03. JOURNEY</p>
            <h2 className="font-headline-md text-headline-md mb-4">Work Experience</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto rounded-full" />
          </motion.div>
          <div className="space-y-6 relative before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-outline-variant/30">
            {experience.map((e, i) => (
              <motion.div key={e.role} className="glass-panel p-6 rounded-2xl ml-14 relative"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="absolute -left-[3.25rem] top-6 w-4 h-4 rounded-full bg-primary-container border-2 border-background" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold text-xl text-on-surface">{e.role}</h3>
                  <span className="font-label-caps text-label-caps text-primary-container whitespace-nowrap">{e.period}</span>
                </div>
                <p className="font-code-sm text-code-sm text-on-surface-variant mb-3">{e.company}</p>
                <p className="text-on-surface-variant">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
