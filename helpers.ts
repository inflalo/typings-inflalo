import { Categorias, SubCategorias } from "./enums";

export const subCategoryFactory = (
  category: Categorias
): { label: SubCategorias; value: SubCategorias }[] => {
  switch (category) {
    case Categorias.diversion: {
      return [
        SubCategorias.brinca_brinca,
        SubCategorias.brinca_brinca_con_deslizador,
        SubCategorias.deslizador,
        SubCategorias.deportivos,
        SubCategorias.obstaculos,
        SubCategorias.acuatico,
        SubCategorias.accesorios,
      ].map((sc) => {
        return { label: sc, value: sc };
      });
    }
    case Categorias.publicitarios: {
      return [
        SubCategorias.igloo,
        SubCategorias.toldo_plegable,
        SubCategorias.bandera_de_viento,
        SubCategorias.arco,
        SubCategorias.tunel,
        SubCategorias.totem,
        SubCategorias.pantalla,
        SubCategorias.sky_dancer,
        SubCategorias.replica,
        SubCategorias.disfraz,
        SubCategorias.pelota,
        SubCategorias.aplaudidor,
        SubCategorias.zeppelin,
      ].map((sc) => {
        return { label: sc, value: sc };
      });
    }
    case Categorias.maquinas: {
      return [
        SubCategorias.popcorn,
        SubCategorias.cotton_candy,
        SubCategorias.waffle,
        SubCategorias.nacho,
        SubCategorias.hot_dog,
        SubCategorias.gourmet_popcorn,
        SubCategorias.sno_kones,
        SubCategorias.frozen,
        SubCategorias.fryers,
      ].map((sc) => {
        return { label: sc, value: sc };
      });
    }
    case Categorias.consumibles: {
      return [
        SubCategorias.popcorn,
        SubCategorias.cotton_candy,
        SubCategorias.sno_kones,
      ].map((sc) => {
        return { label: sc, value: sc };
      });
    }
    default: {
      return [];
    }
  }
};
