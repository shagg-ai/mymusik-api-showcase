# CloudFiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**files** | [**List[Cloud]**](Cloud.md) |  | [optional] 
**id** | **str** |  | 

## Example

```python
from mymusik_client.models.cloud_files import CloudFiles

# TODO update the JSON string below
json = "{}"
# create an instance of CloudFiles from a JSON string
cloud_files_instance = CloudFiles.from_json(json)
# print the JSON string representation of the object
print(CloudFiles.to_json())

# convert the object into a dict
cloud_files_dict = cloud_files_instance.to_dict()
# create an instance of CloudFiles from a dict
cloud_files_from_dict = CloudFiles.from_dict(cloud_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


