"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const adminSignOutCallbackUrl = "/admin/sign-in";

export async function signOutFromAdmin() {
  return signOut({ callbackUrl: adminSignOutCallbackUrl });
}

export function AdminSignOutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleClick() {
    if (isSigningOut) {
      return;
    }

    setIsSigningOut(true);

    try {
      await signOutFromAdmin();
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <Button type="button" variant="secondary" size="sm" onClick={handleClick} disabled={isSigningOut}>
      {isSigningOut ? "Signing out..." : "Sign out"}
    </Button>
  );
}
