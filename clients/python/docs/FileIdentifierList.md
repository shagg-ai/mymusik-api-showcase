# FileIdentifierList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_identifier_list** | [**List[FileIdentifier]**](FileIdentifier.md) |  | [optional] 
**id** | **str** |  | 

## Example

```python
from mymusik_client.models.file_identifier_list import FileIdentifierList

# TODO update the JSON string below
json = "{}"
# create an instance of FileIdentifierList from a JSON string
file_identifier_list_instance = FileIdentifierList.from_json(json)
# print the JSON string representation of the object
print(FileIdentifierList.to_json())

# convert the object into a dict
file_identifier_list_dict = file_identifier_list_instance.to_dict()
# create an instance of FileIdentifierList from a dict
file_identifier_list_from_dict = FileIdentifierList.from_dict(file_identifier_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


