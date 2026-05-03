# AudioEdit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**duration_in_seconds** | **int** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**input_format** | **str** |  | [optional] 
**input_id** | **str** |  | [optional] 
**last_update** | **datetime** |  | [optional] 
**output_id** | **str** |  | [optional] 
**progress** | **float** |  | [optional] 
**should_normalize** | **bool** |  | [optional] 
**started** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.audio_edit import AudioEdit

# TODO update the JSON string below
json = "{}"
# create an instance of AudioEdit from a JSON string
audio_edit_instance = AudioEdit.from_json(json)
# print the JSON string representation of the object
print(AudioEdit.to_json())

# convert the object into a dict
audio_edit_dict = audio_edit_instance.to_dict()
# create an instance of AudioEdit from a dict
audio_edit_from_dict = AudioEdit.from_dict(audio_edit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


