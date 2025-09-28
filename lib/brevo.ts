export class BrevoService {
  private apiKey: string;
  private baseUrl = 'https://api.brevo.com/v3';

  constructor() {
    this.apiKey = process.env.BREVO_API_KEY || '';
  }

  async createContact(name: string, email: string, city: string) {
    const contactData = {
      email: email,
      attributes: {
        FIRSTNAME: name,
        CITY: city
      },
      updateEnabled: true
    };

    try {
      const response = await fetch(`${this.baseUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json();
          if (errorData.code === 'duplicate_parameter') {
            console.log(`Contact already exists: ${email}`);
            return { id: null, message: 'Contact already exists' };
          }
        }
        const errorData = await response.text();
        throw new Error(`Brevo API error: ${response.status} - ${errorData}`);
      }

      const result = await response.json();
      console.log(`Contact created successfully: ${email}`, result);
      return result;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  }

  async sendWelcomeEmail(name: string, email: string, city: string) {
    try {
      await this.createContact(name, email, city);
    } catch (error) {
      console.error('Error creating contact, but continuing with email:', error);
    }

    const welcomeEmailTemplate = this.getWelcomeEmailTemplate(name, city);

    const emailData = {
      subject: "¡Bienvenido a Viajecitos y más! 🌴",
      htmlContent: welcomeEmailTemplate,
      sender: {
        name: "Viajecitos y más",
        email: "contacto@viajecitosymas.com"
      },
      to: [{
        email: email,
        name: name
      }]
    };

    try {
      const response = await fetch(`${this.baseUrl}/smtp/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Brevo API error: ${response.status} - ${errorData}`);
      }

      const result = await response.json();
      console.log(`Welcome email sent successfully to ${email}:`, result);
      return result;
    } catch (error) {
      console.error('Error sending welcome email:', error);
      throw error;
    }
  }

  private getWelcomeEmailTemplate(name: string, city: string): string {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Bienvenido a Viajecitos y más!</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', Arial, sans-serif;
            background-color: #fffbeb;
            color: #4b5563;
            line-height: 1.6;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }

        .header {
            background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }

        .logo {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 24px;
            font-weight: 900;
            margin-bottom: 20px;
        }

        .plane-icon {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .hero-title {
            font-size: 32px;
            font-weight: 900;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .hero-subtitle {
            font-size: 18px;
            opacity: 0.95;
        }

        .content {
            padding: 40px 30px;
        }

        .greeting {
            font-size: 20px;
            font-weight: 600;
            color: #ea580c;
            margin-bottom: 20px;
        }

        .message {
            font-size: 16px;
            margin-bottom: 30px;
            color: #4b5563;
        }

        .benefits {
            background-color: #fffbeb;
            border: 2px solid #fed7aa;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
        }

        .benefits-title {
            font-size: 18px;
            font-weight: 700;
            color: #ea580c;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .sparkles-icon {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }

        .benefits-list {
            list-style: none;
            padding: 0;
        }

        .benefits-list li {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;
        }

        .check-icon {
            width: 16px;
            height: 16px;
            color: #16a34a;
            flex-shrink: 0;
        }

        .cta-section {
            text-align: center;
            margin: 40px 0;
        }

        .cta-text {
            font-size: 16px;
            margin-bottom: 20px;
            color: #4b5563;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
            color: white;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 16px;
            box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
            transition: transform 0.2s;
        }

        .cta-button:hover {
            transform: translateY(-2px);
        }

        .footer {
            background-color: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }

        .footer-text {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 15px;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .social-link {
            display: inline-block;
            padding: 8px;
            background-color: #ea580c;
            color: white;
            border-radius: 6px;
            text-decoration: none;
        }

        .unsubscribe {
            font-size: 12px;
            color: #9ca3af;
        }

        .unsubscribe a {
            color: #ea580c;
            text-decoration: none;
        }

        @media (max-width: 600px) {
            .container {
                margin: 0;
            }

            .header {
                padding: 30px 20px;
            }

            .hero-title {
                font-size: 28px;
            }

            .content {
                padding: 30px 20px;
            }

            .benefits {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">
                <svg class="plane-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                </svg>
                Viajecitos y más
            </div>
            <h1 class="hero-title">¡Bienvenido a bordo!</h1>
            <p class="hero-subtitle">Tu aventura perfecta de fin de semana te está esperando</p>
        </div>

        <!-- Content -->
        <div class="content">
            <h2 class="greeting">¡Hola ${name}! 👋</h2>

            <p class="message">
                ¡Estamos emocionados de tenerte en nuestra comunidad de aventureros de fin de semana!
                Desde ${city}, vas a descubrir las mejores ofertas de viaje personalizadas especialmente para ti.
            </p>

            <div class="benefits">
                <h3 class="benefits-title">
                    <svg class="sparkles-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776.293.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.835-.822 1.18-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506-.766.581-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.009-.767-.581-.64-1.89-.387-4.506l.066-.677c.072-.743.108-1.115.001-1.46-.107-.345-.346-.623-.822-1.18l-.434-.507c-1.677-1.96-2.516-2.941-2.223-3.882.293-.941 1.523-1.219 3.982-1.776l.636-.144c.7-.158 1.05-.237 1.33-.45.28-.213.46-.536.82-1.182l.328-.588z" fill="currentColor"/>
                    </svg>
                    Esto es lo que puedes esperar:
                </h3>
                <ul class="benefits-list">
                    <li>
                        <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Ofertas exclusivas de vuelos desde ${city}
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Hoteles boutique con descuentos únicos
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Actividades y experiencias imperdibles
                    </li>
                    <li>
                        <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Recomendaciones personalizadas cada semana
                    </li>
                </ul>
            </div>

            <div class="cta-section">
                <p class="cta-text">
                    <strong>Tu primer destino recomendado llegará esta semana.</strong><br>
                    Mientras tanto, explora nuestras ofertas actuales:
                </p>
                <a href="https://viajecitosymas.com" class="cta-button">
                    Explorar Ofertas 🌴
                </a>
            </div>

            <p class="message">
                ¿Tienes alguna pregunta? Simplemente responde a este email y estaremos encantados de ayudarte a planificar tu próxima aventura.
            </p>

            <p class="message">
                <strong>¡Felices viajes!</strong><br>
                El equipo de Viajecitos y más
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p class="footer-text">
                <strong>Viajecitos y más</strong><br>
                Tu compañero perfecto para escapadas de fin de semana
            </p>

            <div class="social-links">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">📱</a>
                <a href="#" class="social-link">🌐</a>
            </div>

            <p class="unsubscribe">
                Si ya no deseas recibir estos emails, puedes <a href="#">darte de baja aquí</a>.<br>
                Viajecitos y más • España
            </p>
        </div>
    </div>
</body>
</html>
    `;
  }
}

export const brevoService = new BrevoService();