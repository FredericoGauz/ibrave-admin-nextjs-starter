import React from 'react';
import {
    TableCellWithNameDescriptionAndImage,
    TableCellWithText,
    TableWithActions,
} from '../components/tableWithActions';
import { PageTitle } from '../components/Typography/PageTitle';

const createTableFields = (data: any) => [
    <TableCellWithNameDescriptionAndImage
        name={data.name}
        description={data.job}
        image={data.avatar}
    />,
    // <TableCellWithText text={`$ ${data.amount}`} />,
    <TableCellWithText text={new Date(data.date).toLocaleDateString()} />,
];

export const LocationsPage = () => {
    return (
        <div>
            <PageTitle>Locations</PageTitle>
            <TableWithActions
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
