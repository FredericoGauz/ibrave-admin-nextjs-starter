import React from 'react';

export function SectionTitle({ children }: { children: string }) {
    return (
        <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            {children}
        </h2>
    );
}
