import React from "react";
import "./../../assets/css/RequestHistory.css"
import { useContext } from "react";
import Requestcontext from "../../contexts/RequestPickUpContext";
import completedIcon from "../../assets/icons/completed.svg";
import rejectedIcon from "../../assets/icons/rejected.svg";
import processingIcon from "../../assets/icons/processing.svg";


const RequestElements = ({ele}) =>{
    const color = {
        "Pending" : "yellow",
        "Completed" : "#00ff00",
        "Rejected" : "#ff0000"
    }

    return(
        <div className="Container" style={{backgroundColor: color[ele.status]}}>
            <div className="image-container">
                <img
                    style={{ padding: "10px" }}
                    width={175}
                    height={150}
                    src={ele.img[0] ? URL.createObjectURL(ele.img[0]) : null}
                    
                />
            </div>
            <div className="x">
                <h2>{ele.title}</h2>
                <p>Created at: {ele.date.toString()}</p>
                <p>Tags : {ele.tags.map((tag)=> {return(<p>{tag}</p>)})
                }</p>
                <p>Quantity: {ele.qty}</p>
                <p>Description: {ele.desc}</p>
            </div>

            <div  className="status">
                <p>Request Status</p>
                <div>
                    {ele.status === "Pending" ? 
                    <div className="processing-icon">
                        <img src = {processingIcon} className="icon"/>
                    </div> : ""
                    }
                    {ele.status === "Completed" ? 
                    <div className="completed-icon">
                        <img src = {completedIcon} className="icon"/>
                    </div> : ""
                    }
                    {ele.status === "Rejected" ? 
                    <div className="rejected-icon">
                        <img src = {rejectedIcon} className="icon"/>
                    </div> : ""
                    }
                </div>
                <p>{ele.status}</p>
            </div>
            
        </div>
    )
}

const RequestHistoryComponent = () =>{

    const {data} = useContext(Requestcontext);

    return(
        <div className="Main_Container">
            <h1>Your Request History</h1>

            <div className="request-list">
                {
                    data.map((ele,key) => {
                        console.log(ele.tags);
                        return (
                            <RequestElements ele = {ele}></RequestElements>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RequestHistoryComponent;