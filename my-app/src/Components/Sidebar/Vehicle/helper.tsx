import { ColumnsType } from "antd/es/table";
import { Vehicle } from "./type";
import { Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { StyledEditButton, StyledDeleteButton } from "../../style";
import { VehicleColumnsProps } from "./type";

const VehicleColumns: (props: VehicleColumnsProps) => ColumnsType<Vehicle> = ({
  handleEdit,
  handleDelete,
}) => [
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
    filteredValue: [],
    onFilter: (value: string, record) => {
      return String(record.title).toLowerCase().includes(value.toLowerCase());
    },
    sorter: (a, b) => a.title.localeCompare(b.title),
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
        <StyledEditButton onClick={() => handleEdit(record)}>
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

export default VehicleColumns;
