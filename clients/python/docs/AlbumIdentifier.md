# AlbumIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_suggestions** | [**List[Album]**](Album.md) |  | [optional] 
**created** | **datetime** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**incomplete_album** | [**Album**](Album.md) |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.album_identifier import AlbumIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumIdentifier from a JSON string
album_identifier_instance = AlbumIdentifier.from_json(json)
# print the JSON string representation of the object
print(AlbumIdentifier.to_json())

# convert the object into a dict
album_identifier_dict = album_identifier_instance.to_dict()
# create an instance of AlbumIdentifier from a dict
album_identifier_from_dict = AlbumIdentifier.from_dict(album_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


