# KeyLane Dispatch website setup

## Current status
- Code is in this private repository.
- The first site version is implemented with Next.js.
- A deployment has NOT been configured.
- DNS for keylanedispatch.com has NOT been changed.

## Deploy on Vercel
1. Sign in at https://vercel.com with the KeyLane GitHub account.
2. Choose Add New > Project and import Keylanedispatch/keylane-dispatch.
3. Framework preset: Next.js. Keep the default build settings.
4. Deploy and open the generated preview URL.
5. Test desktop and mobile layouts, calculator, equipment selector, FAQ, menu, and email inquiry.
6. In Project > Settings > Domains add keylanedispatch.com and www.keylanedispatch.com.
7. In Squarespace DNS, set the exact records Vercel provides. Do not change email MX, SPF, DKIM, or DMARC records.
8. Confirm the website works over HTTPS and mail still arrives at info@keylanedispatch.com and dispatch@keylanedispatch.com.

## Important prelaunch checklist
- Replace the temporary CSS-drawn K logo with the approved final vector logo files.
- Confirm rights and availability for the hero truck photo, and host optimized approved assets locally.
- Confirm the actual business hours, supported languages, and equipment categories.
- Approve the fee policy and any first-load promotion with written terms.
- Replace the mailto inquiry mechanism with a server-side form submission and rate limiting. Until then, the form opens the visitor's email app; it does not save a lead in a CRM.
- Add reviewed Privacy Policy and Terms, and connect the secure carrier onboarding workflow.
- Review FMCSA rules and carrier-agent agreements before public operation.
- Test keyboard accessibility, reduced motion, mobile performance, and real device behavior.

## Local development
Run npm install, then npm run dev. Open http://localhost:3000.
Run npm run build to check production compilation.
