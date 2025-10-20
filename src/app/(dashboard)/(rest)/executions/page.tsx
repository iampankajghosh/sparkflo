import { requireAuth } from "@/lib/auth-utils";

async function page() {
  await requireAuth();
  return <div>executions</div>;
}

export default page;
