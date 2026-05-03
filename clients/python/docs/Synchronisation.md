# Synchronisation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**downloaded** | **int** |  | [optional] 
**expected_databases** | **int** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**is_forced** | **bool** |  | [optional] 
**last_progress** | **datetime** |  | [optional] 
**raw_size** | **int** |  | [optional] 
**starting_at** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**synced_databases** | **int** |  | [optional] 
**total_size** | **int** |  | [optional] 
**uploaded** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.synchronisation import Synchronisation

# TODO update the JSON string below
json = "{}"
# create an instance of Synchronisation from a JSON string
synchronisation_instance = Synchronisation.from_json(json)
# print the JSON string representation of the object
print(Synchronisation.to_json())

# convert the object into a dict
synchronisation_dict = synchronisation_instance.to_dict()
# create an instance of Synchronisation from a dict
synchronisation_from_dict = Synchronisation.from_dict(synchronisation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


