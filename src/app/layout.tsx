import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import UploadThingButton from "./_components/button";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
             <UploadThingButton/>
             <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}


    /*    <html lang="en">
      <body className={`${GeistSans.variable}`}>
        <div className="text-2xl font-mono text-rose-400 border-8 border-indigo-600 bg-green-400">First Layout</div> 
        <button className="btn btn-secondary btn-lg btn circle">Secondary</button>
        {children}
      </body>
    </html>
  );
}*/