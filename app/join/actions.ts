"use server"

import { redirect } from "next/navigation"

export async function submitRegistration(formData: FormData) {
  // Get form data
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const plan = formData.get("plan") as string
  const message = formData.get("message") as string

  // In a real application, you would:
  // 1. Validate the data
  // 2. Store it in a database
  // 3. Send confirmation emails, etc.

  // For now, we'll just log the data and redirect to success page
  console.log({
    firstName,
    lastName,
    email,
    phone,
    plan,
    message,
  })

  // Redirect to success page
  redirect("/join/success")
}
