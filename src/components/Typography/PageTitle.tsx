import React from 'react';

export function PageTitle({
    children,
    style,
}: {
    children: string;
    style?: string;
}) {
    return (
        <h1
            className={`my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 ${style}`}
        >
            {children}
        </h1>
    );
}
