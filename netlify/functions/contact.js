const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Cloudflare Turnstile secret key
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

// Allowed sectors (whitelist)
const VALID_SECTORS = ['boulangerie', 'tabac', 'supermarché', 'pharmacie', 'autre'];

// Simple input sanitizer - strip HTML tags
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// Verify Cloudflare Turnstile token
async function verifyTurnstile(token, ip) {
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET,
        response: token,
        remoteip: ip
      })
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': 'https://cashmonetik.fr',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);

    // --- SERVER-SIDE SECURITY CHECKS ---

    // 1. Honeypot check (bots fill hidden fields)
    if (body.website) {
      console.warn('Bot detected: honeypot filled');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Emails envoyés avec succès' })
      };
    }

    // 2. Timestamp check (form filled too fast = bot)
    const timestamp = parseInt(body.timestamp);
    if (timestamp && (Date.now() - timestamp) < 3000) {
      console.warn('Bot detected: form filled too fast');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Emails envoyés avec succès' })
      };
    }

    // 3. Turnstile CAPTCHA verification
    const turnstileToken = body['cf-turnstile-response'];
    if (!turnstileToken) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Veuillez compléter la vérification anti-spam.' })
      };
    }

    const clientIP = event.headers['x-forwarded-for'] || event.headers['client-ip'] || '';
    const turnstileValid = await verifyTurnstile(turnstileToken, clientIP);
    if (!turnstileValid) {
      console.warn('Bot detected: Turnstile verification failed');
      return {
        statusCode: 403,
        headers,
        body: JSON.stringify({ success: false, error: 'Vérification anti-spam échouée. Veuillez réessayer.' })
      };
    }

    // 4. Validate required fields
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone || '');
    const sector = sanitize(body.sector);
    const message = sanitize(body.message);

    if (!name || !email || !sector || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Tous les champs obligatoires doivent être remplis.' })
      };
    }

    // 5. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Adresse email invalide.' })
      };
    }

    // 6. Validate sector (whitelist)
    if (!VALID_SECTORS.includes(sector.toLowerCase())) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Secteur d\'activité invalide.' })
      };
    }

    // 7. Check field lengths (prevent abuse)
    if (name.length > 100 || email.length > 254 || phone.length > 20 || message.length > 5000) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Un ou plusieurs champs dépassent la taille maximale.' })
      };
    }

    // --- ALL CHECKS PASSED - SEND EMAILS ---

    // Email 1: Confirmation to the client
    const clientEmail = await resend.emails.send({
      from: 'CashMonetik <contact@cashmonetik.fr>',
      to: email,
      subject: 'Confirmation de votre demande - CashMonetik',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 40px 30px; text-align: center; }
            .logo { max-width: 180px; height: auto; margin: 0 auto 20px; display: block; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: 700; }
            .content { padding: 40px 30px; }
            .content h2 { color: #1d4ed8; font-size: 22px; margin-bottom: 20px; }
            .content p { margin: 15px 0; color: #555; font-size: 16px; }
            .info-box { background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0; border-radius: 8px; }
            .info-box strong { color: #1d4ed8; display: block; margin-bottom: 5px; }
            .footer { background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { margin: 5px 0; color: #666; font-size: 14px; }
            .check-icon { width: 60px; height: 60px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
            .check-icon svg { width: 30px; height: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://cashmonetik.fr/assets/logo.png" alt="CashMonetik" class="logo">
              <div class="check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h1>Demande bien reçue !</h1>
            </div>

            <div class="content">
              <h2>Bonjour ${name},</h2>

              <p>Nous avons bien reçu votre demande de contact et nous vous en remercions.</p>

              <p>Notre équipe commerciale va étudier votre projet et vous recontacter dans les <strong>24 heures</strong> pour vous proposer une solution adaptée à vos besoins.</p>

              <div class="info-box">
                <strong>Récapitulatif de votre demande :</strong>
                <p style="margin: 10px 0 5px 0;"><strong>Secteur d'activité :</strong> ${sector}</p>
                <p style="margin: 5px 0;"><strong>Message :</strong><br>${message}</p>
              </div>

              <p>En attendant, n'hésitez pas à consulter notre <a href="https://cashmonetik.fr/catalogue" style="color: #3b82f6; text-decoration: none;">catalogue de solutions</a>.</p>

              <p style="margin-top: 30px;">À très bientôt,<br><strong>L'équipe CashMonetik</strong></p>
            </div>

            <div class="footer">
              <p><strong>CashMonetik</strong></p>
              <p>Tél : 01 62 34 34 62 | Email : support@cashmonetik.fr</p>
              <p>8 rue de l'Est, 92100 Boulogne-Billancourt</p>
              <p style="margin-top: 15px; font-size: 12px; color: #999;">
                © 2026 CashMonetik. Tous droits réservés.
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    // Email 2: Internal notification to sales team
    const internalEmail = await resend.emails.send({
      from: 'CashMonetik <contact@cashmonetik.fr>',
      to: 'support@cashmonetik.fr',
      subject: `Nouvelle demande de contact - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 650px; margin: 30px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%); padding: 30px; color: white; text-align: center; }
            .logo { max-width: 160px; height: auto; margin: 0 auto 15px; display: block; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
            .badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 20px; font-size: 13px; margin-top: 10px; }
            .content { padding: 30px; }
            .client-info { background: #f8fafc; border-radius: 8px; padding: 25px; margin: 20px 0; }
            .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
            .info-row:last-child { border-bottom: none; }
            .info-label { font-weight: 600; color: #1d4ed8; width: 140px; flex-shrink: 0; }
            .info-value { color: #333; flex: 1; }
            .message-box { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .message-box h3 { margin: 0 0 10px 0; color: #92400e; font-size: 16px; }
            .message-box p { margin: 0; color: #78350f; }
            .action-button { display: inline-block; background: #3b82f6; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { margin: 5px 0; color: #666; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://cashmonetik.fr/assets/logo.png" alt="CashMonetik" class="logo">
              <h1>Nouvelle demande de contact</h1>
              <span class="badge">À traiter prioritairement</span>
            </div>

            <div class="content">
              <p style="font-size: 16px; color: #1d4ed8; font-weight: 600;">Un prospect vient de soumettre une demande via le site web.</p>

              <div class="client-info">
                <div class="info-row">
                  <span class="info-label">Nom complet</span>
                  <span class="info-value"><strong>${name}</strong></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email</span>
                  <span class="info-value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Téléphone</span>
                  <span class="info-value"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone || 'Non renseigné'}</a></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Secteur</span>
                  <span class="info-value"><strong>${sector}</strong></span>
                </div>
              </div>

              <div class="message-box">
                <h3>Message du prospect :</h3>
                <p>${message}</p>
              </div>

              <p style="margin-top: 25px; color: #666; font-size: 14px;">
                <strong>Action requise :</strong> Contacter ce prospect dans les 24h pour un taux de conversion optimal.
              </p>

              <a href="mailto:${email}" class="action-button">Répondre au prospect</a>
            </div>

            <div class="footer">
              <p><strong>CashMonetik - Système de notifications</strong></p>
              <p style="font-size: 12px; color: #999; margin-top: 10px;">
                Cet email a été généré automatiquement par le formulaire de contact du site web.
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Emails envoyés avec succès',
        clientEmailId: clientEmail.id,
        internalEmailId: internalEmail.id
      })
    };

  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Une erreur est survenue. Veuillez réessayer.',
        debug: error.message || String(error)
      })
    };
  }
};
