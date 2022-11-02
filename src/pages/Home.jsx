import CreateActivity from "../components/CreateActivity";
import AllActivities from "../components/AllActivities";
import DoneActivities from "../components/DoneActivities";

function Home() {
  return (
    <div>
      <CreateActivity />
      <AllActivities />
      <DoneActivities />
    </div>
  );
}

export default Home;
