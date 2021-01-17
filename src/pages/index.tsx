import { useSession } from 'next-auth/client';
import React, { ReactNode } from 'react';
import { PageTitle } from 'src/components/Typography/PageTitle';
// import { CTA } from '../components/CTA';
export default function DashBoard() {
    const [session] = useSession();
    return (
        <main>
            {/* <CTA /> */}
            <PageTitle>DashBoard</PageTitle>
            <div className="p-10">
                {session && (
                    <p>
                        Hello, <b>{session.user.email ?? session.user.name}</b>
                    </p>
                )}
            </div>
        </main>
    );
}

function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {/* <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8"> */}
            {children}
            {/* </div> */}
        </>
    );
}

DashBoard.layoutProps = {
    meta: {
        title: 'Home',
    },
    Layout: HomeLayout,
};
