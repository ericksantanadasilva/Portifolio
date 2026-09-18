# Guia de Deploy na VPS (com Docker)

Este projeto já está configurado para deploy imediato em qualquer VPS (Ubuntu, Debian, etc.) com **Docker** e **Docker Compose**, utilizando o modo **standalone** do Next.js (gerando uma imagem leve e rápida).

---

## 🛠️ Como Subir na VPS

### 1. Clonar ou transferir o repositório para a VPS
Na sua VPS Linux, clone o repositório ou envie os arquivos para uma pasta:
```bash
git clone <URL_DO_SEU_REPOSITORIO> ~/portfolio
cd ~/portfolio
```

### 2. Subir com Docker Compose
Para compilar a imagem e iniciar o container em segundo plano:
```bash
docker compose up -d --build
```

O container subirá na porta `3000`.

### 3. Verificar status do container
```bash
docker compose ps
docker compose logs -f portfolio
```

### 4. Parar ou reiniciar
- **Reiniciar:** `docker compose restart`
- **Parar:** `docker compose down`
- **Atualizar após alterações:**
  ```bash
  git pull
  docker compose up -d --build
  ```

---

## 🌐 Configuração do Nginx Reverse Proxy com SSL (Opcional & Recomendado)

Para acessar seu portfólio via seu domínio (ex: `https://seusite.com`):

1. Instale o Nginx e Certbot na VPS:
   ```bash
   sudo apt update
   sudo apt install -y nginx certbot python3-certbot-nginx
   ```

2. Crie um arquivo de configuração no Nginx:
   ```bash
   sudo nano /etc/nginx/sites-available/portfolio
   ```

   Insira o seguinte conteúdo:
   ```nginx
   server {
       server_name seusite.com www.seusite.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. Ative o site e reinicie o Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. Gere o certificado SSL gratuito com Certbot:
   ```bash
   sudo certbot --nginx -d seusite.com -d www.seusite.com
   ```

---

## 💻 Desenvolvimento Local no Windows (Sem Docker)

No seu computador local, você não precisa de Docker. Basta executar:
```bash
npm run dev
```
Acesse em: `http://localhost:3000`

Para editar suas informações pessoais, tecnologias, links e projetos, basta alterar o arquivo:
`src/data/portfolio.ts`
