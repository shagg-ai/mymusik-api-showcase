# UserProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_token** | **int** |  | [optional] 
**cloud_storage_in_mb** | **int** |  | [optional] 
**email** | **str** |  | [optional] 
**email_verified** | **bool** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | 
**keycloak_profile_url** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**memberships** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.user_profile import UserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfile from a JSON string
user_profile_instance = UserProfile.from_json(json)
# print the JSON string representation of the object
print(UserProfile.to_json())

# convert the object into a dict
user_profile_dict = user_profile_instance.to_dict()
# create an instance of UserProfile from a dict
user_profile_from_dict = UserProfile.from_dict(user_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


