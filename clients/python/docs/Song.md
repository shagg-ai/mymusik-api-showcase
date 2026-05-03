# Song


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_type** | **str** |  | 
**couldnt_find_music_id** | **bool** |  | [optional] 
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**image** | [**ImageFile**](ImageFile.md) |  | 
**modified** | **datetime** |  | [optional] 
**name** | **str** |  | 
**public_music_id** | **str** |  | [optional] 
**should_fetch_cover** | **bool** |  | [optional] 
**tags** | [**List[Tag]**](Tag.md) |  | 
**visible** | **bool** |  | 
**album_id** | **str** |  | 
**album_name** | **str** |  | 
**artists** | [**List[Artist]**](Artist.md) |  | [optional] 
**file** | [**AudioFile**](AudioFile.md) |  | [optional] 
**position** | **int** |  | 

## Example

```python
from mymusik_client.models.song import Song

# TODO update the JSON string below
json = "{}"
# create an instance of Song from a JSON string
song_instance = Song.from_json(json)
# print the JSON string representation of the object
print(Song.to_json())

# convert the object into a dict
song_dict = song_instance.to_dict()
# create an instance of Song from a dict
song_from_dict = Song.from_dict(song_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


