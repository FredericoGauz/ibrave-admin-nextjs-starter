// eslint-disable-next-line prettier/prettier
export interface IGoogleMapsCoords { //TODO remove this declaration
    lat: number;
    lng: number;
}

export interface IGoogleMaps {
    markers: IMarker[];
    center: IGoogleMapsCoords;
    showDrawing?: boolean;
}

export interface IGoogleMapsWithDrawindTools extends IGoogleMaps {
    addShape?: any;
    removeShape?: any;
    removeAllShapes?: any;
    onMarkerDragEnd: any;
    draggable?: boolean;
}

export interface IMarker {
    id: string;
    name: string;
    link?: string;
    description?: string;
    image?: string;
    coords: google.maps.LatLng;
}
