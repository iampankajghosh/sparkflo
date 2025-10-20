interface PageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

async function page({ params }: PageProps) {
  const { credentialId } = await params;

  return <div>credential id: {credentialId}</div>;
}

export default page;
