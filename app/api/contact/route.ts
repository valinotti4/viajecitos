import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(1, "Please select a city"),
});

async function addToGoogleSheets(name: string, email: string, city: string) {
  try {
    // Check for required environment variables
    if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY ||
        !process.env.GOOGLE_SHEETS_CLIENT_EMAIL ||
        !process.env.GOOGLE_SHEETS_ID) {
      console.warn("Google Sheets credentials not configured");
      return;
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    });

    // Get the first sheet from the spreadsheet
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    });
    const sheetName = spreadsheet.data.sheets?.[0]?.properties?.title || "Sheet1";

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: `${sheetName}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [timestamp, name, email, city, "Nuevo"]
        ],
      },
    });

    console.log(`Successfully added contact to Google Sheets: ${email}`);
  } catch (error) {
    console.error("Error adding to Google Sheets:", error);
    // Don't throw error - we want the form to still work even if sheets fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request data
    const validatedData = contactSchema.parse(body);
    const { name, email, city } = validatedData;

    // Add to Google Sheets
    await addToGoogleSheets(name, email, city);

    // Return success response
    return NextResponse.json(
      { 
        message: "Successfully subscribed! You'll receive amazing travel deals soon.",
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: "Please check your information and try again.",
          errors: error.errors,
          success: false 
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { 
        message: "Something went wrong. Please try again later.",
        success: false 
      },
      { status: 500 }
    );
  }
}