import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  city: z.string().min(1, "Por favor selecciona una ciudad"),
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

async function sendNotificationEmail(name: string, email: string, city: string) {
  try {
    // Check for required environment variables
    if (!process.env.SMTP_HOST || 
        !process.env.SMTP_USER || 
        !process.env.SMTP_PASS || 
        !process.env.NOTIFICATION_EMAIL) {
      console.warn("Email configuration not complete");
      return;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: "🌴 Nueva Suscripción - Viajecitos y más",
      html: `
        <h2>Nueva suscripción recibida</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
        })}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Notification email sent for: ${email}`);
  } catch (error) {
    console.error("Error sending notification email:", error);
    // Don't throw error - we want the form to still work even if email fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request data
    const validatedData = contactSchema.parse(body);
    const { name, email, city } = validatedData;

    // Add to Google Sheets and send notification email
    await Promise.all([
      addToGoogleSheets(name, email, city),
      sendNotificationEmail(name, email, city),
    ]);

    // Return success response
    return NextResponse.json(
      { 
        message: "¡Suscripción exitosa! Pronto recibirás ofertas increíbles de viaje.",
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
          message: "Por favor revisa tu información e inténtalo de nuevo.",
          errors: error.errors,
          success: false 
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { 
        message: "Algo salió mal. Por favor inténtalo más tarde.",
        success: false 
      },
      { status: 500 }
    );
  }
}