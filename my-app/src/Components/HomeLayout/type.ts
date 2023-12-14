import { ReactNode } from "react";

export interface DefaultLayoutProps {
  children: ReactNode;
}
export interface MenuItem {
  label: ReactNode;
  key: string | number;
  icon: ReactNode;
  children?: MenuItem[];
}
export interface DropDownMenu{
    label:string;
    key:string;
}
