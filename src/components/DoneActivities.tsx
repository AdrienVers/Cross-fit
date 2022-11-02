import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux";
import Activity from "./Activity";

const DoneActivitiesGlobal = styled.div`
  width: 100%;

  .ActivitiesNumber {
    padding-left: 30px;
    font-size: 1.6rem;

    i {
      color: gold;
    }
  }
`;

const DoneActivitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 20px 10px 20px;
`;

function DoneActivities() {
  const activities = useSelector((state: RootState) => state.crossfit);
  return (
    <DoneActivitiesGlobal>
      <div className="ActivitiesNumber">
        Activités réalisées :{" "}
        <strong>
          {activities.filter((activity) => activity.done === true).length}
        </strong>{" "}
        <i className="fa-solid fa-medal"></i>
      </div>
      <DoneActivitiesList>
        {activities
          .filter((activity) => activity.done === true)
          .map((activity) => {
            return <Activity key={activity.id} activity={activity} />;
          })}
      </DoneActivitiesList>
    </DoneActivitiesGlobal>
  );
}

export default DoneActivities;
