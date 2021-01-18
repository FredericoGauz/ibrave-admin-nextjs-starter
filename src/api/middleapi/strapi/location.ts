import { IUKAddress } from '../uk-address';
import { IStrapiAddress } from './address';
import { IStrapiAlternativeName } from './alternative-name';
import { IStrapiContact } from './contact';
import { IStrapiIBraveImage } from './i-brave-image';
import { IStrapiLocationTags } from './location-tags';

/**
 * Model definition for Location
 */
export interface IStrapiLocation {
    id: string;
    name: string;
    description?: string;
    images: any[];
    uid: string;
    source?: string;
    location_tags: IStrapiLocationTags[];
    city?: string;
    geo?: any[];
    i_brave_images: IStrapiIBraveImage[];
    address?: IStrapiAddress;
    alternativeNames: IStrapiAlternativeName[];
    contact?: IStrapiContact;
    uk_address?: IUKAddress;
}
