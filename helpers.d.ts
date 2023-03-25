import { Categorias, SubCategorias } from "./enums";
/**
 *
 * @param category category to get the subcategories
 * @returns subcategories for the given category
 */
export declare const subCategoryFactory: (category: Categorias) => {
    label: SubCategorias;
    value: SubCategorias;
}[];
/**
 *
 * @param downloadUrl URL to download the file
 * @param filename Name of the file
 */
export declare const emulateDownload: (downloadUrl: string, filename: string) => void;
