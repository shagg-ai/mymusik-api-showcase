# PlaylistItemList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_value** | **str** |  | [optional] 
**id** | **str** |  | 
**items** | [**List[PlaylistItem]**](PlaylistItem.md) |  | [optional] 

## Example

```python
from mymusik_client.models.playlist_item_list import PlaylistItemList

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistItemList from a JSON string
playlist_item_list_instance = PlaylistItemList.from_json(json)
# print the JSON string representation of the object
print(PlaylistItemList.to_json())

# convert the object into a dict
playlist_item_list_dict = playlist_item_list_instance.to_dict()
# create an instance of PlaylistItemList from a dict
playlist_item_list_from_dict = PlaylistItemList.from_dict(playlist_item_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


