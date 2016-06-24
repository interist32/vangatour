const questions = [
  {
    id: 1,
    title: 'Выберите страну, куда хотите поехать?',
    variants: [
      {
        id: 1,
        caption: 'Россия',
        image: 'http://www.gotours.pro/images/krym1.jpg'
      },
      {
        id: 2,
        caption: 'Тунис',
        image: 'http://www.ice-nut.ru/tunisia/bgimg.jpg'
      },
      {
        id: 3,
        caption: 'Греция',
        image: 'http://mger2020.ru/sites/default/files/greciya_0.jpg'
      },
      {
        id: 4,
        caption: 'Болгария',
        image: 'http://goturist.ru/wp-content/uploads/2015/03/%D0%92%D0%B0%D1%80%D0%BD%D0%B0.jpg'
      },
      {
        id: 5,
        caption: 'Черногория',
        image: 'http://turtella.ru/photos/615/l123126.jpg'
      },
      {
        id: 6,
        caption: 'Кипр',
        image: 'http://static.tonkosti.ru/images/c/ce/%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE_%D0%9A%D0%B8%D0%BF%D1%80%D0%B0.jpg'
      },
      {
        id: 7,
        caption: 'Испания',
        image: 'http://snovadoma.ru/media/photos/b3326cf9249de64a4950b7f6f55699dc.jpg'
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
        image: 'http://go2rest.ru/image/family/family_02.jpg'
      },
      {
        id: 2,
        caption: 'Нет',
        image: 'http://www.honeymoonmaldives.com/blog/wp-content/uploads/2016/05/couple-on-beach.jpg'
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
        image: 'http://www.tio.by/datas/photos/page_30766.jpg'
      },
      {
        id: 2,
        caption: 'В пределах разумного',
        image: 'https://angeliquepanagos.com/wp-content/uploads/2015/08/balance.jpg'
      },
      {
        id: 3,
        caption: 'Сумма не важна',
        image: 'http://beingclassicallyliberal.liberty.me/wp-content/uploads/sites/843/2014/05/10255205_1490776091133960_7426704659073512688_n.jpg'
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
        image: 'http://q-ak.bstatic.com/images/hotel/840x460/528/52843398.jpg'
      },
      {
        id: 2,
        caption: 'В современном, комфортабельном и дорогом',
        image: 'http://trendy.social/wp-content/uploads/2014/09/Hotel-Dubai-4.jpg'
      },
      {
        id: 3,
        caption: 'В любом',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Numbers_341_to_385_Lordship_Lane_N17.jpg'
      },
    ]
  },
  {
    id: 5,
    title: 'Пляж должен быть песчаным?',
    variants: [
      {
        id: 1,
        caption: 'Да',
        image: 'http://20meridian.ru/sites/default/files/plyazh-yantarnogo-kaliningradskoy-oblasti.jpg'
      },
      {
        id: 2,
        caption: 'Нет',
        image: 'http://www.3d-madonnari.com/wp-content/uploads/2015/11/Glass-beach-in-California-photo-5.jpg'
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
        image: 'https://pp.vk.me/c635102/v635102418/6ee3/Fl1evwa1xZw.jpg'
      },
      {
        id: 2,
        caption: 'Можно прогуляться',
        image: 'https://pp.vk.me/c635102/v635102418/dff4/80MqTy4XiSk.jpg'
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
        image: 'https://pp.vk.me/c635100/v635100982/1499c/QEY_0mNK7l0.jpg'
      },
      {
        id: 2,
        caption: 'Активный и энергичный',
        image: 'http://b2club.ru/data/Image/disco-2000.jpg'
      },
    ]
  }
];

export default questions;
