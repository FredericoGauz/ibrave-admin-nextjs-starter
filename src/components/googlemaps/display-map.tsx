import React, { useState } from 'react';
import { convertFromCoordsToGoogleMapsCoords } from '../../api/middleapi/middleapi';
import { GoogleMapsWithDrawingTools } from './google-map';
import { IMarker, IGoogleMapsCoords } from './types';

export const DisplayMap = (props: {
    markers?: IMarker[];
    center?: IGoogleMapsCoords;
    show?: boolean;
    onMarkerDragEnd?: any;
}) => {
    const [showMap, setShowMap] = useState(props.show || false);

    if (showMap) {
        return (
            <React.Fragment>
                <GoogleMapsWithDrawingTools
                    markers={props.markers || []}
                    // center={props.center ? props.center : { lat: 0, lng: 0 }}
                    onMarkerDragEnd={(
                        index: number,
                        coords: IGoogleMapsCoords
                    ) => {
                        if (!props.onMarkerDragEnd) return;
                        props.onMarkerDragEnd(index, coords);
                    }}
                />
                <p
                    className="text-teal-600 cursor-pointer hover:text-teal-800"
                    onClick={() => setShowMap(false)}
                >
                    -<small> hide map</small>
                </p>
            </React.Fragment>
        );
    }

    return (
        <p
            className="text-teal-600 cursor-pointer hover:text-teal-800"
            onClick={() => setShowMap(true)}
        >
            +<small> show map</small>
        </p>
    );
};

export const LocationMap = ({ concepts }: { concepts: any[] }) => {
    const filteredConcepts = concepts.filter(
        (c) => c.geo && c.geo.circle !== undefined
    );
    const markers = filteredConcepts.map((concept: any) => ({
        id: concept.uid,
        link: `/location?id=${concept.uid}`,
        name: concept.name,
        description: concept.description?.slice(0, 40),
        image: concept.image,
        coords: convertFromCoordsToGoogleMapsCoords(
            concept.geo.circle.coordinates
        ),
    }));
    return (
        <DisplayMap
            markers={markers}
            // center={
            //     markers && markers[0]
            //         ? markers[0].coords
            //         : convertToGoogleMapsCoords([
            //               55.86170798757062,
            //               -4.2555425291118425,
            //           ])
            // }
        />
    );
};
