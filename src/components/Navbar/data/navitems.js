import english from '../../../assets/images/Icons/ukFlag.png';
import french from '../../../assets/images/Icons/franceFlag.png';
import kinyarwanda from '../../../assets/images/Icons/rwandaFlag.webp';
import { FaHome, FaAddressCard, FaCalendar, FaServicestack, FaVideo, FaInfoCircle, FaBlog } from 'react-icons/fa';

export const navItems = [
  {
    label: 'Home',
    url: '/',
    active: true,
    icon: <FaHome />,
  },
  {
    label: 'About us',
    url: '/about-us',
    active: false,
    icon: <FaAddressCard />,
    subItems: [
      {
        label: 'History',
        url: '/about/history',
        active: false,
      },
      {
        label: 'Mission and Vision',
        url: '/about/vision',
        active: false,
      },
      {
        label: 'Executive committee',
        url: '/about/executive-committee',
        active: false,
      },
      {
        label: 'Members',
        url: '/about/members',
        active: false,
      },

      {
        label: 'Conductors',
        url: '/about/conductors',
        active: false,
      },
      {
        label: 'Organists',
        url: '/about/organists',
        active: false,
      },
    ],
  },

  {
    label: 'Events',
    url: '/events',
    active: false,
    icon: <FaCalendar />,
  },
  {
    label: 'Services',
    url: '/services',
    active: false,
    icon: <FaServicestack />,
  },
  {
    label: 'Videos',
    url: '/videos',
    active: false,
    icon: <FaVideo />,
  },
  {
    label: 'Blog',
    url: '/blog',
    active: false,
    icon: <FaBlog />,
  },
  {
    label: 'Support us',
    url: '/support-us',
    active: false,
    icon: <FaInfoCircle />,
  },
];

export const languages = [
  {
    label: 'English',
    value: 'en',
    active: true,
    icon: english,
  },
  {
    label: 'French',
    value: 'fr',
    active: false,
    icon: french,
  },
  {
    label: 'Kinyarwanda',
    value: 'rw',
    active: false,
    icon: kinyarwanda,
  },
];
