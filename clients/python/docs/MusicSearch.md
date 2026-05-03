# MusicSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_results** | [**List[Album]**](Album.md) |  | [optional] 
**artist_results** | [**List[Artist]**](Artist.md) |  | [optional] 
**created** | **datetime** |  | [optional] 
**id** | **str** |  | 
**playlist_results** | [**List[Playlist]**](Playlist.md) |  | [optional] 
**query** | **str** |  | [optional] 
**search_tags** | [**List[Tag]**](Tag.md) |  | [optional] 
**selected** | **datetime** |  | [optional] 
**selected_element** | **str** |  | [optional] 
**should_search_albums** | **bool** |  | [optional] 
**should_search_artists** | **bool** |  | [optional] 
**should_search_playlists** | **bool** |  | [optional] 
**should_search_songs** | **bool** |  | [optional] 
**song_results** | [**List[Song]**](Song.md) |  | [optional] 
**was_result_selected** | **bool** |  | [optional] 

## Example

```python
from mymusik_client.models.music_search import MusicSearch

# TODO update the JSON string below
json = "{}"
# create an instance of MusicSearch from a JSON string
music_search_instance = MusicSearch.from_json(json)
# print the JSON string representation of the object
print(MusicSearch.to_json())

# convert the object into a dict
music_search_dict = music_search_instance.to_dict()
# create an instance of MusicSearch from a dict
music_search_from_dict = MusicSearch.from_dict(music_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


