
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input, Space, Popconfirm, Form} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import VehicleModal from "./Modal";
import { Vehicle, loadVehicles, deleteVehicle, addOrUpdateVehicle } from "./vehicleSlice";
import type { ColumnsType } from "antd/es/table";
import {
    StyledTableCard,
    StyledAddButton,
    StyledDeleteButton,
    StyledEditButton,
    StyledRow,
  } from "../../style";
  import DefaultLayout from "../../HomeLayout/Layout";
const MyVehicle: React.FC = () => {

  const vehicles: Vehicle[] = useSelector( (state: any) => state.vehicle.vehicle );
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [id, setId] = useState<number | null>(null);
    const [isEditModal, setIsEditModal] = useState(false);
    const [searchInput, setSearchInput] = useState("");
 
    useEffect(() => {
    dispatch(loadVehicles());
  }, []);
  const columns: ColumnsType<Vehicle> = [
    
    {
      title: "ID",
      dataIndex: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,

      key: "id",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      filteredValue: [searchInput],
      onFilter: (value:string, record) => {
        return String(record.title).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Expiry Date",
      dataIndex: "expiration_date",
      key: "expiration_date",
    },
    {
      title: "Kilometer",
      dataIndex: "kilometers",
      key: "kilometers",
    },
    {
      title: "Location",
      dataIndex: "loaction_name",
      key: "loaction_name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Space>
          <StyledEditButton
          onClick={() => handleEdit(record)} 
          >
            <EditOutlined />
          </StyledEditButton>
          <Popconfirm
            title="Are you sure you want to delete this vehicle?"
             onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <StyledDeleteButton>
              <DeleteOutlined />
            </StyledDeleteButton>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
      };
    
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
    
      const onFinish = async (values) => {
        const vehicleData:Vehicle = {
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
        dispatch(addOrUpdateVehicle({ method, data: vehicleData}));
        
        form.resetFields();
        setIsModalVisible(false);
        setIsEditModal(false);
      };
    
      const handleDelete = (id: any) => {
        dispatch(deleteVehicle(id));
      };
    

  return (
    <DefaultLayout>
      <StyledTableCard>
        <StyledRow>
          <StyledAddButton  onClick={showModal}>Add New Vehicle</StyledAddButton>
          <Input.Search
          placeholder="Search Vehicle"
          onSearch={(value) => {
            setSearchInput(value);
          }}
          onChange={(e) => {
            if (e.target.value === "") {
              setSearchInput("");
            }
          }}
          style={{width: "20%"}}
        />
        </StyledRow>
       
        <Table columns={columns} dataSource={vehicles} />
      </StyledTableCard>
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



