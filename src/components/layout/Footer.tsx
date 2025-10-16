"use client"

import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { services } from '@/lib/data';
import { useUserContext } from '@/components/providers/user-provider';

export function Footer() {
  const { user } = useUserContext();
  const footerServices = services.slice(0, 4);

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="col-span-12 md:col-span-4 space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              Modern solutions for your home and business. Quality and reliability you can trust.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold font-headline">Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {footerServices.map(service => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-muted-foreground hover:text-foreground">{service.title}</Link>
                  </li>
                ))}
                 <li><Link href="/services" className="text-muted-foreground hover:text-foreground">More...</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline">Account</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {user ? (
                  <>
                    <li><Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
                    <li><Link href="/profile" className="text-muted-foreground hover:text-foreground">Profile</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link href="/auth/login" className="text-muted-foreground hover:text-foreground">Log In</Link></li>
                    <li><Link href="/auth/register" className="text-muted-foreground hover:text-foreground">Sign Up</Link></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fireflow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
