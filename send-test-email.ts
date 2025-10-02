import { config } from "dotenv";
import { BrevoService } from "./lib/brevo";

// Load .env.local file
config({ path: ".env.local" });

// Debug: check if API key is loaded
console.log("BREVO_API_KEY exists:", !!process.env.BREVO_API_KEY);
console.log("BREVO_API_KEY length:", process.env.BREVO_API_KEY?.length || 0);

const name = process.argv[2] || "Test User";
const email = process.argv[3] || "test@example.com";
const city = process.argv[4] || "Barcelona";

console.log(`Sending welcome email to ${name} (${email}) from ${city}...`);
const brevoService = new BrevoService();
brevoService
  .sendWelcomeEmail(name, email, city)
  .then(() => {
    console.log("✅ Email sent successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error:", err);
    process.exit(1);
  });
