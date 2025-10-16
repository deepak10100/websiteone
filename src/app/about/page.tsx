import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Users, Target } from 'lucide-react';

import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, values, and team behind Fireflow. We are dedicated to providing top-quality service and innovative solutions.',
};

const aboutHeroImage = placeholderImages.placeholderImages.find(img => img.id === 'about-us-hero');

const teamMembers = [
  { name: 'John Doe', role: 'Founder & CEO', avatar: 'https://picsum.photos/seed/john/100/100', bio: 'With over 20 years of experience, John leads Fireflow with a passion for quality and innovation.' },
  { name: 'Jane Smith', role: 'Head of Operations', avatar: 'https://picsum.photos/seed/jane-s/100/100', bio: 'Jane ensures that every project runs smoothly and meets our high standards of excellence.' },
  { name: 'Peter Jones', role: 'Lead Technician', avatar: 'https://picsum.photos/seed/peter/100/100', bio: 'Peter is our master craftsman, bringing expertise and precision to every job site.' },
];

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white">
        {aboutHeroImage && (
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            fill
            className="object-cover"
            data-ai-hint={aboutHeroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">About Fireflow</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-balance">
            Your trusted partner for quality, efficiency, and innovation.
          </p>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Fireflow was born from a simple idea: to provide reliable, high-quality home and web services under one roof. Frustrated by the lack of integrated, customer-focused solutions, our founders set out to create a company that prioritizes craftsmanship, transparent communication, and technological innovation.
              </p>
              <p className="mt-4 text-muted-foreground text-lg">
                Today, we are proud to be a leading provider in the region, serving thousands of satisfied homeowners and businesses.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Target className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground mt-1">To deliver exceptional service and innovative solutions that improve the lives and businesses of our clients, ensuring every interaction is built on trust and integrity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Our Values</h3>
                  <p className="text-muted-foreground mt-1">Quality, Reliability, Customer-Centricity, and Continuous Improvement are the pillars that guide every decision we make.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Meet Our Leadership</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-lg">
            The experienced team dedicated to your success.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
