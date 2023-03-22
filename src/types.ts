import { Countries, Roles, Status, Systems } from "./enums";

export type UserRoles = Partial<Record<Roles, boolean>>;
export type UserSystems = Partial<Record<Systems, boolean>>;

export type Address = {
  id?: string;
  userId?: string;
  street: string;
  unit: string;
  city: string;
  state: string;
  zipCode: string;
};

export type UserData = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  displayName?: string;
  phone?: string;
  taxId?: string;
  country: Countries;
  address?: Partial<Address>;
  isLeader?: boolean;
  roles: UserRoles;
  systems: UserSystems;
  files?: string[];
};

export type CustomerData = Omit<
  UserData,
  "displayName" | "isLeader" | "roles" | "systems" | "files"
>;

export type SellerData = Omit<CustomerData, "taxId">;

export type FileInfo = {
  name: string;
  contentType: string;
};

export type ResponsibleData = Pick<
  UserData,
  | "id"
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "company"
  | "country"
  | "taxId"
>;

export type PurchaseItem = {
  itemId: string;
  orderId: string;
  createdAt: Date;
  dueDate?: Date;
  name: string;
  label: string;
  sku: string;
  quantity: number;
  price: number;
  status: Status;
  files: FileInfo[];
  [Roles.diseño]?: ResponsibleData;
  [Roles.corte_1]?: ResponsibleData;
  [Roles.corte_2]?: ResponsibleData;
  [Roles.costura]?: ResponsibleData;
};

export type PurchaseOrder = {
  id: string;
  createdAt: Date;
  deleted: boolean;
  deletedAt?: Date;
  quote: string;
  advance?: number;
  customer: CustomerData;
  seller: SellerData;
};

export type CallableResult = {
  success?: boolean;
  error?: boolean;
  data?: any;
  message: string;
};
