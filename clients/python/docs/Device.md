# Device


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** |  | [optional] 
**app_install_date** | **datetime** |  | [optional] 
**app_version** | **str** |  | [optional] 
**cloud_last_server_revision** | **int** |  | [optional] 
**has_dark_mode_on** | **bool** |  | [optional] 
**hash** | **str** |  | [optional] 
**id** | **str** |  | 
**ip** | **str** |  | [optional] 
**is_initialized** | **bool** |  | [optional] 
**is_mobile** | **bool** |  | [optional] 
**is_trusted** | **bool** |  | [optional] 
**last_app_update** | **datetime** |  | [optional] 
**last_login** | **datetime** |  | [optional] 
**last_online_check** | **datetime** |  | [optional] 
**location** | **str** |  | [optional] 
**logged_in** | **bool** |  | [optional] 
**max_storage** | **int** |  | [optional] 
**operating_system** | **str** |  | [optional] 
**os_version** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**processor** | **str** |  | [optional] 
**storage_usage** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


