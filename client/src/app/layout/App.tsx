import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dasboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);
  return (
    <>
      <NavBar />
     <ActivityDashboard activities={activities}/>
    </>
  );
}

export default App;
