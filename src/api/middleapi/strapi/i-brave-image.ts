import { IStrapiDateType } from './date-type';
import { IStrapiLocation } from './location';
import { IStrapiLocationTags } from './location-tags';
import { IStrapiSource } from './source';

/**
 * Model definition for IBraveImage
 */
export interface IStrapiIBraveImage {
    id: string;
    name?: string;
    image: any;
    locations: IStrapiLocation[];
    date?: IStrapiDateType;
    location_tags: IStrapiLocationTags[];
    descriptionImage?: string;
    sources: IStrapiSource[];
}
