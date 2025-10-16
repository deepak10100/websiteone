import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

type Props = {
  params: { slug: string };
};

// Generate static pages for each post at build time
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamically generate metadata for each post page
export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
        type: 'article',
        publishedTime: post.createdAt,
        authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    }
  };
}

// Custom Markdown renderer components
const MarkdownComponents = {
  h2: (props: any) => <h2 className="text-2xl font-headline font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-headline font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-4" {...props} />,
  li: (props: any) => <li className="text-muted-foreground" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />,
  code: (props: any) => <code className="bg-muted text-muted-foreground rounded-sm px-1 py-0.5 font-code" {...props} />,
};

// Simple markdown to HTML parser
function parseMarkdown(markdown: string) {
    // This is a very basic parser. For a real app, use a library like 'marked' or 'react-markdown'.
    const html = markdown
        .split('\n')
        .map(line => {
            if (line.startsWith('## ')) return `<h2 class="text-2xl font-headline font-bold mt-8 mb-4">${line.substring(3)}</h2>`;
            if (line.startsWith('### ')) return `<h3 class="text-xl font-headline font-bold mt-6 mb-3">${line.substring(4)}</h3>`;
            if (line.trim() === '') return '';
            return `<p class="leading-relaxed mb-4 text-muted-foreground">${line}</p>`;
        })
        .join('');
    return { __html: html };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="animate-fade-in">
      <header className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <div className="flex gap-2 mb-4 justify-center">
                {post.tags.map(tag => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                ))}
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-balance">
                {post.title}
            </h1>
            <div className="mt-6 flex justify-center items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={post.createdAt}>{format(new Date(post.createdAt), 'MMMM d, yyyy')}</time>
            </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
            />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-2xl pb-16 md:pb-24">
        {/* Basic Markdown rendering */}
        <div dangerouslySetInnerHTML={parseMarkdown(post.content)} />
      </div>
    </article>
  );
}
