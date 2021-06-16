#!/bin/sh

set -xeu

if [ "$ENV" = "stage" ]; then
	export NG_CMD="yarn build-stg"
elif [ "$ENV" = "prod" ]; then
	export NG_CMD="yarn build-prod"
fi

$NG_CMD
