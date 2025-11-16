"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'annual'

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started and personal projects",
      price: {
        monthly: "$0",
        annual: "$0",
      },
      features: [
        "5 conversations per day",
        "Basic AI model access",
        "Standard response speed",
        "Email support",
        "1 user included",
      ],
      cta: "Get Started",
      popular: false,
      href: "/register",
    },
    {
      name: "Pro",
      description: "Ideal for professionals and small teams",
      price: {
        monthly: "$19",
        annual: "$15",
      },
      features: [
        "Unlimited conversations",
        "Advanced AI model access",
        "Faster response times",
        "Priority email & chat support",
        "5 users included",
        "API access (1000 calls/month)",
        "Custom instructions",
        "Conversation history (30 days)",
      ],
      cta: "Start Free Trial",
      popular: true,
      href: "/register",
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced needs",
      price: {
        monthly: "$49",
        annual: "$39",
      },
      features: [
        "Everything in Pro, plus:",
        "Unlimited API access",
        "Dedicated support team",
        "Custom AI model training",
        "Unlimited users",
        "SSO & advanced security",
        "Conversation history (unlimited)",
        "Custom deployment options",
        "Usage analytics dashboard",
      ],
      cta: "Contact Sales",
      popular: false,
      href: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>Pricing - NexAI | Advanced AI Chat Assistant</title>
        <meta
          name="description"
          content="Flexible pricing plans for NexAI. Choose the perfect plan for your needs."
        />
      </Head>

      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that works best for you and your team
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex items-center p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                className={`relative py-2 px-6 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly billing
              </button>
              <button
                type="button"
                className={`relative py-2 px-6 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 ${
                  billingCycle === "annual"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual billing
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border border-gray-200 bg-white ${
                plan.popular
                  ? "border-blue-500 shadow-xl ring-1 ring-blue-500"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-600">{plan.description}</p>

                <div className="mt-8 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {billingCycle === "monthly"
                      ? plan.price.monthly
                      : plan.price.annual}
                  </span>
                  {plan.name !== "Free" && (
                    <span className="ml-1 text-xl font-semibold text-gray-600">
                      {billingCycle === "monthly"
                        ? "/month"
                        : "/month (billed annually)"}
                    </span>
                  )}
                </div>

                <Link
                  href={plan.href}
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center text-sm font-medium ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Can I change plans anytime?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Yes, you can upgrade, downgrade, or cancel your plan at any
                  time. Changes to your plan will be reflected in your next
                  billing cycle.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Is there a free trial?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Yes! Our Pro plan comes with a 14-day free trial. No credit
                  card required to start. You can explore all features during
                  your trial period.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">
                  What payment methods do you accept?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers
                  for annual plans. All payments are securely processed through
                  our payment partners.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Do you offer discounts for nonprofits?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Yes, we offer special discounted pricing for registered
                  nonprofit organizations. Please contact our sales team for
                  more information.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">
                  How does the API access work?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  API access is included in our Pro and Enterprise plans. You'll
                  receive API keys and comprehensive documentation to integrate
                  our AI capabilities into your applications.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Can I get a custom plan for my organization?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Absolutely! Our Enterprise plan is customizable to fit your
                  organization's specific needs. Contact our sales team to
                  discuss custom pricing and features.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100">
            Join thousands of teams that are using NexAI to enhance their
            productivity and create amazing experiences.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Get started for free
            </Link>
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
