# PlayHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**position** | **int** |  | [optional] 
**song** | [**Song**](Song.md) |  | [optional] 

## Example

```python
from mymusik_client.models.play_history import PlayHistory

# TODO update the JSON string below
json = "{}"
# create an instance of PlayHistory from a JSON string
play_history_instance = PlayHistory.from_json(json)
# print the JSON string representation of the object
print(PlayHistory.to_json())

# convert the object into a dict
play_history_dict = play_history_instance.to_dict()
# create an instance of PlayHistory from a dict
play_history_from_dict = PlayHistory.from_dict(play_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


