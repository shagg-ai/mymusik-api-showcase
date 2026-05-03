# AudioFolderPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_path** | **str** |  | [optional] 
**id** | **str** |  | 
**is_web_link** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.audio_folder_payload import AudioFolderPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AudioFolderPayload from a JSON string
audio_folder_payload_instance = AudioFolderPayload.from_json(json)
# print the JSON string representation of the object
print(AudioFolderPayload.to_json())

# convert the object into a dict
audio_folder_payload_dict = audio_folder_payload_instance.to_dict()
# create an instance of AudioFolderPayload from a dict
audio_folder_payload_from_dict = AudioFolderPayload.from_dict(audio_folder_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


