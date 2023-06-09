"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransaccion = exports.TipoDocumento = exports.PeriodosGarantia = exports.SubCategorias = exports.Categorias = exports.NivelResultado = exports.EstatusPlanificacion = exports.Roles = exports.Paises = exports.Sistemas = void 0;
var Sistemas;
(function (Sistemas) {
    Sistemas["control"] = "control";
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
var Categorias;
(function (Categorias) {
    Categorias["diversion"] = "diversion";
    Categorias["playsoft"] = "playsoft";
    Categorias["inflaplay"] = "inflaplay";
    Categorias["maquinas"] = "maquinas";
    Categorias["publicitarios"] = "publicitarios";
    Categorias["trampolines"] = "trampolines";
    Categorias["motores"] = "motores";
    Categorias["consumibles"] = "consumibles";
    Categorias["materia_prima"] = "materia_prima";
    Categorias["personalizado"] = "personalizado";
})(Categorias = exports.Categorias || (exports.Categorias = {}));
var SubCategorias;
(function (SubCategorias) {
    SubCategorias["brinca_brinca"] = "brinca_brinca";
    SubCategorias["brinca_brinca_con_deslizador"] = "brinca_brinca_con_deslizador";
    SubCategorias["deslizador"] = "deslizador";
    SubCategorias["deportivos"] = "deportivos";
    SubCategorias["obstaculos"] = "obstaculos";
    SubCategorias["acuatico"] = "acuatico";
    SubCategorias["accesorios"] = "accesorios";
    SubCategorias["igloo"] = "igloo";
    SubCategorias["toldo_plegable"] = "toldo_plegable";
    SubCategorias["bandera_de_viento"] = "bandera_de_viento";
    SubCategorias["arco"] = "arco";
    SubCategorias["tunel"] = "tunel";
    SubCategorias["totem"] = "totem";
    SubCategorias["pantalla"] = "pantalla";
    SubCategorias["sky_dancer"] = "sky_dancer";
    SubCategorias["replica"] = "replica";
    SubCategorias["disfraz"] = "disfraz";
    SubCategorias["pelota"] = "pelota";
    SubCategorias["aplaudidor"] = "aplaudidor";
    SubCategorias["zeppelin"] = "zeppelin";
    SubCategorias["popcorn"] = "popcorn";
    SubCategorias["cotton_candy"] = "cotton_candy";
    SubCategorias["waffle"] = "waffle";
    SubCategorias["nacho"] = "nacho";
    SubCategorias["hot_dog"] = "hot_dog";
    SubCategorias["gourmet_popcorn"] = "gourmet_popcorn";
    SubCategorias["sno_kones"] = "sno_kones";
    SubCategorias["frozen"] = "frozen";
    SubCategorias["fryers"] = "fryers";
})(SubCategorias = exports.SubCategorias || (exports.SubCategorias = {}));
var PeriodosGarantia;
(function (PeriodosGarantia) {
    PeriodosGarantia["seis_meses"] = "seis_meses";
    PeriodosGarantia["un_a\u00F1o"] = "un_a\u00F1o";
    PeriodosGarantia["dos_a\u00F1os"] = "dos_a\u00F1os";
})(PeriodosGarantia = exports.PeriodosGarantia || (exports.PeriodosGarantia = {}));
var TipoDocumento;
(function (TipoDocumento) {
    TipoDocumento["cotizacion"] = "cotizacion";
    TipoDocumento["factura"] = "factura";
    TipoDocumento["inventario"] = "inventario";
    TipoDocumento["certificado_garantia"] = "certificado_garantia";
})(TipoDocumento = exports.TipoDocumento || (exports.TipoDocumento = {}));
var TipoTransaccion;
(function (TipoTransaccion) {
    TipoTransaccion["factura"] = "factura";
    TipoTransaccion["debito"] = "debito";
    TipoTransaccion["avance_efectivo"] = "avance_efectivo";
    TipoTransaccion["pago"] = "pago";
    TipoTransaccion["credito"] = "credito";
    TipoTransaccion["reembolso"] = "reembolso";
})(TipoTransaccion = exports.TipoTransaccion || (exports.TipoTransaccion = {}));
