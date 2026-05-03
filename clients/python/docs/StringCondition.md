# StringCondition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_type** | **str** |  | 
**close_parentheses_count** | **int** |  | [optional] 
**has_static_value** | **bool** |  | 
**id** | **str** |  | 
**is_and_connected** | **bool** |  | 
**open_parentheses_count** | **int** |  | [optional] 
**var_property** | **str** |  | 
**compare_operator** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.string_condition import StringCondition

# TODO update the JSON string below
json = "{}"
# create an instance of StringCondition from a JSON string
string_condition_instance = StringCondition.from_json(json)
# print the JSON string representation of the object
print(StringCondition.to_json())

# convert the object into a dict
string_condition_dict = string_condition_instance.to_dict()
# create an instance of StringCondition from a dict
string_condition_from_dict = StringCondition.from_dict(string_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


