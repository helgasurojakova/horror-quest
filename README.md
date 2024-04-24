For Docker PROD:

docker build -t quest .

docker run -d -p 127.0.0.1:3000:3000 --restart unless-stopped quest

## Ngrok
Для тестирования локальной мобилки, вывести локальный результат в интернет, предоставляет хостинг на временном DNS, сайт - https://ngrok.com/download
Linux:
```bash
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
sudo tar xvzf ./ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
ngrok config add-authtoken 'auth_token'
ngrok http 3000
```
Windows: 
- Скачать и разархивировать https://ngrok.com/download
- Открыть Powershell, перейти в разархивированную директорию с ngrok.exe
- ngrok.exe http 3000

https://dashboard.ngrok.com/tunnels/agents - с vpn, можно удалять сессии



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
