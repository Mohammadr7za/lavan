import Head from 'next/head';

type Props = {
    description?: string;
    children: JSX.Element | JSX.Element[];
    title?: string;
};

const PageContainer = ({title, description, children}: Props) => (
    <div>
        <Head>
            <title>{title} - asd</title>
        </Head>
        <meta name="description" content={description}/>
        {children}
    </div>
);

export default PageContainer;
