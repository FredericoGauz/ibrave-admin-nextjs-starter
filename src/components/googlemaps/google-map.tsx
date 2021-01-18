import React, { useState } from 'react';
import {
    DrawingManager,
    GoogleMap,
    InfoWindow,
    LoadScript,
    Marker,
} from '@react-google-maps/api';
import Link from 'next/link';
import {
    IGoogleMapsCoords,
    IGoogleMapsWithDrawindTools,
    IMarker,
} from './types';
import parse from 'html-react-parser';

const containerStyle = {
    width: '800px',
    height: '400px',
};

const center: IGoogleMapsCoords = {
    lat: -3.745,
    lng: -38.523,
};
const libraries = ['drawing'];

export const Markers = (props: {
    markers: IMarker[];
    onMarkerDragEnd: any;
    draggable?: boolean;
}) => {
    const [infoWindows, setinfoWindows] = useState<number[]>([]);
    const openInfoWindow = (id: number, onlyOneOpen = false) => {
        if (onlyOneOpen) {
            setinfoWindows([id]);
            return;
        }
        setinfoWindows(
            infoWindows.includes(id)
                ? infoWindows.filter((w) => w !== id)
                : [...infoWindows, id]
        );
    };
    const closeInfoWindow = (id: number) => {
        setinfoWindows(infoWindows.filter((w: number) => w !== id));
    };

    return (
        <React.Fragment>
            {props.markers.map((marker, index) => {
                const showInfoWindow = infoWindows.includes(marker.id);
                return (
                    <React.Fragment key={index}>
                        <MarkerComponent
                            marker={marker}
                            showInfoWindow={showInfoWindow}
                            openInfoWindow={(id: number) => openInfoWindow(id)}
                            closeInfoWindow={(id: number) =>
                                closeInfoWindow(id)
                            }
                            onMarkerDragEnd={(coords: IGoogleMapsCoords) => {
                                props.onMarkerDragEnd(index, coords);
                            }}
                            draggable={props.draggable}
                        />
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};
export const MarkerComponent = (props: {
    marker: IMarker;
    showInfoWindow: boolean;
    openInfoWindow: any;
    closeInfoWindow: any;
    onMarkerDragEnd: any;
    draggable?: boolean;
}) => {
    const content = (
        <React.Fragment>
            <Link href={props.marker.link || ''}>
                <h5 className="mb-3 text-sm font-semibold">
                    {props.marker.name}
                </h5>
            </Link>
            {props.marker.image && (
                <img
                    alt={`marker for ${props.marker.name}`}
                    src={props.marker.image}
                    className="object-cover w-full h-16 mb-3 rounded-sm"
                />
            )}
            {props.marker.description && (
                <div className="mt-2">{parse(props.marker.description)}</div>
            )}
        </React.Fragment>
    );
    const onMarkerDragEnd = (m: any) => {
        const coords = {
            lat: m.latLng.lat(),
            lng: m.latLng.lng(),
        };
        props.onMarkerDragEnd(coords);
    };
    return (
        <React.Fragment key={props.marker.id}>
            {props.showInfoWindow && (
                <InfoWindow
                    position={props.marker.coords}
                    options={{
                        pixelOffset: { width: 0, height: -30 },
                    }}
                    onCloseClick={() => props.closeInfoWindow(props.marker.id)}
                >
                    <div className=" w-32 max-w-lg m-2">
                        {props.marker.link && (
                            <Link href={`${props.marker.link}`}>{content}</Link>
                        )}
                        {!props.marker.link && content}
                    </div>
                </InfoWindow>
            )}

            <div>
                <Marker
                    draggable={props.draggable}
                    onDragEnd={(m) => {
                        onMarkerDragEnd(m);
                    }}
                    position={props.marker.coords}
                    //https://mapicons.mapsmarker.com/markers/tourism/monuments-structures/sevilla/?custom_color=108ccf
                    icon="/icon-sevilla.png"
                    onClick={() => props.openInfoWindow(props.marker.id)}
                />
            </div>
        </React.Fragment>
    );
};
export const GoogleMapsWithDrawingTools = (
    props: IGoogleMapsWithDrawindTools
) => {
    return (
        <div className="relative">
            <LoadScript
                googleMapsApiKey="AIzaSyCGZTW_vWRYKr8QIqdDQEjMnNf1DfkADKA"
                //@ts-ignore
                libraries={libraries}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={props.center}
                    zoom={16}
                >
                    {props.showDrawing && (
                        <DrawingManager
                            onPolygonComplete={(some) => console.log(some)}
                            onCircleComplete={(some) => {
                                props.addShape(some);
                                console.log(some);
                            }}
                        />
                    )}
                    <Markers
                        markers={props.markers}
                        onMarkerDragEnd={(
                            index: number,
                            coords: IGoogleMapsCoords
                        ) => props.onMarkerDragEnd(index, coords)}
                        draggable={props.draggable}
                    />
                    <></>
                </GoogleMap>
            </LoadScript>
            {/* <button type="button" onClick={props.removeAllShapes} className="absolute right-0 z-10 px-4 py-2 text-indigo-100 bg-indigo-600" style={{bottom:220}}>Clear All</button> */}
        </div>
    );
};

function MyComponent(props: {
    markers: IMarker[];
    center?: IGoogleMapsCoords;
    showDrawing?: boolean;
    onMarkerDragEnd?: any;
}) {
    const [shapes, setShapes] = useState<any[]>([]);
    const addShape = (some: any, allowOne = true) => {
        if (allowOne && shapes.length > 0) {
            some.setMap(null);
            return;
        }
        setShapes([...shapes, some]);
    };
    const removeShape = (index: number) => {
        const shape = shapes[index];
        shape.setMap(null);
        console.log(`Removed ${index} from the map.`);
    };
    const removeAllShapes = (except?: number[]) => {
        shapes.forEach((_, index) => {
            if (except && except.includes(index)) return;
            removeShape(index);
        });
        setShapes([]);
    };
    return (
        <GoogleMapsWithDrawingTools
            markers={props.markers}
            center={props.center || center}
            showDrawing
            addShape={addShape}
            removeShape={removeShape}
            removeAllShapes={removeAllShapes}
            onMarkerDragEnd={(index: number, coords: IGoogleMapsCoords) =>
                props.onMarkerDragEnd(index, coords)
            }
        />
    );
}

export default React.memo(MyComponent);
