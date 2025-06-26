type Props = {
  activity: Activity;
  setSelectedActivity: (activity: Activity | null) => void;
};

const ActivityCard = ({ activity, setSelectedActivity }: Props) => {
  const handleCardClick = () => setSelectedActivity(activity);
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
        <div className="mt-4 flex justify-end">
          <button className="btn btn-primary btn-sm" onClick={handleCardClick}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};
export default ActivityCard;
