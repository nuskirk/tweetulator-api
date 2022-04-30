# Tweetulator API
Spec:
Host URL: https://tweetulator-api.vercel.app/
Get all messages - GET https://tweetulator-api.vercel.app/api/v1/messages
Create a message - POST https://tweetulator-api.vercel.app/api/v1/messages
Payload:
```
{
    "parentId": string || null,
    "text": string,
    "writer": string
}
```

## How to run on local development

- Create `.env` and copy the content from `.env.example`
- Run `docker-compose up`
- Visit http://localhost:5000

## Server Architecture

```
+-- tweetulator-api -  API codebase
|   +-- api
|   |  +-- transporters - handle resquest and response from http
|   |  +-- constants
|   |  +-- handlers - handle logic.
|   |  |  +-- interfaces - handler interfaces
|   |  +-- routes - defines api routes
|   +-- database
|   |  +-- index.ts - setup, config database
|   |  +-- models - defines models.
|   |  |  +-- interfaces - model interfaces
|   |  +-- stores - export the repositories.
|   |  |  +-- interfaces - store interfaces
|   +-- package.json
|   +-- .env.example
|   +-- ...
```

Notes:
- Using Vercel serverless functions
- Using Mongodb atlas
- Handle simple operator: plus+, minus-, multiple*, divide/
