# build stage
FROM node as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/mfish-nocode-view /usr/share/nginx/html/mfish-nocode-view
COPY --from=build-stage /app/config/mfish-nocode-view.conf /etc/nginx/conf.d/mfish-nocode-view.conf
EXPOSE 5186
CMD ["nginx", "-g", "daemon off;"]
