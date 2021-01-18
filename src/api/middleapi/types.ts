import { IStrapiAddress } from './strapi';
import { IUKAddress } from './uk-address';

export interface ICoords {
    latitude: number;
    longitude: number;
    altitude: number;
}
export interface ICoordsWithId extends ICoords {
    id?: number;
}
export interface ICircle {
    coordinates: ICoordsWithId;
    radius: number;
}
export interface IGeo {
    circle?: ICircle;
    polygon?: {
        coordinates: ICoordsWithId[];
    };
}

export interface IAddress extends Omit<IStrapiAddress, 'id'> {
    street?: string;
    postcode?: string;
    address?: string;
    neighbourhood?: string;
    state?: string;
    country?: string;
}
export interface ILocation {
    id?: string; //server

    name: string;
    image: string;
    images: any[]; //TODO
    city?: string;
    description?: string;
    source?: string;
    tags: ITag[];
    uid: string;
    contact: {
        website?: string;
    };
    address: IAddress | IUKAddress;
    geo: IGeo;

    alternativeNames?: { name: string; description?: string }[];
}
export interface IUKLocation extends ILocation {
    address: IUKAddress;
}

export interface ITag {
    name: string;
    description?: string;
    uid?: string;
    locations: ILocation[];
}

export interface IGoogleMapsCoords {
    lat: number;
    lng: number;
}
