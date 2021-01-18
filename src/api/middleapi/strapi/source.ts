/**
 * Model definition for source
 */
export interface IStrapiSource {
    id: string;
    link: string;
    description?: string;
    itemAttribute?: 'general' | 'name' | 'description' | 'image';
}
