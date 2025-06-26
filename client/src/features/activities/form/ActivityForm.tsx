import { useState, useEffect } from "react";

type Props = {
  setEditMode: (editMode: boolean) => void;
  activity?: Activity | null;
  onCancel?: () => void;
};

const ActivityForm = ({ setEditMode, activity }: Props) => {
  const [form, setForm] = useState<Activity>({
    title: "",
    description: "",
    category: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (activity) {
      setForm(activity);
    }
  }, [activity]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="card bg-base-300 shadow-md p-6 w-full h-full mx-auto">
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
            name="title"
            placeholder="Title"
            className="input input-bordered flex-1"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered flex-1"
            value={form.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input input-bordered flex-1"
            value={form.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="Date"
            className="input input-bordered flex-1"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            className="input input-bordered flex-1"
            value={form.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-control flex flex-row items-center gap-4">
          <label className="label w-32">
            <span className="label-text">Venue</span>
          </label>
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            className="input input-bordered flex-1"
            value={form.venue}
            onChange={handleChange}
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
