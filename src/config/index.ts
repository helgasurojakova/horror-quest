export const quests = [
  {
    key: 'amok',
    status: 'active',
    title: 'АМОК',
    type: 'Квест',
    intro: `С 90-х годов доктор Марин исследовал опасное психическое заболевание. Одной девушке удалось выжить, и она утверждает, что эксперимент АМОК вышел из под контроля…`,
    ageLimit: '16+',
    ageComment: '16+ (с 14 лет в сопровождении взрослых)',
    previewData: [
      {
        key: 'playersCount',
        title: 'Игроков',
        value: '2 – 6',
      },
      {
        key: 'time',
        title: 'Время',
        value: '60 мин',
      },
      {
        key: 'price',
        title: 'Цена',
        value: 'от 5000 ₽',
      },
      {
        key: 'ageLimit',
        title: 'Возраст',
        value: '16+',
      },
    ],
    data: [
      {
        key: 'description',
        title: 'Описание',
        value: `С 90-х годов доктор психиатрических наук Марин Дмитрий Сергеевич долгое время проводил эксперименты над больными страшным психическим заболеванием под названием АМОК, характеризующимся резким двигательным возбуждением и агрессивными действиями, беспричинными нападениями на людей. Изуродованные и убитые тела людей находили в разных точках Калининградской области. Однако одной девушке удалось выжить, и она утверждает, что эксперимент вышел из под контроля…`,
      },
      {
        key: 'features',
        title: 'Особенности',
        value: 'Квест с элементами перформанса.',
      },
      {
        key: 'price',
        title: 'Цены',
        value:
          'Стоимость игры для команды от 2 до 4 человек – 5000 рублей. Доплата за дополнительного игрока – 1000 рублей.',
      },
      {
        key: 'restrictions',
        title: 'Ограничения',
        value: `Квест нельзя проходить людям с астмой и эпилепсией. Если у вас имеются противопоказания к активным спортивным играм, а также травмы, обязательно уведомите об этом оператора.  Запрещено посещение перформанса в состоянии алкогольного или другого опьянения. В случае неадекватного и агрессивного поведения персонал в праве отказать команде в прохождении проекта.`,
      },
    ],
  },
  {
    key: 'fortuneteller',
    status: 'development',
    title: 'Гадалка',
    type: 'Квест',
    intro: `В первые с гастролями в Калининграде выступит известная черновая гадалка и сильная потомственная ведьма в пятом поколении - Эльвира. 
    Собрав команду близких людей, вы решились и пришли на сеанс. Сели, взялись за руки и...`,
    ageLimit: '16+',
    ageComment: '16+ (с 14 лет в сопровождении взрослых)',
    previewData: [
      {
        key: 'playersCount',
        title: 'Игроков',
        value: '2 – 6',
      },
      {
        key: 'time',
        title: 'Время',
        value: '60 мин',
      },
      {
        key: 'price',
        title: 'Цена',
        value: 'от 5000 ₽',
      },
      {
        key: 'ageLimit',
        title: 'Возраст',
        value: '16+',
      },
    ],
    data: [
      {
        key: 'description',
        title: 'Описание',
        value: `В первые с гастролями в Калининграде выступит известная черновая гадалка и сильная потомственная ведьма в пятом поколении - Эльвира. 
        Собрав команду близких людей, вы решились и пришли на сеанс. Сели, взялись за руки и...`,
      },
      {
        key: 'features',
        title: 'Особенности',
        value: 'Квест с элементами перформанса.',
      },
      {
        key: 'price',
        title: 'Цены',
        value:
          'Стоимость игры для команды от 2 до 4 человек – 5000 рублей. Доплата за дополнительного игрока – 1000 рублей',
      },
    ],
  },
  {
    key: 'observation',
    status: 'active',
    title: 'Комната просмотров',
    type: '',
    intro:
      'Для просмотра за прохождением квеста вашими друзьями, наша просторная комната, оборудованная телевизором и камином.',
    ageLimit: '0+',
    ageComment: '16+ (с 14 лет в сопровождении взрослых)',
    previewData: [
      {
        key: 'guestsCount',
        title: 'Вмещаемость',
        value: '12 человек',
      },
      {
        key: 'ageLimit',
        title: 'Возраст',
        value: '0+',
      },
    ],
    data: [
      {
        key: 'description',
        title: 'Описание',
        value: `Для просмотра за прохождением квеста вашими друзьями, наша просторная комната, оборудованная телевизором и камином. Также зал способен подарить приятную атмосферу для любого мероприятия. Наше пространство отлично подойдет для проведения частных мероприятий, семейных праздников и дней рождений, а также для творческих мероприятий, кинопросмотров, тренингов и мастер-классов.`,
      },
      {
        key: 'features',
        title: 'Особенности',
        value: `• Вместимость до 12 человек
        • Доп. услуга кейтеринга
        • Доп. услуга аниматора для маленьких детей
        • Доп. услуга украшения зала
        • Уникальное место для организации мероприятия
        • Телевизор 
        • Камин`,
      },
      {
        key: 'restrictions',
        title: 'Ограничения',
        value:
          'Запрещено посещение смотровой в состоянии алкогольного или другого опьянения. В случае неадекватного и агрессивного поведения персонал в праве отказать в дальнейшем времяпровождения.',
      },
    ],
  },
]

export const contacts = {
  phone: process.env.REACT_APP_PHONE_NUMBER,
  phoneLink: `tel:+${process.env.REACT_APP_PHONE_NUMBER}`,
  telegram: process.env.REACT_APP_TELEGRAM,
  whatsapp: process.env.REACT_APP_WHATSAPP,
  vk: process.env.REACT_APP_VK_LINK,
  email: process.env.REACT_APP_EMAIL,
  emailLink: `mailto:${process.env.REACT_APP_EMAIL}`,
  adderss: process.env.REACT_APP_ADDRESS,
  yandexMapLink: process.env.REACT_APP_YANDEX_MAP_LINK,
}
