# API Patterns

The MyMusik API is object based. Most resources share a predictable CRUD pattern, with action endpoints added for music-player workflows.

## Resource Pattern

For a resource such as `song`, `album`, `playlist`, or `queueitem`, expect endpoints like:

```text
GET    /resource
GET    /resource/{id}
POST   /resource
PUT    /resource/{id}
DELETE /resource/{id}
```

`POST` creates a resource. `PUT` updates a complete resource. Inserts and updates expect full objects; empty values are allowed where the schema allows them.

## Filtering And Paging

Page endpoints accept filter and sorting query parameters such as:

```text
filterName
values
sortBy
orderBy
pageIndex
```

Some predefined filters follow a pattern like:

```text
<ObjectName>By<PropertyName>
```

Use the hosted Swagger reference to inspect available filters, parameters, and response schemas for each resource.

## Music Actions

Music-player workflows use action endpoints in addition to CRUD. Common areas include:

- Playback: `/player/play`, `/player/playsongs`, `/player/startplaying`, `/player/stopplaying`, `/player/nexttrack`, `/player/prevtrack`, `/player/seek`
- Queue: `/queueitem/addsongs`, `/queueitem/clear`, `/queueitem/shuffle`, `/queueitem/setqueuewithsongs`
- Library: `/song`, `/album`, `/playlist`, `/musicsearch`
- Import: `/audioimport/importaudiofolderpath`, `/audioimport/openaudiofolderdialog`
- Sync and backup: `/synchronisation`, `/cloud`, `/cloudstorage`, `/albumcloud`

## OpenAPI

The machine-readable API document is `openapi/doc.json`. It is OpenAPI `3.0.2` and currently describes the `MyMusik API` version `1.0.0`.
