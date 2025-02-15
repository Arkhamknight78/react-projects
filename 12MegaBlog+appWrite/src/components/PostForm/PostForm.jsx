import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import {Button, Input, Select, RealTimeEditor} from "../index"
import appwriteService from "../../appwrite/config"
import {useNavigate} from 'react-router'
import { useSelector } from "react-redux"
import service from "../../appwrite/config"




function PostForm({post}) {
    const {register, handleSubmit, watch, 
        setValue, control, getValues, resetField}=useForm(
            {defaultValues: 
                {
                    title:post?.title || "",
                    id: post?.$id || "",
                    content: post?.content || "",
                    status: post?.status || "active",

                }}
        )
        const navigate= useNavigate()
        const userData = useSelector(state=>state.auth.user)
        console.log(userData.$id);
        
        // if (!userData || !userData.$id) { 
        //     console.error("UserData is undefined ");
        //     return; 
        // }
        

        const Submit= async (data)=>{
            if(post) {
                const file= data.image[0]? appwriteService.uploadFile(data.image[0]): null

                if(file){
                    appwriteService.deleteFile(post.featuredImage)
                }

                const dbPost= await appwriteService.updatePost
                (post.$id,{
                    ...data,
                    featuredImage: file? file.$id: undefined,
                })
                if(dbPost){
                    navigate(`post/${dbPost.$id}`)

                }
                
            }
            else{
                const file= data.image[0] ? await appwriteService.uploadFile(data.image[0]): "null"

                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                    featuredImage: file!='null' ? file.$id : "null",
                });
                if(dbPost){
                    console.log("Post created successfully", dbPost);
                
                    navigate(`/post/${dbPost.$id}`)
                }
            }

        }
        const slugTransform = useCallback((value) => {
            if (value && typeof value === "string")
                return value
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-zA-Z\d\s]+/g, "-")
                    .replace(/\s/g, "-");
    
            return "";
        }, []);

        useEffect(() => {
            const subscription = watch((value, { name }) => {
                if (name === "title") {
                    setValue("slug", slugTransform(value.title), { shouldValidate: true });
                }
            });


            return ()=> subscription.unsubscribe()
        },[watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(Submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="id :"
                    placeholder="id"
                    className="mb-4"
                    {...register("id", { required: true })}
                    onInput={(e) => {
                        setValue("userId", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RealTimeEditor label="Content :" name="content" control={control} defaultValue={getValues("content") || ""} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image")}
                />
                {post && service.FilePreview && (
                        <div className="w-full mb-4">
                            <img 
                            src={service.FilePreview(post.featuredImage)} alt={post.title}
                            className="rounded-lg"/>
                        </div>
)}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-6"
                    {...register("status", { required: true })}
                />
                <Button onClick={handleSubmit} type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full m-4 ml-0 rounded-4xl hover:bg-green-600">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm