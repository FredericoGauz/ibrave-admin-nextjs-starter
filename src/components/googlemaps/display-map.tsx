import React, { useState } from 'react';
import {
    convertFromCoordsToGoogleMapsCoords,
    convertToGoogleMapsCoords,
} from '../../api/middleapi/middleapi';
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
                    center={
                        props.center ||
                        convertToGoogleMapsCoords([
                            -22.988583821091783,
                            -43.19312041324719,
                        ])
                    }
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
    filteredConcepts.forEach((c) => {
        if (c.geo && c.geo.circle)
            if (!c.geo.circle.coordinates) console.log(c);
    });
    const markers = filteredConcepts.map((concept: any) => ({
        id: 1,
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
            center={convertFromCoordsToGoogleMapsCoords(
                concepts[0].geo.circle.coordinates
            )}
        />
    );
};
