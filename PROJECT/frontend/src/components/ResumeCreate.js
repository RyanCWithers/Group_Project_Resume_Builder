import React, {useReducer} from 'react';
import axios from 'axios';

function reducer(state, action){
    return({
        ...state,
        [action.type] : action.payload
    });
};

const ResumeCreate = props =>{
    const {onSubmitProp} = props;

    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        skills: '',
        job1: '',
        job2: '',
        job3: '',
        project1: '',
        project2: '',
        project3: '',
        education: '',
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const onChangeHandler = e =>{
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        })
    };

    const onSubmitHandler = e =>{
        e.preventDefault();
        onSubmitProp(state);
        // axios.post('https://localhost:8000/api/resumes', state)  //Roxanna or Jonny please confirm this route to the backend
        //     .then(res => console.log(state))
        //     .catch(err => console.log(err))
    };


    return(
        <form onSubmit = {onSubmitHandler} className = "card w-50 mx-auto my-2 p-4">
            <h1 className = "card-title">Resume Information</h1>
            <div id= "contactInfo" >
                <h4>Contact Information: </h4>
                <div className = "my-3 row">
                    <label htmlFor = "first_name" className = "col col-form-label text-right">First Name: </label>
                    <div className = "col-10">
                        <input 
                            type= "text"
                            onChange = {onChangeHandler}
                            name = "first_name"
                            className = "form-control"
                        />
                    </div>
                </div>
                <div className = "my-3 row">
                    <label htmlFor = "last_name" className = "col col-form-label text-right">Last Name: </label>
                    <div className = "col-10">
                        <input 
                            type= "text"
                            onChange = {onChangeHandler}
                            name = "last_name"
                            className = "form-control"
                        />
                    </div>
                </div>
                <div className = "my-3 row">
                    <label htmlFor = "phone" className = "col col-form-label">Phone Number: </label>
                    <div className = "col-10">
                        <input 
                            type= "text"
                            onChange = {onChangeHandler}
                            name = "phone"
                            className = "form-control"
                        />
                    </div>
                </div>
                <div className = "my-3 row">
                    <label htmlFor = "email" className = "col col-form-label">Email Address: </label>
                    <div className = "col-10">
                        <input 
                            type= "text"
                            onChange = {onChangeHandler}
                            name = "email"
                            className = "form-control"
                        />
                    </div>
                </div>
            </div>
            <div id="techSkills" className = "my-3 row">
                <h4>Skills: </h4>
                <label htmlFor = "skills" className = "col col-form-label">Technical Skills: </label>
                <div className = "col-10">
                    <textarea
                        type = "text"
                        name = "skills"
                        onChange = {onChangeHandler}
                        rows = '3'
                        className = "form-control"
                    ></textarea>
                </div>
            </div>
            <div id = "projects">
                <h4>Professional Projects: </h4>
                <div className = "row my-3">
                    <label htmlFor = "project1" className = "col col-form-label">First Project: </label>
                    <div className = "col-10">
                        <textarea
                            type = "text"
                            name = "project1"
                            onChange = {onChangeHandler}
                            rows = '3'
                            className = "form-control"
                        ></textarea>
                    </div>
                </div>
                <div className = "row my-3">
                    <label htmlFor = "project2" className = "col col-form-label">Second Project: </label>
                    <div className = "col-10">
                        <textarea
                            type = "text"
                            name = "project2"
                            onChange = {onChangeHandler}
                            rows = '3'
                            className = "form-control"
                        ></textarea>
                    </div>
                </div>
                <div className = "row my-3">
                    <label htmlFor = "project3" className = "col col-form-label">Third Project: </label>
                    <div className = "col-10">
                        <textarea
                            type = "text"
                            name = "project3"
                            onChange = {onChangeHandler}
                            rows = '3'
                            className = "form-control"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div id = "jobs">
                <h4>Work Experience: </h4>
                <div className = "row my-3">
                    <label htmlFor = "job1" className= "col col-form-label">Job 1: </label>
                    <div className = "col-10">
                        <textarea
                            type = "text"
                            name = "job1"
                            onChange = {onChangeHandler}
                            rows = '3'
                            className = "form-control"
                        ></textarea>
                    </div>
                </div>
                <div className = "row my-3">
                    <label htmlFor = "job2" className= "col col-form-label">Job 2: </label>
                    <div className = "col-10">
                        <textarea
                            type = "text"
                            name = "job2"
                            onChange = {onChangeHandler}
                            rows = '3'
                            className = "form-control"
                        ></textarea>
                    </div>
                </div>
                <div className = "row my-3">
                    <label htmlFor = "job3" className= "col col-form-label">Job 3: </label>
                    <div className = "col-10">
                        <textarea
                            type = "text"
                            name = "job3"
                            onChange = {onChangeHandler}
                            rows = '3'
                            className = "form-control"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div id="education" className = "row my-3">
                <h4>Education: </h4>
                <label htmlFor = "education" className = "col col-form-label">Education: </label>
                <div className = "col-10">   
                    <textarea 
                        type = "text"
                        name = "education"
                        onChange = {onChangeHandler}
                        rows = '3'
                        className = "form-control"
                    ></textarea>
                </div>
            </div>
            <input
                type = "submit"
                value = "Save PDF"
                className = "btn btn-lg btn-primary w-25 mx-auto"
            />
        </form>
    )
};

export default ResumeCreate;