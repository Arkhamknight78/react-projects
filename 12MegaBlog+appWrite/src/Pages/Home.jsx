import {useEffect, useState} from 'react'
import {Container, PostCard, PostForm} from '../components/index'
import service from '../appwrite/config'
import {useParams, useNavigate} from 'react-router'



function Home() {
    const [post, setPost]= useState([])
    const {id} = useParams()
    useEffect(()=>{
        service.getPosts(id).then((post)=>{
            if(post){
                setPost(post.documents)
            }

        }).catch((error)=>{
            console.log(error)
        }
        )
    })
    if(post.length ===0){
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
            {post.map((post)=>(
                
                <div key={post.$id} className='p-2 w-1/4'>
                {/* {console.log(post)} */}
                    <PostCard {...post} />
                </div>
            ))}
        </div>
    </Container>
    </div>
  )
}

export default Home