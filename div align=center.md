```
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/051da2c3-0bb7-4ece-b24d-ef6961288690

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

```
 # Security Specification for Dody Royale  
  
## Data Invariants  
1. **Identity Integrity**: Users can only create and update their own profiles.  
2. **Admin Authority**: Only `lm656508@gmail.com` can grant memberships (famous, influencer, premium) or ban/mute users.  
3. **Verified Access**: Most operations (except initial profile creation) require `email_verified == true`.  
4. **Relational Consistency**: Messages must belong to an existing room (though in RTDB this is handled by path structure).  
5. **Immutable Records**: `createdAt` and `ownerId` fields cannot be changed after creation.  
  
## The "Dirty Dozen" Payloads (Firestore)  
  
| # | Attack Type | Path | Payload | Expected Result |  
|---|-------------|------|---------|-----------------|  
| 1 | Identity Spoofing | `/users/other_uid` | `{ "displayName": "Hacker", "username": "hack" }` | PERMISSION_DENIED |  
| 2 | Privilege Escalation | `/users/me` | `{ "membership": "famous", "isVip": true }` | PERMISSION_DENIED |  
| 3 | Shadow Field Injection | `/rooms/room1/messages/msg1` | `{ "text": "hi", "uid": "me", "isVerified": true, ... }` | PERMISSION_DENIED |  
| 4 | Orphaned Write | `/rooms/fake_room/messages/msg1` | `{ "text": "hi", ... }` | PERMISSION_DENIED (if room checked) |  
| 5 | Identity Poisoning | `/users/very_long_id_...` | `{ ... }` | PERMISSION_DENIED |  
| 6 | Unverified Write | `/rooms/r1/messages/m1` | `{ "text": "spam" }` (by unverified user) | PERMISSION_DENIED |  
| 7 | Outcome Forging | `/users/me` | `{ "isBanned": false }` (trying to unban self) | PERMISSION_DENIED |  
| 8 | Resource Exhaustion | `/users/me` | `{ "displayName": "a".repeat(1000000) }` | PERMISSION_DENIED |  
| 9 | PII Leak | `/users/private_user` | `get()` by anonymous/stranger | PERMISSION_DENIED |  
| 10 | Immutable Bypass | `/users/me` | `{ "createdAt": "2000-01-01" }` (modifying existing) | PERMISSION_DENIED |  
| 11 | Recursive Cost Attack | `/rooms/r1/messages` | `list` with no filter | PERMISSION_DENIED |  
| 12 | System Field Modification | `/system/health` | `{ "status": "down" }` | PERMISSION_DENIED |  
  
## The "Dirty Dozen" Payloads (Realtime Database)  
  
| # | Attack Type | Path | Payload | Expected Result |  
|---|-------------|------|---------|-----------------|  
| 1 | Unauthorized Root Write | `/` | `{ "hack": true }` | PERMISSION_DENIED |  
| 2 | Public Data Theft | `/users` | `read` (trying to list all users) | PERMISSION_DENIED |  
| 3 | User Profile Takeover | `users/other_user_id` | `{ "isBanned": false }` | PERMISSION_DENIED |  
| 4 | Membership Self-Grant | `users/my_id/membership` | `"famous"` | PERMISSION_DENIED |  
| 5 | Unauthorized DM Access | `user_dms/other_user` | `read` | PERMISSION_DENIED |  
| 6 | Ghost Message | `rooms/room1/messages` | `{ "text": "hi", "uid": "fake" }` | PERMISSION_DENIED |  
| 7 | Global Block Bypass | `blocks/other_user` | `write` | PERMISSION_DENIED |  
| 8 | Status Forging | `users/my_id/isAdmin` | `true` | PERMISSION_DENIED |  
| 9 | Unauthenticated Read | `rooms/public/messages` | `read` (no login) | PERMISSION_DENIED |  
| 10 | Data Trashing | `rooms/room1` | `set(null)` | PERMISSION_DENIED |  
| 11 | PII Scraping | `users` | `.indexOn: ["email"]` | PERMISSION_DENIED |  
| 12 | Admin Impersonation | `users/my_id` | `{ "role": "admin" }` | PERMISSION_DENIED |  
   
   
   
   
[database.rules](Attachments/FB54B95B-FF55-4767-A3B0-7628F258BD3C.json)  
   
   
[firebase-applet-config](Attachments/FA3F0284-2A4B-43F8-9F90-DB41DDA92284.json)  
   
   
[firebase-blueprint](Attachments/9C95805E-0A29-41AA-B97E-ACE0026EFD08.json)  
   
   
[firebase](Attachments/883A4491-C236-441B-8B40-ADD55912FBF9.json)  
   
[metadata](Attachments/43624BD7-3FE3-4243-BAD2-3E581FD22DD7.json)  
   
   
[package-lock](Attachments/E698B5D7-4FC9-4EB5-A781-8AF108E0F072.json)  
   
   
[package](Attachments/ED9049FA-6BCB-4054-8096-EE16119392A0.json)  
   
   
[tsconfig](Attachments/7E4F739D-A489-401D-AEBE-595E3FCCA28C.json)  
   
   
[vercel](Attachments/96870E41-440F-4930-B204-143C42896531.json)  
   
   
[vite.config](Attachments/5DF594E3-C5FD-44A9-916B-164203DBF0D4.ts)  
   
   
[public](Attachments/3D5FFB77-77C5-45D6-A280-BBAB8AE21FF2.zip)  
   
[src](Attachments/998F60B3-2289-40E6-9E22-A4654D4EEDE7.zip)  
```


```
```


```
