# CloudSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**failed_to_find** | **int** |  | [optional] 
**id** | **str** |  | 
**results** | [**List[Cloud]**](Cloud.md) |  | [optional] 
**total_file_size** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.cloud_search import CloudSearch

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSearch from a JSON string
cloud_search_instance = CloudSearch.from_json(json)
# print the JSON string representation of the object
print(CloudSearch.to_json())

# convert the object into a dict
cloud_search_dict = cloud_search_instance.to_dict()
# create an instance of CloudSearch from a dict
cloud_search_from_dict = CloudSearch.from_dict(cloud_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


