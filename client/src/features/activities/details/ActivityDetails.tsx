import { useState } from "react";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activity: Activity | null;
  setEditMode?: (editMode: boolean) => void;
  setSelectedActivity: (activity: Activity | null) => void;
};

const ActivityDetails = ({ activity, setSelectedActivity }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(null);
  };

  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <span className="text-primary mb-4">No activity selected</span>
        <p className="text-base-content">Select an activity to view details</p>
      </div>
    );
  }

  if (editMode) {
    // Pass the activity as a prop for editing
    return (
      <ActivityForm
        activity={activity}
        setEditMode={setEditMode}
        onCancel={handleCancelSelectedActivity}
      />
    );
  }

  return (
    <div className="card bg-base-200 shadow-lg border border-base-200 h-screen/50 overflow-auto">
      <figure>
        <img
          src={`./images/categoryImages/${activity.category.toLowerCase()}.jpg`}
          alt={activity.title}
          className="w-full h-36 object-cover rounded-t"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{activity.title}</h2>
          {activity.isCancelled && (
            <span className="badge badge-error badge-outline">Cancelled</span>
          )}
        </div>
        <p className="mb-1">{activity.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="badge badge-outline badge-info">
            {activity.category}
          </span>
          <span className="badge badge-accent">{activity.city}</span>
          <span className="badge badge-ghost">{activity.venue}</span>
        </div>
        <div className="card-actions flex gap-2 mt-2">
          <button className="btn btn-primary" onClick={() => setEditMode(true)}>
            Edit
          </button>
          <button
            className="btn btn-error"
            onClick={handleCancelSelectedActivity}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
