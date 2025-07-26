import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

interface AppClerkProviderProps {
  children: ReactNode;
}

export default function AppClerkProvider({ children }: AppClerkProviderProps) {
  // Provide a default publishable key for build environments
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_build-time-placeholder';
  
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}