import { IStrapiIBraveImage } from './i-brave-image';
import { IStrapiLocation } from './location';

/**
 * Model definition for LocationTags
 */
export interface IStrapiLocationTags {
    id: string;
    name: string;
    locations: IStrapiLocation[];
    i_brave_images: IStrapiIBraveImage[];
    uid: string;
    description?: string;
}
