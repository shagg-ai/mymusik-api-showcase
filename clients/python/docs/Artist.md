# Artist


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
**description** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.artist import Artist

# TODO update the JSON string below
json = "{}"
# create an instance of Artist from a JSON string
artist_instance = Artist.from_json(json)
# print the JSON string representation of the object
print(Artist.to_json())

# convert the object into a dict
artist_dict = artist_instance.to_dict()
# create an instance of Artist from a dict
artist_from_dict = Artist.from_dict(artist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


