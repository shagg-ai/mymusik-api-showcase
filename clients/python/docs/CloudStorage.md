# CloudStorage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**download_link_count** | **int** |  | [optional] 
**downloaded_storage** | **int** |  | [optional] 
**erased_monthly_storage** | **int** |  | [optional] 
**erased_storage** | **int** |  | [optional] 
**expired_date** | **datetime** |  | [optional] 
**id** | **str** |  | 
**lang** | **str** |  | [optional] 
**last_download_link_time** | **datetime** |  | [optional] 
**last_monthly_reset** | **datetime** |  | [optional] 
**last_region_change** | **datetime** |  | [optional] 
**min_available_cloud_revision** | **int** |  | [optional] 
**owner** | **str** |  | [optional] 
**pending_erase** | **bool** |  | [optional] 
**region** | **str** |  | [optional] 
**region_change_count** | **int** |  | [optional] 
**revision_counter** | **int** |  | [optional] 
**storage_limit** | **int** |  | [optional] 
**stored_files** | **int** |  | [optional] 
**uploaded_storage** | **int** |  | [optional] 
**used_storage** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.cloud_storage import CloudStorage

# TODO update the JSON string below
json = "{}"
# create an instance of CloudStorage from a JSON string
cloud_storage_instance = CloudStorage.from_json(json)
# print the JSON string representation of the object
print(CloudStorage.to_json())

# convert the object into a dict
cloud_storage_dict = cloud_storage_instance.to_dict()
# create an instance of CloudStorage from a dict
cloud_storage_from_dict = CloudStorage.from_dict(cloud_storage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


