import { useRef } from "react";
import { useDeleteActivity } from "../../../hooks/useActivities";

type Props = {
  activity: Activity;
  setSelectedActivity: (activity: Activity | null) => void;
};

const ActivityCard = ({ activity, setSelectedActivity }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const deleteActivity = useDeleteActivity();

  const handleCardClick = () => setSelectedActivity(activity);

  const handleDelete = () => {
    // Guard against undefined id
    if (!activity.id) return;
    deleteActivity.mutate(activity.id, {
      onSuccess: () => {
        modalRef.current?.close();
      },
    });
  };

  return (
    <div
      key={activity.id}
      className="max-w-4xl card bg-accent/20 shadow-xl rounded-sm border-base-200"
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{activity.title}</h2>
          {activity.isCancelled && (
            <span className="badge badge-error badge-outline">Cancelled</span>
          )}
        </div>
        <p className="text-sm text-base-content/70 mb-2">{activity.date}</p>
        <p className="mb-2">{activity.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="badge badge-outline badge-info">
            {activity.category}
          </span>
          <span className="badge badge-ghost">{activity.city}</span>
          <span
            className="px-2 py-1 rounded bg-base-200 text-xs font-medium max-w-[12rem] truncate"
            title={activity.venue}
          >
            {activity.venue}
          </span>
        </div>
        <div className="text-xs text-base-content">
          <span>Lat: {activity.latitude}</span>
          {" | "}
          <span>Lng: {activity.longitude}</span>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="btn btn-error btn-sm"
            onClick={() => modalRef.current?.showModal()}
          >
            Delete
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleCardClick}>
            View
          </button>
        </div>
      </div>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Activity</h3>
          <p className="py-4">
            Are you sure you want to delete this {activity.title} ? This action
            cannot be undone.
          </p>
          <div className="modal-action">
            <button className="btn" onClick={() => modalRef.current?.close()}>
              Cancel
            </button>
            <button className="btn btn-error" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ActivityCard;
