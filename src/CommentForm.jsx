    import { useState } from "react"
    import { useFormik } from 'formik';

    export default function CommentForm({addNewComment}){

        /*let [formdata , setFormData] = useState({
            username:"",
            remarks:"",
            ratings:"", 
        })*/

        
        const validate = values => {
            const errors = {};
            if (!values.username) {
            errors.username = 'username is required !!';
            }       
            return errors;
        };

        const formik = useFormik({
            initialValues: {
            username: '',
            remarks: '',
            ratings: 5,
            },
            validate,
            onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            },
        });


        /*let updateForm = (event) =>{
            setFormData((currdata)=>{
                return{
                    ...currdata, [event.target.name]: event.target.value
                }
            })
        }*/


        /*let submitForm = (event)=>{
            event.preventDefault();
            addNewComment(formdata);
            console.log(formdata);
            setFormData({
                username:"",
                remarks:"",
                ratings:"", 
            });
        }*/


        return(
            <div>
                <h1>Comment Form</h1>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="username"> UserName</label>  &nbsp;  &nbsp;
                    <input type="text"
                    placeholder="enter username"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    ></input>
                    
                    {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}

                    <br></br> <br></br>

                    <label htmlFor="remarks"> Remarks</label>   &nbsp;  &nbsp;
                    <textarea
                    placeholder="enter remarks"
                    id="remarks"
                    name="remarks"
                    onChange={formik.handleChange}
                    value={formik.values.remarks}>
                    </textarea>

                    <br></br><br></br>

                    <label htmlFor="ratings">Add Ratings</label>    &nbsp;  &nbsp;
                    <input
                    type="number" 
                    id="ratings"
                    name="ratings"
                    min="1" 
                    max="5" 
                    onChange={formik.handleChange}
                    value={formik.values.ratings}
                    ></input>

                <br></br><br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }