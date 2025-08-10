import { useEffect, useState } from "react"
import appwriteService  from "../appwrite/config"
import { Container ,PostCard} from "../components"



function Home() {
  const [posts, setPosts] = useState([]);
      useEffect(() => {
            appwriteService.getPosts().then((posts)=>{
                  if(posts){
                        setPosts(posts.documents)
                  }
            })
      },[])
  if(posts.length === 0) {
    return (
      <div className='w-full p-8'>
        <Container>
          <div className='text-center text-gray-500 font-bold text-3xl'>No posts available</div>
        </Container>
      </div>
    )
  }
      return (
      <div className='w-full p-8'>
            <Container>
            <div className='flex flex-wrap'>
            {posts.map((post) => (
                  <div key={post.$id} className='p-2 w-1/4'>

                 <PostCard  {...post} />
                  </div>
            ))}
            </div>
            </Container>
      </div>
      )
}

export default Home