export const villages = [];

const year = '2021';
const season = {
  short: 'fall',
  shortCapitalized: 'Fall',
  long: 'the fall',
  longCapitalized: 'The Fall',
};
const startDate = 'November 12.';
const endDate = 'November 13.';

export const eventData = {
  date: `${startDate} ${year}`,
  longDate: `${startDate} ${year}`,
  city: 'Stockholm',
  country: 'Sweden',
  year,
  monthNumber: 11,
  season,
  startDate,
  endDate,
  cities: [
    'Stockholm',
    'Oslo',
    'Bergen'
  ],
};

const viewmodel = {
  title: `Knowit Developer Summit ${eventData.year}`,
  event: {
    ...eventData,
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32000.817284701054!2d10.746149204923535!3d59.91469960262475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e80811e2d6f%3A0x471e76986b8efc28!2sKnowit%20AS!5e0!3m2!1sno!2sno!4v1592290668940!5m2!1sno!2sno',
  },
  meta: {
    title: `Knowit Developer Summit ${eventData.year}`,
    description: `Knowit Developer Summit is arranged once a year. In ${year} it will be held ${eventData.date} in ${eventData.city}.`,
    keywords: `Conference, ${eventData.city}, ${eventData.country}, Talks, Workshops`,
  },
  days: [
    {
      date: '12',
      label: 'Thursday 29.10',
    }
  ],
  schedules: [],
  talks: {},
  villages: [],
};

export default viewmodel;
