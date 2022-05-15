#!/bin/sh

ENV=dev

if [ $ENV = production ]; then
    npm run build:prod
else
    npm run build
fi