import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Fireflow.',
};

export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <div className="space-y-6 text-muted-foreground">
                <p>This page is a placeholder. You should replace this with your own Terms of Service.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">1. Terms</h2>
                <p>By accessing the website at http://fireflow.app, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Fireflow's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Fireflow's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">3. Disclaimer</h2>
                <p>The materials on Fireflow's website are provided on an 'as is' basis. Fireflow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">4. Limitations</h2>
                <p>In no event shall Fireflow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fireflow's website, even if Fireflow or a Fireflow authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                <h2 className="text-2xl font-bold text-foreground pt-4">5. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </div>
        </div>
    );
}
