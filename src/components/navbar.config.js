// src/components/Navbar/navbar.config.js

export const NAV_ITEMS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Fruits & Vegetables',
    path: '/category/fruits-vegetables',
    icon: '🥦',
    children: [
      { label: 'Fresh Fruits',       path: '/category/fruits-vegetables/fresh-fruits',   icon: '🍎' },
      { label: 'Fresh Vegetables',   path: '/category/fruits-vegetables/fresh-vegetables', icon: '🥕' },
      { label: 'Organic Produce',    path: '/category/fruits-vegetables/organic',          icon: '🌿' },
      { label: 'Herbs & Greens',     path: '/category/fruits-vegetables/herbs',            icon: '🌱' },
      { label: 'Exotic Fruits',      path: '/category/fruits-vegetables/exotic',           icon: '🥭' },
    ],
  },
  {
    label: 'Meats & Seafood',
    path: '/category/meats-seafood',
    icon: '🥩',
    children: [
      { label: 'Chicken & Poultry',  path: '/category/meats-seafood/chicken',  icon: '🍗' },
      { label: 'Beef & Lamb',        path: '/category/meats-seafood/beef',      icon: '🥩' },
      { label: 'Fish & Seafood',     path: '/category/meats-seafood/fish',      icon: '🐟' },
      { label: 'Deli & Cold Cuts',   path: '/category/meats-seafood/deli',      icon: '🍖' },
    ],
  },
  {
    label: 'Breaksfast & Dairy',
    path: '/category/breakfast-dairy',
    icon: '🥛',
    children: [
      { label: 'Milk & Cream',       path: '/category/breakfast-dairy/milk',     icon: '🥛' },
      { label: 'Cheese',             path: '/category/breakfast-dairy/cheese',   icon: '🧀' },
      { label: 'Yogurt',             path: '/category/breakfast-dairy/yogurt',   icon: '🫙' },
      { label: 'Cereals & Oats',     path: '/category/breakfast-dairy/cereals',  icon: '🥣' },
      { label: 'Eggs',               path: '/category/breakfast-dairy/eggs',     icon: '🥚' },
      { label: 'Butter & Margarine', path: '/category/breakfast-dairy/butter',   icon: '🧈' },
    ],
  },
  {
    label: 'Breads & Bakery',
    path: '/category/breads-bakery',
    icon: '🥖',
    children: [
      { label: 'Breads & Loaves',    path: '/category/breads-bakery/breads',   icon: '🍞' },
      { label: 'Cakes & Pastries',   path: '/category/breads-bakery/cakes',    icon: '🎂' },
      { label: 'Buns & Rolls',       path: '/category/breads-bakery/buns',     icon: '🥐' },
      { label: 'Pita & Flatbreads',  path: '/category/breads-bakery/pita',     icon: '🫓' },
    ],
  },
  {
    label: 'Beverages',
    path: '/category/beverages',
    icon: '🧃',
    children: [
      { label: 'Juices & Nectars',   path: '/category/beverages/juices',       icon: '🍹' },
      { label: 'Water & Sparkling',  path: '/category/beverages/water',         icon: '💧' },
      { label: 'Soft Drinks',        path: '/category/beverages/soft-drinks',   icon: '🥤' },
      { label: 'Tea & Coffee',       path: '/category/beverages/tea-coffee',    icon: '☕' },
      { label: 'Energy Drinks',      path: '/category/beverages/energy',        icon: '⚡' },
    ],
  },
  {
    label: 'Frozen Foods',
    path: '/category/frozen-foods',
    icon: '🧊',
    children: [
      { label: 'Frozen Meals',       path: '/category/frozen-foods/meals',     icon: '🍽️' },
      { label: 'Ice Cream',          path: '/category/frozen-foods/ice-cream', icon: '🍦' },
      { label: 'Frozen Vegetables',  path: '/category/frozen-foods/vegetables', icon: '🥦' },
      { label: 'Frozen Seafood',     path: '/category/frozen-foods/seafood',   icon: '🦐' },
    ],
  },
  {
    label: 'Biscuits & Snacks',
    path: '/category/biscuits-snacks',
    icon: '🍪',
    children: [
      { label: 'Chips & Crisps',     path: '/category/biscuits-snacks/chips',    icon: '🥔' },
      { label: 'Cookies & Biscuits', path: '/category/biscuits-snacks/cookies',  icon: '🍪' },
      { label: 'Nuts & Dried Fruits', path: '/category/biscuits-snacks/nuts',    icon: '🥜' },
      { label: 'Popcorn',            path: '/category/biscuits-snacks/popcorn',  icon: '🍿' },
    ],
  },
  {
    label: 'Grocery & Staples',
    path: '/category/grocery-staples',
    icon: '🛒',
  },
]