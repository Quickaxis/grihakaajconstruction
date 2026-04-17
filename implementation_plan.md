# Implementation Plan - WhatsApp Routing & Functional Contact Form

This plan outlines the steps to make the Call-to-Action (CTA) buttons functional and the Contact Form in Section 6 operational by routing data to WhatsApp.

## Proposed Changes

### 1. Update "Start a Build" Buttons

Replace all instances of "Start a Build" `<button>` tags with `<a>` tags pointing to the target WhatsApp number (+91 6002766537) with a pre-filled message.

#### [MODIFY] [Navbar.tsx](file:///c:/Users/chitr/Downloads/my%20websites/griha%20kaaj%20construction/src/components/Navbar.tsx)
- Change `<button>` at line 20 to an `<a>` tag.
- Add `href="https://wa.me/916002766537?text=Hello%20Griha%20Kaaj%20Construction!%20I%20am%20interested%20in%20starting%20a%20project.%20Please%20share%20more%20details."`
- Add `target="_blank" rel="noopener noreferrer"`.

#### [MODIFY] [App.tsx](file:///c:/Users/chitr/Downloads/my%20websites/griha%20kaaj%20construction/src/App.tsx)
- Change `<button>` at line 55 (Hero section) to an `<a>` tag.
- Add `href="https://wa.me/916002766537?text=Hello%20Griha%20Kaaj%20Construction!%20I%20am%20interested%20in%20starting%20a%20project.%20Please%20share%20more%20details."`
- Add `target="_blank" rel="noopener noreferrer"`.

---

### 2. Make the Contact Form Functional

Replace the static form in Section 6 of `App.tsx` with a functional React form component that formats inputs into a WhatsApp message.

#### [MODIFY] [App.tsx](file:///c:/Users/chitr/Downloads/my%20websites/griha%20kaaj%20construction/src/App.tsx)
- Replace the `<form>` element (lines 288-311) with the provided functional version that handles `onSubmit`.

## Verification Plan

### Automated Tests
- None required for this UI/Content update.

### Manual Verification
1. **Click "Start a Build"** in the Navbar and Hero Section:
   - Verify it opens a new tab.
   - Verify the URL is correctly formatted for WhatsApp with the pre-filled message.
2. **Fill out the Contact Form**:
   - Enter Name, Phone, and Project Type.
   - Click "Request a Callback".
   - Verify it opens a new tab with the correctly formatted WhatsApp message containing the form data.
