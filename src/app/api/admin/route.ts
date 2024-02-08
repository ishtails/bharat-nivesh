import contacts from "@/models/contact";
import { connectToDB } from "@/lib/helpers";

export async function POST(request: Request) {
  try {
    const { secret } = await request.json();
    await connectToDB();

    if (secret !== "nivesh@100") {
      return new Response("Unauthorized", { status: 401 });
    }

    const allContacts = await contacts.find();

    return new Response(JSON.stringify(allContacts));
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
}