import  {useEffect, useState} from 'react'
import { Container, PostForm } from '../components/index'
import service from '../appwrite/config'
import { useParams, useNavigate } from 'react-router'



function EditPost() {
    const [post, setPost]= useState([])
    const {id}= useParams()
    // console.log("from edit form:",id);
    
    const navigate=useNavigate()
    useEffect(()=>{
        if(id){
            console.log("from edit form2:",id);
            service.getPost(id)
            .then((post)=>{
                if(post){
                    setPost(post)
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            navigate('/')
        }

    }, [id])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post= {post} />
        </Container>
    </div>
  ): null   
}

export default EditPost