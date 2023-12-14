import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input, Form } from "antd";
import moment from "moment";
import VehicleModal from "./Modal";
import VehicleColumns from "./helper";
import { Vehicle } from "./type";
import {
  loadVehicles,
  deleteVehicle,
  addOrUpdateVehicle,
} from "./vehicleSlice";
import { StyledTableCard, StyledAddButton, StyledRow } from "../../style";
import DefaultLayout from "../../HomeLayout";
import { vehicleSelector } from "./selector";

const MyVehicle: React.FC = () => {
  // Selector for Redux state
  const { vehicleData } = useSelector(vehicleSelector);
  const dispatch = useDispatch();

  // State to manage modal visibility when vehicle component is rendered
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [form] = Form.useForm();
  const [id, setId] = useState<number | null>(null);

  // Search state for search bar next to AddNewVehcileButton
  const [searchInput, setSearchInput] = useState("");
  const [filteredVehicles, setFilteredVehicles] =
    useState<Vehicle[]>(vehicleData);

  // Load vehicles data from API when component mounts
  useEffect(() => {
    dispatch(loadVehicles());
  }, []);  

  // Function to apply search filter in searchbar
  const applySearchFilter = () => {
    const filtered = vehicleData.filter((vehicle) =>
      Object.values(vehicle).some((value) =>
        String(value).toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredVehicles(filtered);
  };
  // Show modal to add/ edit Vehicle data
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle canceling the modal
  const handleCancel = () => {
    setIsModalVisible(false);
    // form.resetFields();
  };

  // When user clicks on Edit button in action column
  const handleEdit = (record: Vehicle) => {
    setId(record.id);
    setIsModalVisible(true);
    setIsEditModal(true);
    form.setFieldsValue({
      title: record.title,
      year: moment(record.year, "YYYY"),
      description: record.description,
      price: record.price,
      expiration_date: moment(record.expiration_date),
      loaction_name: record.loaction_name,
      kilometers: record.kilometers,
      phone_number: record.phone_number,
    });
  };

  // Handling the form submission (add/edit vehicle)
  const onFinish = async (values) => {
    const vehicleData: Vehicle = {
      year: values["year"].format("YYYY"),
      title: values.title || "---",
      price: values.price || "---",
      description: values.description || "---",
      expiration_date: values["expiration_date"] || "",
      loaction_name: values.loaction_name || "---",
      phone_number: values.phone_number || "---",
      kilometers: values.kilometers || "---",
      id: id || 0,
    };

    const method = isEditModal ? "PUT" : "POST";
    dispatch(addOrUpdateVehicle({ method, data: vehicleData }));
    form.resetFields();
    setIsModalVisible(false);
    setIsEditModal(false);
  };

  //  deleting a vehicle from the api
  const handleDelete = (id: any) => {
    dispatch(deleteVehicle(id));
  };

  // Define columns for the Ant Design Table
  const columns = VehicleColumns({ handleEdit, handleDelete });

  // Handle search input change
  const handleSearch = (value: string) => {
    setSearchInput(value);
    applySearchFilter();
  };

  return (
    <DefaultLayout>
      <StyledTableCard>
        <StyledRow>
          <StyledAddButton onClick={showModal}>Add New Vehicle</StyledAddButton>
          <Input.Search
            placeholder="Search Vehicle"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: "20%" }}
          />
        </StyledRow>
        <Table
          columns={columns}
          dataSource={
            filteredVehicles && filteredVehicles.length > 0
              ? filteredVehicles
              : vehicleData && vehicleData.length > 0
              ? vehicleData
              : []
          }
        />
      </StyledTableCard>

      {/* Vehicle modal */}
      <VehicleModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        onFinish={onFinish}
        form={form}
        isEditModal={isEditModal}
      />
    </DefaultLayout>
  );
};

export default MyVehicle;
