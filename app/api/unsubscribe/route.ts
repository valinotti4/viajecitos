import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { brevoService } from "@/lib/brevo";

const unsubscribeSchema = z.object({
  email: z.string().email("Por favor ingresa un email válido"),
});

async function updateGoogleSheets(email: string) {
  try {
    // Check for required environment variables
    if (
      !process.env.GOOGLE_SHEETS_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEETS_CLIENT_EMAIL ||
      !process.env.GOOGLE_SHEETS_ID
    ) {
      console.warn("Google Sheets credentials not configured");
      return false;
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Get the first sheet from the spreadsheet
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    });
    const sheetName =
      spreadsheet.data.sheets?.[0]?.properties?.title || "Sheet1";

    // Get all rows to find the email
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: `${sheetName}!A:G`,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      console.log("No data found in spreadsheet");
      return false;
    }

    // Find the row with the email (assuming email is in column C)
    const emailColumnIndex = 2; // Column C (0-indexed)
    let rowIndex = -1;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][emailColumnIndex]?.toLowerCase() === email.toLowerCase()) {
        rowIndex = i + 1; // Sheets are 1-indexed
        break;
      }
    }

    if (rowIndex === -1) {
      console.log(`Email not found in spreadsheet: ${email}`);
      return false;
    }

    const unsubscribeDate = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    });

    // Update the row with unsubscribe status (columns F and G)
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: `${sheetName}!F${rowIndex}:G${rowIndex}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[true, unsubscribeDate]],
      },
    });

    console.log(
      `Successfully marked ${email} as unsubscribed in Google Sheets`
    );
    return true;
  } catch (error) {
    console.error("Error updating Google Sheets:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // CORS Protection - Check origin
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL,
      ...(process.env.NODE_ENV === "development"
        ? ["http://localhost:3000"]
        : []),
    ].filter(Boolean);

    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: "Acceso no autorizado", success: false },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Validate the request data
    const validatedData = unsubscribeSchema.parse(body);
    const { email } = validatedData;

    // Update Brevo and Google Sheets
    const [brevoResult, sheetsResult] = await Promise.allSettled([
      brevoService.unsubscribeContact(email),
      updateGoogleSheets(email),
    ]);

    // Check if at least one operation succeeded
    const brevoSuccess =
      brevoResult.status === "fulfilled" && brevoResult.value;
    const sheetsSuccess =
      sheetsResult.status === "fulfilled" && sheetsResult.value;

    if (!brevoSuccess && !sheetsSuccess) {
      return NextResponse.json(
        {
          message: "Ya no te encuentras en nuestra lista de suscriptores.",
          success: false,
        },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        message:
          "Te has dado de baja exitosamente. Ya no recibirás nuestros emails.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unsubscribe API error:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Por favor ingresa un email válido.",
          errors: error.errors,
          success: false,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        message: "Algo salió mal. Por favor inténtalo más tarde.",
        success: false,
      },
      { status: 500 }
    );
  }
}
