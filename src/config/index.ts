export const quests = [
  {
    key: 'amok',
    status: 'active',
    title: 'АМОК',
    intro: `С 90-х годов доктор Марин исследовал опасное психическое заболевание. Одной девушке удалось выжить, и она утверждает, что эксперимент АМОК вышел из под контроля…`,
    description: `С 90-х годов доктор психиатрических наук Марин Дмитрий Сергеевич долгое время проводил эксперименты над больными 
    страшным психическим заболеванием под названием АМОК, характеризующимся резким двигательным возбуждением и агрессивными действиями, беспричинными нападениями на людей. 
    Изуродованные и убитые тела людей находили в разных точках Калининградской области. Однако одной девушке удалось выжить, и она утверждает, что эксперимент вышел из под контроля…`,
    playersCount: '2 – 6',
    time: 60,
    price: 5000,
    ageLimit: 16,
    comment: 'Квест с элементами перформанса.',
    ageComment: '16+ (с 14 лет в сопровождении взрослых)',
    priceComment:
      'Стоимость игры для команды от 2 до 4 человек – 5000 рублей. Доплата за дополнительного игрока – 1000 рублей',
  },
  {
    key: 'fortuneteller',
    status: 'development',
    title: 'Гадалка',
    intro: `В первые с гастролями в Калининграде выступит известная черновая гадалка и сильная потомственная ведьма в пятом поколении - Эльвира. 
    Собрав команду близких людей, вы решились и пришли на сеанс. Сели, взялись за руки и...`,
    description: `В первые с гастролями в Калининграде выступит известная черновая гадалка и сильная потомственная ведьма в пятом поколении - Эльвира. 
    Собрав команду близких людей, вы решились и пришли на сеанс. Сели, взялись за руки и...`,
    playersCount: '2 – 6',
    time: 60,
    price: 5000,
    ageLimit: 16,
    comment: 'Квест с элементами перформанса.',
    ageComment: '16+ (с 14 лет в сопровождении взрослых)',
    priceComment:
      'Стоимость игры для команды от 2 до 4 человек – 5000 рублей. Доплата за дополнительного игрока – 1000 рублей',
  },
  {
    key: 'collector',
    status: 'view',
    title: 'Комната просмотров',
    intro: '',
    description: '',
    playersCount: '',
    time: 60,
    price: 5000,
    ageLimit: 16,
    comment: '',
    ageComment: '',
    priceComment: '',
  },
]

export const contacts = {
  phone: process.env.REACT_APP_PHONE_NUMBER,
  phoneLink: `tel:+${process.env.REACT_APP_PHONE_NUMBER}`,
  telegram: `https://t.me/+${process.env.REACT_APP_PHONE_NUMBER}`,
  whatsapp: `https://wa.me/+${process.env.REACT_APP_PHONE_NUMBER}`,
  vk: process.env.REACT_APP_VK_LINK,
  email: process.env.REACT_APP_EMAIL,
  emailLink: `mailto:${process.env.REACT_APP_EMAIL}`,
  adderss: process.env.REACT_APP_ADDRESS,
  yandexMapLink: process.env.REACT_APP_YANDEX_MAP_LINK,
}
