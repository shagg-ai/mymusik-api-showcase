# Comment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **str** |  | [optional] 
**content** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**downvotes** | **int** |  | [optional] 
**group_name** | **str** |  | [optional] 
**id** | **str** |  | 
**is_deleted** | **bool** |  | [optional] 
**is_edited** | **bool** |  | [optional] 
**is_hidden** | **bool** |  | [optional] 
**last_vote_aggregation** | **datetime** |  | [optional] 
**modified** | **datetime** |  | [optional] 
**owner** | **str** |  | [optional] 
**password_protected** | **bool** |  | [optional] 
**replies** | **int** |  | [optional] 
**reply_to_comment_id** | **str** |  | [optional] 
**reports_count** | **int** |  | [optional] 
**score** | **float** |  | [optional] 
**show_rank** | **bool** |  | [optional] 
**sig** | **str** |  | [optional] 
**stamp** | **str** |  | [optional] 
**upvotes** | **int** |  | [optional] 
**username** | **str** |  | [optional] 
**vote** | **int** |  | [optional] 

## Example

```python
from mymusik_client.models.comment import Comment

# TODO update the JSON string below
json = "{}"
# create an instance of Comment from a JSON string
comment_instance = Comment.from_json(json)
# print the JSON string representation of the object
print(Comment.to_json())

# convert the object into a dict
comment_dict = comment_instance.to_dict()
# create an instance of Comment from a dict
comment_from_dict = Comment.from_dict(comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


