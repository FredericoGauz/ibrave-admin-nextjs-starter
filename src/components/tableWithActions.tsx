import React, { useEffect, useState } from 'react';
import response from '../utils/demo/tableData';
import Image from 'next/image';

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
    createTableFields,
    tableTitles,
}: {
    createTableFields?: (data: any) => any[];
    tableTitles: string[];
}) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(
            response.slice((page - 1) * resultsPerPage, page * resultsPerPage)
        );
    }, [page]);
    return (
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    <tr>
                        {tableTitles.map((s) => (
                            <TableCell>{s}</TableCell>
                        ))}
                        <TableCell>Updated</TableCell>
                        <TableCell>Actions</TableCell>
                    </tr>
                </TableHeader>
                <TableBody>
                    {data.map((user, i) => (
                        <TableRow key={i}>
                            {createTableFields && createTableFields(user)}
                            <TableCellWithText
                                text={new Date(user.date).toLocaleDateString()}
                            />
                            <TableCell>
                                <div className="flex items-center space-x-4">
                                    <Button
                                        layout="link"
                                        size="small"
                                        aria-label="Edit"
                                    >
                                        <EditIcon
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                    {/* <Button
                                        layout="link"
                                        size="icon"
                                        aria-label="Delete"
                                    >
                                        <TrashIcon
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                        />
                                    </Button> */}
                                </div>
                            </TableCell>
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
}: {
    name: string;
    description: string;
    image: string;
}) => {
    return (
        <TableCell>
            <div className="flex items-center text-sm">
                <div className="mr-5">
                    <Image
                        className="hidden rounded-full md:block"
                        src={image}
                        alt="User avatar"
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    <p className="mb-1 text-lg font-semibold dark:text-gray-300">
                        {name}
                    </p>
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

export const TableCellWithBadge = ({
    text,
    status,
}: {
    text: string;
    status?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral';
}) => {
    return (
        <TableCell>
            <Badge type={status || 'primary'}>{text}</Badge>
        </TableCell>
    );
};
