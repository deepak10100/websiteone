import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { posts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest news, tips, and insights from the Fireflow team. Explore articles on home maintenance, technology, and more.',
};

export default function BlogPage() {
  const publishedPosts = posts.filter(post => post.published);

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
              The Fireflow Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl text-balance">
              Insights, tips, and updates from our team of experts.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {publishedPosts.map((post) => (
              <Card key={post.id} className="group flex flex-col overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 w-full">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {post.tags.map(tag => (
                       <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="font-headline text-xl leading-snug">
                     <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.createdAt}>{format(new Date(post.createdAt), 'MMM d, yyyy')}</time>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination would go here */}
        </div>
      </section>
    </div>
  );
}
