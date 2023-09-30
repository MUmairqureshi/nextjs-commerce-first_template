import { StaticImageData } from 'next/image';
import feature from '/components/images/feature.webp';
import latest_article from '/components/images/latest-article.webp';
import ta_1 from '/components/images/ta_1.webp';
// import blue_hoodie from "/components/images/blue_hoodie.jpg";
// import blue_tshirt from "/components/images/blue_tshirt.jpg";
// import blue_tshirt_blue from "/components/images/blue_tshirt_darkblue.jpg";
// import blue_tshirt_green from "/components/images/blue_tshirt_green.jpg";
// import blue_tshirt_red from "/components/images/blue_tshirt_red.jpg";
// import dark_blue_demin_jeans from "/components/images/dark_blue_demin_jeans.jpg";

export type Articles = {
  _id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: StaticImageData;
};

export const articles: Articles[] = [
  {
    _id: 1,
    title: 'My boss Made Me Cleanse...',
    description:
      'Working at PRESS, I have tried all of the juices…countless times. But, until this week, I had never actually embarked on a PRESS juice cleanse. As someone who seriously loves food, I’ve always worried about how I’d fare on an (almost) completely liquid diet. But everyone always raves about how amazing they feel after even just one day of a juice cleanse, so when my boss set me the challenge of trying one of our most popular juice cleanses - the Weekend Reset Cleanse - I finally took the leap to see what the fuss was about. How bad could 48 hours without food really be?',
    date: 'September 26, 2023',
    category: 'feature',
    imageUrl: feature
  },
  {
    _id: 2,
    title: 'Press Wellness Council: Meet Calley Mulhal',
    description:
      "Next to join our Wellness Council is science-based Nutritional Therapist and Health Coach, Kelly Mulhall. With a background in Yoga and Meditation, Kelly uses natural methods to positively balance physical and mental wellbeing. Kelly supports individuals with issues ranging from fertility, hormone imbalances weight regulation and more. We're so excited for Kelly to join our panel of experts. First of all, we caught up with Kelly for some quick-fire questions:",
    date: 'September 26, 2023',
    category: 'top-articles',
    imageUrl: ta_1
  },
  {
    _id: 2,
    title: 'Press Wellness Council: Meet Calley Mulhal',
    description:
      "Next to join our Wellness Council is science-based Nutritional Therapist and Health Coach, Kelly Mulhall. With a background in Yoga and Meditation, Kelly uses natural methods to positively balance physical and mental wellbeing. Kelly supports individuals with issues ranging from fertility, hormone imbalances weight regulation and more. We're so excited for Kelly to join our panel of experts. First of all, we caught up with Kelly for some quick-fire questions:",
    date: 'September 26, 2023',
    category: 'top-articles',
    imageUrl: ta_1
  },
  {
    _id: 2,
    title: 'Press Wellness Council: Meet Calley Mulhal',
    description:
      "Next to join our Wellness Council is science-based Nutritional Therapist and Health Coach, Kelly Mulhall. With a background in Yoga and Meditation, Kelly uses natural methods to positively balance physical and mental wellbeing. Kelly supports individuals with issues ranging from fertility, hormone imbalances weight regulation and more. We're so excited for Kelly to join our panel of experts. First of all, we caught up with Kelly for some quick-fire questions:",
    date: 'September 26, 2023',
    category: 'top-articles',
    imageUrl: ta_1
  },
  {
    _id: 2,
    title: 'Press Wellness Council: Meet Calley Mulhal',
    description:
      "Next to join our Wellness Council is science-based Nutritional Therapist and Health Coach, Kelly Mulhall. With a background in Yoga and Meditation, Kelly uses natural methods to positively balance physical and mental wellbeing. Kelly supports individuals with issues ranging from fertility, hormone imbalances weight regulation and more. We're so excited for Kelly to join our panel of experts. First of all, we caught up with Kelly for some quick-fire questions:",
    date: 'September 26, 2023',
    category: 'top-articles',
    imageUrl: ta_1
  },
  {
    _id: 2,
    title: 'Press Wellness Council: Meet Calley Mulhal',
    description:
      "Next to join our Wellness Council is science-based Nutritional Therapist and Health Coach, Kelly Mulhall. With a background in Yoga and Meditation, Kelly uses natural methods to positively balance physical and mental wellbeing. Kelly supports individuals with issues ranging from fertility, hormone imbalances weight regulation and more. We're so excited for Kelly to join our panel of experts. First of all, we caught up with Kelly for some quick-fire questions:",
    date: 'September 26, 2023',
    category: 'top-articles',
    imageUrl: ta_1
  },
  {
    _id: 2,
    title: '7 unexpected benefits of quitting caffeine',
    description:
      '‘Quit caffeine?’ You may have spat your morning cuppa all over your screen after reading that preposterous suggestion above. But seriously, we know...',
    date: 'September 24, 2023',
    category: 'latest-articles',
    imageUrl: latest_article
  },
  {
    _id: 2,
    title: '7 unexpected benefits of quitting caffeine',
    description:
      '‘Quit caffeine?’ You may have spat your morning cuppa all over your screen after reading that preposterous suggestion above. But seriously, we know...',
    date: 'September 24, 2023',
    category: 'latest-articles',
    imageUrl: latest_article
  },
  {
    _id: 2,
    title: '7 unexpected benefits of quitting caffeine',
    description:
      '‘Quit caffeine?’ You may have spat your morning cuppa all over your screen after reading that preposterous suggestion above. But seriously, we know...',
    date: 'September 24, 2023',
    category: 'latest-articles',
    imageUrl: latest_article
  },
  {
    _id: 2,
    title: '7 unexpected benefits of quitting caffeine',
    description:
      '‘Quit caffeine?’ You may have spat your morning cuppa all over your screen after reading that preposterous suggestion above. But seriously, we know...',
    date: 'September 24, 2023',
    category: 'latest-articles',
    imageUrl: latest_article
  },
  {
    _id: 2,
    title: '7 unexpected benefits of quitting caffeine',
    description:
      '‘Quit caffeine?’ You may have spat your morning cuppa all over your screen after reading that preposterous suggestion above. But seriously, we know...',
    date: 'September 24, 2023',
    category: 'latest-articles',
    imageUrl: latest_article
  },
  {
    _id: 2,
    title: '7 unexpected benefits of quitting caffeine',
    description:
      '‘Quit caffeine?’ You may have spat your morning cuppa all over your screen after reading that preposterous suggestion above. But seriously, we know...',
    date: 'September 24, 2023',
    category: 'latest-articles',
    imageUrl: latest_article
  }
];
