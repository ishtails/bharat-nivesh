import contacts from "@/models/contact";
import { connectToDB } from "@/lib/helpers";

export async function POST(request: Request) {
  const {email, name, message } = await request.json();

  try {
    await connectToDB();
  const newContact = new contacts({
    email,
    name,
    message,
  });
  await newContact.save();
  return new Response("Saved", { status: 200 });
  } catch (error) {
    return new Response("Failed to send", { status: 500 });
  }
}