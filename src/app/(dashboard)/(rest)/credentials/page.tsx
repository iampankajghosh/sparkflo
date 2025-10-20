import { requireAuth } from "@/lib/auth-utils";

async function page() {
  await requireAuth();
  return <div>credentials</div>;
}

export default page;
