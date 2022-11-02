import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteActivity, finishActivity } from "../redux";

function Activity({ activity }) {
  const dispatch = useDispatch();

  return (
    <ActivityGlobal
      style={{ border: activity.done ? "2px solid grey" : "2px solid red" }}
    >
      <div
        className="ActivityTitle"
        style={{
          borderBottom: activity.done ? "solid 1px grey" : "1px solid red",
        }}
      >
        <p>{activity.title}</p>
      </div>
      <div className="ActivityInfo">
        {activity.img ? <img src={activity.img} alt={activity.title} /> : <></>}
      </div>
      <div
        className="ActivityButtons"
        style={{
          borderTop: activity.done ? "solid 1px grey" : "1px solid red",
        }}
      >
        <button
          style={{ display: activity.done ? "none" : "" }}
          onClick={() => dispatch(finishActivity(activity.id))}
        >
          DID IT !
        </button>
        {activity.done ? (
          <i
            className="fa-solid fa-rotate-right"
            onClick={() => dispatch(finishActivity(activity.id))}
          ></i>
        ) : (
          <i
            className="fa-solid fa-xmark"
            onClick={() => dispatch(deleteActivity(activity.id))}
          />
        )}
      </div>
    </ActivityGlobal>
  );
}

const ActivityGlobal = styled.div`
  width: 260px;
  height: 260px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  //   border-radius : 5px;

  .ActivityTitle {
    height: 15%;
    width: 100%;
    // border-bottom: solid 1px red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1.1rem;
  }

  .ActivityInfo {
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 145px;
    }
  }

  .ActivityButtons {
    position: relative;
    height: 15%;
    width: 100%;
    //border-top: solid 1px red;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 2.5px 5px 2.5px 5px;
      cursor: pointer;
      background-color: black;
      color: white;
      font-size: 1rem;
      border-radius: 2px;
    }

    i {
      position: absolute;
      right: 15px;
      cursor: pointer;
      background-color: white;
      font-size: 1rem;
      border-radius: 2px;
      color: grey;
    }
  }
`;

export default Activity;
