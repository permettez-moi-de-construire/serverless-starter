# Serverless Starter
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A Serverless starter that adds ES7 syntax, serverless-offline, environment variables, and unit test support.

## Requirement

You need a `.env` file with those two variable set :

`AWS_ACCESS_KEY_ID` : Your AWS Key ID

`AWS_SECRET_ACCESS_KEY` : Your AWS Secret Access Key

## Usage

`npm run test`: Run unit testing on target function.

`npm run deploy`: Deploy funciton to serverless.

`offline_server`: Start a local serverless server for local development

`offline_invoke`: Build and execute your function on local serverless server.

## Credits

Inspirted by repository from [AnomalyInnovations](https://github.com/AnomalyInnovations/serverless-nodejs-starter)
