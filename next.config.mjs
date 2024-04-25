/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_PHONE_NUMBER: process.env.REACT_APP_PHONE_NUMBER,
    REACT_APP_EMAIL: process.env.REACT_APP_EMAIL,
    REACT_APP_VK_LINK: process.env.REACT_APP_VK_LINK,
    REACT_APP_ADDRESS: process.env.REACT_APP_ADDRESS,
    REACT_APP_YANDEX_MAP_LINK: process.env.REACT_APP_YANDEX_MAP_LINK,
    REACT_APP_TELEGRAM: process.env.REACT_APP_TELEGRAM,
    REACT_APP_WHATSAPP: process.env.REACT_APP_WHATSAPP,
  },
  // Добавляем скрипт Яндекс.Метрики в head
  head: {
    script: [
      {
        src: 'https://mc.yandex.ru/metrika/tag.js',
        async: true,
        defer: true
      },
      {
        innerHTML: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(97134923, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });

          // Отправляем данные о посещении текущей страницы
          ym(97134923, "hit", window.location.pathname + window.location.search);
        `,
        type: 'text/javascript',
        charset: 'utf-8',
        defer: true
      }
    ]
  }
};

export default nextConfig;
