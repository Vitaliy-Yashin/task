FROM node:18-alpine

WORKDIR /app

RUN adduser -D -u 1021 testuser

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN chown -R testuser:testuser /app

USER testuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \ 
  CMD node -e "require('http').get('http://localhost:5000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["npm", "run", "dev"]
