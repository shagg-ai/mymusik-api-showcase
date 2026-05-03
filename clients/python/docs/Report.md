# Report


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**additional_text** | **str** |  | [optional] 
**asset_id** | **str** |  | [optional] 
**asset_parent_id** | **str** |  | [optional] 
**blamed_user** | **str** |  | [optional] 
**category** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**evidence** | **str** |  | [optional] 
**evidence_hash** | **str** |  | [optional] 
**id** | **str** |  | 
**is_admin_report** | **bool** |  | [optional] 
**is_resolved** | **bool** |  | [optional] 
**modified** | **datetime** |  | [optional] 
**owner** | **str** |  | [optional] 
**pre_proccessed** | **bool** |  | [optional] 
**punishment** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**report_for** | **str** |  | [optional] 
**resolved_at** | **datetime** |  | [optional] 
**resolved_comment** | **str** |  | [optional] 
**severity** | **int** |  | [optional] 
**sig** | **str** |  | [optional] 
**stamp** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.report import Report

# TODO update the JSON string below
json = "{}"
# create an instance of Report from a JSON string
report_instance = Report.from_json(json)
# print the JSON string representation of the object
print(Report.to_json())

# convert the object into a dict
report_dict = report_instance.to_dict()
# create an instance of Report from a dict
report_from_dict = Report.from_dict(report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


