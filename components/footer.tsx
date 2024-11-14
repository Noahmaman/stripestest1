"use client";

import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/social" className="text-sm text-muted-foreground hover:text-foreground">Social Ads</Link></li>
              <li><Link href="/products/search" className="text-sm text-muted-foreground hover:text-foreground">Search Ads</Link></li>
              <li><Link href="/products/display" className="text-sm text-muted-foreground hover:text-foreground">Display Ads</Link></li>
              <li><Link href="/products/video" className="text-sm text-muted-foreground hover:text-foreground">Video Ads</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions/ecommerce" className="text-sm text-muted-foreground hover:text-foreground">E-commerce</Link></li>
              <li><Link href="/solutions/saas" className="text-sm text-muted-foreground hover:text-foreground">SaaS</Link></li>
              <li><Link href="/solutions/marketplace" className="text-sm text-muted-foreground hover:text-foreground">Marketplace</Link></li>
              <li><Link href="/solutions/platform" className="text-sm text-muted-foreground hover:text-foreground">Platforms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/customers" className="text-sm text-muted-foreground hover:text-foreground">Customers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/partners" className="text-sm text-muted-foreground hover:text-foreground">Partners</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">© 2024 Tehify</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4 mr-2" />
                United States
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}