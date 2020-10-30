/**
 * Interface for Translations
 */
export interface ITranslations {
    [key: string]: string;
}
export interface ITranslationConfiguration {
    type: "translation";
    strings: ITranslations;
}
