import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Chatbot from "@/components/Chatbot";
// import { ClerkProvider } from "@clerk/nextjs"; // Temporarily disabled for testing
import TanStackProvider from "@/components/TanStackProvider";

// Use system fonts as fallback to avoid Google Fonts network issues during build
const fontClass = "font-sans"; // Use Tailwind's default sans-serif font stack

export const metadata: Metadata = {
  title: "Eduminati - Online Learning Platform",
  description: "Access quality education anywhere, anytime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <ClerkProvider> */} {/* Temporarily disabled for testing */}
        {/* Use system fonts instead of Google Fonts to avoid build issues */}
        <body className={`${fontClass} dark:bg-gray-800`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TanStackProvider>
              <Navbar />
              {children}
            </TanStackProvider>
          </ThemeProvider>
          <Chatbot />
        </body>
      {/* </ClerkProvider> */}
    </html>
  );
}

