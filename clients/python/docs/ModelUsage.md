# ModelUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_affected** | **str** |  | [optional] 
**cache_tokens** | **int** |  | [optional] 
**completion_tokens** | **int** |  | [optional] 
**costs_usd** | **float** |  | [optional] 
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**model** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**portal_id** | **str** |  | [optional] 
**portal_name** | **str** |  | [optional] 
**prompt_tokens** | **int** |  | [optional] 
**provider** | **str** |  | [optional] 
**tokens_used** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**user_provided_model** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.model_usage import ModelUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ModelUsage from a JSON string
model_usage_instance = ModelUsage.from_json(json)
# print the JSON string representation of the object
print(ModelUsage.to_json())

# convert the object into a dict
model_usage_dict = model_usage_instance.to_dict()
# create an instance of ModelUsage from a dict
model_usage_from_dict = ModelUsage.from_dict(model_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


