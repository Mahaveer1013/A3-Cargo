import { verifyToken } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect"; // Assuming you have a utility to connect to MongoDB
import { getClientHTML, getCompanyHTML } from "@/lib/htmlTemplates";
import { sendEmail } from "@/lib/nodemailer";
import Contact from "@/model/contact.model"; // Path to your Contact model

// POST API to create a new contact message
export const POST = async (req) => {
  // Ensure database connection is established
  await dbConnect();

  const { email, name, message } = await req.json(); // Parse JSON from request body

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
    });

    // Save the contact message to the database
    await newContact.save();

    // Prepare the email content
    const clientSubject = "Contact Message Confirmation";
    const clientHTML = getClientHTML(name, message, process.env.COMPANY_EMAIL);

    // Send the email
    await sendEmail({
      to: email, // Define this in your environment variables
      subject: clientSubject,
      html: clientHTML,
    });

    // Prepare the email content
    const companySubject = "Contact Message Confirmation";
    const companyHTML = getCompanyHTML(name, email, message);

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

    // Extract pagination parameters (page, limit) from the query string
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page')) || 1; // Default to page 1 if not provided
    const limit = parseInt(url.searchParams.get('limit')) || 10; // Default to 10 items per page if not provided
    const skip = (page - 1) * limit; // Calculate skip value for pagination

    // Fetch contact messages with pagination
    const contactMessages = await Contact.find()
      .sort({ createdAt: -1 }) // Sorting by creation date (descending)
      .skip(skip) // Skip the previous pages' messages
      .limit(limit); // Limit the number of results per page

    // Fetch the total count for pagination metadata
    const totalMessages = await Contact.countDocuments();

    // Return the contact messages along with pagination metadata
    return new Response(JSON.stringify({
      contactMessages,
      pagination: {
        page,
        limit,
        totalMessages,
        totalPages: Math.ceil(totalMessages / limit),
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
