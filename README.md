# Прод: questkaliningrad.ru


docker build -t quest-v26 .
docker run -d -p 127.0.0.1:3000:3000 --restart unless-stopped quest-v26



Схема: Docker-контейнер (Next.js, `127.0.0.1:3000`) → nginx (443, SSL Let's Encrypt) → интернет.
Проект на сервере лежит в `/opt/quest`.

## Обновление сайта

```bash
ssh quest
cd /opt/quest && git pull && docker compose up -d --build && docker image prune -f
```

Логи: `docker compose logs --tail 50`

## Как сервер был развёрнут (миграция 2026-10)

### SSH-доступ (локально, в WSL)
```bash
ssh-keygen -t ed25519 -C "quest-server" -f ~/.ssh/quest
ssh-copy-id -i ~/.ssh/quest.pub root@NEW_IP
printf 'Host quest\n  HostName NEW_IP\n  User root\n  IdentityFile ~/.ssh/quest\n' >> ~/.ssh/config
```
На сервере вход по паролю отключён. Файл должен называться `00-…`, потому что sshd берёт первое значение, а `50-cloud-init.conf` иначе перебивает:
```bash
printf 'PasswordAuthentication no\nPermitRootLogin prohibit-password\nKbdInteractiveAuthentication no\n' > /etc/ssh/sshd_config.d/00-hardening.conf
systemctl restart ssh
sshd -T | grep -Ei 'passwordauth|permitroot'   # проверка
```

### Перенос со старого сервера
На старом (без флага `h`, иначе сломаются симлинки certbot):
```bash
tar czf /root/migrate.tgz /etc/letsencrypt /etc/nginx/robots.txt /etc/nginx/sitemap.xml
```
Через локальную машину: `scp OLD:/root/migrate.tgz /tmp/ && scp /tmp/migrate.tgz quest:/root/`

### Установка на новом сервере
```bash
apt update && apt install -y nginx certbot python3-certbot-nginx git ufw
curl -fsSL https://get.docker.com | sh
tar xzf /root/migrate.tgz -C / && rm /etc/nginx/sites-enabled/default
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw --force enable
git clone https://github.com/helgasurojakova/horror-quest.git /opt/quest
```

### Запуск контейнера
`/opt/quest/docker-compose.yml`:
```yaml
services:
  web:
    build: .
    restart: unless-stopped
    ports: ["127.0.0.1:3000:3000"]
    env_file: .env
```
```bash
cd /opt/quest && touch .env && docker compose up -d --build
curl -sI http://127.0.0.1:3000 | head -1   # ожидается 200
```

### Nginx
`/etc/nginx/conf.d/perf.conf`:
```nginx
server_tokens off;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
```
`/etc/nginx/conf.d/questkaliningrad.ru.conf`. Версия nginx старая, поэтому `listen 443 ssl http2;`, а не `http2 on;`:
```nginx
server {
    listen 80;
    server_name questkaliningrad.ru www.questkaliningrad.ru;
    return 301 https://questkaliningrad.ru$request_uri;
}
server {
    listen 443 ssl http2;
    server_name questkaliningrad.ru;
    ssl_certificate /etc/letsencrypt/live/questkaliningrad.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/questkaliningrad.ru/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    add_header Strict-Transport-Security "max-age=31536000" always;

    location = /robots.txt  { alias /etc/nginx/robots.txt; }
    location = /sitemap.xml { alias /etc/nginx/sitemap.xml; }

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
```bash
nginx -t && systemctl reload nginx
```

### Переключение DNS и сертификаты
1. Проверка до смены DNS (локально): `curl -kI --resolve questkaliningrad.ru:443:NEW_IP https://questkaliningrad.ru`
2. Запись A `questkaliningrad.ru` (и `www`) → новый IP. Проверка: `dig +short questkaliningrad.ru @8.8.8.8`
3. Сертификат с www и проверка автообновления (`certbot.timer` уже включён):
   ```bash
   certbot --nginx --expand -d questkaliningrad.ru -d www.questkaliningrad.ru
   certbot renew --dry-run
   ```
4. Через 1–2 дня на старом сервере: `docker stop competent_chaum`

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
- Открыть Powershell, перейти в разархивированную директорию с ngrok.exe, выполнить:
```
ngrok.exe config add-authtoken 'auth_token'
ngrok.exe http 3000
```
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
