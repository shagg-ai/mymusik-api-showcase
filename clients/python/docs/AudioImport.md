# AudioImport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album** | [**Album**](Album.md) |  | [optional] 
**created** | **datetime** |  | 
**edits** | [**List[AudioEdit]**](AudioEdit.md) |  | [optional] 
**failed_files** | **int** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**folder_name** | **str** |  | [optional] 
**group_id** | **str** |  | [optional] 
**id** | **str** |  | 
**last_update** | **datetime** |  | [optional] 
**number_of_different_first_artist** | **int** |  | [optional] 
**processed_files** | **int** |  | [optional] 
**progress** | **float** |  | [optional] 
**started** | **datetime** |  | [optional] 
**status** | **str** |  | 
**total_files** | **int** |  | [optional] 
**use_same_album_for_group** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.audio_import import AudioImport

# TODO update the JSON string below
json = "{}"
# create an instance of AudioImport from a JSON string
audio_import_instance = AudioImport.from_json(json)
# print the JSON string representation of the object
print(AudioImport.to_json())

# convert the object into a dict
audio_import_dict = audio_import_instance.to_dict()
# create an instance of AudioImport from a dict
audio_import_from_dict = AudioImport.from_dict(audio_import_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


