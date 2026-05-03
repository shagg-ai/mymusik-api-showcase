# MyMusik Python API Client

This folder contains the generated Python client for the MyMusik music-player API.

Generated package:

```text
mymusik_client
```

Default API root:

```text
http://localhost:7790/api
```

Hosted ZIP from the MyMusik website:

```text
https://shaggai.net/python_client/client/mymusik_python_client.zip
```

## Install Locally

From this folder:

```bash
python -m pip install -e .
```

Or after this repository is public:

```bash
python -m pip install "git+https://github.com/shagg-ai/mymusik-api-showcase.git#subdirectory=clients/python"
```

## Player Example

This example fetches real `Song` objects, starts playback for the first three, queues more songs, and advances to the next track.

```python
import mymusik_client
from mymusik_client.rest import ApiException

configuration = mymusik_client.Configuration(
    host="http://localhost:7790/api",
    access_token="YOUR_ACCESS_TOKEN",
)

with mymusik_client.ApiClient(configuration) as api_client:
    songs_api = mymusik_client.SongApi(api_client)
    player_api = mymusik_client.PlayerApi(api_client)
    queue_api = mymusik_client.QueueItemApi(api_client)

    try:
        songs = songs_api.service_song_get_page(
            sort_by="name",
            order_by="ASC",
            page_index=0,
        )

        player_api.service_player_play_songs(
            song_list=mymusik_client.SongList(id="", songs=songs[:3])
        )

        queue_api.service_queue_item_add_songs(
            song_list=mymusik_client.SongList(id="", songs=songs[3:10])
        )

        player_api.service_player_next_track()
    except ApiException as exc:
        print(f"MyMusik API error: {exc}")
```

## Useful APIs

- `PlayerApi`: playback, next/previous track, seek, playback rate.
- `QueueItemApi`: queue songs, clear queue, shuffle, set queue contents.
- `SongApi`: browse and update songs.
- `AlbumApi`: browse albums and album song lists.
- `PlaylistApi`: create and manage playlists.
- `AudioImportApi`: trigger audio imports.
- `SynchronisationApi`: start and monitor sync flows.

The generated endpoint reference lives in `docs/`, and the source OpenAPI document is `../../openapi/doc.json`.

## Regenerate

From the repository root:

```bash
openapi-generator-cli generate \
  -i openapi/doc.json \
  -g python \
  -o clients/python \
  --additional-properties=packageName=mymusik_client,projectName=mymusik-client,packageVersion=0.1.0,packageUrl=https://github.com/shagg-ai/mymusik-api-showcase
```
