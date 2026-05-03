# ServiceMusicElementInsertRequest


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
from mymusik_client.models.service_music_element_insert_request import ServiceMusicElementInsertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMusicElementInsertRequest from a JSON string
service_music_element_insert_request_instance = ServiceMusicElementInsertRequest.from_json(json)
# print the JSON string representation of the object
print(ServiceMusicElementInsertRequest.to_json())

# convert the object into a dict
service_music_element_insert_request_dict = service_music_element_insert_request_instance.to_dict()
# create an instance of ServiceMusicElementInsertRequest from a dict
service_music_element_insert_request_from_dict = ServiceMusicElementInsertRequest.from_dict(service_music_element_insert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


