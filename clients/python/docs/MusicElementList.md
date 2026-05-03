# MusicElementList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_value** | **str** |  | [optional] 
**elements** | [**List[ServiceMusicElementInsertRequest]**](ServiceMusicElementInsertRequest.md) |  | [optional] 
**id** | **str** |  | 
**is_temp** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.music_element_list import MusicElementList

# TODO update the JSON string below
json = "{}"
# create an instance of MusicElementList from a JSON string
music_element_list_instance = MusicElementList.from_json(json)
# print the JSON string representation of the object
print(MusicElementList.to_json())

# convert the object into a dict
music_element_list_dict = music_element_list_instance.to_dict()
# create an instance of MusicElementList from a dict
music_element_list_from_dict = MusicElementList.from_dict(music_element_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


