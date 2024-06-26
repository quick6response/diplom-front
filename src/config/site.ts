export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Контроль обучения сотрудников',
  description: 'Сервис для контроля обучения сотрудников',
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev'
  },
  nameCompany: "АО 'Просвещение'",
  logoCompany: {
    max: {
      width: 150,
      height: 150,
      url: 'https://avatars.mds.yandex.net/get-altay/200322/2a0000015b20587b3c2d0109ff1f1f23e6f4/XS',
      alt: "логотип 'Просвещение'"
    }
  },
  urls: {
    home: '/',
    courses: '/education/courses',
    programs: '/education/programs',
    employees: '/employees'
  }
};
