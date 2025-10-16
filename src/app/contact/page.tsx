import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Fireflow team. We are here to answer your questions about our services. Reach out via form, email, or phone.',
};

const contactDetails = [
  { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Email', value: 'contact@fireflow.app', href: 'mailto:contact@fireflow.app' },
  { icon: <Phone className="h-6 w-6 text-primary" />, title: 'Phone', value: '(123) 456-7890', href: 'tel:123-456-7890' },
  { icon: <MapPin className="h-6 w-6 text-primary" />, title: 'Address', value: '123 Fireflow St, Metro City, 12345' },
];

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl text-balance">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-2xl font-headline font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours. For urgent inquiries, please call us.
              </p>
              <div className="space-y-4">
                {contactDetails.map(detail => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{detail.title}</h3>
                      {detail.href ? (
                         <a href={detail.href} className="text-muted-foreground hover:text-primary">{detail.value}</a>
                      ) : (
                         <p className="text-muted-foreground">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
