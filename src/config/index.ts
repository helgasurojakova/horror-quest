export const quests = [
  {
    key: 'collector',
    status: 'active',
    title: 'Коллекционер',
    intro: 'ЗАПОЛНИ!!!',
    description: `На улице Клинической в заброшенном здании обнаружили логово маньяка
    с телами жертв. Последнюю пропавшую девушку найти не удалось.
    Возможно, она еще жива... Мы надеемся, что вам удастся ее отыскать и
    не стать очередной жертвой маньяка.`,
    playersCount: '2 – 6',
    time: 60,
    price: 4000,
    ageLimit: 16,
    comment: '2 актера.',
    ageComment: '16+ (с 12 лет в сопровождении взрослых)',
    priceComment:
      'Стоимость игры для команды от 2 до 4 человек – 4000 рублей. Доплата за дополнительного игрока – 1000 рублей',
  },
  {
    key: 'meggi',
    status: 'active',
    title: 'Проклятие Мэгги',
    intro: 'ЗАПОЛНИ!!!',
    description: `Окунись в атмосферу страха и стань главным персонажем жуткой истории
    о проклятой Мэгги. Какие тайны она скрывает? Пройди все испытания,
    проявив свои лучшие качества!`,
    playersCount: '2 – 6',
    time: 60,
    price: 4000,
    ageLimit: 16,
    comment: 'Квест с элементами перформанса.',
    ageComment: '16+ (с 14 лет в сопровождении взрослых)',
    priceComment:
      'Стоимость игры для команды от 2 до 4 человек – 4000 рублей. Доплата за дополнительного игрока – 1000 рублей',
  },
  {
    key: 'fortuneteller',
    status: 'development',
    title: 'Гадалка',
    intro: 'ЗАПОЛНИ!!!',
    description: '',
    playersCount: '2 – 6',
    time: 60,
    price: 4000,
    ageLimit: 16,
    comment: 'Квест с элементами перформанса.',
    ageComment: '16+ (с 14 лет в сопровождении взрослых)',
    priceComment:
      'Стоимость игры для команды от 2 до 4 человек – 4000 рублей. Доплата за дополнительного игрока – 1000 рублей',
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
