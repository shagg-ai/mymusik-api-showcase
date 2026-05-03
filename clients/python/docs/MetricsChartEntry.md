# MetricsChartEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** |  | [optional] 
**entity_id** | **str** |  | [optional] 
**id** | **str** |  | 
**label** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from mymusik_client.models.metrics_chart_entry import MetricsChartEntry

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsChartEntry from a JSON string
metrics_chart_entry_instance = MetricsChartEntry.from_json(json)
# print the JSON string representation of the object
print(MetricsChartEntry.to_json())

# convert the object into a dict
metrics_chart_entry_dict = metrics_chart_entry_instance.to_dict()
# create an instance of MetricsChartEntry from a dict
metrics_chart_entry_from_dict = MetricsChartEntry.from_dict(metrics_chart_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


