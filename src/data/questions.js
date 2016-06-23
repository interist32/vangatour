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
        caption: 'да',
        image: 'http://go2rest.ru/image/family/family_02.jpg'
      },
      {
        id: 2,
        caption: 'Нет',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Age_warning_symbol.svg/480px-Age_warning_symbol.svg.png'
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
        image: 'http://tverdomery.ru/assets/images/kopilka.jpg'
      },
      {
        id: 2,
        caption: 'В пределах разумного',
        image: 'https://www.google.ru/search?newwindow=1&espv=2&biw=1390&bih=633&tbm=isch&sa=1&q=%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D0%B5%D0%BA+%D1%81+%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B0%D0%BC%D0%B8&oq=%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D0%B5%D0%BA+%D1%81+%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B0%D0%BC%D0%B8&gs_l=img.3..0l6j0i30j0i5i30l3.34225.36428.0.36663.11.11.0.0.0.0.92.809.10.10.0....0...1c.1.64.img..1.10.802.vxxXbWhTHiI#imgrc=A6V65o14J3HSSM%3A'
      },
      {
        id: 3,
        caption: 'Сумма не важна',
        image: 'http://ic.pics.livejournal.com/kowalski_75/62982442/54183/54183_original.jpg'
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
        image: 'http://ic.pics.livejournal.com/kowalski_75/62982442/54183/54183_original.jpg'
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
