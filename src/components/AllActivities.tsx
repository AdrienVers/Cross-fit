import React from "react";
import Activity from "./Activity";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

const AllActivitiesGlobal = styled.div`
  width: 100%;
  padding-top: 10px;

  .ActivitiesNumber {
    padding-left: 30px;
    font-size: 1.6rem;
  }
`;

const AllActivitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 20px 10px 20px;
`;

function AllActivities() {
  const activities = useSelector((state: RootState) => state.crossfit);

  return (
    <AllActivitiesGlobal>
      <div className="ActivitiesNumber">
        Activités à faire :{" "}
        <strong>
          {activities.filter((activity) => activity.done === false).length}/
          {activities.filter((activity) => activity.done === false).length}
        </strong>
      </div>
      <AllActivitiesList>
        {activities
          .filter((activity) => activity.done === false)
          .map((activity) => {
            return <Activity key={activity.id} activity={activity} />;
          })}
      </AllActivitiesList>
    </AllActivitiesGlobal>
  );
}

export default AllActivities;
