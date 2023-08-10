import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
 
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
 
export default function Post(props: any) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  )
}