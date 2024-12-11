import { useState } from "react"
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment(){

    let [comments, setComments] = useState([{
        username:"@sk",
        remarks:"great job !",
        ratings:4,
    }]);

    let addNewComment = (comment)=>{
        setComments((currComments)=> [...currComments , comment]);
    }

    return(
        <>
        <div> 
            <h3>All comments</h3>
            
                {comments.map((comment, idx)=>(

                    <div className="comment" key={idx}>
                      <span> {comment.remarks} </span>
                      &nbsp; &nbsp;
                      <span> (rating= {comment.ratings}) </span>
                      &nbsp; &nbsp;
                      <p> {comments.username} </p>
                  </div>
                ))}
              
        </div>
        <hr></hr>
        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}