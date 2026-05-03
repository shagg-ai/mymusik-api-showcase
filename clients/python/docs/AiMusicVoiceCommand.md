# AiMusicVoiceCommand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_description_json** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**current_screen_reference** | **str** |  | [optional] 
**current_screen_type** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**execution_result** | **str** |  | [optional] 
**frontend_info_json** | **str** |  | [optional] 
**generated_script** | **str** |  | [optional] 
**id** | **str** |  | 
**retry_counter** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**transcript** | **str** |  | [optional] 
**updated** | **datetime** |  | [optional] 
**user_instruction** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.ai_music_voice_command import AiMusicVoiceCommand

# TODO update the JSON string below
json = "{}"
# create an instance of AiMusicVoiceCommand from a JSON string
ai_music_voice_command_instance = AiMusicVoiceCommand.from_json(json)
# print the JSON string representation of the object
print(AiMusicVoiceCommand.to_json())

# convert the object into a dict
ai_music_voice_command_dict = ai_music_voice_command_instance.to_dict()
# create an instance of AiMusicVoiceCommand from a dict
ai_music_voice_command_from_dict = AiMusicVoiceCommand.from_dict(ai_music_voice_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


