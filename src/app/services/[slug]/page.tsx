import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import type { Service } from '@/lib/types';

type Props = {
  params: { slug: string };
};

// Generate static pages for each service at build time
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamically generate metadata for each service page
export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  return {
    title: service.title,
    description: service.description,
    openGraph: {
        title: service.title,
        description: service.description,
        images: [service.image]
    }
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center text-center text-white">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
            {service.title}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-headline font-bold">About This Service</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {service.longDescription}
            </p>

            {/* Pricing Section */}
            <section id="pricing" className="mt-12">
              <h2 className="text-3xl font-headline font-bold">Pricing Tiers</h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.pricingTiers.map((tier) => (
                  <Card key={tier.name} className={`flex flex-col ${tier.isFeatured ? 'border-primary shadow-lg' : ''}`}>
                    {tier.isFeatured && <Badge className="w-fit self-start m-4">Most Popular</Badge>}
                    <CardHeader className={tier.isFeatured ? 'pt-0' : ''}>
                      <CardTitle>{tier.name}</CardTitle>
                      <CardDescription className="text-4xl font-bold">{tier.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <ul className="space-y-3 text-sm text-muted-foreground flex-grow">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                       <Button asChild className="mt-6 w-full" variant={tier.isFeatured ? 'default' : 'outline'}>
                        <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>Select Plan</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* CTA Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Contact us today for a free, no-obligation quote for our {service.title}.</p>
                <Button asChild variant="secondary" className="mt-4 w-full bg-white text-primary hover:bg-gray-100">
                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-headline font-bold">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {service.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
