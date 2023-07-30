import { Category } from './types/Category'

function icon(name: string): string {
  return `public/assets/icons/${name}`
}

const categories: Array<Category> = [
  {
    id: '1',
    name: 'Technology',
    icon: icon('network.png'),
    title: 'Tech Gadgets',
  },
  {
    id: '2',
    name: 'Books',
    icon: 'book-icon.png',
    title: 'Best Sellers',
  },
  {
    id: '3',
    name: 'Fashion',
    icon: 'fashion-icon.png',
    title: 'Latest Trends',
  },
  {
    id: '4',
    name: 'Sports',
    icon: 'sports-icon.png',
    title: 'Sports Gear',
  },
  {
    id: '5',
    name: 'Home',
    icon: 'home-icon.png',
    title: 'Home Decor',
  },
  {
    id: '6',
    name: 'Food',
    icon: 'food-icon.png',
    title: 'Delicious Treats',
  },
  {
    id: '7',
    name: 'Travel',
    icon: 'travel-icon.png',
    title: 'Travel Destinations',
  },
  {
    id: '8',
    name: 'Health',
    icon: 'health-icon.png',
    title: 'Wellness Products',
  },
  {
    id: '9',
    name: 'Music',
    icon: 'music-icon.png',
    title: 'Music Accessories',
  },
  {
    id: '10',
    name: 'Pets',
    icon: 'pets-icon.png',
    title: 'Pet Supplies',
  },
]

export { categories }
