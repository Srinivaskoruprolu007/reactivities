type Props = {
  activity: Activity | null;
};
const ActivityDetails = ({ activity }: Props) => {
  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <span className="loading loading-spinner loading-md text-primary mb-4"></span>
        <p className="text-base-content">Select an activity to view details</p>
      </div>
    );
  }
  return (
    <div className="card bg-base-200 shadow-lg border border-base-200 h-screen overflow-scroll">
      <figure>
        <img
          src={`./images/categoryImages/${activity.category.toLowerCase()}.jpg`}
          alt={activity.title}
          className="w-full h-48 object-cover rounded-t"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between mb-2">
          <h2 className="card-title">{activity.title}</h2>
          {activity.isCancelled && (
            <span className="badge badge-error badge-outline">Cancelled</span>
          )}
        </div>
        <p className="mb-2">{activity.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-outline badge-info">
            {activity.category}
          </span>
          <span className="badge badge-ghost">{activity.city}</span>
          <span className="badge badge-ghost">{activity.venue}</span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-error">Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default ActivityDetails;
