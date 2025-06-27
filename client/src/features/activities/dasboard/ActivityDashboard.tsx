import ActivityDetails from "../details/ActivityDetails";
import ActivityFrom from "../form/ActivityForm";
import ActivityCard from "./ActivityCard";
import { useActivityStore } from "../../../store/activityStore";
import { useFetchActivities } from "../../../hooks/useActivities";

const ActivityDashboard = () => {
  const { activities, isActiviesLoading, isActivityError } =
    useFetchActivities();
  const selectedActivity = useActivityStore((s) => s.selectedActivity);
  const setSelectedActivity = useActivityStore((s) => s.setSelectedActivity);
  const editMode = useActivityStore((s) => s.editMode);
  const setEditMode = useActivityStore((s) => s.setEditMode);

  return (
    <section className="container px-2 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-primary">
        Activities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-6">
          {isActiviesLoading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
              <p className="text-base-content">Loading activities...</p>
            </div>
          ) : isActivityError ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <p className="text-error">Failed to load activities.</p>
            </div>
          ) : activities.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <p className="text-base-content">
                No activities found. Please create one.
              </p>
            </div>
          ) : (
            activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                setSelectedActivity={setSelectedActivity}
              />
            ))
          )}
        </div>
        <div className="hidden md:block">
          {editMode ? (
            <ActivityFrom setEditMode={setEditMode} />
          ) : selectedActivity ? (
            <ActivityDetails
              activity={selectedActivity}
              setSelectedActivity={setSelectedActivity}
              setEditMode={setEditMode}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default ActivityDashboard;
