import ActivityDetails from "../details/ActivityDetails";
import ActivityCard from "./ActivityCard";
import { useState } from "react";

type Props = {
  activities: Activity[];
};
const ActivityDashboard = ({ activities }: Props) => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  return (
    <section className="container px-2 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-primary">
        Activities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-6">
          {activities.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
              <p className="text-base-content">
                No activities found. Please create one.
              </p>
            </div>
          ) : (
            activities.map((activity) => (
              <ActivityCard
                activity={activity}
                setSelectedActivity={setSelectedActivity}
              />
            ))
          )}
        </div>
        {selectedActivity && (
          <div className="hidden md:block">
            <ActivityDetails
              activity={selectedActivity}
              setSelectedActivity={setSelectedActivity}
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default ActivityDashboard;
