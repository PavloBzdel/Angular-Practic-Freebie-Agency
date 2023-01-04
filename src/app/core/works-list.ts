export interface workListing{
  img: string;
  title: string;
  subtitle: string;
  text: string;
}

export const worksCardLeft: workListing[] = [
  {
    img: '/assets/images/Works/Works-Cat.png',
    title: 'A KITTEN’S LIFE',
    subtitle: 'Photography',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: '/assets/images/Works/Works-notebook.png',
    title: 'APPLE’s LOST MAGIC',
    subtitle: 'Photography',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export const worksCardRight: workListing[]= [
  {
    img: '/assets/images/Works/Works-photography.png',
    title: '100 YEARS PHOTOGRAPHY',
    subtitle: 'Photography',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: '/assets/images/Works/Works-Mac.png',
    title: 'GROOVEMADE PRODUCTS FOR MAC',
    subtitle: 'Photography',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
];
