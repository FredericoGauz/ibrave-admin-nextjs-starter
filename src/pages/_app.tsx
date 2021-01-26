import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Title, Description, Meta } from '@/components';
import WindmillLayout from '../containers/Layout';
import React from 'react';
import { AccessibleNavigationAnnouncer } from '../components/AccessibleNavigationAnnouncer';
import { Windmill } from '@windmill/react-ui';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';
import { SidebarProvider } from 'src/context/SidebarContext';
import SimpleReactLightbox from 'simple-react-lightbox';
const progress = new ProgressBar({
    size: 2,
    color: '#22D3EE',
    className: 'bar-of-progress',
    delay: 100,
});

if (typeof window !== 'undefined') {
    progress.start();
    progress.finish();
}

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', () => {
    progress.finish();

    // Will not work if scroll is not on <html>
    window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', progress.finish);

const queryClient = new QueryClient();

export const getServerSideProps = async function () {
    const user = window.localStorage.getItem('user');

    if (!user) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }
};

function MyApp({ Component, pageProps }: AppProps) {
    const Layout = (Component as any).layoutProps?.Layout || React.Fragment;
    const layoutProps = (Component as any).layoutProps?.Layout
        ? { layoutProps: (Component as any).layoutProps }
        : {};
    const meta = (Component as any).layoutProps?.meta || {};
    const description =
        meta.metaDescription || meta.description || 'iBrave Admin';

    return (
        <QueryClientProvider client={queryClient}>
            <Provider session={pageProps.session}>
                <SidebarProvider>
                    <Windmill usePreferences>
                        <SimpleReactLightbox>
                            <AccessibleNavigationAnnouncer />
                            <Title suffix="iBrave Admin">
                                {meta.metaTitle || meta.title}
                            </Title>
                            <Description>{description}</Description>
                            <Meta />
                            <Layout {...layoutProps}>
                                <WindmillLayout>
                                    <Component {...pageProps} />
                                </WindmillLayout>
                            </Layout>
                        </SimpleReactLightbox>
                    </Windmill>
                </SidebarProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </Provider>
        </QueryClientProvider>
    );
}

export default MyApp;
