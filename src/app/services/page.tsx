import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, Lightbulb, Hammer, HardHat, Paintbrush, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the wide range of professional services offered by Fireflow, including plumbing, electrical, carpentry, painting, and more. Quality service for your home and business.',
};

const iconMap: { [key: string]: React.ReactNode } = {
  plumbing: <Wrench className="h-8 w-8 text-primary" />,
  electrical: <Lightbulb className="h-8 w-8 text-primary" />,
  carpentry: <Hammer className="h-8 w-8 text-primary" />,
  appliances: <HardHat className="h-8 w-8 text-primary" />,
  painting: <Paintbrush className="h-8 w-8 text-primary" />,
  cleaning: <Sparkles className="h-8 w-8 text-primary" />,
};

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
              Comprehensive Services for Every Need
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl text-balance">
              Whether you need a quick repair, a major installation, or a custom project, our team of experts is ready to deliver top-quality results.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug} className="group flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {iconMap[service.slug]}
                    <span className="font-headline text-2xl">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                  <Button asChild variant="outline" className="mt-6 w-full">
                    <Link href={`/services/${service.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
