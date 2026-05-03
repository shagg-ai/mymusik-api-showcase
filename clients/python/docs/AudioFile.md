# AudioFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_type** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**file_size** | **int** |  | [optional] 
**file_url** | **str** |  | [optional] 
**hash** | **str** |  | [optional] 
**id** | **str** |  | 
**is_stored_offline** | **bool** |  | [optional] 
**album** | **str** |  | [optional] 
**album_artist** | **str** |  | [optional] 
**artists** | **str** |  | [optional] 
**bit_rate** | **int** |  | [optional] 
**duration** | **str** |  | [optional] 
**fingerprint** | **str** |  | [optional] 
**format** | **str** |  | [optional] 
**genres** | **str** |  | [optional] 
**release_date** | **datetime** |  | [optional] 
**start** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**track_position** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.audio_file import AudioFile

# TODO update the JSON string below
json = "{}"
# create an instance of AudioFile from a JSON string
audio_file_instance = AudioFile.from_json(json)
# print the JSON string representation of the object
print(AudioFile.to_json())

# convert the object into a dict
audio_file_dict = audio_file_instance.to_dict()
# create an instance of AudioFile from a dict
audio_file_from_dict = AudioFile.from_dict(audio_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


