import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Hammer, Lightbulb, Paintbrush, Sparkles, Wrench, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import placeholderImages from '@/lib/placeholder-images.json';

const features = [
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Expert Technicians',
    description: 'Our team consists of certified and experienced professionals dedicated to quality.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Modern Solutions',
    description: 'We use the latest technology and techniques to deliver efficient and effective results.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Transparent Pricing',
    description: 'No hidden fees. We provide clear, upfront pricing for all our services.',
  },
];

const services = [
  { icon: <Wrench className="h-6 w-6" />, name: 'Plumbing', href: '/services/plumbing' },
  { icon: <Lightbulb className="h-6 w-6" />, name: 'Electrical', href: '/services/electrical' },
  { icon: <Hammer className="h-6 w-6" />, name: 'Carpentry', href: '/services/carpentry' },
  { icon: <Paintbrush className="h-6 w-6" />, name: 'Painting', href: '/services/painting' },
];

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Homeowner',
    avatar: 'https://picsum.photos/seed/avatar1/40/40',
    comment: 'Fireflow transformed our kitchen with their carpentry and painting services. The team was professional, clean, and finished on schedule. Highly recommended!',
  },
  {
    name: 'Mike P.',
    role: 'Business Owner',
    avatar: 'https://picsum.photos/seed/avatar2/40/40',
    comment: 'The emergency plumbing service was a lifesaver. They arrived quickly, diagnosed the issue, and fixed it with minimal disruption to my business. True professionals.',
  },
   {
    name: 'Emily R.',
    role: 'Web Developer',
    avatar: 'https://picsum.photos/seed/avatar3/40/40',
    comment: 'Their web development team built a stunning and fast e-commerce site for us. The process was smooth and collaborative from start to finish.',
  },
];

const heroImage = placeholderImages.placeholderImages.find(img => img.id === 'hero-image');


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full pt-24 md:pt-32 pb-12 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Badge variant="secondary" className="mb-6 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                Quality & Reliability Guaranteed
              </Badge>
              <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl text-balance bg-clip-text text-transparent bg-gradient-to-br from-foreground from-50% to-muted-foreground">
                Modern Solutions for Your Home & Business
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl text-balance max-w-3xl mx-auto md:mx-0">
                From expert home repairs to cutting-edge web services, Fireflow is your trusted partner for quality, efficiency, and innovation.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto md:aspect-square">
             {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-xl text-center mb-12">
             <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Why Choose Fireflow?</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We are committed to excellence in every project we undertake.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg bg-card/50 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-headline font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Highlight Section */}
      <section className="w-full py-16 md:py-24 bg-card/30 dark:bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We provide a wide range of professional services to meet your needs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.name} className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 bg-background hover:border-primary/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full border p-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-headline font-semibold">{service.name}</h3>
                  <Link href={service.href} className="mt-4 text-sm font-medium text-primary stretched-link group-hover:underline">
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Real stories from satisfied customers.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-foreground border-l-2 border-primary pl-4">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground p-8 md:p-12">
            <div className="absolute inset-0 bg-grid-slate-100/[0.07] bg-[20px_20px] [mask-image:linear-gradient(0deg,transparent,#000)] animate-fade-in-slow"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Start Your Project?</h2>
                <p className="mt-2 max-w-xl text-primary-foreground/80">
                  Let's build something great together. Contact us today for a free, no-obligation quote.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button size="lg" variant="secondary" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 scale-100 hover:scale-105 transition-transform shadow-lg">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
