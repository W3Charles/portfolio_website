import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/* Call sanityClient as a function and provide it in an object */
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

//standard code whenever you working with images using SANITY

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)