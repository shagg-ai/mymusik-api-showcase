# ServiceConditionGetPage200ResponseInner


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
**value** | **str** |  | [optional] 
**type** | **int** |  | [optional] 
**date_time** | **datetime** |  | [optional] 

## Example

```python
from mymusik_client.models.service_condition_get_page200_response_inner import ServiceConditionGetPage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConditionGetPage200ResponseInner from a JSON string
service_condition_get_page200_response_inner_instance = ServiceConditionGetPage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ServiceConditionGetPage200ResponseInner.to_json())

# convert the object into a dict
service_condition_get_page200_response_inner_dict = service_condition_get_page200_response_inner_instance.to_dict()
# create an instance of ServiceConditionGetPage200ResponseInner from a dict
service_condition_get_page200_response_inner_from_dict = ServiceConditionGetPage200ResponseInner.from_dict(service_condition_get_page200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


