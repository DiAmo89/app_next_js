import CreateReviewLink from "@/components/create-review-links";
import { db } from "@/db";
import { rewiesTable } from "@/db/schema";


export default async function ReviewsPage() {
  const reviews = await db.select().from(rewiesTable);
  return (
    <div>
      <h2>Review</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <h3>{r.title}</h3>
            <span>{r.content}</span>
            <span>
              {r.createdAt.toLocaleTimeString()+"  "+
              r.createdAt.toLocaleDateString()}
            </span>
          </li>
        ))}
        <CreateReviewLink/>
      </ul>
    </div>
  );
}
