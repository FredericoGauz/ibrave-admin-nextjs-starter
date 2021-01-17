import { useSession } from 'next-auth/client';
import { ReactNode } from 'react';
// import { CTA } from '../components/CTA';
export default function Home() {
    const [session] = useSession();
    return (
        <main>
            {/* <CTA /> */}
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

Home.layoutProps = {
    meta: {
        title: 'Home',
    },
    Layout: HomeLayout,
};
