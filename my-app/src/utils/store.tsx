import { configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import vehicleReducer from "../Components/Sidebar/Vehicle/vehicleSlice";
import vehicleSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
  },
   middleware: [sagaMiddleware]
});
sagaMiddleware.run(vehicleSaga);

export default store;

