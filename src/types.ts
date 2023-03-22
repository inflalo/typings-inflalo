import {
  Paises,
  Roles,
  EstatusPlanificacion,
  Sistemas,
  NivelResultado,
} from "./enums";

export type ResultadoCallable = {
  nivel: NivelResultado;
  mensaje: string;
  data?: any;
};

export type Base = {
  id?: string;
  activo?: boolean;
  eliminado?: boolean;
  fechaCreado: Date;
  fechaActualizado?: Date;
  fechaEliminado?: Date;
};

export type RolesUsuario = Partial<Record<Roles, boolean>>;
export type SistemasUsuario = Partial<Record<Sistemas, boolean>>;

export type Direccion = {
  idUsuario?: string;
  calle: string;
  unidad: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
} & Base;

export type DataUsuario = {
  email: string;
  nombre: string;
  apellido: string;
  empresa?: string;
  displayName?: string;
  telefono?: string;
  idImpuesto?: string;
  pais: Paises;
  direccion?: Partial<Direccion>;
  lider?: boolean;
  roles: RolesUsuario;
  sistemas: SistemasUsuario;
  archivos?: string[];
} & Base;

export type DataCliente = Omit<
  DataUsuario,
  "displayName" | "lider" | "roles" | "sistemas" | "archivos"
>;

export type DataVendedor = Omit<DataCliente, "taxId">;

export type InfoArchivo = {
  name: string;
  contentType: string;
};

export type DataResponsable = Pick<
  DataUsuario,
  | "id"
  | "nombre"
  | "apellido"
  | "email"
  | "telefono"
  | "empresa"
  | "pais"
  | "idImpuesto"
>;

export type ItemOrden = {
  idItem: string;
  idOrden: string;
  fechaCreado: Date;
  fechaCompromiso?: Date;
  nombre: string;
  label: string;
  sku: string;
  cantidad: number;
  precio: number;
  estatus: EstatusPlanificacion;
  archivos: InfoArchivo[];
  [Roles.diseño]?: DataResponsable;
  [Roles.corte_1]?: DataResponsable;
  [Roles.corte_2]?: DataResponsable;
  [Roles.costura]?: DataResponsable;
};

export type OrdenCompra = {
  cotizacion: string;
  adelanto?: number;
  cliente: DataCliente;
  vendedor: DataVendedor;
} & Base;
