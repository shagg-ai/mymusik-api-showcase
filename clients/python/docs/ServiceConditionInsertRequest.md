# ServiceConditionInsertRequest


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
from mymusik_client.models.service_condition_insert_request import ServiceConditionInsertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConditionInsertRequest from a JSON string
service_condition_insert_request_instance = ServiceConditionInsertRequest.from_json(json)
# print the JSON string representation of the object
print(ServiceConditionInsertRequest.to_json())

# convert the object into a dict
service_condition_insert_request_dict = service_condition_insert_request_instance.to_dict()
# create an instance of ServiceConditionInsertRequest from a dict
service_condition_insert_request_from_dict = ServiceConditionInsertRequest.from_dict(service_condition_insert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


