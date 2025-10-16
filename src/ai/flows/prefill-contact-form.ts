'use server';

/**
 * @fileOverview A flow for prefilling the contact form with the service name.
 *
 * - prefillContactForm - A function that prefills the contact form.
 * - PrefillContactFormInput - The input type for the prefillContactForm function.
 * - PrefillContactFormOutput - The return type for the prefillContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrefillContactFormInputSchema = z.object({
  serviceName: z.string().describe('The name of the service to prefill in the contact form.'),
});
export type PrefillContactFormInput = z.infer<typeof PrefillContactFormInputSchema>;

const PrefillContactFormOutputSchema = z.object({
  prefilledService: z.string().describe('The service name to prefill in the contact form.'),
});
export type PrefillContactFormOutput = z.infer<typeof PrefillContactFormOutputSchema>;

export async function prefillContactForm(input: PrefillContactFormInput): Promise<PrefillContactFormOutput> {
  return prefillContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prefillContactFormPrompt',
  input: {schema: PrefillContactFormInputSchema},
  output: {schema: PrefillContactFormOutputSchema},
  prompt: `You are a helpful assistant that prefills the contact form with the service name.

  Service Name: {{{serviceName}}}

  Prefilled Service: {{{serviceName}}} `,
});

const prefillContactFormFlow = ai.defineFlow(
  {
    name: 'prefillContactFormFlow',
    inputSchema: PrefillContactFormInputSchema,
    outputSchema: PrefillContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
