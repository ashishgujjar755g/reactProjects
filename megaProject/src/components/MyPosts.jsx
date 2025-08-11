import React from "react";
import Service from "../appwrite/config";
import authService from "../appwrite/auth";
import { Query } from "appwrite";
import PostCard from "./PostCard";

function MyPosts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

//   console.log("Fetching posts...", posts);
//   console.log("component MyPosts rendered");
  

  React.useEffect(() => {
   (async  () => {
      try {
        const user = await authService.getCurrentUser()
            if (!user) {
            throw new Error("User not authenticated");
            }
      //    console.log("User ID:", user);

        const userId = user.$id;
        const response = await Service.getPosts([
          Query.equal("userId", userId),
        ]);
        setPosts(response.documents);
       
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
     
    })();

     
  }, []);

  

 return (
   <div>
     <h2>My Posts</h2>

     {loading ? (
       <p>Loading...</p>
     ) : posts.length === 0 ? (
       <p>You haven’t created any posts yet.</p>
     ) : (
       <ul>
         {posts.map((post) => (
           <li key={post.$id} className="inline-block p-2 w-1/4">
             <PostCard {...post} />
           </li>
         ))}
       </ul>
     )}
   </div>
 );

}

export default MyPosts;
