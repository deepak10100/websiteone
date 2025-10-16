import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { pricingPlans } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Find the perfect plan for your needs. Fireflow offers flexible and transparent pricing for homes and businesses.',
};

export default function PricingPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
              Transparent Pricing for Every Need
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl text-balance">
              Choose a plan that works for you. All our plans come with our quality guarantee and expert support. No hidden fees, no surprises.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto grid gap-8 md:grid-cols-3 items-start">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col h-full ${plan.isFeatured ? 'border-primary ring-2 ring-primary shadow-lg -translate-y-4' : ''}`}>
                {plan.isFeatured && <Badge className="w-fit self-center -mt-3">Most Popular</Badge>}
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-4xl font-bold pt-2">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                   <Button asChild className="w-full" variant={plan.isFeatured ? 'default' : 'outline'}>
                    <Link href="/contact">
                      {plan.name === 'Enterprise' || plan.name === 'Business Pro' ? 'Contact Us' : 'Get Started'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
