# QueueItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**position** | **int** |  | 
**random_position** | **int** |  | 
**song** | [**Song**](Song.md) |  | 
**visible** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.queue_item import QueueItem

# TODO update the JSON string below
json = "{}"
# create an instance of QueueItem from a JSON string
queue_item_instance = QueueItem.from_json(json)
# print the JSON string representation of the object
print(QueueItem.to_json())

# convert the object into a dict
queue_item_dict = queue_item_instance.to_dict()
# create an instance of QueueItem from a dict
queue_item_from_dict = QueueItem.from_dict(queue_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


