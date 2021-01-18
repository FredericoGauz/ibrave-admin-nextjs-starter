import { IStrapiDateType } from './date-type';

/**
 * Model definition for alternativeName
 */
export interface IStrapiAlternativeName {
    id: string;
    name: string;
    description?: string;
    date?: IStrapiDateType;
}
