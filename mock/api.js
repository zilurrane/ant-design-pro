import {
  parse,
} from 'url';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'LC Ant React',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // LC Ant React
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  'It is an inner thing that they can not reach or touch',
  'Hope is a good thing, perhaps the best, good things will not die out',
  'Life is like a box of chocolate, the result is often surprising',
  'There are so many pubs in town, but she just walked into my pub',
  'At that time, I only want to want what I want, never want to own what',
];

const user = [
  'Huang Li',
  'Qu Lili',
  'Lin Dongdong',
  'Week star',
  'Wu Jia good',
  'Zhu right side',
  'Fish sauce',
  'Lok brother',
  'Tan Xiaoyan',
  'Zhong Ni',
];

export function fakeList(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2 * i)),
      createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2 * i)),
      subDescription: desc[i % 5],
      description: 'During the R & D process of the products in the Central Plains, there will be different design specifications and implementation methods, but often there are many similar pages and components. These similar components will be pulled out into a set of standard specifications.',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content: 'Paragraphs indicate: ant gold service design platform ant.design, with minimal effort, seamless access to ant gold service ecosystem, providing experience across the design and development solutions. Ants gold service design platform ant.design, with minimal effort, seamless access to ant gold service ecology, providing design solutions across the experience and development solutions.',
      members: [{
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        name: 'Qu Lili',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        name: 'Wang Zhaojun',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        name: 'Dong Nana',
      },
      ],
    });
  }

  return list;
}

export function getFakeList(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  const count = (params.count * 1) || 20;

  const result = fakeList(count);

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}

export const getNotice = [{
  id: 'xxx1',
  title: titles[0],
  logo: avatars[0],
  description: 'It is an inner thing that they can not reach or touch',
  updatedAt: new Date(),
  member: 'Science move bricks group',
  href: '',
  memberLink: '',
},
{
  id: 'xxx2',
  title: titles[1],
  logo: avatars[1],
  description: 'Hope is a good thing, perhaps the best, good things will not die out',
  updatedAt: new Date('2017-07-24'),
  member: 'The whole group is Daniel Wu',
  href: '',
  memberLink: '',
},
{
  id: 'xxx3',
  title: titles[2],
  logo: avatars[2],
  description: 'There are so many pubs in town, but she just walked into my pub.',
  updatedAt: new Date(),
  member: 'second girls',
  href: '',
  memberLink: '',
},
{
  id: 'xxx4',
  title: titles[3],
  logo: avatars[3],
  description: 'I just wanted to know what I wanted and I never wanted to have what I had',
  updatedAt: new Date('2017-07-23'),
  member: 'programmer daily',
  href: '',
  memberLink: '',
},
{
  id: 'xxx5',
  title: titles[4],
  logo: avatars[4],
  description: 'Winter is coming',
  updatedAt: new Date('2017-07-23'),
  member: 'high-force grid design day group',
  href: '',
  memberLink: '',
},
{
  id: 'xxx6',
  title: titles[5],
  logo: avatars[5],
  description: 'life is like a box of chocolates, the result is often unexpected',
  updatedAt: new Date('2017-07-23'),
  member: 'cheat you to learn computer',
  href: '',
  memberLink: '',
},
];

export const getActivities = [{
  id: 'trend-1',
  updatedAt: new Date(),
  user: {
    name: 'Qu Lili',
    avatar: avatars2[0],
  },
  group: {
    name: 'High force grid design day group',
    link: 'http://github.com/',
  },
  project: {
    name: 'June iteration',
    link: 'http://github.com/',
  },
  template: 'New project @{group} @{project}',
},
{
  id: 'trend-2',
  updatedAt: new Date(),
  user: {
    name: 'Pay small',
    avatar: avatars2[1],
  },
  group: {
    name: 'High force grid design day group',
    link: 'http://github.com/',
  },
  project: {
    name: 'June iteration',
    link: 'http://github.com/',
  },
  template: 'New project @{group} @{project}',
},
{
  id: 'trend-3',
  updatedAt: new Date(),
  user: {
    name: 'Lin Dongdong',
    avatar: avatars2[2],
  },
  group: {
    name: 'second girls',
    link: 'http://github.com/',
  },
  project: {
    name: 'June iteration',
    link: 'http://github.com/',
  },
  template: 'New project @{group} @{project}',
},
{
  id: 'trend-4',
  updatedAt: new Date(),
  user: {
    name: 'Star stars',
    avatar: avatars2[4],
  },
  project: {
    name: 'May daily iteration',
    link: 'http://github.com/',
  },
  template: 'Update @{project} to Published Status',
},
{
  id: 'trend-5',
  updatedAt: new Date(),
  user: {
    name: 'Zhu partial right',
    avatar: avatars2[3],
  },
  project: {
    name: 'Engineering Effectiveness',
    link: 'http://github.com/',
  },
  comment: {
    name: 'message',
    link: 'http://github.com/',
  },
  template: '@{comment} was posted at @{project}',
},
{
  id: 'trend-6',
  updatedAt: new Date(),
  user: {
    name: 'Lok,',
    avatar: avatars2[5],
  },
  group: {
    name: 'programmer daily',
    link: 'http://github.com/',
  },
  project: {
    name: 'brand iteration',
    link: 'http://github.com/',
  },
  template: 'New project @{group} @{project}',
},
];

export default {
  getNotice,
  getActivities,
  getFakeList,
};
