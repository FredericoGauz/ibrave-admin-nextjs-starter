import { TableCell } from '@windmill/react-ui';
import React from 'react';
import { useQuery } from 'react-query';
import { getLocations } from '../api/middleapi/middleapi';
import {
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
    // <TableCellWithText text={new Date(data.date).toLocaleDateString()} />,
];

export const LocationsPage = () => {
    // const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery(
        'locations',
        async () => await getLocations()
    );
    if (isLoading) return <p>Loading...</p>;
    if (isError) {
        console.log(error);
        return <p>Error...</p>;
    }
    return (
        <div>
            <PageTitle>Locations</PageTitle>
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
