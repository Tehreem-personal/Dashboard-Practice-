import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  loadVehicles,
  vehiclesLoaded,
  vehiclesLoadError,
  addOrUpdateVehicleSuccess,
  addOrUpdateVehicle,
  addOrUpdateVehicleFailure,
  deleteVehicleSuccess,
  deleteVehicleFailure,
  deleteVehicle,
} from "../Components/Sidebar/Vehicle/vehicleSlice";
import { message } from "antd";

function* workGetVehiclesFetch() {
  try {
    const response = yield call(axios.get, "http://localhost:8000/posts/");
    const vehicles = response.data.results;
    yield put(vehiclesLoaded(vehicles));
  } catch (error) {
    yield put(vehiclesLoadError(error));
  }
}

function* workAddOrUpdateVehicle({ payload }: any) {
  try {
    const { method, data } = payload;

    const url =
      method === "POST"
        ? "http://localhost:8000/posts/"
        : `http://localhost:8000/posts/${data.id}/`;

    const response = yield call(
      method === "POST" ? axios.post : axios.put,
      url,
      data
    );

    yield put(addOrUpdateVehicleSuccess(response.data));

    if (method === "POST") {
      message.success("Vehicle added successfully");
    } else if (method === "PUT") {
      message.success("Vehicle edited successfully");
    }
  } catch (error: any) {
    yield put(addOrUpdateVehicleFailure(error));
  }
}

function* workDeleteVehicle({ payload }: any) {
  try {
    yield call(axios.delete, `http://localhost:8000/posts/${payload}`);
    yield put(deleteVehicleSuccess(payload));
    message.success("Vehicle deleted successfully");
  } catch (error: any) {
    yield put(deleteVehicleFailure(error));
  }
}
function* vehicleSaga() {
  yield takeLatest(loadVehicles.type, workGetVehiclesFetch);
  yield takeLatest(addOrUpdateVehicle.type, workAddOrUpdateVehicle);
  yield takeLatest(deleteVehicle.type, workDeleteVehicle);
}
export default vehicleSaga;
