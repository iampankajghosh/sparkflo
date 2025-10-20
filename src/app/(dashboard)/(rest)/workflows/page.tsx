import { requireAuth } from "@/lib/auth-utils";

async function page() {
  await requireAuth();

  return <div>workflows</div>;
}

export default page;
