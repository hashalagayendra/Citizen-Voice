import { create } from "zustand";

const useGlobalStore = create((set) => ({
  pageCount: 1,
  location_coordinates: { lat: 0, lng: 0 },
  selected_Location_details: null,
  tempory_address: null,

  setPageCount: (count) => set({ pageCount: count }),
  setlocation_coordinates: (t, g) =>
    set({ location_coordinates: { lat: t, lng: g } }),
  setselected_Location_details: (data) =>
    set({ selected_Location_details: { ...data } }),
  settempory_address: (address) => set({ tempory_address: address }),
}));

export default useGlobalStore;
