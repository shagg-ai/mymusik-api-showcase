# TemporaryMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**expires** | **datetime** |  | [optional] 
**id** | **str** |  | 
**is_expired** | **bool** |  | [optional] 
**is_visible** | **bool** |  | [optional] 
**message_translation_key** | **str** |  | [optional] 
**persistent** | **bool** |  | [optional] 
**severity** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.temporary_message import TemporaryMessage

# TODO update the JSON string below
json = "{}"
# create an instance of TemporaryMessage from a JSON string
temporary_message_instance = TemporaryMessage.from_json(json)
# print the JSON string representation of the object
print(TemporaryMessage.to_json())

# convert the object into a dict
temporary_message_dict = temporary_message_instance.to_dict()
# create an instance of TemporaryMessage from a dict
temporary_message_from_dict = TemporaryMessage.from_dict(temporary_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


