import Head from "next/head";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>About Us - NexAI | Advanced AI Chat Assistant</title>
        <meta
          name="description"
          content="Learn about NexAI, our mission, team, and the technology behind our advanced AI chat assistant"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-blue-600">NexAI</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Revolutionizing human-AI interaction through cutting-edge
              technology and thoughtful design
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At NexAI, we believe that artificial intelligence should be
                accessible, helpful, and human-centric. Our mission is to create
                AI assistants that understand context, respect privacy, and
                enhance human capabilities rather than replace them.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We're committed to developing ethical AI that benefits everyone,
                with transparency at the core of everything we build. Our
                technology is designed to learn from interactions while
                maintaining the highest standards of data protection and user
                privacy.
              </p>
              <div className="mt-8">
                <Link
                  href="/features"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Explore our features →
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-white opacity-80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Advanced Technology
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Powered by the latest breakthroughs in artificial intelligence and
              machine learning
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Natural Language Processing
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Our AI understands context, nuance, and intent using
                    state-of-the-art NLP models trained on diverse datasets.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Privacy First
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Your conversations are encrypted end-to-end. We minimize
                    data collection and never sell your information to third
                    parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Continuous Learning
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Our models continuously improve through feedback while
                    maintaining strict ethical guidelines and oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Passionate experts in AI, linguistics, ethics, and user experience
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-600">
                JD
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                James Davidson
              </h3>
              <p className="text-sm text-blue-600">CEO & Founder</p>
              <p className="mt-2 text-base text-gray-500">
                Former AI researcher with 15+ years of experience in machine
                learning and natural language processing.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-600">
                SR
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Sarah Rodriguez
              </h3>
              <p className="text-sm text-blue-600">Chief Technology Officer</p>
              <p className="mt-2 text-base text-gray-500">
                Software architect specializing in scalable AI systems and
                ethical AI implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-600">
                MK
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Michael Kim
              </h3>
              <p className="text-sm text-blue-600">Lead AI Researcher</p>
              <p className="mt-2 text-base text-gray-500">
                PhD in Computational Linguistics with focus on context-aware
                conversation systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg font-medium text-gray-900 leading-6">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  Transparency
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We're open about how our AI works, what data we collect, and
                  how we use it. No hidden algorithms or mysterious data
                  practices.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900 leading-6">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  Privacy
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Your conversations are yours alone. We implement
                  industry-leading security measures to protect your data.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900 leading-6">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 极速5分钟 0 019.288 0M15 7a3 3 0 11-6 0 极速5分钟 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10极速5分钟 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  Inclusivity
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We build AI that understands and respects diverse
                  perspectives, cultures, and communication styles.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900 leading-6">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/s极速5分钟vg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  Innovation
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We continuously push the boundaries of what's possible in AI
                  conversation while maintaining ethical standards.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to experience the future of AI conversation?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100">
            Join thousands of users who are already enhancing their productivity
            with NexAI
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get started for free
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
