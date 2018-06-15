# Serverless Starter
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A Serverless starter that adds ES7 syntax, serverless-offline, environment variables, and unit test support.

## Requirement

You need a `.env` file with those two variable set :

`AWS_ACCESS_KEY_ID` : Your AWS Key ID

`AWS_SECRET_ACCESS_KEY` : Your AWS Secret Access Key

## Usage

`npm run test`: Run unit testing on target function.

`npm run prod_deploy`: Deploy function to AWS Lamba, on production enviropnment

`npm run dev_deploy`: Deploy function to AWS Lambda, on development enviropnment

`offline_server`: Start a local serverless server for local development (watching JS file modification)

`offline_invoke`: Build and execute your function on local serverless server

## Exemple

With your local server running :

`curl -X POST -H "Content-Type:application/json"  -d '{"message":"hello world!"}' http://localhost:3000/main`

## Credits

Forked from [AnomalyInnovations](https://github.com/AnomalyInnovations/serverless-nodejs-starter)
