import React from "react";
import { createContext,useState,useEffect } from "react";

const Requestcontext = createContext({});


export const RequestPickupContextProvider = ({ children }) =>{

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [title, setTitle] = useState("DUMMY");
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [address, setAddress] = useState("");
    const [status,setStatus] = useState("Pending");
    const [showSummary, setShowSummary] = useState(false);
    const [data, setData] = useState([]);

    
    // useEffect(() =>{
    //     fetch("http://localhost:5000/post-request",{
    //         method: "POST",
    //         body: data[(data.length)-1]
    //     }).then(() => console.log(res.json())).catch((e) => console.log(e))
    // }
    // ,[data])



    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => prevQuantity + amount);
    };

    const handleTimeChange = (time) => {
        setSelectedDateTime(time);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files);
    };

    const clearForm = () =>{
        setImage([]);
        setAddress("");
        setDescription("");
        setTags([]);
        setQuantity(0);
        setShowSummary(false);
    }

    const handleSubmit = () => {
        console.log("Selected Date and Time:", selectedDateTime);
        console.log("Image:", image[0]);
        console.log("Description:", description);
        console.log("Tags:", tags);
        console.log("Quantity:", quantity);
        console.log("Address:", address);
        const Data = {
            userId: "User123",
            title: title,
            date: selectedDateTime,
            img: image,
            desc: description,
            tags: tags,
            qty: quantity,
            adrs: address,
            status: status,
        }
        const lst = [...data,Data];
        setData(lst);
        setShowSummary(true);
        const formData = new FormData();
        for (var key in Data) {
            if (key === "img") {
                console.log("inside img");
                console.log(Data.img[0]);
                formData.append(key,Data.img[0],"example.jpg");
            }
            else {
                formData.append(key, Data[key]);
            }
            
        }
        fetch("http://localhost:5000/post-request", {
            method: "POST",
            body: formData,
        }).then((res) => res.json()).then((data) => console.log(data)).catch((e) => console.log(e))
    };

    

    const obj = {selectedDateTime, image, description, tags, quantity, address, showSummary, setDescription, setShowSummary, setTags, setAddress, handleQuantityChange, handleTimeChange, handleImageChange, handleSubmit, data, clearForm, title, setTitle }
    
    return(
        <Requestcontext.Provider value={obj}>
            {children}
        </Requestcontext.Provider>
    )
}
export default Requestcontext;