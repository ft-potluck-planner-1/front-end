import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import schema from './formSchema';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {getLoginResponse} from '../../actions/index';

const Page = styled.div`
    background-color: orange;
    color: white;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: PressStart2P;


    .loginForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: orangered;
        padding: 10px;
        border-radius: 5px;
        width:40%;
        margin: auto;
    }

    label {
        padding: 5px;
        display:flex;
        justify-content: center;
    }

    button{
        width: 50%;
        margin: auto;
    }

    input {
        background-color: burlywood;
    }

    @media (max-width: 500px) {

        .loginForm {
            width: 75%;

}
    } 

    @media (max-width: 800px) {

.loginForm {
    width: 65%;

}

} 
`;


const initialFormValues = {
    username: "",
    password: "",
};


const Login = (props) => {

    const { push } = useHistory();
    const [username, setUsername] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [submitDisabled, setSubmitDisabled] = useState(true);


    const submitHandler = (e) => {
        const newUser = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
        };
        setUsername([...username, newUser]);
    };
    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setSubmitDisabled(!valid);
        });
    }, [formValues]);


    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
        // push("/profile");
        axios
            .post('https://ft-potluck-planner-5.herokuapp.com/api/auth/login', formValues)
            .then((res) => {
                // console.log("res data", res.data);
                // console.log("user id", res.data.user.user_id);
          localStorage.setItem('token', res.data.token);
                props.getLoginResponse(res.data);
                setFormValues(res.data)
                push('/profile')
            })
            .catch((err) => {
                console.log("ERROR:", err.response);
            });

        submitHandler();
    };

    return (
        <Page>
            <div className="formContainer">
                <form className="loginForm" onSubmit={onSubmit}>
                    <label className="name">
                        {" "}
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={onChange}
                            
                        />
                    </label>
                    <label className="password">
                        {" "}
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={onChange}
                        />
                    </label>

                    <button disabled={submitDisabled}> Log in </button>
                </form>

                {formValues.username.length < 5 ||
                    (formValues.password.length < 5 && (
                        <div>
                            {/* <p> {formErrors.username} </p> <p> {formErrors.password} </p> */}
                        </div>
                    ))}
            </div>
        </Page>
    );
};

export default connect(null, {getLoginResponse})(Login);

