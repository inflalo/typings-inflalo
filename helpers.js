"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emulateDownload = exports.subCategoryFactory = void 0;
var enums_1 = require("./enums");
/**
 *
 * @param category category to get the subcategories
 * @returns subcategories for the given category
 */
var subCategoryFactory = function (category) {
    switch (category) {
        case enums_1.Categorias.diversion: {
            return [
                enums_1.SubCategorias.brinca_brinca,
                enums_1.SubCategorias.brinca_brinca_con_deslizador,
                enums_1.SubCategorias.deslizador,
                enums_1.SubCategorias.deportivos,
                enums_1.SubCategorias.obstaculos,
                enums_1.SubCategorias.acuatico,
                enums_1.SubCategorias.accesorios,
            ].map(function (sc) {
                return { label: sc, value: sc };
            });
        }
        case enums_1.Categorias.publicitarios: {
            return [
                enums_1.SubCategorias.igloo,
                enums_1.SubCategorias.toldo_plegable,
                enums_1.SubCategorias.bandera_de_viento,
                enums_1.SubCategorias.arco,
                enums_1.SubCategorias.tunel,
                enums_1.SubCategorias.totem,
                enums_1.SubCategorias.pantalla,
                enums_1.SubCategorias.sky_dancer,
                enums_1.SubCategorias.replica,
                enums_1.SubCategorias.disfraz,
                enums_1.SubCategorias.pelota,
                enums_1.SubCategorias.aplaudidor,
                enums_1.SubCategorias.zeppelin,
            ].map(function (sc) {
                return { label: sc, value: sc };
            });
        }
        case enums_1.Categorias.maquinas: {
            return [
                enums_1.SubCategorias.popcorn,
                enums_1.SubCategorias.cotton_candy,
                enums_1.SubCategorias.waffle,
                enums_1.SubCategorias.nacho,
                enums_1.SubCategorias.hot_dog,
                enums_1.SubCategorias.gourmet_popcorn,
                enums_1.SubCategorias.sno_kones,
                enums_1.SubCategorias.frozen,
                enums_1.SubCategorias.fryers,
            ].map(function (sc) {
                return { label: sc, value: sc };
            });
        }
        case enums_1.Categorias.consumibles: {
            return [
                enums_1.SubCategorias.popcorn,
                enums_1.SubCategorias.cotton_candy,
                enums_1.SubCategorias.sno_kones,
            ].map(function (sc) {
                return { label: sc, value: sc };
            });
        }
        default: {
            return [];
        }
    }
};
exports.subCategoryFactory = subCategoryFactory;
/**
 *
 * @param downloadUrl URL to download the file
 * @param filename Name of the file
 */
var emulateDownload = function (downloadUrl, filename) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
    };
    xhr.open("GET", downloadUrl);
    xhr.send();
};
exports.emulateDownload = emulateDownload;
