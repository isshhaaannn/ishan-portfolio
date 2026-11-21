// Site-wide settings. Fill in CAL_LINK once the Cal.com account exists (e.g. 'ishan-mitra/intro').
export const SITE = {
  name: 'Ishan Mitra',
  title: 'Brand & Content Director',
  bio: 'The designer behind 40M+ views for Steven Bartlett, Daily Mail and the founders you follow. Now building brands for a few more.',
  url: 'https://ishan.vryks.com',
  CAL_LINK: '',
  email: 'contact@vryks.com',
  emailPersonal: 'isshhaaannn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ishan-mitra-279385272/',
  studio: { name: 'Vryks Media', url: 'https://vryks.com' },
  // GoatCounter code (free): sign up at goatcounter.com, then put the code here, e.g. 'ishan'.
  goatcounter: '',
};

export const bookingHref = SITE.CAL_LINK
  ? `https://cal.com/${SITE.CAL_LINK}`
  : `mailto:${SITE.email}?subject=${encodeURIComponent('Intro call')}`;
