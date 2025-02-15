import service from '../appwrite/config'
import { Link } from 'react-router'


function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
    <div  className='bg-white rounded-lg shadow-md overflow-hidden'>
    <div>
        <img src= {service?.FilePreview(featuredImage)} alt={title} />

    </div>
    <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>

    </div>
    </Link>
  )
}

export default PostCard