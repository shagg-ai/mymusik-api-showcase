# SongList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_value** | **str** |  | [optional] 
**id** | **str** |  | 
**songs** | [**List[Song]**](Song.md) |  | [optional] 

## Example

```python
from mymusik_client.models.song_list import SongList

# TODO update the JSON string below
json = "{}"
# create an instance of SongList from a JSON string
song_list_instance = SongList.from_json(json)
# print the JSON string representation of the object
print(SongList.to_json())

# convert the object into a dict
song_list_dict = song_list_instance.to_dict()
# create an instance of SongList from a dict
song_list_from_dict = SongList.from_dict(song_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


