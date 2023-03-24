"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paisProductoDefaultState = exports.sistemasDefaultState = exports.rolesDefaultState = exports.emailValidationPattern = void 0;
exports.emailValidationPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
exports.rolesDefaultState = {
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
exports.sistemasDefaultState = {
    control: false,
    pedidos: false,
    planificacion: false,
    web: true,
};
exports.paisProductoDefaultState = {
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
