import { Timestamp } from "firebase/firestore";
import {
  Paises,
  Roles,
  EstatusPlanificacion,
  Sistemas,
  NivelResultado,
  Categorias,
  SubCategorias,
  PeriodosGarantia,
} from "./enums";

export type ResultadoCallable = {
  nivel: NivelResultado;
  mensaje: string;
  data?: any;
};

export type Base = {
  id: string;
  activo?: boolean;
  eliminado?: boolean;
  fechaCreado: Timestamp;
  fechaActualizado?: Timestamp;
  fechaEliminado?: Timestamp;
};

export type RolesUsuario = Partial<Record<Roles, boolean>>;
export type SistemasUsuario = Partial<Record<Sistemas, boolean>>;

export type InfoArchivo = {
  name: string;
  contentType: string;
};

export type Direccion = {
  idUsuario?: string;
  idSucursal?: string;
  idAlmacen?: string;
  pais: Paises;
  estado: string;
  ciudad: string;
  calle: string;
  unidad: string; // edificio, apartamento, casa, etc.
  codigoPostal: string;
} & Base;

export type Sucursal = {
  nombre: string;
  pais: Paises;
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
  archivos?: InfoArchivo[];
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
> & { idDireccion?: string };

export type DatosResponsable = Omit<
  DatosUsuario,
  "empresa" | "nif" | "idDireccion"
>;

export type DimensionesProducto = {
  largo: number;
  ancho: number;
  alto: number;
  peso: number;
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

export type PaisProducto = Partial<Record<Paises, boolean>>;

export type StockProducto = {
  id?: string;
  idProducto: string;
  idAlmacen?: string;
  pais: Paises;
  activo: boolean;
  disponible: number;
  reservado?: number;
  transito?: number;
  rma?: number;
  fechaActualizado?: Timestamp;
};

export type PrecioProducto = {
  id?: string;
  idProducto: string;
  pais: Paises;
  precioLista: number;
  precioOferta?: number;
  enOferta?: boolean;
  precioRetail?: number;
  precioOfertaRetail?: number;
  enOfertaRetail?: boolean;
  fechaActualizado?: Timestamp;
};

export type Producto = {
  nombre: string;
  modelo: string;
  slug: string;
  sku: string;
  categoria: Categorias;
  subCategoria?: SubCategorias;
  descripcion: string;
  dimensiones: Partial<DimensionesProducto>;
  costo: number;
  motor: boolean;
  motores?: string[];
  garantia: boolean;
  periodoGarantia?: PeriodosGarantia;
  habilitado: PaisProducto;
  portada?: string;
  galeria?: string[];
} & Base;
