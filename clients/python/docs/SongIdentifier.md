# SongIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_suggestions** | [**List[Album]**](Album.md) |  | [optional] 
**created** | **datetime** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**incomplete** | [**Song**](Song.md) |  | 
**should_check_online** | **bool** |  | [optional] 
**song_suggestion** | [**Song**](Song.md) |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.song_identifier import SongIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of SongIdentifier from a JSON string
song_identifier_instance = SongIdentifier.from_json(json)
# print the JSON string representation of the object
print(SongIdentifier.to_json())

# convert the object into a dict
song_identifier_dict = song_identifier_instance.to_dict()
# create an instance of SongIdentifier from a dict
song_identifier_from_dict = SongIdentifier.from_dict(song_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


