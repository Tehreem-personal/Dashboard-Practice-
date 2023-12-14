import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle, VehicleState } from "./type";

export const initialState: VehicleState = {
  vehicles: {
    vehicleData: [],
    isLoading: false,
    error: false,
  },
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    loadVehicles: (state) => {
      state.vehicles.isLoading = true;
    },
    vehiclesLoaded: (state, { payload }: PayloadAction<Vehicle[]>) => {
      state.vehicles.isLoading = false;
      state.vehicles.vehicleData = payload;
      state.vehicles.error = false;
    },
    vehiclesLoadError: (state, { payload }: PayloadAction<any>) => {
      state.vehicles.isLoading = false;
      state.vehicles.error = true;
    },
    addOrUpdateVehicle: (
      state,
      { payload }: PayloadAction<{ method: string; data: Vehicle }>
    ) => {
      state.vehicles.isLoading = true;
    },
    addOrUpdateVehicleSuccess: (state, { payload }) => {
      state.vehicles.isLoading = false;
      const existingVehicle = state.vehicles.vehicleData.find(
        (vehicle) => vehicle.id === payload.id
      );

      if (existingVehicle) {
        const updatedVehicleIndex = state.vehicles.vehicleData.findIndex(
          (vehicle) => vehicle.id === payload.id
        );
        if (updatedVehicleIndex >0) {
          state.vehicles.vehicleData[updatedVehicleIndex] = payload;
        }
      } else {
        state.vehicles.vehicleData.push(payload)
      }
    },
    addOrUpdateVehicleFailure: (state) => {
      state.vehicles.isLoading = false;
    },
    deleteVehicle: (state) => {
      state.vehicles.isLoading = true;
    },
    deleteVehicleSuccess: (state, { payload }) => {
      state.vehicles.isLoading = false;
      state.vehicles.vehicleData = state.vehicles.vehicleData.filter(
        (vehicle) => vehicle.id !== payload
      );
    },
    deleteVehicleFailure: (state) => {
      state.vehicles.isLoading = false;
    },
  },
});
export const {
  vehiclesLoaded,
  loadVehicles,
  vehiclesLoadError,
  addOrUpdateVehicle,
  addOrUpdateVehicleSuccess,
  addOrUpdateVehicleFailure,
  deleteVehicle,
  deleteVehicleSuccess,
  deleteVehicleFailure,
} = vehicleSlice.actions;

export default vehicleSlice.reducer;
