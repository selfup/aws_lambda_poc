# AWS Lambda Node.js Starter Kit

**_DISCLAIMER_**

_Npm scripts and rollup bundling not for pulling in std lib or runtime deps, purely for logic and keeping the footprint small_

_If you are going to us `fs` or something of similar nature (deps that depend on it too) just_:

`zip -r index.zip ./`

_This will be mega bloated as it pulls in your node modules, and you will very quickly exceed the 10MB limit and you will need to ship your zip to S3_

## Getting Started

`npm i`

Now code something awesome :tada:

## Packaging

`./scripts/build_and_zip.sh`

Now upload the zip or use the [aws-cli](https://aws.amazon.com/cli/) :rocket:

That's it :joy:

## Helpful resources

1. [Internal Server Error API Gateway](https://aws.amazon.com/premiumsupport/knowledge-center/malformed-502-api-gateway/)
2. [API Gateway and Lambda](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html)
3. [AWS SAM Local](https://github.com/awslabs/aws-sam-local)

### Gitignore

Please check all that is gitignored :smile:
