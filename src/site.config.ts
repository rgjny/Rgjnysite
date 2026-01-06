import type { SiteConfig } from '~/types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://rgjny..site/',
  // The name of your site, used in the title and for SEO.
  title: 'Rgjny\'s Blog',
  // The description of your site, used for SEO and RSS feed.
  description:
    'A coder-ready Astro blog theme with 59 of your favorite color schemes to choose from',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'rgjny',
  // Keywords for SEO, used in the meta tags.
  tags: ['Bug Bounty', 'Cybersecurity' ],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/avatar.jpg',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  // The homepage will display half this number in the "Latest Posts" section.
  pageSize: 6,
  // Whether Astro should resolve trailing slashes in URLs or not.
  // This value is used in the astro.config.mjs file and in the "Search" component to make sure pagefind links match this setting.
  // It is not recommended to change this, since most links existing in the site currently do not have trailing slashes.
  trailingSlashes: false,
  // The navigation links to display in the header.
  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Posts',
      url: '/posts',
    },
           {
      name: 'About',
      url: '/about',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rgjny',
      external: true,
    },
  ],
  // The theming configuration for the site.
themes: {
    mode: 'single',
    default: 'github-dark', 
    include: ['github-dark'],
overrides: {
      'github-dark': {
        'background': 'oklch(0.17 0.02 30)',
        'editor.background': 'oklch(0.17 0.02 30)',
        
        // Setting text to #D8C2A7
        foreground: 'oklch(0.81 0.05 78)', 
        'editor.foreground': 'oklch(0.81 0.05 78)',
        
        // UI Elements
        accent: 'oklch(0.85 0.07 85)',
        link: 'oklch(0.81 0.05 78)',
        border: 'oklch(0.25 0.03 30)',
        'muted-foreground': 'oklch(0.60 0.03 70)',
      },
    },
  },
  // Social links to display in the footer.
  socialLinks: {
    github: 'https://github.com/rgjny',
    email: 'rgjnymail@proton.me',
    twitter: 'https://x.com/rgjny_',
    rss: false, // Set to true to include an RSS feed link in the footer
  },
  // Configuration for Giscus comments.
  // To set up Giscus, follow the instructions at https://giscus.app/
  // You'll need a GitHub repository with discussions enabled and the Giscus app installed.
  // Take the values from the generated script tag at https://giscus.app and fill them in here.
  // IMPORTANT: Update giscus.json in the root of the project with your own website URL
  // If you don't want to use Giscus, set this to undefined.
  //giscus: {
  //  repo: 'stelcodes/multiterm-astro',
  //  repoId: 'R_kgDOPNnBig',
  //  category: 'Giscus',
  //  categoryId: 'DIC_kwDOPNnBis4CteOc',
  //  reactionsEnabled: true, // Enable reactions on post itself
  //},
  // These are characters available for the character chat feature.
  // To add your own character, add an image file to the top-level `/public` directory
  // Make sure to compress the image to a web-friendly size (<100kb)
  // Try using the excellent https://squoosh.app web app for creating small webp files
  characters: {
    owl: '/owl.webp',
    unicorn: '/unicorn.webp',
    duck: '/duck.webp',
  },
}

export default config
