import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getLocationByUid } from '../api/middleapi/middleapi';
import { Loader } from '../components/loader';
import Link from 'next/link';
import { SRLWrapper } from 'simple-react-lightbox';
import Image from 'next/image';
import parse from 'html-react-parser';
import { SunIcon } from '../icons';
import { LocationMap } from '../components/googlemaps/display-map';
export const LocationPage = () => {
    const router = useRouter();
    const id =
        router.query.id && Array.isArray(router.query.id)
            ? router.query.id[0]
            : router.query.id;

    const { isLoading, isError, data } = useQuery(
        ['location', id],
        async () => {
            if (!id) return console.log('Missing Id.');
            return await getLocationByUid(id);
        }
    );

    if (isLoading) return <Loader text="Loading location..." />;
    if (isError || !data) return <Loader text="Loading location..." error />;

    const concept = data;
    return (
        <div className="max-w-screen-xl mx-auto">
            <small className="float-right text-indigo-600">
                <Link href={`/edit?uid=${concept.uid}`}>
                    <a>edit</a>
                </Link>
            </small>
            <main className="mt-10">
                <div
                    className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                    style={{ height: '24em' }}
                >
                    <div
                        className="absolute left-0 bottom-0 w-full h-full z-10 pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(180deg,transparent,rgba(0,0,0,.7))',
                        }}
                    ></div>
                    <SRLWrapper>
                        <Image
                            src={concept.image}
                            className="absolute left-0 top-0 w-full h-full z-0 object-cover cursor-pointer"
                            layout="fill"
                        />
                    </SRLWrapper>
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            {concept.name}
                        </h2>
                        <div className="mt-4">
                            {concept.tags.length > 0 &&
                                concept.tags.slice(0, 2).map((tag) => (
                                    <Link
                                        key={tag.uid}
                                        href={`/tag?uid=${tag.uid}`}
                                    >
                                        <a className="mr-4 text-xs inline-flex items-center font-semibold bg-white bg-opacity-25 leading-sm uppercase px-3 py-1 border border-white text-white rounded-full">
                                            {tag.name}
                                        </a>
                                    </Link>
                                ))}
                        </div>
                        <div className="flex mt-3">
                            <Image
                                src={concept.image}
                                className="h-10 w-10 rounded-full mr-2 object-cover"
                                width={50}
                                height={50}
                                objectFit="cover"
                            />
                            <div className="flex">
                                {/* <p className=" font-semibold text-gray-200 text-lg mt-2">
                                    {isUKAddress(concept.address)
                                        ? concept.address.ward
                                        : concept.address.city}
                                    <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                                </p> */}
                                <div className="flex items-center text-white ml-2 pt-2 relative">
                                    <div className="w-5 h-5">
                                        <SunIcon />
                                    </div>
                                    {concept.geo.circle && (
                                        <span className=" text-base font-light inline-block align-center">
                                            {
                                                concept.geo.circle.coordinates
                                                    .latitude
                                            }
                                            ,{' '}
                                            {
                                                concept.geo.circle.coordinates
                                                    .longitude
                                            }
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <div>{parse(concept.description || '')}</div>
                </div>

                {concept.geo.circle && <LocationMap concepts={[concept]} />}
            </main>
        </div>
    );
};
export default LocationPage;
