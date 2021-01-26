import { TableCell } from '@windmill/react-ui';
import React from 'react';
import { useQuery } from 'react-query';
import { LocationMap } from 'src/components/googlemaps/display-map';
import { getLocations } from '../api/middleapi/middleapi';
import {
    TableCellWithActions,
    TableCellWithBadge,
    TableCellWithNameDescriptionAndImage,
    // TableCellWithText,
    TableWithActions,
} from '../components/tableWithActions';
import { PageTitle } from '../components/Typography/PageTitle';

const createTableFields = (data: any) => [
    <TableCellWithNameDescriptionAndImage
        name={data.name}
        description={data.name && data.name.slice(0, 40)}
        image={data.image}
        link={`location?id=${data.uid}`}
    />,
    data.tags.length > 0 ? (
        <TableCellWithBadge
            badge={data.tags.map((t: { name: string }) => ({
                text: `${t.name}`,
            }))}
        />
    ) : (
        <TableCell />
    ),
    <TableCellWithActions actions={{ edit: `/edit/${data.uid}` }} />,
];

export const LocationsPage = () => {
    const { isLoading, isError, data, error } = useQuery(
        'locations',
        async () => await getLocations('isTip_null=true')
    );
    if (isLoading) return <p>Loading...</p>;
    if (isError || !data) {
        console.log(error);
        return <p>Error...</p>;
    }
    return (
        <div>
            <PageTitle>Locations</PageTitle>
            <LocationMap concepts={data} />
            <TableWithActions
                source={data}
                tableTitles={[
                    'Location',
                    'Badges',
                    // 'Last Updated',
                ]}
                createTableFields={createTableFields}
            />
        </div>
    );
};

export default LocationsPage;
