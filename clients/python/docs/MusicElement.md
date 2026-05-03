# MusicElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_type** | **str** |  | 
**couldnt_find_music_id** | **bool** |  | [optional] 
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**image** | [**ImageFile**](ImageFile.md) |  | 
**modified** | **datetime** |  | [optional] 
**name** | **str** |  | 
**public_music_id** | **str** |  | [optional] 
**should_fetch_cover** | **bool** |  | [optional] 
**tags** | [**List[Tag]**](Tag.md) |  | 
**visible** | **bool** |  | 

## Example

```python
from mymusik_client.models.music_element import MusicElement

# TODO update the JSON string below
json = "{}"
# create an instance of MusicElement from a JSON string
music_element_instance = MusicElement.from_json(json)
# print the JSON string representation of the object
print(MusicElement.to_json())

# convert the object into a dict
music_element_dict = music_element_instance.to_dict()
# create an instance of MusicElement from a dict
music_element_from_dict = MusicElement.from_dict(music_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


