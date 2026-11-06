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
- The hero currently references an Unsplash-hosted image. Unsplash permits most commercial uses under its license, but confirm the exact image and any depicted trademark restrictions, then prefer a locally hosted approved asset.
- Business hours are confirmed: Monday–Friday 7 AM–7 PM ET, Saturday 8 AM–1 PM ET, Sunday closed. Confirm supported languages and equipment categories.
- Approve the fee policy and any first-load promotion with written terms.
- Contact form supports direct AJAX Formspree submissions. Create a Formspree form linked to info@keylanedispatch.com, verify the recipient, and set NEXT_PUBLIC_FORMSPREE_ID in Vercel Project Settings > Environment Variables. Deploy again. Until configured, the form is disabled and visitors see the direct email and phone.
- Test a real successful submission and Formspree's spam controls before launch. The form does not yet sync to a CRM.
- Add reviewed Privacy Policy and Terms, and connect the secure carrier onboarding workflow.
- Review FMCSA rules and carrier-agent agreements before public operation.
- Test keyboard accessibility, reduced motion, mobile performance, and real device behavior.

## Local development
Run npm install, then npm run dev. Open http://localhost:3000.
Run npm run build to check production compilation.

## Important: Vercel GitHub login connection
If Vercel reports “You need to add a Login Connection to your GitHub account first”, sign in to Vercel, open https://vercel.com/account/git, and connect the GitHub account that can access Keylanedispatch/keylane-dispatch. Grant the Vercel GitHub app access to the repository. Team authorization alone is not the same as a Git login connection.
