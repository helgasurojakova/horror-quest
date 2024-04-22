/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_PHONE_NUMBER: process.env.REACT_APP_PHONE_NUMBER,
    REACT_APP_EMAIL: process.env.REACT_APP_EMAIL,
    REACT_APP_VK_LINK: process.env.REACT_APP_VK_LINK,
    REACT_APP_ADDRESS: process.env.REACT_APP_ADDRESS,
    REACT_APP_YANDEX_MAP_LINK: process.env.REACT_APP_YANDEX_MAP_LINK,
  }
};

export default nextConfig;
