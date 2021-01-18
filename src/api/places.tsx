// import React, { useEffect, useState } from 'react';
// import Script from 'react-load-script';
// import Select from 'react-select';

// //https://opendata.camden.gov.uk/Maps/National-Statistics-Postcode-Lookup-UK/tr8t-gqz7
// export const AddressAutoComplete = (props: {
//     onLoadedAddress?: any;
//     default?: string;
// }) => {
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState(props.default || '');
//     const [selected, setSelected] = useState<
//         { value: string; label: string } | null | undefined
//     >();
//     const [autoCompletePredictions, setAutoCompletePredictions] = useState<
//         google.maps.places.AutocompletePrediction[]
//     >([]);
//     useEffect(() => {
//         if (loading) return;
//         if (search.length < 3) return;
//         getAutoComplete(search, setAutoCompletePredictions);
//         return () => {};
//     }, [loading, search]);
//     useEffect(() => {
//         if (!selected || selected === null) return;
//         geocode(selected.value);
//         return () => {};
//     }, [selected]);
//     useEffect(() => {
//         if (!props.default) return;
//         setSearch(props.default);
//         return () => {};
//     }, [props.default]);
//     function geocode(text: string): void {
//         const addressString = text;
//         const geocoder = new google.maps.Geocoder();
//         geocoder.geocode({ address: addressString }, (res) => {
//             // console.log("google geocoder: ", res);
//             const address = changeAddress(res[0].address_components);
//             if (props.onLoadedAddress)
//                 props.onLoadedAddress({
//                     ...address,
//                     address: res[0].formatted_address,
//                 });
//             getPlace(res[0] && res[0].place_id);
//         });
//     }

//     const key = 'AIzaSyCGZTW_vWRYKr8QIqdDQEjMnNf1DfkADKA';
//     if (loading)
//         return (
//             <Script
//                 url={`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`}
//                 onCreate={() => {}}
//                 onError={(error: any) => console.log(error)}
//                 onLoad={() => {
//                     setLoading(false);
//                 }}
//             />
//         );
//     const options =
//         autoCompletePredictions && autoCompletePredictions.length > 0
//             ? autoCompletePredictions.map((p) => {
//                   return { value: p.description, label: p.description };
//               })
//             : [];
//     return (
//         <React.Fragment>
//             <Select
//                 options={options}
//                 onInputChange={setSearch}
//                 onChange={setSelected}
//             />
//         </React.Fragment>
//     );
// };

// const changeAddress = (rawAddress: google.maps.GeocoderAddressComponent[]) => {
//     return getAddressObject(rawAddress);
// };

// /**
//  *
//  * Address Parsing Guide:
//  *
//  * Para cada pais deve-se aplicar regras específicas.
//  *
//  * Filtrar primeiro por País
//  * Depois aplicar regras específicas
//  */
// const rawAddressComponentTypes = {
//     feature: ['establishment', 'point_of_interest'],
//     number: ['street_number'],
//     postcode: ['postal_code'],
//     street: ['street_address', 'route'],
//     subCountry: ['administrative_area_level_1'],
//     ward: ['postal_town'],
//     region: [
//         'administrative_area_level_3',
//         'administrative_area_level_4',
//         'administrative_area_level_5',
//     ],
//     state: ['administrative_area_level_2'],
//     city: [
//         'locality',
//         'sublocality',
//         'sublocality_level_1',
//         'sublocality_level_2',
//         'sublocality_level_3',
//         'sublocality_level_4',
//     ],
//     country: ['country'],
// };
// function getAddressObject(
//     addressComponents: google.maps.GeocoderAddressComponent[],
// ) {
//     const addressComponentTypes = reverseAndExpand(rawAddressComponentTypes);

//     let address = {};

//     for (const component of addressComponents) {
//         const type = component.types[0];
//         if (Object.keys(addressComponentTypes).includes(type)) {
//             const key: string = addressComponentTypes[type];
//             //@ts-ignore
//             address[key] = component.long_name;
//         }
//     }
//     return address;
// }

// const reverseAndExpand = (obj: any) => {
//     let newObj: any = {};
//     for (const key of Object.keys(obj)) {
//         for (const v of obj[key]) {
//             newObj[v] = key;
//         }
//     }
//     return newObj;
// };
// const getAutoComplete = (search: string, onChange: any) => {
//     const sessionToken = new google.maps.places.AutocompleteSessionToken();
//     const displaySuggestions = function (
//         predictions: google.maps.places.AutocompletePrediction[],
//         status: google.maps.places.PlacesServiceStatus,
//     ) {
//         // console.log(predictions);
//         if (status != google.maps.places.PlacesServiceStatus.OK) {
//             console.log(status);
//             return;
//         }
//         onChange(predictions);

//         // predictions.forEach(function(prediction:google.maps.places.AutocompletePrediction) {
//         // console.log(prediction);
//         // var li = document.createElement('li');
//         // li.appendChild(document.createTextNode(prediction.description));
//         // document.getElementById('results')?.appendChild(li);
//         // });
//     };

//     var service = new google.maps.places.AutocompleteService();
//     service.getPlacePredictions(
//         { input: search, sessionToken: sessionToken },
//         displaySuggestions,
//     );
//     // service.getQueryPredictions({ input: search }, (p,s) => displaySuggestions(p,s));
// };

// const getPlace = (id: string) => {
//     const places = new google.maps.places.PlacesService(
//         document.createElement('div'),
//     );
//     places.getDetails({ placeId: id }, (res) => console.log(res));
// };
export {};
