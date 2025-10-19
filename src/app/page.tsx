import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutBtn } from "./Logout";

async function page() {
  await requireAuth();
  const data = await caller.getUsers();

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center flex-col gap-y-6">
      protected server component:
      <div>{JSON.stringify(data, null, 2)}</div>
      <LogoutBtn />
    </div>
  );
}

export default page;
