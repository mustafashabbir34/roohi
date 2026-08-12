# Roohi

Fine jewelry e-commerce for **Roohi** (Dubai) — joyful pieces in 18k yellow gold, natural diamonds, and colorful sapphires.

**Stack:** Next.js 15 · Stripe Checkout · AED  
**First collection:** ARSH

---

## Run locally

```bash
cd ~/Projects/roohi   # or C:\Users\HP\Projects\roohi
npm install
copy .env.example .env.local   # Windows
# then edit .env.local with your Stripe keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Stripe (payments in AED)

1. Create an account at [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Set business country / currency to support **AED** (UAE)
3. Developers → API keys → copy **Publishable** + **Secret** test keys into `.env.local`
4. Toggle to live keys when you are ready for real orders

Checkout opens Stripe’s hosted page (cards, Apple Pay / Google Pay where available).

---

## Buy your domain (you must do this step)

I cannot purchase a domain with your card. Do this once (≈10 minutes):

### Recommended for UAE brands
1. Go to [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) or [Namecheap](https://www.namecheap.com/) or [Google Domains / Squarespace Domains](https://domains.squarespace.com/)
2. Search names, e.g.:
   - `roohi.com`
   - `roohijewelry.com`
   - `roohi.ae` (UAE ccTLD — check local eligibility rules)
   - `weareroohi.com`
3. Buy the domain (enable WHOIS privacy)
4. Keep the tab open — you’ll point DNS to Vercel next

**Tip:** Prefer a short `.com` if available; use `.ae` if you want a strong Dubai signal.

---

## Deploy the website (free hosting)

1. Push this folder to GitHub
2. Go to [https://vercel.com](https://vercel.com) → Sign in with GitHub → **Import** this repo
3. Add environment variables (same as `.env.local`):
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com` (after domain is connected; until then use the `*.vercel.app` URL)
4. Deploy → you get a temporary URL like `roohi.vercel.app`

---

## Connect domain → Vercel

1. In Vercel → Project → **Settings → Domains** → add `roohi.com` (or your domain)
2. Vercel shows DNS records to add at your registrar, usually:
   - **A** record → `76.76.21.21`  
     or
   - **CNAME** for `www` → `cname.vercel-dns.com`
3. Save DNS at Cloudflare/Namecheap
4. Wait for SSL (often minutes; sometimes up to 48h)
5. Update `NEXT_PUBLIC_SITE_URL` in Vercel to `https://yourdomain.com` and redeploy

---

## What’s already built

- Brand home (Roohi · my soul · Dubai)
- ARSH collection + 5 product pages
- Bag (cart) with local persistence
- Stripe Checkout in **AED**, shipping address for GCC + select countries
- About / story page
- Editorial cream + gemstone visual language

Prices in `lib/products.ts` are placeholders — edit to your real AED retail prices.

---

## Next brand steps (optional)

- Replace atelier sketches with editorial photography
- Add size guides / ring sizing
- WhatsApp order support for Dubai clients
- Arabic language toggle
- Trade license + invoice details for UAE compliance
