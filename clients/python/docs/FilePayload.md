# FilePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_erase_file** | **bool** |  | [optional] 
**created** | **datetime** |  | [optional] 
**data_base64** | **str** |  | [optional] 
**file_path** | **str** |  | [optional] 
**filename** | **str** |  | [optional] 
**folder_name** | **str** |  | [optional] 
**group_created** | **datetime** |  | [optional] 
**group_id** | **str** |  | [optional] 
**has_data** | **bool** |  | [optional] 
**id** | **str** |  | 
**last_modified_date** | **datetime** |  | [optional] 
**processed** | **bool** |  | [optional] 
**retry** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**total_files** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.file_payload import FilePayload

# TODO update the JSON string below
json = "{}"
# create an instance of FilePayload from a JSON string
file_payload_instance = FilePayload.from_json(json)
# print the JSON string representation of the object
print(FilePayload.to_json())

# convert the object into a dict
file_payload_dict = file_payload_instance.to_dict()
# create an instance of FilePayload from a dict
file_payload_from_dict = FilePayload.from_dict(file_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


