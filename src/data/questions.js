const questions = [
  {
    id: 1,
    title: 'Выберите страну, в которую хотите поехать:',
    variants: [
      {
        id: 1,
        caption: 'Россия',
        image: '/i/crimea.jpg'
      },
      {
        id: 2,
        caption: 'Тунис',
        image: '/i/tunisia.jpg'
      },
      {
        id: 3,
        caption: 'Греция',
        image: '/i/greece.jpg'
      },
      {
        id: 4,
        caption: 'Болгария',
        image: '/i/bulgaria.jpg'
      },
      {
        id: 5,
        caption: 'Черногория',
        image: '/i/montenegro.jpg'
      },
      {
        id: 6,
        caption: 'Кипр',
        image: '/i/cyprus.jpg'
      },
      {
        id: 7,
        caption: 'Испания',
        image: '/i/spain.jpg'
      },
      {
        id: 8,
        caption: 'Любая страна',
        image: '/i/any_country.jpg'
      },
    ]
  },
  {
    id: 2,
    title: 'Вы едете с детьми?',
    variants: [
      {
        id: 1,
        caption: 'Да',
        image: '/i/2_yes.jpg'
      },
      {
        id: 2,
        caption: 'Нет',
        image: '/i/2_no.jpg'
      }
    ]
  },
  {
    id: 3,
    title: 'Сколько вы готовы потратить на путешествие?',
    variants: [
      {
        id: 1,
        caption: 'Экономично',
        image: '/i/3_1.jpg'
      },
      {
        id: 2,
        caption: 'В пределах разумного',
        image: '/i/3_2.jpg'
      },
      {
        id: 3,
        caption: 'Сумма не важна',
        image: '/i/3_3.jpg'
      },
    ]
  },
  {
    id: 4,
    title: 'В каком отеле вы бы хотели остановиться?',
    variants: [
      {
        id: 1,
        caption: 'В небольшом и уютном',
        image: '/i/4_1.jpg'
      },
      {
        id: 2,
        caption: 'В современном, комфортабельном и дорогом',
        image: '/i/4_2.jpg'
      },
      {
        id: 3,
        caption: 'В любом',
        image: '/i/4_3.jpg'
      },
    ]
  },
  {
    id: 5,
    title: 'Какой пляж вы предпочитаете?',
    variants: [
      {
        id: 1,
        caption: 'Песчаный',
        image: '/i/5_1.jpg'
      },
      {
        id: 2,
        caption: 'Галечный',
        image: '/i/5_2.jpeg'
      },
      {
        id: 3,
        caption: 'Любой',
        image: '/i/5_3.jpg'
      },
    ]
  },
  {
    id: 6,
    title: 'Далеко ли может быть море?',
    variants: [
      {
        id: 1,
        caption: 'В шаговой доступности',
        image: '/i/6_1.jpg'
      },
      {
        id: 2,
        caption: 'Можно прогуляться',
        image: '/i/6_2.jpg'
      },
    ]
  },
  {
    id: 7,
    title: 'Какой отдых вы предпочитаете?',
    variants: [
      {
        id: 1,
        caption: 'Спокойный и размеренный',
        image: '/i/7_1.jpg'
      },
      {
        id: 2,
        caption: 'Активный и энергичный',
        image: '/i/7_2.jpg'
      },
    ]
  }
];

export default questions;
