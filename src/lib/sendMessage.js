import z from "zod";
import supabase from "./supabase";

export async function sendMessage(email, message) {
  const zObject = z.object({
    email: z.email("Email format is invalid").min(1, "Email is required").max(100, "The email cannot have more than 100 characters."),
    message: z.string().min(1, "The message is required").max(500, "The message cannot have more than 500 characters.")
  })

  try {
    // Validar los datos de entrada
    const result = zObject.safeParse({ email, message });
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues[0].message
      }
    }
    
    const validatedData = result.data;

    const { data, error } = await supabase.from('Contact').insert([validatedData])

    if (error) {
      return {
        success: false,
        error: "Please try again later."
      }
    }

    return {
      success: true,
      data
    }
  } catch (error) {
    return {
      success: false,
      error: "Please try again later."
    }
  }
}