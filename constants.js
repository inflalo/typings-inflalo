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
