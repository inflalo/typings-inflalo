export enum Sistemas {
  control = "control",
  pedidos = "pedidos",
  planificacion = "planificacion",
  web = "web",
}

export enum Paises {
  bolivia = "bolivia",
  chile = "chile",
  china = "china",
  costa_rica = "costa_rica",
  ecuador = "ecuador",
  el_salvador = "el_salvador",
  españa = "españa",
  estados_unidos = "estados_unidos",
  guatemala = "guatemala",
  honduras = "honduras",
  panama = "panama",
  peru = "peru",
  republica_dominicana = "republica_dominicana",
  venezuela = "venezuela",
}

export enum Roles {
  admin = "admin",
  manager = "manager",
  distribuidor = "distribuidor",
  ventas = "ventas",
  diseño = "diseño",
  impresion = "impresion",
  produccion = "produccion",
  costura = "costura",
  corte_1 = "corte_1",
  corte_2 = "corte_2",
  calidad = "calidad",
  almacen = "almacen",
  logistica = "logistica",
  marketing = "marketing",
  cliente = "cliente",
}

export enum EstatusPlanificacion {
  aprobado = "aprobado",
  faltan_editables = "faltan_editables",
  diseñando = "diseñando",
  listo_para_imprimir = "listo_para_imprimir",
  imprimiendo = "imprimiendo",
  impreso = "impreso",
  producto_por_china = "producto_por_china",
  espera_de_material = "espera_de_material",
  cortando = "cortando",
  cosiendo = "cosiendo",
  producto_terminado = "producto_terminado",
  control_de_calidad = "control_de_calidad",
  rechazado = "rechazado",
  almacen = "almacen",
  entregado = "entregado",
}

export enum NivelResultado {
  default = "default",
  error = "error",
  info = "info",
  success = "success",
  warning = "warning",
}

export enum Categorias {
  diversion = "diversion",
  playsoft = "playsoft",
  inflaplay = "inflaplay",
  maquinas = "maquinas",
  publicitarios = "publicitarios",
  trampolines = "trampolines",
  motores = "motores",
  consumibles = "consumibles",
  materia_prima = "materia_prima",
  personalizado = "personalizado",
}

export enum SubCategorias {
  brinca_brinca = "brinca_brinca",
  brinca_brinca_con_deslizador = "brinca_brinca_con_deslizador",
  deslizador = "deslizador",
  deportivos = "deportivos",
  obstaculos = "obstaculos",
  acuatico = "acuatico",
  accesorios = "accesorios",
  igloo = "igloo",
  toldo_plegable = "toldo_plegable",
  bandera_de_viento = "bandera_de_viento",
  arco = "arco",
  tunel = "tunel",
  totem = "totem",
  pantalla = "pantalla",
  sky_dancer = "sky_dancer",
  replica = "replica",
  disfraz = "disfraz",
  pelota = "pelota",
  aplaudidor = "aplaudidor",
  zeppelin = "zeppelin",
  popcorn = "popcorn",
  cotton_candy = "cotton_candy",
  waffle = "waffle",
  nacho = "nacho",
  hot_dog = "hot_dog",
  gourmet_popcorn = "gourmet_popcorn",
  sno_kones = "sno_kones",
  frozen = "frozen",
  fryers = "fryers",
}

export enum PeriodosGarantia {
  seis_meses = "seis_meses",
  un_año = "un_año",
  dos_años = "dos_años",
}

export enum TipoDocumento {
  cotizacion = "cotizacion",
  factura = "factura",
  inventario = "inventario",
  certificado_garantia = "certificado_garantia",
}

export enum TipoTransaccion {
  factura = "factura",
  debito = "debito",
  avance_efectivo = "avance_efectivo",
  pago = "pago",
  credito = "credito",
  reembolso = "reembolso",
}
