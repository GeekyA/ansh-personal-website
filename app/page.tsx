
import Image from 'next/image'
import Link from 'next/link'
import { IoOpenOutline } from "react-icons/io5";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 hover:text-green-500 transition-colors duration-300">Ansh Chadha</h1>
        <p className="text-xl mb-8 hover:text-green-500 transition-colors duration-300">Software Engineer</p>
        <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image src="/images/profile.jpg" alt="Ansh Chadha" width={3000} height={3000} className="object-cover" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold mb-8 hover:text-green-500 transition-colors duration-300 px-4">About</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <p className="mb-4 hover:bg-gray-100 hover:text-black p-4 rounded-lg transition-colors duration-300">I&apos;m a versatile Software Engineer with 3+ years of experience, building and scaling everything from intelligent data pipelines to dynamic web platforms. With a knack for problem-solving across different domains, I thrive in turning complex challenges into elegant solutions. Whether it&apos;s working on data-driven systems, crafting intuitive user experiences, or building next-gen tools powered by machine learning, I bring a deep technical skillset and a creative approach to every project.</p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 hover:text-green-500 transition-colors duration-300">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python','JavaScript','SQL', 'ETL', 'React', 'NextJS','Web development', 'AWS', 'Web Scraping', 'Django', 'Elasticsearch','BeautifulSoup', 'Pandas', 'Natural Language Processing (NLP)', 'Large Language Models (LLM)', 'Machine Learning'].map((skill, index) => (
                <span key={index} className="bg-green-500 text-white px-2 py-1 rounded text-sm transition-all duration-300 hover:bg-green-400 hover:text-white hover:shadow-[0_0_10px_#4ade80] hover:scale-105">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-8 hover:text-green-500 transition-colors duration-300">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 hover:text-green-500 transition-colors duration-300">Scribe</h3>
            <p className="mb-4">Scribe is a powerful command-line interface (CLI) tool designed to assist developers in writing and modifying code using artificial intelligence (claude 3.5 sonnet LLM). It leverages advanced language models to generate, edit, and explain code based on user prompts and existing codebases.</p>
            <div className="flex space-x-4">
              <Link href="https://github.com/GeekyA/scribe" className="text-blue-600 text-sm hover:text-green-500 transition-colors duration-300">GitHub</Link>
              <Link href="https://pypi.org/project/scribe-ai/0.0.1/" className="text-blue-600 text-sm hover:text-green-500 transition-colors duration-300">Python Package</Link>
            </div>
          </div>
          <div className="border p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 hover:text-green-500 transition-colors duration-300">Batua</h3>
            <p className="mb-4">Batua is a managed crypto web wallet, just sign up, create a wallet and start sending and receiving SOL.</p>
            <div className="flex space-x-4">
              <Link href="https://github.com/GeekyA/batua" className="text-blue-600 text-sm hover:text-green-500 transition-colors duration-300">GitHub</Link>
              <Link href="https://batua-wallet.vercel.app" className="text-blue-600 text-base hover:text-green-500 transition-colors duration-300"><IoOpenOutline /></Link>
            </div>
          </div>
          <div className="border p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 hover:text-green-500 transition-colors duration-300">ByteEat</h3>
            <p className="mb-4">ByteEat is an end to end platform to create digital menus and receive contactless orders for restaurants.</p>
            <div className="flex space-x-4">
              <Link href="https://byteeat.in" className="text-blue-600 hover:text-green-500 transition-colors duration-300"><IoOpenOutline />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="experience" className="py-20">
        <h2 className="text-3xl font-bold mb-8 hover:text-green-500 transition-colors duration-300">Experience</h2>
        <div className="mb-8">
          {/*<h3 className="text-xl font-semibold mb-4 hover:text-green-500 transition-colors duration-300">Professional Experience</h3>*/}
          <ul className="space-y-4">
            <li className="hover:bg-gray-100 hover:text-black p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-semibold">Data Engineer - Taiyō.AI, San Francisco, California</h4>
              <p>September 2022 - September 2024</p>
              <p>Specialized in crafting robust ETL pipelines for data extraction, normalization, and loading into Elasticsearch databases. Dealt mostly with public procurement and contracting data and also created pipelines for various Risk datasets.</p>
            </li>
            <li className="hover:bg-gray-100 hover:text-black p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-semibold">Data Engineer (Internship) - ByteLearn, India</h4>
              <p>December 2021 - September 2022</p>
              <p>Contributed to ByteLearn, an innovative EdTech startup, by spearheading dataset creation. Conducted data scraping activities and utilizing advanced NLP techniques for comprehensive data cleaning.</p>
            </li>
            <li className="hover:bg-gray-100 hover:text-black p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-semibold">Software Engineer (Internship) - Prop Rep Realty, LLP, Bengaluru, Karnataka</h4>
              <p>August 2021 - October 2021</p>
              <p>Engaged in testing trading strategies for the stock market, which entailed tasks such as data analysis, collection, web scraping, and statistical modeling. Also backtested various technical analysis oriented trading strategies.</p>
            </li>
            <li className="hover:bg-gray-100 hover:text-black p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-semibold">Software Engineer (Internship) - SONAI, Noida</h4>
              <p>Jun 2020 - Jan 2021</p>
              <p>Leveraged cutting-edge technologies including Python3, TensorFlow, spaCy, and NLTK. Wrote python scripts tailored to diverse NLP tasks, including parsing resumes and designing Transformer-based models for question generation from text. Spearheaded the development of backend infrastructure for an assessment bot and OCEAN personality test.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
