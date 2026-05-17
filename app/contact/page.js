"use client";
import { useState } from "react";
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

const contactInfo = [
  { icon: "mail", label: "Email", value: "contact@mustafijur.com", href: "mailto:contact@mustafijur.com" },
  { icon: "link", label: "LinkedIn", value: "linkedin.com/in/mustafijur", href: "https://www.linkedin.com/in/mustafijur-mohan-7a9958209/" },
  { icon: "code", label: "GitHub", value: "github.com/mustafijur", href: "https://github.com/MustafijurMohan" },
  { icon: "location_on", label: "Location", value: "Bangladesh 🇧🇩", href: "#" },
];

const faqs = [
  { q: "What is your typical project timeline?", a: "Most projects take 2–8 weeks depending on complexity. I provide detailed estimates after the discovery phase." },
  { q: "Do you work with international clients?", a: "Yes, I work with clients globally. I'm flexible with time zones for meetings and use async-first communication." },
  { q: "What are your rates?", a: "Rates vary by project scope. I offer both fixed-price and hourly engagements. Let's discuss your budget." },
  { q: "Do you offer post-launch support?", a: "Absolutely. I provide 30 days of free bug fixes post-launch and offer ongoing maintenance plans." },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

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
              04. CONTACT
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display-lg text-display-lg-mobile md:text-display-lg">
              Let&apos;s Build Something <span className="text-primary-container">Extraordinary</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-body-lg text-on-surface-variant max-w-3xl">
              Ready to take your digital product to the next level? I&apos;m currently available for freelance opportunities and full-time senior positions.
            </motion.p>
          </motion.div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="py-8 px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT — Info */}
            <motion.div className="lg:col-span-5 space-y-8"
              initial="hidden" animate="visible" variants={fadeUp} custom={0}>

              {/* Availability Badge */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container flex-shrink-0">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-container" />
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Available for Work</p>
                  <p className="text-on-surface-variant text-sm">Open to freelance & full-time roles</p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {contactInfo.map((c, i) => (
                  <motion.a key={c.label} href={c.href}
                    className="flex items-center gap-4 glass-panel p-4 rounded-xl group"
                    initial="hidden" animate="visible" variants={fadeUp} custom={i + 1}>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all flex-shrink-0">
                      <span className="material-symbols-outlined">{c.icon}</span>
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-on-surface-variant">{c.label}</p>
                      <p className="font-medium text-on-surface">{c.value}</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container ml-auto transition-colors">arrow_forward</span>
                  </motion.a>
                ))}
              </div>

              {/* Response Time */}
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">schedule</span>
                  Response Time
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Initial Response", value: "< 24 hours", color: "bg-primary-container" },
                    { label: "Project Proposal", value: "2–3 business days", color: "bg-secondary" },
                    { label: "Project Start", value: "1–2 weeks", color: "bg-tertiary" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between">
                      <span className="text-on-surface-variant text-sm">{r.label}</span>
                      <span className="font-code-sm text-code-sm text-primary-container">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="glass-panel p-8 rounded-2xl">
                <h2 className="font-headline-md text-xl mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">send</span>
                  Send a Message
                </h2>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container mb-6">
                      <span className="material-symbols-outlined text-5xl">check_circle</span>
                    </div>
                    <h3 className="font-headline-md text-2xl mb-2">Message Sent!</h3>
                    <p className="text-on-surface-variant">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant">Full Name *</label>
                        <input required type="text" placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all text-on-surface placeholder:text-on-surface-variant/40" />
                      </div>
                      <div>
                        <label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant">Email Address *</label>
                        <input required type="email" placeholder="john@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all text-on-surface placeholder:text-on-surface-variant/40" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant">Subject *</label>
                      <input required type="text" placeholder="Project Inquiry / Full-time Opportunity"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all text-on-surface placeholder:text-on-surface-variant/40" />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps mb-2 text-on-surface-variant">Message *</label>
                      <textarea required rows={5} placeholder="Tell me about your project, timeline, and budget..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all resize-none text-on-surface placeholder:text-on-surface-variant/40" />
                    </div>
                    <button type="submit"
                      className="w-full cursor-pointer py-4 rounded-xl bg-primary-container text-on-primary-container font-bold text-lg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all shadow-lg shadow-primary-container/20 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined">send</span>
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-surface-container-lowest/50">
          <div className="max-w-[1280px] mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="font-label-caps text-label-caps text-primary-container mb-2">FAQ</p>
              <h2 className="font-headline-md text-headline-md mb-4">Common Questions</h2>
            </motion.div>
            <div className="max-w-2xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} className="glass-panel rounded-xl overflow-hidden"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                  <button
                    className="w-full cursor-pointer flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-on-surface">{faq.q}</span>
                    <span className={`material-symbols-outlined text-primary-container transition-transform ${openFaq === i ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                      className="px-5 pb-5 text-on-surface-variant">
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
