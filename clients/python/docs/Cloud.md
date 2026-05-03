# Cloud


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_link_id** | **str** |  | [optional] 
**compressed_size** | **int** |  | [optional] 
**created** | **datetime** |  | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**expires** | **datetime** |  | [optional] 
**file_identifier** | **str** |  | [optional] 
**file_size** | **int** |  | [optional] 
**file_url** | **str** |  | [optional] 
**id** | **str** |  | 
**is_deleted** | **bool** |  | [optional] 
**last_download** | **datetime** |  | [optional] 
**last_online_check** | **datetime** |  | [optional] 
**last_update** | **datetime** |  | [optional] 
**modus** | **str** |  | [optional] 
**owner_id** | **str** |  | [optional] 
**revision** | **int** |  | [optional] 
**should_expire** | **bool** |  | [optional] 
**should_remove** | **bool** |  | [optional] 
**sig** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.cloud import Cloud

# TODO update the JSON string below
json = "{}"
# create an instance of Cloud from a JSON string
cloud_instance = Cloud.from_json(json)
# print the JSON string representation of the object
print(Cloud.to_json())

# convert the object into a dict
cloud_dict = cloud_instance.to_dict()
# create an instance of Cloud from a dict
cloud_from_dict = Cloud.from_dict(cloud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


