# AlbumMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album** | [**Album**](Album.md) |  | [optional] 
**completed** | **int** |  | [optional] 
**first_played** | **datetime** |  | [optional] 
**id** | **str** |  | 
**last_played** | **datetime** |  | [optional] 
**month** | **datetime** |  | [optional] 
**play_duration** | **int** |  | [optional] 
**skip_count** | **int** |  | [optional] 
**skip_rate** | **float** |  | [optional] 
**total_plays** | **int** |  | [optional] 
**total_song_plays** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.album_metrics import AlbumMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumMetrics from a JSON string
album_metrics_instance = AlbumMetrics.from_json(json)
# print the JSON string representation of the object
print(AlbumMetrics.to_json())

# convert the object into a dict
album_metrics_dict = album_metrics_instance.to_dict()
# create an instance of AlbumMetrics from a dict
album_metrics_from_dict = AlbumMetrics.from_dict(album_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


