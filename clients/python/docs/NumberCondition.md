# NumberCondition


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
**number** | **float** |  | [optional] 

## Example

```python
from mymusik_client.models.number_condition import NumberCondition

# TODO update the JSON string below
json = "{}"
# create an instance of NumberCondition from a JSON string
number_condition_instance = NumberCondition.from_json(json)
# print the JSON string representation of the object
print(NumberCondition.to_json())

# convert the object into a dict
number_condition_dict = number_condition_instance.to_dict()
# create an instance of NumberCondition from a dict
number_condition_from_dict = NumberCondition.from_dict(number_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


