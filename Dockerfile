FROM node:14-alpine
WORKDIR /usr/app

# copy the built code
COPY dist/ ./

# deploy using pm2
RUN npm i -g http-server
EXPOSE 5000
CMD ["http-server", ".", "--port", "5000", "-c-1", "--proxy", "http://pktqvgj74h4g.cloud.wavemakeronline.com/Tutorial"]