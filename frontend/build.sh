#!/bin/bash

APP_NAME=$(cat package.json | grep -oPm1 '(?<=name": ")[^"<]+')
echo ${APP_NAME}


if [[ $1 = "prod" ]]
then
  echo "PROD version of image is being built"
  sed -i "s/^ENV=.*/ENV=prod/" compile.sh
else
  echo "DEV version of image is being built"
  sed -i "s/^ENV=.*/ENV=dev/" compile.sh
fi

if [[ -z $2 ]]; then
  APP_VERSION=$(cat package.json | grep -oPm1 '(?<=version": ")[^"<]+')
  echo ${APP_VERSION}
else
  APP_VERSION=$2
fi


docker build --network host -t campoo/${APP_NAME}:${APP_VERSION} .
