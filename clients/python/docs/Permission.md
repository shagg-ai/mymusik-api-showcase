# Permission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_name** | **str** |  | [optional] 
**apply_to_all_methods** | **bool** |  | [optional] 
**apply_to_all_paths** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | 
**method** | **str** |  | [optional] 
**path_name** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.permission import Permission

# TODO update the JSON string below
json = "{}"
# create an instance of Permission from a JSON string
permission_instance = Permission.from_json(json)
# print the JSON string representation of the object
print(Permission.to_json())

# convert the object into a dict
permission_dict = permission_instance.to_dict()
# create an instance of Permission from a dict
permission_from_dict = Permission.from_dict(permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


