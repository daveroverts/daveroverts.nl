const title = 'Dave Roverts'
const titleTemplate = `%s | ${title}`
const defaultTitle = title
const description =
    'Personal portfolio for Dave Roverts, Web developer from the Netherlands'
const url = 'https://daveroverts.nl'

const SEO = {
    title,
    titleTemplate,
    defaultTitle,
    description,
    canonical: url,
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: url,
        title,
        description,
        images: [
            {
                url: `${url}/images/android-chrome-512x512.png`,
                alt: title
            }
        ]
    },
    twitter: {
        handle: '@daveroverts',   
        site: '@daveroverts',
        cardType: 'summary_large_image'
    }
}

export default SEO