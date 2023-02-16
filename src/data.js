import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        {
          text: 'Program Overview',
          href: 'https://commonfund.nih.gov/smaht',
          external: true,
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Overview',
      links: [
        {
          text: 'Awardees',
          href: '#',
        },
        {
          text: 'Centers',
          href: '#',
        },
      ],
    },
    {
      text: 'Publications',
      links: [
        {
          text: 'SMaHT Publications',
          href: '#',
        },
        {
          text: 'SMaHT Preprints',
          href: '#',
        },
      ],
    },
    {
      text: 'Outreach',
      href: '#',
    },
    {
      text: 'Wiki',
      href: 'https://wiki.smaht.org/',
      external: true,
    },
  ],
  actions: [{ type: 'button', text: 'Data portal', href: getPermalink('/data') }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Internal Wiki', href: 'https://wiki.smaht.org/' },
        { text: 'Slack', href: '#' },
      ],
    },
    {
      title: 'Program',
      links: [{ text: 'About', href: '#' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/favicon/favicon-32x32.png)]"></span>
    SMaHT is funded by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://commonfund.nih.gov/smaht" target="_blank">NIH Common Fund</a>.
  `,
};
