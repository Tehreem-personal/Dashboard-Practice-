

import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./vehicleSlice";

const vehicleInitialState = (state:any) => state.vehicle || initialState

const vehicleSelector = createSelector(
    [vehicleInitialState],
  (state) => state.vehicles
);

export { vehicleSelector };


