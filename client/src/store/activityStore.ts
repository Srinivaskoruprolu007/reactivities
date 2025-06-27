import { create } from "zustand";


type ActivityStore = {
  activities: Activity[];
  selectedActivity: Activity | null;
  editMode: boolean;
  setActivities: (activities: Activity[]) => void;
  setSelectedActivity: (activity: Activity | null) => void;
  setEditMode: (edit: boolean) => void;
};

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],
  selectedActivity: null,
  editMode: false,
  setActivities: (activities) => set({ activities }),
  setSelectedActivity: (activity) => set({ selectedActivity: activity }),
  setEditMode: (edit) => set({ editMode: edit }),
}));
