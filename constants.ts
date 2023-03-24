import { PaisProducto, RolesUsuario, SistemasUsuario } from "./types";

export const rolesDefaultState: RolesUsuario = {
  admin: false,
  manager: false,
  distribuidor: false,
  ventas: false,
  diseño: false,
  impresion: false,
  produccion: false,
  costura: false,
  corte_1: false,
  corte_2: false,
  calidad: false,
  almacen: false,
  logistica: false,
  marketing: false,
  cliente: false,
};

export const sistemasDefaultState: SistemasUsuario = {
  control: false,
  pedidos: false,
  planificacion: false,
  web: true,
};

export const paisProductoDefaultState: PaisProducto = {
  bolivia: false,
  chile: false,
  china: false,
  costa_rica: false,
  ecuador: false,
  el_salvador: false,
  españa: false,
  estados_unidos: false,
  guatemala: false,
  honduras: false,
  panama: false,
  peru: false,
  republica_dominicana: false,
  venezuela: false,
};
