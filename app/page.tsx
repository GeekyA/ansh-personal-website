'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      {/* Hero Section - Modern fragmented layout */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--background)] to-[var(--muted)] opacity-50" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Left side - Content */}
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--muted)] rounded-full text-sm font-medium text-[var(--muted-foreground)]">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for opportunities
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                    Ansh
                  </span>
                  <br />
                  <span className="text-[var(--muted-foreground)]">
                    Chadha
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-[var(--muted-foreground)] font-light max-w-lg">
                  Senior Software Engineer who builds enterprise-grade systems from scratch. Specialized in AI automation and full-stack platforms that scale.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="#experience" 
                  className="btn-base px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius-lg)] hover:bg-[var(--primary)]/90 focus:ring-[var(--primary)] text-lg font-medium"
                >
                  View My Experience
                </Link>
                <Link 
                  href="mailto:anshchadha9211@gmail.com" 
                  className="btn-base px-8 py-4 border-2 border-[var(--border)] rounded-[var(--radius-lg)] hover:bg-[var(--muted)] text-lg font-medium"
                >
                  Get In Touch
                </Link>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                variants={fadeInUp}
                className="flex gap-8 pt-8"
              >
                <div>
                  <div className="text-2xl font-bold text-[var(--primary)]">3+</div>
                  <div className="text-sm text-[var(--muted-foreground)]">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--primary)]">4+</div>
                  <div className="text-sm text-[var(--muted-foreground)]">Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--primary)]">10+</div>
                  <div className="text-sm text-[var(--muted-foreground)]">Technologies</div>
                </div>
              </motion.div>
            </div>
            
            {/* Right side - Image with modern styling */}
            <motion.div 
              variants={fadeInUp}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-xl opacity-20" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] rounded-2xl blur-xl opacity-20" />
                
                {/* Profile image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-3xl rotate-6" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-[var(--surface)] shadow-2xl">
                    <Image 
                      src="/images/profile.jpg" 
                      alt="Ansh Chadha - Software Engineer" 
                      fill
                      className="object-cover" 
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
              I&apos;m a results-driven Senior Software Engineer with 3+ years of proven expertise in building enterprise-grade systems that process millions of data points and serve thousands of users.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main description */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-8 hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                  I&apos;ve architected and deployed production systems that handle millions of real estate documents, automated complex financial processes saving thousands of hours, and built SaaS platforms from concept to paying customers. My track record spans Fortune 500 companies to cutting-edge AI startups, consistently delivering solutions that scale and drive measurable business impact.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-3" />
                    <div>
                      <h4 className="font-semibold mb-1">Enterprise AI Systems</h4>
                      <p className="text-sm text-[var(--muted-foreground)]">Production-ready AI workflows processing real-world business data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-3" />
                    <div>
                      <h4 className="font-semibold mb-1">Scalable Infrastructure</h4>
                      <p className="text-sm text-[var(--muted-foreground)]">End-to-end platforms built for performance and reliability</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Skills */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-8 hover:shadow-[var(--shadow-lg)] transition-all duration-300 h-fit">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                    Tech Stack
                  </span>
                </h3>
                <div className="space-y-4">
                  {[
                    { category: 'Languages', skills: ['Python', 'JavaScript', 'SQL', 'TypeScript'] },
                    { category: 'Frontend', skills: ['React', 'NextJS', 'React Native'] },
                    { category: 'Backend/Cloud', skills: ['AWS (EC2, S3, Lambda)', 'Django', 'FastAPI', 'Flask','Node.js', 'PostgreSQL', 'Docker'] },
                    { category: 'Data & AI', skills: ['LLMs', 'Prompt engineering', 'LanghChain','LangGraph','Pytorch','Pandas', 'Elasticsearch', 'BeautifulSoup'] }
                  ].map((group, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-[var(--muted-foreground)] uppercase tracking-wide">
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-3 py-1 bg-[var(--muted)] text-[var(--foreground)] rounded-[var(--radius-sm)] text-sm font-medium hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[var(--muted)]/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Services I Offer
              </span>
            </h2>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Enterprise-grade solutions for businesses ready to leverage cutting-edge technology. Proven results, premium execution.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise AI Automation',
                icon: '🤖',
                description: 'Production-ready AI systems that I\'ve proven at Rekpo.AI - automating lease abstracts, bank reconciliation, and underwriting processes with measurable ROI.',
                features: ['Document Processing AI', 'Financial Automation', 'Custom LLM Workflows', 'Enterprise Integration']
              },
              {
                title: 'Full-Stack SaaS Platforms',
                icon: '🚀',
                description: 'Complete SaaS development from architecture to deployment. I built Rekpo.AI\'s entire platform - backend, frontend, and infrastructure that processes real estate data at scale.',
                features: ['React/Next.js Frontend', 'Python/Django Backend', 'AWS Infrastructure', 'Production Deployment']
              },
              {
                title: 'Data Pipeline Architecture',
                icon: '📊',
                description: 'Enterprise ETL systems handling millions of records. My pipelines at Taiyō.AI processed procurement data and risk datasets for Fortune 500 clients.',
                features: ['Elasticsearch Integration', 'Real-time Processing', 'Data Normalization', 'Scalable Architecture']
              },
              {
                title: 'System Architecture Consulting',
                icon: '💡',
                description: 'Strategic guidance based on hands-on experience building production systems. I help you avoid costly mistakes and scale efficiently from day one.',
                features: ['Architecture Design', 'Technology Selection', 'Performance Optimization', 'Cost Efficiency']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-8 hover:shadow-[var(--shadow-xl)] transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready for Enterprise-Grade Results?
              </h3>
              <p className="text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
                I deliver production systems that scale. If you&apos;re ready to invest in proven expertise and measurable outcomes, let&apos;s discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="mailto:anshchadha9211@gmail.com?subject=Project Inquiry" 
                  className="btn-base px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius-lg)] hover:bg-[var(--primary)]/90 focus:ring-[var(--primary)] text-lg font-medium"
                >
                  Get In Touch
                </Link>
                <Link 
                  href="#experience" 
                  className="btn-base px-8 py-4 border-2 border-[var(--border)] rounded-[var(--radius-lg)] hover:bg-[var(--muted)] text-lg font-medium"
                >
                  View My Experience
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
              My journey through various roles in software engineering and data engineering
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden md:block" />
            
            <div className="space-y-8">
              {[
                {
                  title: 'AI Developer',
                  company: 'Rekpo.AI (Gallagher & Mohan)',
                  location: 'New Delhi, India (Remote)',
                  period: 'December 2024 - Present',
                  description: 'Single-handedly architected and deployed Rekpo.AI\'s complete SaaS platform - a production system processing thousands of real estate documents daily. Built AI workflows that eliminate 80% of manual work in lease analysis, bank reconciliation, and underwriting, delivering measurable ROI to enterprise clients.',
                  type: 'Full-time'
                },
                {
                  title: 'Data Engineer',
                  company: 'Taiyō.AI',
                  location: 'San Francisco, Californi (Remote)',
                  period: 'September 2022 - September 2024',
                  description: 'Engineered enterprise-grade ETL pipelines processing millions of procurement records and risk datasets for Fortune 500 clients. Built scalable data infrastructure on AWS that reduced processing time by 60% while maintaining 99.9% uptime.',
                  type: 'Full-time'
                },
                {
                  title: 'Data Engineer',
                  company: 'ByteLearn',
                  location: 'India (Remote)',
                  period: 'December 2021 - September 2022',
                  description: 'Led dataset creation and NLP pipeline development for EdTech platform serving 10,000+ students. Implemented advanced data scraping and cleaning systems that improved content quality by 40% and reduced manual curation time.',
                  type: 'Internship'
                },
                {
                  title: 'Software Engineer',
                  company: 'Prop Rep Realty, LLP',
                  location: 'Bengaluru, Karnataka (Remote)',
                  period: 'August 2021 - October 2021',
                  description: 'Developed and backtested algorithmic trading strategies using statistical modeling and technical analysis. Built data collection systems and performance analytics that identified profitable patterns in market data.',
                  type: 'Internship'
                },
                {
                  title: 'Software Engineer',
                  company: 'SONAI',
                  location: 'Noida (Remote)',
                  period: 'Jun 2020 - Jan 2021',
                  description: 'Built production NLP systems using TensorFlow, spaCy, and NLTK for resume parsing and question generation. Developed Transformer-based models and backend infrastructure for AI assessment tools, processing thousands of candidate evaluations with 95% accuracy.',
                  type: 'Internship'
                }
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-start justify-center pt-1">
                    <div className="w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-[var(--background)] relative z-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-8 hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[var(--primary)] font-medium mb-1">
                          <span>{experience.company}</span>
                          <span className="text-[var(--muted-foreground)]">
                            · {experience.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="text-sm text-[var(--muted-foreground)] font-medium">
                          {experience.period}
                        </span>
                        <span className={`px-2 py-1 rounded-[var(--radius-sm)] text-xs font-medium ${
                          experience.type === 'Full-time' 
                            ? 'bg-[var(--success)]/10 text-[var(--success)]' 
                            : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                        }`}>
                          {experience.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
