interface PageProps {
  params: Promise<{
    executionId: string;
  }>;
}

async function page({ params }: PageProps) {
  const { executionId } = await params;

  return <div>execution id: {executionId}</div>;
}

export default page;
