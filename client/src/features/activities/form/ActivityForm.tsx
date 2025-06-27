import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCreateActivity } from "../../../hooks/useActivities"; // <-- import your hook

type Props = {
  setEditMode: (editMode: boolean) => void;
  activity?: Activity | null;
  onCancel?: () => void;
};

const ActivityForm = ({ setEditMode, activity }: Props) => {
  const { register, handleSubmit, reset } = useForm<Activity>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      date: "",
      city: "",
      venue: "",
    },
  });

  const { createActivity } = useCreateActivity(); // <-- use the mutation hook

  useEffect(() => {
    if (activity) {
      reset(activity);
    } else {
      reset({
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      });
    }
  }, [activity, reset]);

  const onSubmit = (data: Activity) => {
    if (!activity) {
      createActivity(data);
    } else {
      // handle update logic here if needed
      setEditMode(false);
    }
  };

  return (
    <form
      className="card bg-base-300 shadow-md p-6 w-full h-full mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="card-title mb-4">
        {activity ? "Edit Activity" : "Create Activity"}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered flex-1"
            {...register("title", { required: true })}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered flex-1"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="Category"
            className="input input-bordered flex-1"
            {...register("category", { required: true })}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            placeholder="Date"
            className="input input-bordered flex-1"
            {...register("date", { required: true })}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            placeholder="City"
            className="input input-bordered flex-1"
            {...register("city", { required: true })}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Venue</span>
          </label>
          <input
            type="text"
            placeholder="Venue"
            className="input input-bordered flex-1"
            {...register("venue", { required: true })}
          />
        </div>
      </div>
      <div className="card-actions flex justify-end gap-2 mt-2">
        <button className="btn btn-primary" type="submit">
          {activity ? "Update" : "Create"}
        </button>
        <button
          className="btn btn-outline"
          type="button"
          onClick={() => setEditMode(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;
