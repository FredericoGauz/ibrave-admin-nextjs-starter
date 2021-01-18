import { IStrapiCoordinatesAndAltitude } from './coordinates-and-altitude';

/**
 * Model definition for UKAddress
 */
export interface IStrapiUKAddress {
    id: string;
    country?: 'England' | 'Scotland' | 'Wales' | 'NorthernIreland';
    county?: string;
    number?: string;
    street?: string;
    postcode?: string;
    localAuthority?: string;
    ward?: string;
    lsoa?: string;
    coordinates: IStrapiCoordinatesAndAltitude[];
    burgh?: string;
    parish?: string;
    address?: string;
}
