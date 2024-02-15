import { useContext,useEffect } from "react";
import "./style.module.css";
import { Globalcontext } from "../../context";
import axios from "axios";
import {useNavigate,useLocation} from "react-router-dom";

export default function AddNewBlog(){
    const{formData,setFormData,SetIsEdit,isEdit}=useContext(Globalcontext);
    const navigate = useNavigate();
    const location = useLocation();


    async function handleSaveBlogtoDatabase(){
        const responce = isEdit
         ? await axios.put(
            `http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,{
                title:formData.title,
                description:formData.description,
            }
         )
         : await axios.post("http://localhost:5000/api/blogs/add",{
            title:formData.title,
            description:formData.description,
         });

      const result  = await responce.data;
      if(result){
        SetIsEdit(false)
        setFormData({
            title:"",
            description:"",
        });
        navigate("/")
      }   
    }

    useEffect(()=>{
        console.log(location)
        if(location.state){
            const {getCurrentBlogItem} = location.state;
            SetIsEdit(true);
            setFormData({
                title:getCurrentBlogItem.title,
                description:getCurrentBlogItem.description,
            });
        }
    },[location]);

    return(
        <div className="{classes.wrapper}">
            <h1>{isEdit ? "Edit a Blog":"add a blog"}</h1>
            <div className="{classes.formWrapper}">
                <input 
                name="title"
                placeholder="Enter Blog Title"
                id="Title"
                type="text" 
                value={formData.title}
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        title:e.target.value,
                    })
                }}
                
                />

                <textarea
                name="description"
                placeholder="Enter Blog Description"
                id="description"
                value={formData.description}
                onChange={(Event)=>
                setFormData({
                    ...formData,
                    description:Event.target.value,
                })
            }
                />
            <button onClick={handleSaveBlogtoDatabase}>
            {isEdit ? "Edit Blog" : "Add Blog"}    
            </button>    
            </div>
        </div>
    );
}