# FileIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**file_identifier** | **str** |  | [optional] 
**id** | **str** |  | 
**local_file_path** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.file_identifier import FileIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of FileIdentifier from a JSON string
file_identifier_instance = FileIdentifier.from_json(json)
# print the JSON string representation of the object
print(FileIdentifier.to_json())

# convert the object into a dict
file_identifier_dict = file_identifier_instance.to_dict()
# create an instance of FileIdentifier from a dict
file_identifier_from_dict = FileIdentifier.from_dict(file_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


