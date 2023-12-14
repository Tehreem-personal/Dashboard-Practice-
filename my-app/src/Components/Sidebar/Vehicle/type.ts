import {ReactNode }from "react"
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

export interface VehicleState {
  vehicles: {
    vehicleData: Vehicle[];
    isLoading: boolean;
    error?: boolean;
  };
}
export interface VehicleColumnsProps {
  handleEdit: (record: Vehicle) => void;
  handleDelete: (id: any) => void;
}
export interface FieldConfig {
  label: string;
  name: string;
  rules?: any[];
  inputComponent?: ReactNode;
}

export interface VehicleModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
  onFinish: (values: any) => void;
  form: any;
  isEditModal: boolean;
}

