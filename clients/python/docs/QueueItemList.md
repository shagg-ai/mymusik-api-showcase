# QueueItemList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_value** | **str** |  | [optional] 
**id** | **str** |  | 
**is_random** | **bool** |  | [optional] 
**items** | [**List[QueueItem]**](QueueItem.md) |  | [optional] 

## Example

```python
from mymusik_client.models.queue_item_list import QueueItemList

# TODO update the JSON string below
json = "{}"
# create an instance of QueueItemList from a JSON string
queue_item_list_instance = QueueItemList.from_json(json)
# print the JSON string representation of the object
print(QueueItemList.to_json())

# convert the object into a dict
queue_item_list_dict = queue_item_list_instance.to_dict()
# create an instance of QueueItemList from a dict
queue_item_list_from_dict = QueueItemList.from_dict(queue_item_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


