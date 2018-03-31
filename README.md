# AWS Lambda Node.js Starter Kit

:tada: :rocket: :pray:

## Getting Started

`npm i`

Now code something awesome :tada:

## Packaging

### Using Runtime/FileSystem/OS deps/packages that depend on them (fs/child.exec/etc..)

As you will no longer need babel/rollup/etc.. (can't bundle these kinds of things)

Remove all `devDependencies`

`rm -rf node_modules`

`npm i`

`./scipts/package_and_build.sh`

### With Pure Logic

`./scripts/build_and_zip.sh`

## Deploy

Now upload the zip or use the [aws-cli](https://aws.amazon.com/cli/) :rocket:

If your zip is larger than 10MB you have to use AWS S3 to store your function

That's it :joy:

## Helpful resources

1. [Internal Server Error API Gateway](https://aws.amazon.com/premiumsupport/knowledge-center/malformed-502-api-gateway/)
2. [API Gateway and Lambda](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html)
3. [AWS SAM Local](https://github.com/awslabs/aws-sam-local)

### Gitignore

Please check all that is gitignored :smile:
