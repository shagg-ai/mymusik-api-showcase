# AssetLicense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_hash_hex** | **str** |  | [optional] 
**cloud_id** | **str** |  | [optional] 
**device_hash_hex** | **str** |  | [optional] 
**expires_at_utc** | **datetime** |  | [optional] 
**id** | **str** |  | 
**last_seen_at_utc** | **datetime** |  | [optional] 
**license_token_jwt** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.asset_license import AssetLicense

# TODO update the JSON string below
json = "{}"
# create an instance of AssetLicense from a JSON string
asset_license_instance = AssetLicense.from_json(json)
# print the JSON string representation of the object
print(AssetLicense.to_json())

# convert the object into a dict
asset_license_dict = asset_license_instance.to_dict()
# create an instance of AssetLicense from a dict
asset_license_from_dict = AssetLicense.from_dict(asset_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


