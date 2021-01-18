import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getLocationByUid } from '../api/middleapi/middleapi';
import { Loader } from '../components/loader';

export const LocationPage = () => {
    const router = useRouter();
    const id =
        router.query.id && Array.isArray(router.query.id)
            ? router.query.id[0]
            : router.query.id;

    const { isLoading, isError, data } = useQuery(
        ['location', id],
        async () => {
            if (!id) throw new Error('Missing Id.');
            return await getLocationByUid(id);
        }
    );

    if (isLoading) return <Loader text="Loading location..." />;
    if (isError || !data) return <Loader text="Loading location..." error />;
    return <h1>{data.name}</h1>;
};
export default LocationPage;
