import { create } from "zustand";

const useGlobalStore = create((set) => ({
  pageCount: 1,
  description: null,
  location_coordinates: { lat: 0, lng: 0 },
  selected_Location_details: null,
  tempory_address: "",
  date: null,
  uplodedFiles: null,
  Severity_Level: null,
  Submission_Method: null,
  Any_Witnesses: null,
  Affected_Area: null,
  Is_It_Ongoing: null,
  Person_involved: null,
  Departments: null,
  ConstructionType: null,
  Is_It_Dangerous: null,
  FacilityType: null,
  NameOfFacility: null,

  setPageCount: (count) => set({ pageCount: count }),
  setlocation_coordinates: (t, g) =>
    set({ location_coordinates: { lat: t, lng: g } }),
  setselected_Location_details: (data) =>
    set({ selected_Location_details: { ...data } }),
  settempory_address: (address) => set({ tempory_address: address }),
  setDate: (date_details) => set({ date: date_details }),
  setuplodedFiles: (files) => set({ uplodedFiles: files }),
  setSeverity_Level: (level) => set({ Severity_Level: level }),
  setSubmission_Method: (method) => set({ Submission_Method: method }),
  setAny_Witnesses: (value) => set({ Any_Witnesses: value }),
  setAffected_Area: (value) => set({ Affected_Area: value }),
  setIs_It_Ongoing: (value) => set({ Is_It_Ongoing: value }),
  setPerson_involved: (person) => set({ Person_involved: person }),
  setDepartment: (department) => set({ Department: department }),
  setConstructionType: (type) => set({ ConstructionType: type }),
  setIs_It_Dangerous: (value) => set({ Is_It_Dangerous: value }),
  setFacilityType: (facility) => set({ FacilityType: facility }),
  setNameOfFacility: (facilityName) => set({ NameOfFacility: facilityName }),
  setdescription: (desc) => set({ description: desc }),
}));

export default useGlobalStore;
