import React, { use } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard,Container } from '../components'

function AllPosts() {
const [posts, setPosts] = React.useState(null);
// useEffect(() => {},[]) 
appwriteService.getPosts([]).then((posts)=>{
      if(posts){
            setPosts(posts)
      }
})
// console.log("All posts:", posts);

  return (
      <div className='w-full p-8'>
      <Container> 
        <div className='flex flex-wrap'
        >
            {posts?.documents.map((post)=>(
                  <div key={post.id}
                  className='p-2 w-1/4'>
                        <PostCard {...post}/>
                  </div>
            ))}
        </div>
            </Container>
            </div>
  )
}

export default AllPosts