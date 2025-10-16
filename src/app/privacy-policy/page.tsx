import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Fireflow.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="space-y-6 text-muted-foreground">
                <p>This page is a placeholder. You should replace this with your own Privacy Policy.</p>
                <p>Your privacy is important to us. It is Fireflow's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">1. Information we collect</h2>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">2. How we use your information</h2>
                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">3. Cookies</h2>
                <p>We use cookies to help improve your experience of our website. This cookie policy is part of Fireflow's privacy policy, and covers the use of cookies between your device and our site.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">4. Links to other sites</h2>
                <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">5. Changes to our Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                <p>This policy is effective as of 1 January 2024.</p>
            </div>
        </div>
    );
}
