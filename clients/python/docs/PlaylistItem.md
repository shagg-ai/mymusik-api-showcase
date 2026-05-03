# PlaylistItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**playlist_id** | **str** |  | [optional] 
**position** | **int** |  | 
**song** | [**Song**](Song.md) |  | [optional] 
**visible** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.playlist_item import PlaylistItem

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistItem from a JSON string
playlist_item_instance = PlaylistItem.from_json(json)
# print the JSON string representation of the object
print(PlaylistItem.to_json())

# convert the object into a dict
playlist_item_dict = playlist_item_instance.to_dict()
# create an instance of PlaylistItem from a dict
playlist_item_from_dict = PlaylistItem.from_dict(playlist_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


