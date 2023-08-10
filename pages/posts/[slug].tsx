import Layout from '@/components/layout';
import { getSortedPostsHeaders, getPostSlugs, getPostData} from '@/lib/posts';
import { IArticle } from '@/types';

import { MDXProvider } from '@mdx-js/react';
import { Typography } from '@mui/material';
import Image from 'next/image';

// TODO(peng): add metadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
)
 
const components = {
  img: ResponsiveImage,
}

export async function getStaticPaths() {
    const paths = await getPostSlugs();
    return {
      paths,
      fallback: false,
    };
  }


export async function getStaticProps({params}:{params:any}){
    const allPostsHeaders = await getSortedPostsHeaders();
    const postData = await getPostData(params.slug);
    console.log(allPostsHeaders);
    return  {
        props: {
            postData: postData,
            allPostHeaders: allPostsHeaders,
        },
    };
}

export default function Post({postData, allPostHeaders }:{allPostHeaders:IArticle, postData:any}) {
  return (
    <Layout allPostHeaders={allPostHeaders}>
    <MDXProvider components={components}>
      <Typography>Test</Typography>
    </MDXProvider>
    </Layout>
  )
}