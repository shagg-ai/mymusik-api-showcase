# ImageUrlImport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**finished** | **datetime** |  | [optional] 
**id** | **str** |  | 
**image** | [**ImageFile**](ImageFile.md) |  | [optional] 
**progress** | **float** |  | [optional] 
**status** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from mymusik_client.models.image_url_import import ImageUrlImport

# TODO update the JSON string below
json = "{}"
# create an instance of ImageUrlImport from a JSON string
image_url_import_instance = ImageUrlImport.from_json(json)
# print the JSON string representation of the object
print(ImageUrlImport.to_json())

# convert the object into a dict
image_url_import_dict = image_url_import_instance.to_dict()
# create an instance of ImageUrlImport from a dict
image_url_import_from_dict = ImageUrlImport.from_dict(image_url_import_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


