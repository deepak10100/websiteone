'use server';

/**
 * @fileOverview An AI agent to generate a concise summary of an article.
 *
 * - generateArticleSummary - A function that generates the article summary.
 * - GenerateArticleSummaryInput - The input type for the generateArticleSummary function.
 * - GenerateArticleSummaryOutput - The return type for the generateArticleSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateArticleSummaryInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the article to be summarized.'),
});
export type GenerateArticleSummaryInput = z.infer<typeof GenerateArticleSummaryInputSchema>;

const GenerateArticleSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the article content.'),
});
export type GenerateArticleSummaryOutput = z.infer<typeof GenerateArticleSummaryOutputSchema>;

export async function generateArticleSummary(
  input: GenerateArticleSummaryInput
): Promise<GenerateArticleSummaryOutput> {
  return generateArticleSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticleSummaryPrompt',
  input: {schema: GenerateArticleSummaryInputSchema},
  output: {schema: GenerateArticleSummaryOutputSchema},
  prompt: `You are an expert summarizer. You will be given the content of an article, and you will generate a concise summary of the article.

Article Content: {{{articleContent}}}`,
});

const generateArticleSummaryFlow = ai.defineFlow(
  {
    name: 'generateArticleSummaryFlow',
    inputSchema: GenerateArticleSummaryInputSchema,
    outputSchema: GenerateArticleSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
