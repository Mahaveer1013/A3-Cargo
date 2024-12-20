import { verifyToken } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect"; // Assuming you have a utility to connect to MongoDB
import { getClientHTML, getCompanyHTML } from "@/lib/htmlTemplates";
import { sendEmail } from "@/lib/nodemailer";
import Contact from "@/model/contact.model"; // Path to your Contact model

// POST API to create a new contact message
export const POST = async (req) => {
  // Ensure database connection is established
  await dbConnect();

  const { email, name, phone, message } = await req.json(); // Parse JSON from request body

  // Validate input fields
  if (!email || !name || !message) {
    return new Response(
      JSON.stringify({
        message: "All fields (email, name, message) are required",
      }),
      { status: 400 }
    );
  }

  try {
    // Create a new contact entry
    const newContact = new Contact({
      email,
      name,
      message,
      phone
    });

    // Save the contact message to the database
    await newContact.save();

    // Prepare the email content
    const clientSubject = "Contact Message Confirmation";
    const clientHTML = getClientHTML(name, phone, message, process.env.COMPANY_EMAIL);

    // Send the email
    await sendEmail({
      to: email, // Define this in your environment variables
      subject: clientSubject,
      html: clientHTML,
    });

    // Prepare the email content
    const companySubject = "Contact Message Confirmation";
    const companyHTML = getCompanyHTML(name, phone, email, message);

    // Send the email
    await sendEmail({
      to: process.env.COMPANY_EMAIL, // Define this in your environment variables
      subject: companySubject,
      html: companyHTML,
    });

    return new Response(
      JSON.stringify({ message: "Contact message sent successfully" }),
      { status: 201 }
    );
  } catch (error) {
    // Handle any errors that occur during the process
    return new Response(
      JSON.stringify({
        error: "Error creating contact entry",
        message: error.message,
      }),
      { status: 500 }
    );
  }
};

export async function GET(req) {
  try {
    // Verify the token to authenticate the user
    await verifyToken(req);

    // Connect to the database
    await connectToDatabase();

    // Fetch contact messages with pagination
    const contactMessages = await Contact.find()
      .sort({ createdAt: -1 }) // Sorting by creation date (descending)

    return new Response(JSON.stringify(contactMessages), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
