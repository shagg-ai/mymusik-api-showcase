# DatabaseBackup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_id** | **str** |  | [optional] 
**compressed_size** | **int** |  | [optional] 
**created** | **datetime** |  | [optional] 
**file_created** | **datetime** |  | [optional] 
**file_hash** | **str** |  | [optional] 
**file_last_modified** | **datetime** |  | [optional] 
**file_size** | **int** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**is_locked** | **bool** |  | [optional] 
**last_check** | **datetime** |  | [optional] 
**locked** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**version** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.database_backup import DatabaseBackup

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseBackup from a JSON string
database_backup_instance = DatabaseBackup.from_json(json)
# print the JSON string representation of the object
print(DatabaseBackup.to_json())

# convert the object into a dict
database_backup_dict = database_backup_instance.to_dict()
# create an instance of DatabaseBackup from a dict
database_backup_from_dict = DatabaseBackup.from_dict(database_backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


