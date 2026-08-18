import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { adminUnauthorizedPath, getAdminSession } from "@/lib/admin/auth";
import { isAdminSessionAuthorized } from "@/lib/admin/auth-policy";

type AdminLayoutProps = {
  children: ReactNode;
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getAdminSession();

  if (!session?.user) {
    redirect("/admin/sign-in");
  }

  if (!isAdminSessionAuthorized(session)) {
    redirect(adminUnauthorizedPath);
  }

  return <>{children}</>;
}
