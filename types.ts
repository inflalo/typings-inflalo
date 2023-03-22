import { Timestamp } from "firebase/firestore";
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
  fechaCreado: Timestamp;
  fechaActualizado?: Timestamp;
  fechaEliminado?: Timestamp;
};

export type RolesUsuario = Partial<Record<Roles, boolean>>;
export type SistemasUsuario = Partial<Record<Sistemas, boolean>>;

export type Direccion = {
  idUsuario?: string;
  pais: Paises;
  estado: string;
  ciudad: string;
  calle: string;
  unidad: string; // edificio, apartamento, casa, etc.
  codigoPostal: string;
} & Base;

export type Sucursal = {
  nombre: string;
  direccion: Partial<Direccion>;
} & Base;

export type Almacen = {
  nombre: string;
  pais: string;
} & Base;

export type Usuario = {
  nombre: string;
  apellido: string;
  displayName?: string;
  pais: Paises;
  empresa?: string;
  nif?: string; // Numero Identificacion Fiscal: Cedula, DNI, RIF, NIT, ITIN, SSN, EIN etc.
  email: string;
  telefono?: string;
  archivos?: string[];
  lider?: boolean;
  roles: RolesUsuario;
  sistemas: SistemasUsuario;
} & Base;

export type DatosUsuario = Pick<
  Usuario,
  | "id"
  | "nombre"
  | "apellido"
  | "email"
  | "telefono"
  | "empresa"
  | "pais"
  | "nif"
>;

export type DatosResponsable = Omit<DatosUsuario, "empresa" | "nif">;

export type InfoArchivo = {
  name: string;
  contentType: string;
};

export type ItemOrden = {
  idItem: string;
  idOrden: string;
  fechaCompromiso?: Timestamp;
  nombre: string;
  label: string;
  sku: string;
  cantidad: number;
  precio: number;
  estatus: EstatusPlanificacion;
  archivos: InfoArchivo[];
  [Roles.diseño]?: DatosResponsable;
  [Roles.corte_1]?: DatosResponsable;
  [Roles.corte_2]?: DatosResponsable;
  [Roles.costura]?: DatosResponsable;
} & Base;

export type OrdenCompra = {
  presupuesto: string;
  abono?: number;
  cliente: DatosUsuario;
  vendedor: DatosResponsable;
} & Base;
