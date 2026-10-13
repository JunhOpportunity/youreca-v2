import NewReview from "./NewReview";

export default async function NewReviewPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return <NewReview userId={userId} />;
}