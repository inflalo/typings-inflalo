"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NivelResultado = exports.EstatusPlanificacion = exports.Roles = exports.Paises = exports.Sistemas = void 0;
var Sistemas;
(function (Sistemas) {
    Sistemas["pedidos"] = "pedidos";
    Sistemas["planificacion"] = "planificacion";
    Sistemas["web"] = "web";
})(Sistemas = exports.Sistemas || (exports.Sistemas = {}));
var Paises;
(function (Paises) {
    Paises["bolivia"] = "bolivia";
    Paises["chile"] = "chile";
    Paises["china"] = "china";
    Paises["costa_rica"] = "costa_rica";
    Paises["ecuador"] = "ecuador";
    Paises["el_salvador"] = "el_salvador";
    Paises["espa\u00F1a"] = "espa\u00F1a";
    Paises["estados_unidos"] = "estados_unidos";
    Paises["guatemala"] = "guatemala";
    Paises["honduras"] = "honduras";
    Paises["panama"] = "panama";
    Paises["peru"] = "peru";
    Paises["republica_dominicana"] = "republica_dominicana";
    Paises["venezuela"] = "venezuela";
})(Paises = exports.Paises || (exports.Paises = {}));
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["manager"] = "manager";
    Roles["distribuidor"] = "distribuidor";
    Roles["ventas"] = "ventas";
    Roles["dise\u00F1o"] = "dise\u00F1o";
    Roles["impresion"] = "impresion";
    Roles["produccion"] = "produccion";
    Roles["costura"] = "costura";
    Roles["corte_1"] = "corte_1";
    Roles["corte_2"] = "corte_2";
    Roles["calidad"] = "calidad";
    Roles["almacen"] = "almacen";
    Roles["logistica"] = "logistica";
    Roles["marketing"] = "marketing";
    Roles["cliente"] = "cliente";
})(Roles = exports.Roles || (exports.Roles = {}));
var EstatusPlanificacion;
(function (EstatusPlanificacion) {
    EstatusPlanificacion["aprobado"] = "aprobado";
    EstatusPlanificacion["faltan_editables"] = "faltan_editables";
    EstatusPlanificacion["dise\u00F1ando"] = "dise\u00F1ando";
    EstatusPlanificacion["listo_para_imprimir"] = "listo_para_imprimir";
    EstatusPlanificacion["imprimiendo"] = "imprimiendo";
    EstatusPlanificacion["impreso"] = "impreso";
    EstatusPlanificacion["producto_por_china"] = "producto_por_china";
    EstatusPlanificacion["espera_de_material"] = "espera_de_material";
    EstatusPlanificacion["cortando"] = "cortando";
    EstatusPlanificacion["cosiendo"] = "cosiendo";
    EstatusPlanificacion["producto_terminado"] = "producto_terminado";
    EstatusPlanificacion["control_de_calidad"] = "control_de_calidad";
    EstatusPlanificacion["rechazado"] = "rechazado";
    EstatusPlanificacion["almacen"] = "almacen";
    EstatusPlanificacion["entregado"] = "entregado";
})(EstatusPlanificacion = exports.EstatusPlanificacion || (exports.EstatusPlanificacion = {}));
var NivelResultado;
(function (NivelResultado) {
    NivelResultado["default"] = "default";
    NivelResultado["error"] = "error";
    NivelResultado["info"] = "info";
    NivelResultado["success"] = "success";
    NivelResultado["warning"] = "warning";
})(NivelResultado = exports.NivelResultado || (exports.NivelResultado = {}));
