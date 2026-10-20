import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogsList from "./LogsList";

export default async function AdminLogsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  const validSecret = process.env.ADMIN_SECRET_KEY;

  if (!validSecret || session !== validSecret) {
    redirect("/admin/login");
  }

  return <LogsList />;
}
