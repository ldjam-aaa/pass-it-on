FROM node:13-alpine

LABEL maintainer="The Pass It On Authors"

WORKDIR /app

# Set Environment Variables
ENV PORT=3000

COPY . .

RUN npm ci && npm run attributions && npm run build:prod
ENTRYPOINT [""]
CMD ["npm", "start"]
