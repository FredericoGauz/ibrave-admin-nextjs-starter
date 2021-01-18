import Axios, { AxiosResponse } from 'axios';
import { IGoogleMapsCoords } from './types';
import { IStrapiLocation, IStrapiCoordinatesAndAltitude } from './strapi';
import { ILocation, ITag, IGeo, IUKLocation, ICoordsWithId } from './types';
import { IUKAddress } from './uk-address';

/* API For connecting stripe (or any other system) with Ibrave */
const baseUrl = 'https://ibrave.gauzstudio.com';
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA5NzM2MzkzLCJleHAiOjE2MTIzMjgzOTN9.N7qaP99eVaRsFkcZYROEK3_Rq6SovFw4ZdlSxMRHU10';

export const getLocations = async (filters?: string): Promise<ILocation[]> => {
    let result: AxiosResponse = await Axios.get(
        `${baseUrl}/locations${filters ? '?' + filters : ''}`,
        {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    );
    return new Promise(async (resolve: any, rejection: any) => {
        if (!result) rejection('Error getting result');
        const strapiLocations: IStrapiLocation[] = result.data;
        if (!strapiLocations) rejection('Error getting result from json');
        if (!strapiLocations[0]) rejection('No results.');
        const locations = strapiLocations.map((loc) =>
            convertRawLocationToLocation(loc)
        );
        if (locations) resolve(locations);
        else {
            rejection(
                'Invalid location information',
                strapiLocations,
                locations
            );
        }
    });
};

export const getLocationByUid = async (uid: string): Promise<ILocation> => {
    const result: AxiosResponse = await Axios.get(
        `${baseUrl}/locations?uid=${uid}`,
        {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    );
    return new Promise(async (resolve: any, rejection: any) => {
        if (!result) return rejection('Error getting result');
        const strapiLocation: IStrapiLocation[] = result.data;
        if (!strapiLocation) return rejection('Error getting result from json');
        if (strapiLocation[0] === undefined) return rejection('No results.');
        const location = convertRawLocationToLocation(strapiLocation[0]);
        if (location) return resolve(location);
        else {
            return rejection(
                'Invalid location information',
                strapiLocation,
                location
            );
        }
    });
};

/** Others */
export const convertRawLocationToLocation = (rawLocation: IStrapiLocation) => {
    const rawGeoCircle =
        rawLocation.geo &&
        rawLocation.geo.find(
            (component: any) =>
                component.__component === 'geo.circle-coordinates'
        )
            ? rawLocation.geo.find(
                  (component: any) =>
                      component.__component === 'geo.circle-coordinates'
              )
            : undefined;
    const rawGeoPolygon =
        rawLocation.geo &&
        rawLocation.geo.find(
            (component: any) =>
                component.__component === 'geo.polygon-coordinates'
        )
            ? rawLocation.geo.find(
                  (component: any) =>
                      component.__component === 'geo.polygon-coordinates'
              )
            : undefined;
    const geoCircle =
        rawGeoCircle && rawGeoCircle.coordinates
            ? {
                  coordinates: {
                      id: rawGeoCircle.id,
                      latitude: rawGeoCircle.coordinates.latitude,
                      longitude: rawGeoCircle.coordinates.longitude,
                      altitude: rawGeoCircle.coordinates.altitude || 0,
                  },
                  radius: rawGeoCircle.radius,
              }
            : undefined;

    const geoPolygon =
        rawGeoPolygon && rawGeoPolygon.polygonCoordinates
            ? {
                  coordinates: rawGeoPolygon.polygonCoordinates.map(
                      (coords: IStrapiCoordinatesAndAltitude) => {
                          return {
                              id: rawGeoPolygon.id,
                              latitude: coords.latitude,
                              longitude: coords.longitude,
                              altitude: coords.altitude || 0,
                          };
                      }
                  ),
              }
            : undefined;
    const locationWithoutGeo: Omit<ILocation, 'geo'> = {
        id: rawLocation.id,
        name: rawLocation.name,
        description: rawLocation.description,
        image: rawLocation.images[0]?.name
            ? `https://ibrave.gauzstudio.com${rawLocation.images[0]?.url}`
            : '',
        images: rawLocation.images,
        city: rawLocation.city,
        tags: (rawLocation.location_tags as unknown) as ITag[],
        uid: rawLocation.uid,
        contact: {},
        address: rawLocation.address
            ? {
                  street: rawLocation.address.street,
                  postcode: rawLocation.address.postcode,
                  city: rawLocation.address.city,
                  address: rawLocation.address.address,
                  neighbourhood: rawLocation.address.neighbourhood,
                  state: rawLocation.address.state,
              }
            : {},
    };
    const geo: IGeo = {
        circle: geoCircle ?? undefined,
        polygon: geoPolygon ?? undefined,
    };
    const location = { ...locationWithoutGeo, geo };
    return location;
};

export const isUKLocation = (location: ILocation): location is IUKLocation => {
    return (location.address as IUKAddress).ward !== undefined;
};
export const isUKAddress = (
    address: ILocation['address']
): address is IUKAddress => {
    return (address as IUKAddress).ward !== undefined;
};

export const convertToGoogleMapsCoords = (coords: [number, number]) => {
    const googleMapsCoords: IGoogleMapsCoords = {
        lat: coords[0],
        lng: coords[1],
    };
    return googleMapsCoords;
};

export const convertFromCoordsToGoogleMapsCoords = (
    coords: ICoordsWithId
): IGoogleMapsCoords => {
    return {
        lat: coords.latitude,
        lng: coords.longitude,
    };
};

export const convertFromGoogleMapsCoordsToCoords = (
    coords: IGoogleMapsCoords
): Omit<ICoordsWithId, 'altitude'> => {
    return {
        latitude: coords.lat,
        longitude: coords.lng,
    };
};

export const convertRawTagToTag = (rawTag: any) => {
    const tag: ITag = {
        name: rawTag.name,
        description: rawTag.description,
        uid: rawTag.uid,
        locations: rawTag.locations.map((loc: any) => {
            //strapi does not provide the tags property
            loc.location_tags = [];
            return convertRawLocationToLocation(loc);
        }),
    };
    return tag;
};
