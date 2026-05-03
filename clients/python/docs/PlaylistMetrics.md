# PlaylistMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **int** |  | [optional] 
**first_played** | **datetime** |  | [optional] 
**id** | **str** |  | 
**last_played** | **datetime** |  | [optional] 
**month** | **datetime** |  | [optional] 
**play_duration** | **int** |  | [optional] 
**playlist** | [**Playlist**](Playlist.md) |  | [optional] 
**skip_count** | **int** |  | [optional] 
**skip_rate** | **float** |  | [optional] 
**total_plays** | **int** |  | [optional] 
**total_song_plays** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.playlist_metrics import PlaylistMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistMetrics from a JSON string
playlist_metrics_instance = PlaylistMetrics.from_json(json)
# print the JSON string representation of the object
print(PlaylistMetrics.to_json())

# convert the object into a dict
playlist_metrics_dict = playlist_metrics_instance.to_dict()
# create an instance of PlaylistMetrics from a dict
playlist_metrics_from_dict = PlaylistMetrics.from_dict(playlist_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


