# AlbumList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_value** | **str** |  | [optional] 
**albums** | [**List[Album]**](Album.md) |  | [optional] 
**id** | **str** |  | 

## Example

```python
from mymusik_client.models.album_list import AlbumList

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumList from a JSON string
album_list_instance = AlbumList.from_json(json)
# print the JSON string representation of the object
print(AlbumList.to_json())

# convert the object into a dict
album_list_dict = album_list_instance.to_dict()
# create an instance of AlbumList from a dict
album_list_from_dict = AlbumList.from_dict(album_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


