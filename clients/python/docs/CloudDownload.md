# CloudDownload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_left** | **int** |  | [optional] 
**bytes_per_second** | **int** |  | [optional] 
**cloud_id** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**current_size** | **int** |  | [optional] 
**file_hash** | **str** |  | [optional] 
**file_path** | **str** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**last_update** | **datetime** |  | [optional] 
**owner** | **str** |  | [optional] 
**percentage** | **float** |  | [optional] 
**sig** | **str** |  | [optional] 
**size** | **int** |  | [optional] 
**started** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.cloud_download import CloudDownload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudDownload from a JSON string
cloud_download_instance = CloudDownload.from_json(json)
# print the JSON string representation of the object
print(CloudDownload.to_json())

# convert the object into a dict
cloud_download_dict = cloud_download_instance.to_dict()
# create an instance of CloudDownload from a dict
cloud_download_from_dict = CloudDownload.from_dict(cloud_download_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


