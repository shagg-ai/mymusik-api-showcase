# BanNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_was_immediate** | **bool** |  | [optional] 
**appeal_at** | **datetime** |  | [optional] 
**appeal_comment** | **str** |  | [optional] 
**appeal_moderator_comment** | **str** |  | [optional] 
**appeal_reason** | **str** |  | [optional] 
**appeal_solved** | **bool** |  | [optional] 
**asset_id** | **str** |  | [optional] 
**asset_parent_id** | **str** |  | [optional] 
**ban_ends_at** | **datetime** |  | [optional] 
**ban_starts_at** | **datetime** |  | [optional] 
**created** | **datetime** |  | [optional] 
**dsa_affected_entity_id** | **str** |  | [optional] 
**dsa_affected_entity_type** | **str** |  | [optional] 
**dsa_automated_processing** | **bool** |  | [optional] 
**dsa_automation_explanation** | **str** |  | [optional] 
**dsa_decision_at** | **datetime** |  | [optional] 
**dsa_decision_type** | **str** |  | [optional] 
**dsa_human_review_available** | **bool** |  | [optional] 
**dsa_internal_complaint_deadline_days** | **int** |  | [optional] 
**dsa_notice_id** | **str** |  | [optional] 
**dsa_sor_id** | **str** |  | [optional] 
**dsa_territorial_scope** | **str** |  | [optional] 
**dsa_trusted_flagger_case** | **bool** |  | [optional] 
**evidence** | **str** |  | [optional] 
**explanation** | **str** |  | [optional] 
**id** | **str** |  | 
**is_admin_initiated** | **bool** |  | [optional] 
**is_appeal_declined** | **bool** |  | [optional] 
**is_appealed** | **bool** |  | [optional] 
**issuer** | **str** |  | [optional] 
**issuer_type** | **str** |  | [optional] 
**just_fyi** | **bool** |  | [optional] 
**modified** | **datetime** |  | [optional] 
**owner** | **str** |  | [optional] 
**protected_asset** | **bool** |  | [optional] 
**reason** | **str** |  | [optional] 
**reference** | **str** |  | [optional] 
**related_report_id** | **str** |  | [optional] 
**revert_action** | **bool** |  | [optional] 
**scope** | **str** |  | [optional] 
**was_shown** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.ban_notification import BanNotification

# TODO update the JSON string below
json = "{}"
# create an instance of BanNotification from a JSON string
ban_notification_instance = BanNotification.from_json(json)
# print the JSON string representation of the object
print(BanNotification.to_json())

# convert the object into a dict
ban_notification_dict = ban_notification_instance.to_dict()
# create an instance of BanNotification from a dict
ban_notification_from_dict = BanNotification.from_dict(ban_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


