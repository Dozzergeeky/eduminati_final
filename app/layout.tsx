import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import SimpleNavbar from "@/components/SimpleNavbar";
import Chatbot from "@/components/Chatbot";
import TanStackProvider from "@/components/TanStackProvider";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans dark:bg-gray-800">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TanStackProvider>
            <SimpleNavbar />
            {children}
          </TanStackProvider>
        </ThemeProvider>
        <Chatbot />
      </body>
    </html>
  );
}

