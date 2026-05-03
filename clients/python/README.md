# MyMusik Python Client

The generated music-player Python package was not present in this checkout, so this public showcase links to the hosted client and keeps this folder ready for a generated package.

Hosted ZIP:

```text
https://shaggai.net/python_client/client/mymusik_python_client.zip
```

## Generate Locally

You can regenerate a Python client from the included OpenAPI spec:

```bash
openapi-generator-cli generate \
  -i ../../openapi/doc.json \
  -g python \
  -o generated
```

## Example Shape

```python
import openapi_client

configuration = openapi_client.Configuration(
    host="http://localhost:7790/api",
    access_token="YOUR_ACCESS_TOKEN"
)

with openapi_client.ApiClient(configuration) as api_client:
    player_api = openapi_client.PlayerApi(api_client)
    players = player_api.service_player_get_page()
    print(players)
```

Keep generated files here only when they are generated from the MyMusik music-player OpenAPI document, not from the broader device-client API.
