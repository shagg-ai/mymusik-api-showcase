# SongMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_completion_rate** | **float** |  | [optional] 
**completed** | **int** |  | [optional] 
**first_played** | **datetime** |  | [optional] 
**id** | **str** |  | 
**last_playback_rate** | **int** |  | [optional] 
**last_played** | **datetime** |  | [optional] 
**last_seek_forward_position** | **int** |  | [optional] 
**last_skip_position** | **int** |  | [optional] 
**last_volume** | **int** |  | [optional] 
**month** | **datetime** |  | [optional] 
**play_duration** | **int** |  | [optional] 
**repeat_one_count** | **int** |  | [optional] 
**seek_forward_count** | **int** |  | [optional] 
**skipped** | **int** |  | [optional] 
**song** | [**Song**](Song.md) |  | [optional] 
**total_plays** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.song_metrics import SongMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of SongMetrics from a JSON string
song_metrics_instance = SongMetrics.from_json(json)
# print the JSON string representation of the object
print(SongMetrics.to_json())

# convert the object into a dict
song_metrics_dict = song_metrics_instance.to_dict()
# create an instance of SongMetrics from a dict
song_metrics_from_dict = SongMetrics.from_dict(song_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


