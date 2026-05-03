# AlbumCloud


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_id** | **str** |  | [optional] 
**duration** | **datetime** |  | [optional] 
**end_time** | **datetime** |  | [optional] 
**finished** | **bool** |  | [optional] 
**id** | **str** |  | 
**last_modified** | **datetime** |  | [optional] 
**last_online_check** | **datetime** |  | [optional] 
**processed_files** | **int** |  | [optional] 
**retry_count** | **int** |  | [optional] 
**start_time** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**total_files** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.album_cloud import AlbumCloud

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumCloud from a JSON string
album_cloud_instance = AlbumCloud.from_json(json)
# print the JSON string representation of the object
print(AlbumCloud.to_json())

# convert the object into a dict
album_cloud_dict = album_cloud_instance.to_dict()
# create an instance of AlbumCloud from a dict
album_cloud_from_dict = AlbumCloud.from_dict(album_cloud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


