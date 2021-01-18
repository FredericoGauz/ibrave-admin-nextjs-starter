// import axios from 'axios';
// import 'regenerator-runtime/runtime';
// import produce from 'immer';
// import { ILocation, ICoordsWithId } from './middleapi/types';
// import { IStrapiLocation } from './middleapi/strapi';

// const baseUrl = 'https://ibrave.gauzstudio.com';
// const token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA5NzM2MzkzLCJleHAiOjE2MTIzMjgzOTN9.N7qaP99eVaRsFkcZYROEK3_Rq6SovFw4ZdlSxMRHU10';

// interface ICreateLocationForm extends ILocation {
//     files: [];
// }

// const uploadImage = async (
//     image: any,
//     ref?: string,
//     refId?: string,
//     field?: string
// ) => {
//     // console.log("upload image: ", image);
//     const formData = new FormData();
//     formData.append('files', image);

//     //attach to location
//     if (ref) {
//         if (!refId || !field) throw new Error('Missing refId or field');
//         formData.append('ref', ref); // optional, you need it if you want to link the image to an entry
//         formData.append('refId', refId); // optional, you need it if you want to link the image to an entry
//         formData.append('field', field); // optional, you need it if you want to link the image to an entry
//     }

//     axios
//         .post(`${baseUrl}/upload`, formData, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//             },
//         })
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((err) => console.error(err));
// };

// export const postLocation = async (values: ICreateLocationForm) => {
//     let newValues: any = Object.assign({}, values);
//     newValues.geo = [];
//     delete newValues['files'];
//     //https://stackoverflow.com/questions/34698905/how-can-i-clone-a-javascript-object-except-for-one-key
//     const preLocation: IStrapiLocation = newValues;
//     let geo: any[] = [];
//     if (values.geo.circle) {
//         geo.push({
//             __component: 'geo.circle-coordinates',
//             coordinates: {
//                 latitude: values.geo.circle.coordinates.latitude,
//                 longitude: values.geo.circle.coordinates.longitude,
//                 altitude: values.geo.circle.coordinates.altitude,
//             },
//             radius: values.geo.circle.radius,
//         });
//     }
//     if (values.geo.polygon && values.geo.polygon.coordinates.length > 0) {
//         geo.push({
//             __component: 'geo.polygon-coordinates',
//             polygonCoordinates: values.geo.polygon.coordinates.map(
//                 (coord: ICoordsWithId) => {
//                     return {
//                         latitude: coord.latitude,
//                         longitude: coord.longitude,
//                         altitude: coord.altitude,
//                     };
//                 }
//             ),
//         });
//     }
//     const location = produce<Partial<IStrapiLocation>>(
//         preLocation,
//         (draftState) => {
//             draftState.geo = geo;
//         }
//     );
//     try {
//         let response;
//         if (location.id) {
//             response = await axios.put(
//                 `${baseUrl}/locations/${location.id}`,
//                 location,
//                 {
//                     headers: {
//                         Authorization: 'Bearer ' + token,
//                     },
//                 }
//             );
//         } else {
//             response = await axios.post(`${baseUrl}/locations/`, location, {
//                 headers: {
//                     Authorization: 'Bearer ' + token,
//                 },
//             });
//         }
//         console.log(response.data.id);
//         const newId = response.data.id;
//         if (values.files.length > 0) {
//             for (const image of values.files) {
//                 uploadImage(image, 'location', newId.toString(), 'images');
//             }
//         }
//     } catch (error) {
//         console.log('Error: ', error);
//         alert(
//             'Could not post your location. Are you trying to edit this entry instead?'
//         );
//     }
// };
export {};
