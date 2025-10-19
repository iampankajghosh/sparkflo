"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LogoutBtn } from "./Logout";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";

function page() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Job queued");
      },
    })
  );

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center flex-col gap-y-6">
      protected server component:
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogoutBtn />
    </div>
  );
}

export default page;
