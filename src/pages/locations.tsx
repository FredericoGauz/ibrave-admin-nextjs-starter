import React from 'react';
import { useQuery } from 'react-query';
import { getLocations } from '../api/middleapi/middleapi';
import {
    TableCellWithNameDescriptionAndImage,
    TableCellWithText,
    TableWithActions,
} from '../components/tableWithActions';
import { PageTitle } from '../components/Typography/PageTitle';

const createTableFields = (data: any) => [
    <TableCellWithNameDescriptionAndImage
        name={data.name}
        description={data.name && data.name.slice(0, 40)}
        image={data.image}
    />,
    // <TableCellWithText text={`$ ${data.amount}`} />,
    <TableCellWithText text={new Date(data.date).toLocaleDateString()} />,
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
                    // '',
                    'Last Updated',
                ]}
                createTableFields={createTableFields}
            />
        </div>
    );
};

export default LocationsPage;
