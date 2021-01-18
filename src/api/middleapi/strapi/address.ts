/**
 * Model definition for address
 */
export interface IStrapiAddress {
    id: string;
    street?: string;
    city?: string;
    postcode?: string;
    address?: string;
    state?: string;
    neighbourhood?: string;
    number?: number;
    country?: string;
    subCountry?: string;
}
