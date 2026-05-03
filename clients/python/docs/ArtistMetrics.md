# ArtistMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artist** | [**Artist**](Artist.md) |  | [optional] 
**first_played** | **datetime** |  | [optional] 
**id** | **str** |  | 
**last_played** | **datetime** |  | [optional] 
**month** | **datetime** |  | [optional] 
**play_duration** | **int** |  | [optional] 
**skip_count** | **int** |  | [optional] 
**skip_rate** | **float** |  | [optional] 
**total_song_plays** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.artist_metrics import ArtistMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ArtistMetrics from a JSON string
artist_metrics_instance = ArtistMetrics.from_json(json)
# print the JSON string representation of the object
print(ArtistMetrics.to_json())

# convert the object into a dict
artist_metrics_dict = artist_metrics_instance.to_dict()
# create an instance of ArtistMetrics from a dict
artist_metrics_from_dict = ArtistMetrics.from_dict(artist_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


