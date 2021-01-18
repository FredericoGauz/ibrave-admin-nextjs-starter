import React, { useEffect, useState } from 'react';
import response from '../utils/demo/tableData';
import Image from 'next/image';
import Link from 'next/link';
import _ from 'lodash';

import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Badge,
    Button,
    Pagination,
} from '@windmill/react-ui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EditIcon, TrashIcon } from '../icons';

const resultsPerPage = 10;
const totalResults = response.length;

export const TableWithActions = ({
    source,
    createTableFields,
    tableTitles,
    actions,
}: {
    source: any;
    createTableFields?: (data: any) => any[];
    tableTitles: string[];
    actions?: ITableCellActions;
}) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(
            source.slice((page - 1) * resultsPerPage, page * resultsPerPage)
        );
    }, [page, source]);
    return (
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    <tr>
                        {tableTitles.map((s) => (
                            <TableCell>{s}</TableCell>
                        ))}
                        {actions && <TableCell>Actions</TableCell>}
                    </tr>
                </TableHeader>
                <TableBody>
                    {data.map((user, i) => (
                        <TableRow key={i}>
                            {createTableFields && createTableFields(user)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TableFooter>
                <Pagination
                    totalResults={totalResults}
                    resultsPerPage={resultsPerPage}
                    onChange={(p: number) => setPage(p)}
                    label="Table navigation"
                />
            </TableFooter>
        </TableContainer>
    );
};

export const TableCellWithNameDescriptionAndImage = ({
    name,
    description,
    image,
    link,
}: {
    name: string;
    description: string;
    image: string;
    link?: string;
}) => {
    return (
        <TableCell>
            <div className="flex items-center text-sm">
                <div className="mr-5">
                    {image && (
                        <Image
                            className="hidden rounded-full md:block"
                            src={image}
                            alt="User avatar"
                            width={50}
                            height={50}
                        />
                    )}
                </div>
                <div>
                    <Link href={link || '#'}>
                        <a className="mb-1 text-lg font-semibold dark:text-gray-300">
                            {name}
                        </a>
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </TableCell>
    );
};

export const TableCellWithText = ({ text }: { text: string }) => {
    return (
        <TableCell>
            <span className="text-sm">{text}</span>
        </TableCell>
    );
};
export interface IBadge {
    text: string;
    status?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral';
}
export const TableCellWithBadge = ({ badge }: { badge: IBadge | IBadge[] }) => {
    const badges = Array.isArray(badge) ? badge : [badge];
    const badgesToRender = _.take(badges, 2);
    return (
        <TableCell>
            {badgesToRender.map((b) => (
                <Badge type={b.status || 'primary'}>{b.text}</Badge>
            ))}
            {badges.length > 2 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    +{badges.length}
                </span>
            )}
        </TableCell>
    );
};

interface ITableCellActions {
    edit?: string;
    delete?: string;
}
export const TableCellWithActions = ({
    actions,
}: {
    actions: ITableCellActions;
}) => {
    if (Object.keys(actions).length < 1) return <React.Fragment />;
    return (
        <TableCell>
            <div className="flex items-center space-x-4">
                {actions.edit && (
                    <Button layout="link" size="small" aria-label="Edit">
                        <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                )}
                {actions.delete && (
                    <Link href={actions.delete}>
                        <Button layout="link" size="small" aria-label="Delete">
                            <TrashIcon className="w-5 h-5" aria-hidden="true" />
                        </Button>
                    </Link>
                )}
            </div>
        </TableCell>
    );
};
