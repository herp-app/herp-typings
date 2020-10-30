/**
 * Interface for Translations
 */
export default interface ITranslations {
    [key: string]: string;
}
export interface ITranslationConfiguration {
    type: "translation";
    strings: ITranslations;
}
