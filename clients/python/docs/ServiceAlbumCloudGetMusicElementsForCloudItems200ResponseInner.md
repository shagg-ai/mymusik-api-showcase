# ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_type** | **str** |  | 
**couldnt_find_music_id** | **bool** |  | [optional] 
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**image** | [**ImageFile**](ImageFile.md) |  | 
**modified** | **datetime** |  | [optional] 
**name** | **str** |  | 
**public_music_id** | **str** |  | [optional] 
**should_fetch_cover** | **bool** |  | [optional] 
**tags** | [**List[Tag]**](Tag.md) |  | 
**visible** | **bool** |  | 
**album_id** | **str** |  | 
**album_name** | **str** |  | 
**artists** | [**List[Artist]**](Artist.md) |  | [optional] 
**file** | [**AudioFile**](AudioFile.md) |  | [optional] 
**position** | **int** |  | 
**year** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**duration** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.service_album_cloud_get_music_elements_for_cloud_items200_response_inner import ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner from a JSON string
service_album_cloud_get_music_elements_for_cloud_items200_response_inner_instance = ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner.to_json())

# convert the object into a dict
service_album_cloud_get_music_elements_for_cloud_items200_response_inner_dict = service_album_cloud_get_music_elements_for_cloud_items200_response_inner_instance.to_dict()
# create an instance of ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner from a dict
service_album_cloud_get_music_elements_for_cloud_items200_response_inner_from_dict = ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner.from_dict(service_album_cloud_get_music_elements_for_cloud_items200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


