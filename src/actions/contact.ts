"use server"

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().optional(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(values);

    if (!validatedFields.success) {
        return { success: false, error: "Invalid fields." };
    }

    const { name, email, service, message } = validatedFields.data;

    try {
        // TODO: Implement actual submission logic (e.g., send an email, save to DB)
        console.log("Form data received:", { name, email, service, message });
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return { success: true };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { success: false, error: "Something went wrong on the server." };
    }
}
