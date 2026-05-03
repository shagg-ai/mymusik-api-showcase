# ImageFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_type** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**file_size** | **int** |  | [optional] 
**file_url** | **str** |  | [optional] 
**hash** | **str** |  | [optional] 
**id** | **str** |  | 
**is_stored_offline** | **bool** |  | [optional] 
**format** | **str** |  | [optional] 
**height** | **int** |  | [optional] 
**width** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.image_file import ImageFile

# TODO update the JSON string below
json = "{}"
# create an instance of ImageFile from a JSON string
image_file_instance = ImageFile.from_json(json)
# print the JSON string representation of the object
print(ImageFile.to_json())

# convert the object into a dict
image_file_dict = image_file_instance.to_dict()
# create an instance of ImageFile from a dict
image_file_from_dict = ImageFile.from_dict(image_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


