import  {useState, useEffect} from 'react'
import service from '../appwrite/config'
import {useSelector} from 'react-redux'
import { PostCard, Container } from '../components/index'

function AllPosts() {
    const [posts, setPost]= useState([])
    const userData= useSelector((state)=>state.auth.user)
    // console.log(userData.$id)
    useEffect(()=>{
        service.getPosts().then((post)=>{
            if(post){
                setPost(post.documents)
                // console.log(post.documents[0].userId===userData.$id)
            }

        }).catch((error)=>{
            console.log(error)
        }
        )
    })
    if(posts.length ===0){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                      <div className='p-2 w-full'>
                       <h1 className='text-2xl font-bold'>No Posts Found!

                       </h1>

                      </div>

                    </div>
                </Container>

            </div>
        )
    }

  return (
    <div className='w-full py-8'>
    <Container>
        <div className='text-center'>
            {posts
            .filter((post)=> post.userId===userData.$id)
            .map((post)=>(
                
                <div key={post.$id} className='p-2 w-1/4'>
                {console.log(post)}
                    <PostCard {...post} />
                </div>
            ))}
        </div>
    </Container>
    </div>
  )
}

export default AllPosts