# CloudUpload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_left** | **int** |  | [optional] 
**bytes_per_second** | **int** |  | [optional] 
**cloud_id** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**current_size** | **int** |  | [optional] 
**encfile_path** | **str** |  | [optional] 
**file_hash** | **str** |  | [optional] 
**file_path** | **str** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**last_update** | **datetime** |  | [optional] 
**owner** | **str** |  | [optional] 
**percentage** | **float** |  | [optional] 
**server_cloud_id** | **str** |  | [optional] 
**sig** | **str** |  | [optional] 
**size** | **int** |  | [optional] 
**started** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.cloud_upload import CloudUpload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudUpload from a JSON string
cloud_upload_instance = CloudUpload.from_json(json)
# print the JSON string representation of the object
print(CloudUpload.to_json())

# convert the object into a dict
cloud_upload_dict = cloud_upload_instance.to_dict()
# create an instance of CloudUpload from a dict
cloud_upload_from_dict = CloudUpload.from_dict(cloud_upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


