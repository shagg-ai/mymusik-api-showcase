# MyMusik API Quickstart

Use this guide when you want to control a local MyMusik music player from scripts, dashboards, or another app.

## 1. Open The API Docs

The public Swagger reference is hosted here:

```text
https://mymusik.app/swagger/
```

After downloading and starting MyMusik, the local Swagger reference is available here:

```text
http://localhost:7790/ui/swagger
```

The OpenAPI document in this repo is:

```text
openapi/doc.json
```

## 2. Start MyMusik

Install and open MyMusik on the device that owns or hosts your music library. The local API defaults to:

```text
http://localhost:7790/api
```

Use the MyMusik app settings to enable API access and create or copy an access token.

## 3. Make A Request

```bash
export MYMUSIK_TOKEN="YOUR_ACCESS_TOKEN"

curl -H "Authorization: Bearer $MYMUSIK_TOKEN" \
  http://localhost:7790/api/player
```

Start playing the first three songs returned by the API. These shell examples use `jq` to turn the returned song array into the `SongList` body expected by the player endpoints.

```bash
export MYMUSIK_API="http://localhost:7790/api"

curl -s -H "Authorization: Bearer $MYMUSIK_TOKEN" \
  "$MYMUSIK_API/song?sortBy=name&orderBy=ASC&pageIndex=0" \
  | jq '{ id: "", songs: .[0:3] }' \
  | curl -X POST "$MYMUSIK_API/player/playsongs" \
      -H "Authorization: Bearer $MYMUSIK_TOKEN" \
      -H "Content-Type: application/json" \
      --data-binary @-
```

Add recently imported songs to the queue:

```bash
curl -s -H "Authorization: Bearer $MYMUSIK_TOKEN" \
  "$MYMUSIK_API/song?sortBy=created&orderBy=DESC&pageIndex=0" \
  | jq '{ id: "", songs: .[0:10] }' \
  | curl -X POST "$MYMUSIK_API/queueitem/addsongs" \
      -H "Authorization: Bearer $MYMUSIK_TOKEN" \
      -H "Content-Type: application/json" \
      --data-binary @-
```

Control the current player:

```bash
curl -X POST -H "Authorization: Bearer $MYMUSIK_TOKEN" "$MYMUSIK_API/player/startstoptoggleplaying"
curl -X POST -H "Authorization: Bearer $MYMUSIK_TOKEN" "$MYMUSIK_API/player/nexttrack"
curl -X POST -H "Authorization: Bearer $MYMUSIK_TOKEN" "$MYMUSIK_API/player/prevtrack"
curl -X POST -H "Authorization: Bearer $MYMUSIK_TOKEN" "$MYMUSIK_API/queueitem/clear"
```

Useful starting endpoints:

- `GET /player` reads current player resources.
- `POST /player/play` begins playback for a selected song, album, artist, or playlist.
- `POST /player/playsongs` starts playback for a song list.
- `POST /queueitem/addsongs` adds songs to the queue.
- `GET /song`, `GET /album`, and `GET /playlist` browse library objects.
- `POST /audioimport/importaudiofolderpath` starts an audio folder import.

## 4. Generate Or Use A Client

Angular generated client code is included in `clients/angular`.

For Python, use the hosted package linked in `clients/python`, or regenerate from this repository:

```bash
openapi-generator-cli generate \
  -i openapi/doc.json \
  -g python \
  -o clients/python/generated
```

## 5. Keep It Local First

The API is designed to be local by default. Remote access is disabled by default and should only be enabled when you understand the network and token exposure.
