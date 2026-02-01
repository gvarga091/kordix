# Email Integration Setup Guide

## Formspree Implementation (Ajánlott)

### Lépések:

1. **Regisztráció:** https://formspree.io/
   - Sign up GitHub/Google accounttal
   - Ingyenes tier: 50 submission/hónap

2. **Form létrehozása:**
   - Dashboard → New Form
   - Név: "Portfolio Contact Form"
   - Email beállítás: ahova az üzeneteket kapod
   - Copy Form ID (pl: `mwpejabk`)

3. **Kód implementálás:**

```tsx
// src/components/Contact.tsx
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please email me directly at your.email@example.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ... rest of component (contactLinks, etc.)

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ... heading ... */}

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300 tracking-wide">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-purple-500 text-white rounded-lg outline-none transition-all disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300 tracking-wide">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-blue-500 text-white rounded-lg outline-none transition-all disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300 tracking-wide">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-blue-500 text-white rounded-lg outline-none transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/50 disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info - marad ugyanaz */}
        </div>
      </div>
    </section>
  );
}
```

4. **Environment változó (opcionális):**

```bash
# .env
VITE_FORMSPREE_ID=mwpejabk
```

```tsx
// Használat:
const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
  // ...
});
```

5. **Formspree Dashboard beállítások:**
   - **Email notifications:** ON
   - **Auto-response:** Opcionális (automatikus válasz a küldőnek)
   - **Spam filtering:** Ajánlott bekapcsolni
   - **CAPTCHA:** Csak ha szükséges (honeypot is elég)

---

## EmailJS Implementation (Alternatíva)

### Előnyök:
- Testre szabható email template
- Több email service támogatás
- Attachment támogatás

### Lépések:

1. **Telepítés:**
```bash
npm install @emailjs/browser
```

2. **Regisztráció:** https://www.emailjs.com/
   - Sign up
   - Add email service (Gmail/Outlook/stb.)
   - Create email template

3. **Implementation:**

```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // EmailJS service ID
      'YOUR_TEMPLATE_ID',     // EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'        // EmailJS public key
    );

    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('EmailJS error:', error);
    toast.error('Failed to send message.');
  } finally {
    setIsSubmitting(false);
  }
};
```

4. **Environment variables:**

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxx
```

---

## Backend megoldás (Django)

Ha később saját backend-et akarsz:

```python
# views.py
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def contact_form(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')
    
    send_mail(
        subject=f'Portfolio Contact from {name}',
        message=message,
        from_email=email,
        recipient_list=['your.email@example.com'],
        fail_silently=False,
    )
    
    return Response({'status': 'success'})
```

---

## Tesztelés

1. **Local testing:**
   - Próbálj ki különböző email címekkel
   - Teszteld a validációt (üres mezők, rossz email formátum)
   - Ellenőrizd a loading state-et

2. **Spam védelem:**
   - Formspree built-in spam filter
   - Vagy honeypot field hozzáadása:

```tsx
// Honeypot - bots kitöltik, emberek nem látják
<input
  type="text"
  name="_gotcha"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
```

3. **Rate limiting:**
   - Formspree automatikusan limitál
   - EmailJS: 200 email/hónap ingyenesen

---

## Hibaelhárítás

### "Failed to send" error
- Ellenőrizd a Form ID-t / API key-t
- Nézd meg a browser console-t (CORS error?)
- Formspree dashboard → check submission logs

### Email nem érkezik meg
- Spam mappát nézd meg
- Formspree dashboard → verify email address
- Gmail esetén: "Promotion" vagy "Updates" tab

### CORS error
- Formspree: automatikusan kezeli
- EmailJS: domain whitelist-elés szükséges

---

## Következő lépések

- [ ] Válassz email providert (Formspree ajánlott)
- [ ] Setup account
- [ ] Frissítsd a Contact.tsx kódot
- [ ] Tesztelés local-ban
- [ ] Deploy és production test
- [ ] Email notification beállítása mobilra
