/**
 * Model definition for dateType
 */
export interface IStrapiDateType {
    id: string;
    date: Date;
    nullDay?: boolean;
    nullMonth?: boolean;
    nullYear?: boolean;
}
