# Authentication

The MyMusik API uses bearer access tokens.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Local Default

The default local API URL is:

```text
http://localhost:7790/api
```

Remote access is disabled by default. Enable it only if you intentionally want another device, dashboard, or service on your network to call the API.

## Curl Example

```bash
curl -H "Authorization: Bearer $MYMUSIK_TOKEN" \
  http://localhost:7790/api/song
```

## Client Notes

For generated clients, configure the same base URL and token:

- Base URL: `http://localhost:7790/api`
- Auth header: `Authorization: Bearer <token>`

Do not commit tokens, `.env` files, private installer config, or deployment credentials to a public repo.
