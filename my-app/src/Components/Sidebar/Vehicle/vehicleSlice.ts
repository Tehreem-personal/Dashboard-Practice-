import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Vehicle {
  id: number;
  title: string;
  price: string;
  phone_number: string;
  year: number;
  expiration_date: string;
  kilometers: number;
  loaction_name: string;
  description: string;
}

interface VehicleState {
  vehicle: Vehicle[];
  isLoading: boolean;
  error?: boolean;
}

const initialState: VehicleState = {
  vehicle: [],
  isLoading: false,
  error: false,
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    loadVehicles: (state) => {
      state.isLoading = true;
    },
    vehiclesLoaded: (state, { payload }: PayloadAction<Vehicle[]>) => {
      state.isLoading = false;
      state.vehicle = payload;
      state.error = false;
    },
    vehiclesLoadError: (state, { payload }: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = true;
    },
    addOrUpdateVehicle: (
      state,
      { payload }: PayloadAction<{ method: string; data: Vehicle }>
    ) => {
      state.isLoading = true;
    },
    addOrUpdateVehicleSuccess: (state, { payload }) => {
      state.isLoading = false;
      const existingVehicle = state.vehicle.find(
        (vehicle) => vehicle.id === payload.id
      );

      if (existingVehicle) {
        const updatedVehicleIndex = state.vehicle.findIndex(
          (vehicle) => vehicle.id === payload.id
        );
        if (updatedVehicleIndex !== -1) {
          state.vehicle[updatedVehicleIndex] = payload;
        }
      } else {
        state.vehicle.push(payload);
      }
    },
    addOrUpdateVehicleFailure: (state) => {
      state.isLoading = false;
    },
    deleteVehicle: (state) => {
      state.isLoading = true;
    },
    deleteVehicleSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.vehicle = state.vehicle.filter((vehicle) => vehicle.id !== payload);
    },
    deleteVehicleFailure: (state) => {
      state.isLoading = false;
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
