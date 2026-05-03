# ConfigSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**List[Setting]**](Setting.md) |  | [optional] 
**icon_name** | **str** |  | [optional] 
**id** | **str** |  | 
**is_hidden** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.config_section import ConfigSection

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigSection from a JSON string
config_section_instance = ConfigSection.from_json(json)
# print the JSON string representation of the object
print(ConfigSection.to_json())

# convert the object into a dict
config_section_dict = config_section_instance.to_dict()
# create an instance of ConfigSection from a dict
config_section_from_dict = ConfigSection.from_dict(config_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


