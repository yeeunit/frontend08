FROM ubuntu:22.04

RUN mkdir qqq

COPY . /class_build/
WORKDIR /class_build/


RUN yarn install
RUN yarn build

CMD yarn start 

