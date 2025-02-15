import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import service from "../appwrite/config";
import { Button, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    console.log(id);
    
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.user);
    console.log(userData);
    

    const isAuthor = (post && userData) ? post.userId == userData.$id : false;

    console.log("isAuthor", isAuthor);

    useEffect(() => {
        if (id) {
            service.getPost(id).then((post) => {
                if (post) {
                    console.log(post);
                    
                    setPost(post);}
                else {
                    console.log("Post not found");
                    
                    navigate("/");}
            });
        } else {
            console.log("Post not found");
            
            navigate("/");}
    }, [id]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4  rounded-xl overflow-hidden">
                    <img
                        src={service.FilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl size-64 relative border-2"
                    />

                    {isAuthor && (
                        <div className="my-81 absolute top-10 right-140">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}