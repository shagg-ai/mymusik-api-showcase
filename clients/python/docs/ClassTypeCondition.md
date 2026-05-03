# ClassTypeCondition


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
**type** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.class_type_condition import ClassTypeCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ClassTypeCondition from a JSON string
class_type_condition_instance = ClassTypeCondition.from_json(json)
# print the JSON string representation of the object
print(ClassTypeCondition.to_json())

# convert the object into a dict
class_type_condition_dict = class_type_condition_instance.to_dict()
# create an instance of ClassTypeCondition from a dict
class_type_condition_from_dict = ClassTypeCondition.from_dict(class_type_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


