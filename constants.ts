import { PaisProducto, RolesUsuario, SistemasUsuario } from "./types";

export const emailValidationPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  bolivia: true,
  chile: true,
  china: true,
  costa_rica: true,
  ecuador: true,
  el_salvador: true,
  españa: true,
  estados_unidos: true,
  guatemala: true,
  honduras: true,
  panama: true,
  peru: true,
  republica_dominicana: true,
  venezuela: true,
};
