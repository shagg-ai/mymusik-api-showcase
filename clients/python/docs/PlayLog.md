# PlayLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**song** | [**Song**](Song.md) |  | [optional] 

## Example

```python
from mymusik_client.models.play_log import PlayLog

# TODO update the JSON string below
json = "{}"
# create an instance of PlayLog from a JSON string
play_log_instance = PlayLog.from_json(json)
# print the JSON string representation of the object
print(PlayLog.to_json())

# convert the object into a dict
play_log_dict = play_log_instance.to_dict()
# create an instance of PlayLog from a dict
play_log_from_dict = PlayLog.from_dict(play_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


