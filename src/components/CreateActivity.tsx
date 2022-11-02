import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createActivity } from "../redux";

const CreateActivityGlobal = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  align-items: center;
`;

const CreateActivityForm = styled.form`
  width: 80%;
  padding: 12px 20px 12px 20px;
  input {
    width: 260px;
    padding: 10px;
    font-size: 1.1rem;
  }
`;
/*
const CreateActivityLogIn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right : 35px;
  width: 20%;

  button {
    padding : 10px 15px 10px 15px;
    background-color : white;
    border : 0px solid;
    font-size : 1rem;
    cursor : pointer;
  }
`;
*/

function CreateActivity() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function submitActivity(event: any) {
    event.preventDefault();
    dispatch(createActivity(text));
    setText("");
  }

  return (
    <CreateActivityGlobal>
      <CreateActivityForm onSubmit={submitActivity}>
        <input
          type="text"
          placeholder="Entrez une nouvelle activité"
          maxLength={25}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </CreateActivityForm>
      {/* 
      <CreateActivityLogIn>
        <button>Se connecter</button>
      </CreateActivityLogIn>
       */}
    </CreateActivityGlobal>
  );
}

export default CreateActivity;
