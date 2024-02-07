import contacts from "@/models/contact";
import { connectToDB } from "@/lib/helpers";

export async function POST(request: Request) {
  try {
    await connectToDB();
    const { secret } = await request.json();
    console.log(secret);

    if (secret !== "123") {
      return new Response("Unauthorized", { status: 401 });
    }

    const allContacts = await contacts.find();

    return new Response(JSON.stringify(allContacts), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
}