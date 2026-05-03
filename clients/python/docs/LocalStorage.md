# LocalStorage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_files_size** | **int** |  | [optional] 
**available_storage_on_drive** | **int** |  | [optional] 
**cover_prefetch_completed** | **int** |  | [optional] 
**cover_prefetch_queued** | **int** |  | [optional] 
**cover_prefetch_running** | **bool** |  | [optional] 
**database_file_size** | **int** |  | [optional] 
**default_local_storage_to_use** | **int** |  | [optional] 
**id** | **str** |  | 
**image_files_size** | **int** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**total_size** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.local_storage import LocalStorage

# TODO update the JSON string below
json = "{}"
# create an instance of LocalStorage from a JSON string
local_storage_instance = LocalStorage.from_json(json)
# print the JSON string representation of the object
print(LocalStorage.to_json())

# convert the object into a dict
local_storage_dict = local_storage_instance.to_dict()
# create an instance of LocalStorage from a dict
local_storage_from_dict = LocalStorage.from_dict(local_storage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


