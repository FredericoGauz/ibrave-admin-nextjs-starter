import React from 'react';

export const Loader = (props: { text: string; error?: boolean }) => {
    if (props.error)
        return <LoaderWithError text="Error fetching information..." />;
    return (
        <div className="flex justify-center w-full h-full pt-10 bg-gray-100">
            <div className="w-full h-32 max-w-sm p-4 mx-auto border border-teal-300 rounded-md shadow">
                <div className="flex space-x-4 animate-pulse">
                    <div className="w-12 h-12 bg-teal-400 rounded-full"></div>
                    <div className="flex-1 py-1 space-y-4">
                        {/* <div className="w-3/4 h-4 bg-teal-400 rounded"></div> */}
                        <p className="mt-0 text-teal-400">{props.text}</p>
                        <div className="space-y-2">
                            <div className="h-4 bg-teal-400 rounded"></div>
                            <div className="w-5/6 h-4 bg-teal-400 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const LoaderWithError = (props: { text: string }) => {
    return (
        <div className="flex justify-center w-full h-full pt-10 bg-gray-100">
            <div className="w-full h-32 max-w-sm p-4 mx-auto border border-gray-300 rounded-md shadow">
                <div className="flex space-x-4 animate-pulse">
                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                    <div className="flex-1 py-1 space-y-4">
                        {/* <div className="w-3/4 h-4 bg-gray-700 rounded"></div> */}
                        <p className="mt-0 text-gray-700">{props.text}</p>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-700 rounded"></div>
                            <div className="w-5/6 h-4 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
