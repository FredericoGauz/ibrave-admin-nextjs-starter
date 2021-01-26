import React from 'react';
import { PageTitle } from '../components/Typography/PageTitle';
import {
    TableCellWithActions,
    TableCellWithBadge,
    TableCellWithNameDescriptionAndImage,
    // TableCellWithText,
    TableWithActions,
} from '../components/tableWithActions';
import { getUsers } from '../api/auth';

const users = getUsers();

const createTableFields = (data: any) => [
    <TableCellWithNameDescriptionAndImage
        name={data.name}
        description={'iBrave User'}
        image={data.image}
        // link={`location?id=${data.uid}`}
    />,
    <TableCellWithBadge badge={{ status: 'success', text: data.status }} />,
    <TableCellWithActions actions={{ edit: `/user/edit/${data.uid}` }} />,
];
export const AccountPage = () => {
    return (
        <div>
            <PageTitle>Accounts</PageTitle>
            <TableWithActions
                source={users}
                tableTitles={[
                    'User',
                    'Status',
                    // 'Last Updated',
                ]}
                createTableFields={createTableFields}
                totalResults={users.length}
            />
        </div>
    );
};

export default AccountPage;
