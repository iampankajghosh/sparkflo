import prisma from "@/lib/db";

async function page() {
  const users = await prisma.user.findMany();

  return <div>{JSON.stringify(users)}</div>;
}

export default page;
