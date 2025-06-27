import { useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dasboard/ActivityDashboard";
import { useActivityStore } from "../../store/activityStore";

function App() {
  const setActivities = useActivityStore((s) => s.setActivities);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, [setActivities]);

  return (
    <>
      <NavBar />
      <ActivityDashboard />
    </>
  );
}

export default App;
