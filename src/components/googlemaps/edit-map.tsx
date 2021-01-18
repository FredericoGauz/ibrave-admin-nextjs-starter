import React, { useState } from 'react';
import { convertToGoogleMapsCoords } from '../../api/middleapi/middleapi';
import { GoogleMapsWithDrawingTools } from './google-map';
import { IMarker, IGoogleMapsCoords } from './types';

export const EditMap = (props: {
    markers?: IMarker[];
    center?: IGoogleMapsCoords;
    onMarkerDragEnd: any;
    show?: boolean;
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
                    ) => props.onMarkerDragEnd(index, coords)}
                    draggable={true}
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
