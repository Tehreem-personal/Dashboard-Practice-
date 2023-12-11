import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { createLogger } from 'redux-logger';
import vehicleReducer from "../Components/Sidebar/Vehicle/vehicleSlice";
import vehicleSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleware),
});

sagaMiddleware.run(vehicleSaga);

export default store;