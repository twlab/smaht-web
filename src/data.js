import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        // {
        //   text: 'NIH SMaHT Program',
        //   href: 'https://commonfund.nih.gov/smaht',
        //   external: true,
        // },
        {
          text: 'Program Overview',
          href: getPermalink('/overview'),
        },
        {
          text: 'Awardees',
          href: getPermalink('/awardees'),
        },
      ],
    },
    {
      text: 'Policies',
      // href: getPermalink('/policies'),
      links: [
        { text: 'Associate Membership Policy', href: getPermalink('/associate-membership') },
        { text: 'Associate Member Application', href: getPermalink('/associate-application') },
        { text: 'SMaHT Network Code of Conduct', href: getPermalink('code-of-conduct') },
        { text: 'Working Group Governance', href: getPermalink('/policy-working-group-governance') },
        { text: 'Data Use Policy', href: getPermalink('/data-use-policy') },
        { text: 'Software Policy', href: getPermalink('/software-policy') },
        { text: 'Publication Policy', href: getPermalink('/publication-policy') },
        { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
      ],
    },
    // {
    //   text: 'Overview',
    //   links: [
    //     // {
    //     //   text: 'Centers',
    //     //   href: '#',
    //     // },
    //   ],
    // },
    {
      text: 'Publications',
      links: [
        {
          text: 'SMaHT Publications',
          href: 'https://www.ncbi.nlm.nih.gov/sites/myncbi/16AVSwo5opQ9dK/collections/64677812/public/',
          external: true,
        },
        {
          text: 'SMaHT Preprints',
          href: getPermalink('/preprints'),
        },
      ],
    },
    {
      text: 'News',
      href: getPermalink('/news'),
    },
    {
      text: 'SMaHT Donor Families',
      href: 'https://donorfamilies.smaht.org/',
      external: true,
    },
    {
      text: 'Wiki',
      href: 'https://wiki.smaht.org/',
      external: true,
    },
  ],
  actions: [{ type: 'button', text: 'Data Portal', href: 'https://data.smaht.org/' }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Internal Wiki', href: 'https://wiki.smaht.org/' },
        // { text: 'X', href: 'https://twitter.com/SMaHTnetwork' },
      ],
    },
    {
      title: 'Program',
      links: [{ text: 'Overview', href: getPermalink('/overview') }],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Policies', href: getPermalink('/policies') },
  ],
  socialLinks: [
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@SMaHTnetwork' },
    // { ariaLabel: 'X', icon: 'tabler:brand-twitter', href: 'https://x.com/SMaHTnetwork' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/smahtnetwork/' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/groups/14287460/' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=100091872325711',
    },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/favicon/favicon-32x32.png)]"></span>
    SMaHT is funded by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://commonfund.nih.gov/smaht" target="_blank">NIH Common Fund</a>.
  `,
};
