import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 mb-8 border border-purple-200 dark:border-purple-800 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium">AI-Powered Ad Campaigns</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Revolutionize Your Ad Strategy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Create, manage, and optimize your ad campaigns with our AI-driven platform. 
              Get better results with less effort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 h-12 px-8">
                  Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 dark:border-purple-900"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white dark:bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Tehify?</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed in digital advertising
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl transform transition-transform group-hover:scale-105 opacity-0 group-hover:opacity-100" />
                <div className="relative p-8 backdrop-blur-sm rounded-3xl border border-purple-100 dark:border-purple-900">
                  <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses already succeeding with Tehify
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const stats = [
  { value: "10M+", label: "Ads Optimized" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "2x", label: "Average ROI Increase" },
];

const features = [
  {
    title: "AI-Powered Optimization",
    description: "Our AI automatically optimizes your campaigns for maximum performance.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description: "Target audiences across multiple platforms and regions seamlessly.",
    icon: Globe,
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security to protect your advertising data.",
    icon: Shield,
  },
];