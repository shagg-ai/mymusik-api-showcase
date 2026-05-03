# DateTimeCondition


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
**date_time** | **datetime** |  | [optional] 

## Example

```python
from mymusik_client.models.date_time_condition import DateTimeCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeCondition from a JSON string
date_time_condition_instance = DateTimeCondition.from_json(json)
# print the JSON string representation of the object
print(DateTimeCondition.to_json())

# convert the object into a dict
date_time_condition_dict = date_time_condition_instance.to_dict()
# create an instance of DateTimeCondition from a dict
date_time_condition_from_dict = DateTimeCondition.from_dict(date_time_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


