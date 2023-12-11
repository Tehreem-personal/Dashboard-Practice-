import React, { FC } from "react";
import { Modal, Form, Input, Row } from "antd";
import {
  StyledCancelButton,
  StyledCol,
  StyledDatePicker,
  StyledFormInput,
  StyledSubmitButton,
} from "../../style";

interface FieldConfig {
  label: string;
  name: string;
  rules?: any[];
  inputComponent?: React.ReactNode;
}

interface VehicleModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
  onFinish: (values: any) => void;
  form: any;
  isEditModal: boolean;
}

const fieldConfigs: FieldConfig[] = [
  {
    label: "Title",
    name: "title",
    rules: [{ required: true, message: "Please input the title!" }],
    inputComponent: <Input placeholder="Title" type="text" />,
  },
  {
    label: "Year",
    name: "year",
    rules: [{ required: true, message: "Please input the year" }],
    inputComponent: <StyledDatePicker name="year" picker="year" />,
  },
  {
    label: "Description",
    name: "description",
    rules: [{ required: true, message: "Please input the description" }],
    inputComponent: <Input placeholder="description" type="text" />,
  },
  {
    label: "Phone Number",
    name: "phone_number",
    inputComponent: (
      <StyledFormInput type="number" placeholder="Enter Phone number..." />
    ),
  },
  {
    label: "Kilometer",
    name: "kilometers",
    rules: [{ required: true, message: "Please add kilometers in numbers" }],
    inputComponent: (
      <StyledFormInput type="number" placeholder="Enter Kilomater in numbers..." />
    ),
  },
  {
    label: "Price",
    name: "price",
    rules: [{ required: true, message: "Please add the price" }],
    inputComponent: <Input placeholder="price" type="number" />,
  },
  {
    label: "Location",
    name: "loaction_name",
    inputComponent: <Input placeholder="location" />,
  },
  {
    label: "Expiration Date",
    name: "expiration_date",
    rules: [{ required: true, message: "Please add the expiry date" }],
    inputComponent: <StyledDatePicker name="expiration_date" />,
  },
];

const VehicleModal: FC<VehicleModalProps> = ({
  isModalVisible,
  handleCancel,
  onFinish,
  form,
  isEditModal,
}) => {
  return (
    <Modal
      title={isEditModal ? "Edit Vehicle" : "Add Vehicle"}
      open={isModalVisible}
      width={800}
      onCancel={handleCancel}
      footer={[
        <StyledCancelButton key="cancel" onClick={handleCancel}>
          Cancel
        </StyledCancelButton>,
        <StyledSubmitButton
          key="submit"
          type="primary"
          onClick={() => form.submit()}
        >
          Submit
        </StyledSubmitButton>,
      ]}
    >
      <Form
        layout="inline"
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 8 }}
      >
        <Row gutter={16}>
          {fieldConfigs.map(({ label, name, rules, inputComponent }) => (
            <StyledCol span={12} key={name}>
              <Form.Item label={label} name={name} rules={rules}>
                {inputComponent}
              </Form.Item>
            </StyledCol>
          ))}
        </Row>
      </Form>
    </Modal>
  );
};

export default VehicleModal;
