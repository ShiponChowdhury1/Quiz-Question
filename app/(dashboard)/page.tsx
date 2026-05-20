import { redirect } from "next/navigation";

// This route group is unused. The dashboard lives at /dashboard.
export default function Unused() {
  redirect("/dashboard");
}
