import { db } from "@/db";
import { postsTable } from "@/db/schema";

export default async function Forum() {
  const posts = await db.select().from(postsTable);
  return (
    <div>
      <h2>Forum</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
