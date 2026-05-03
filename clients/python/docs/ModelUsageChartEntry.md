# ModelUsageChartEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** |  | [optional] 
**id** | **str** |  | 
**label** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from mymusik_client.models.model_usage_chart_entry import ModelUsageChartEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ModelUsageChartEntry from a JSON string
model_usage_chart_entry_instance = ModelUsageChartEntry.from_json(json)
# print the JSON string representation of the object
print(ModelUsageChartEntry.to_json())

# convert the object into a dict
model_usage_chart_entry_dict = model_usage_chart_entry_instance.to_dict()
# create an instance of ModelUsageChartEntry from a dict
model_usage_chart_entry_from_dict = ModelUsageChartEntry.from_dict(model_usage_chart_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


