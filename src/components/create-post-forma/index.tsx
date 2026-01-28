
import { createPost } from "@/app/actions/create-post";
import { Button } from "../ui/button";



export default function CreatePostForm() {
  return (
    <div className="my-8 border-8 rounded-4xl">
      <h2 className="font-bold my-2 p-4">Add post</h2>
      <form action ={createPost}>
        <div className="gap-2 flex flex-row p-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border-2 rounded-2xl pl-2 "
          />
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            className="border-2 rounded-2xl ml-2 pl-2"
          />
          <Button variant="outline" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
