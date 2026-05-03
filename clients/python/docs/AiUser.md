# AiUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**is_banned** | **bool** |  | [optional] 
**is_yearly_payment** | **bool** |  | [optional] 
**last_access** | **datetime** |  | [optional] 
**last_token_update** | **datetime** |  | [optional] 
**membership_level** | **int** |  | [optional] 
**owner** | **str** |  | [optional] 
**plan** | **str** |  | [optional] 
**purchased_packs** | **int** |  | [optional] 
**referral_code** | **str** |  | [optional] 
**subscription_end** | **datetime** |  | [optional] 
**tokens** | **int** |  | [optional] 
**tokens_to_add_monthly** | **int** |  | [optional] 
**tokens_used_month** | **int** |  | [optional] 
**tokens_used_this_month** | **int** |  | [optional] 
**tokens_used_total** | **int** |  | [optional] 
**topup_tokens** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.ai_user import AiUser

# TODO update the JSON string below
json = "{}"
# create an instance of AiUser from a JSON string
ai_user_instance = AiUser.from_json(json)
# print the JSON string representation of the object
print(AiUser.to_json())

# convert the object into a dict
ai_user_dict = ai_user_instance.to_dict()
# create an instance of AiUser from a dict
ai_user_from_dict = AiUser.from_dict(ai_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


