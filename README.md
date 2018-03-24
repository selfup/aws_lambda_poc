# AWS Lambda Node.js Starter Kit

Get started after clone: `npm i`

Now code something awesome :rocket:

### Packaging

`FN=<function_name_goes_here> VERSION=<version_number_goes_her> ./scripts/build_and_zip.sh`

Ex: `FN=testing VERSION=0.0.1 ./scripts/build_and_zip.sh`

You can also use a `.env` like so:

```bash
export VERSION=0.0.1
export FN=testing
```

Or make one right away: `echo VERSION=0.0.1 >> .env && echo FN=test >> .env`

**and simply**: `source .env && ./scripts/build_and_zip.sh`

Now go to your AWS Lambda console and upload the zip!

That's it :joy:

### Gitignore

Please check all that is gitignored :smile:
