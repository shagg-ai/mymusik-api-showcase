# AlbumBookmark


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_id** | **str** |  | [optional] 
**finished** | **bool** |  | [optional] 
**id** | **str** |  | 
**last_played** | **datetime** |  | [optional] 
**position** | **int** |  | [optional] 
**song_id** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.album_bookmark import AlbumBookmark

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumBookmark from a JSON string
album_bookmark_instance = AlbumBookmark.from_json(json)
# print the JSON string representation of the object
print(AlbumBookmark.to_json())

# convert the object into a dict
album_bookmark_dict = album_bookmark_instance.to_dict()
# create an instance of AlbumBookmark from a dict
album_bookmark_from_dict = AlbumBookmark.from_dict(album_bookmark_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


