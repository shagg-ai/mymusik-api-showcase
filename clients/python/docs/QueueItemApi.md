# mymusik_client.QueueItemApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_queue_item_add_album**](QueueItemApi.md#service_queue_item_add_album) | **POST** /queueitem/addalbum | Adds albums to the queue.
[**service_queue_item_add_container**](QueueItemApi.md#service_queue_item_add_container) | **POST** /queueitem/addcontainer | Adds a container (playlist, album) to the queue.
[**service_queue_item_add_songs**](QueueItemApi.md#service_queue_item_add_songs) | **POST** /queueitem/addsongs | Adds multiple songs to the queue.
[**service_queue_item_clear**](QueueItemApi.md#service_queue_item_clear) | **POST** /queueitem/clear | Clears all songs from the current queue.
[**service_queue_item_count**](QueueItemApi.md#service_queue_item_count) | **GET** /queueitem/count | Get the count of the queue.
[**service_queue_item_erase**](QueueItemApi.md#service_queue_item_erase) | **DELETE** /queueitem/{id} | Deletes an QueueItem using an id
[**service_queue_item_get**](QueueItemApi.md#service_queue_item_get) | **GET** /queueitem/{id} | Returns an QueueItem using an id
[**service_queue_item_get_page**](QueueItemApi.md#service_queue_item_get_page) | **GET** /queueitem | Returns QueueItem(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_queue_item_get_queue_duration**](QueueItemApi.md#service_queue_item_get_queue_duration) | **GET** /queueitem/getqueueduration | Calculates the total duration of all songs in the queue. (in seconds)
[**service_queue_item_handle_items_moved_to_boundary**](QueueItemApi.md#service_queue_item_handle_items_moved_to_boundary) | **POST** /queueitem/handleitemsmovedtoboundary | Reposition items in the queue to start or end of queue.An action is defined in additionalValue and can be &#39;start&#39; or &#39;end&#39;.The items in ther queueitemlist are moved to the start or end of the queue
[**service_queue_item_handle_items_repositioned**](QueueItemApi.md#service_queue_item_handle_items_repositioned) | **POST** /queueitem/handleitemsrepositioned | Reposition items in the queue.The id of the list represents the target item id to do an action on.An action is defined in additionalValue and can be &#39;Before&#39;, &#39;After&#39; or &#39;Swap&#39;.The items in ther queueitemlist are moved before, after or swapped with the target item.
[**service_queue_item_play_songs_after_next**](QueueItemApi.md#service_queue_item_play_songs_after_next) | **POST** /queueitem/playsongsafternext | Enqueues multiple songs to play immediately after the next track. This function allows users to add new songs to the queue without interrupting the currently playing song, ensuring the newly added songs are played right after the upcoming one.
[**service_queue_item_play_songs_next**](QueueItemApi.md#service_queue_item_play_songs_next) | **POST** /queueitem/playsongsnext | Adds multiple songs to the front of the queue, making them the next to play. This action shifts the current queue back, allowing for an immediate update to the listening order with the new selections.
[**service_queue_item_remove_multiple**](QueueItemApi.md#service_queue_item_remove_multiple) | **POST** /queueitem/removemultiple | Removes multiple items from the queue.
[**service_queue_item_set_queue_with_albums**](QueueItemApi.md#service_queue_item_set_queue_with_albums) | **POST** /queueitem/setqueuewithalbums | Replaces the current queue with a new set of albums.
[**service_queue_item_set_queue_with_songs**](QueueItemApi.md#service_queue_item_set_queue_with_songs) | **POST** /queueitem/setqueuewithsongs | Replaces the current queue with a new set of songs.
[**service_queue_item_shuffle**](QueueItemApi.md#service_queue_item_shuffle) | **POST** /queueitem/shuffle | Randomizes the order of songs in the current queue without changing its contents.
[**service_queue_item_skip_items_up_to**](QueueItemApi.md#service_queue_item_skip_items_up_to) | **POST** /queueitem/skipitemsupto | Skips items up to the selected item, removing the items before it from the queue.
[**service_queue_item_update**](QueueItemApi.md#service_queue_item_update) | **PUT** /queueitem/{id} | Updates an QueueItem using an id


# **service_queue_item_add_album**
> service_queue_item_add_album(album_list=album_list)

Adds albums to the queue.

### Example


```python
import mymusik_client
from mymusik_client.models.album_list import AlbumList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    album_list = mymusik_client.AlbumList() # AlbumList | AlbumList that should be updated (optional)

    try:
        # Adds albums to the queue.
        api_instance.service_queue_item_add_album(album_list=album_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_add_album: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **album_list** | [**AlbumList**](AlbumList.md)| AlbumList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_add_container**
> service_queue_item_add_container(service_music_element_insert_request=service_music_element_insert_request)

Adds a container (playlist, album) to the queue.

### Example


```python
import mymusik_client
from mymusik_client.models.service_music_element_insert_request import ServiceMusicElementInsertRequest
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    service_music_element_insert_request = mymusik_client.ServiceMusicElementInsertRequest() # ServiceMusicElementInsertRequest | MusicElement that should be updated (optional)

    try:
        # Adds a container (playlist, album) to the queue.
        api_instance.service_queue_item_add_container(service_music_element_insert_request=service_music_element_insert_request)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_add_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_music_element_insert_request** | [**ServiceMusicElementInsertRequest**](ServiceMusicElementInsertRequest.md)| MusicElement that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_add_songs**
> service_queue_item_add_songs(song_list=song_list)

Adds multiple songs to the queue.

### Example


```python
import mymusik_client
from mymusik_client.models.song_list import SongList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    song_list = mymusik_client.SongList() # SongList | SongList that should be updated (optional)

    try:
        # Adds multiple songs to the queue.
        api_instance.service_queue_item_add_songs(song_list=song_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_add_songs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **song_list** | [**SongList**](SongList.md)| SongList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_clear**
> service_queue_item_clear()

Clears all songs from the current queue.

### Example


```python
import mymusik_client
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)

    try:
        # Clears all songs from the current queue.
        api_instance.service_queue_item_clear()
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_clear: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Action successfully completed |  -  |
**400** | Action execution failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_count**
> int service_queue_item_count()

Get the count of the queue.

### Example


```python
import mymusik_client
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)

    try:
        # Get the count of the queue.
        api_response = api_instance.service_queue_item_count()
        print("The response of QueueItemApi->service_queue_item_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_count: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | number |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_erase**
> service_queue_item_erase(id)

Deletes an QueueItem using an id

### Example


```python
import mymusik_client
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an QueueItem using an id
        api_instance.service_queue_item_erase(id)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_erase: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Entity deleted successfully |  -  |
**404** | Could not find entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_get**
> QueueItem service_queue_item_get(id)

Returns an QueueItem using an id

### Example


```python
import mymusik_client
from mymusik_client.models.queue_item import QueueItem
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an QueueItem using an id
        api_response = api_instance.service_queue_item_get(id)
        print("The response of QueueItemApi->service_queue_item_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**QueueItem**](QueueItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | schema |  -  |
**404** | Could not find entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_get_page**
> List[QueueItem] service_queue_item_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns QueueItem(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.queue_item import QueueItem
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns QueueItem(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_queue_item_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of QueueItemApi->service_queue_item_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_get_page: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_name** | **str**| the name of a Filter resource | [optional] 
 **values** | **str**| input parameter for the filter use &#39;;&#39; to separate values | [optional] 
 **sort_by** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_index** | **int**|  | [optional] 

### Return type

[**List[QueueItem]**](QueueItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | schema |  -  |
**404** | Could not find entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_get_queue_duration**
> int service_queue_item_get_queue_duration()

Calculates the total duration of all songs in the queue. (in seconds)

### Example


```python
import mymusik_client
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)

    try:
        # Calculates the total duration of all songs in the queue. (in seconds)
        api_response = api_instance.service_queue_item_get_queue_duration()
        print("The response of QueueItemApi->service_queue_item_get_queue_duration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_get_queue_duration: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | number |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_handle_items_moved_to_boundary**
> service_queue_item_handle_items_moved_to_boundary(queue_item_list=queue_item_list)

Reposition items in the queue to start or end of queue.An action is defined in additionalValue and can be 'start' or 'end'.The items in ther queueitemlist are moved to the start or end of the queue

### Example


```python
import mymusik_client
from mymusik_client.models.queue_item_list import QueueItemList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    queue_item_list = mymusik_client.QueueItemList() # QueueItemList | QueueItemList that should be updated (optional)

    try:
        # Reposition items in the queue to start or end of queue.An action is defined in additionalValue and can be 'start' or 'end'.The items in ther queueitemlist are moved to the start or end of the queue
        api_instance.service_queue_item_handle_items_moved_to_boundary(queue_item_list=queue_item_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_handle_items_moved_to_boundary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_item_list** | [**QueueItemList**](QueueItemList.md)| QueueItemList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_handle_items_repositioned**
> service_queue_item_handle_items_repositioned(queue_item_list=queue_item_list)

Reposition items in the queue.The id of the list represents the target item id to do an action on.An action is defined in additionalValue and can be 'Before', 'After' or 'Swap'.The items in ther queueitemlist are moved before, after or swapped with the target item.

### Example


```python
import mymusik_client
from mymusik_client.models.queue_item_list import QueueItemList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    queue_item_list = mymusik_client.QueueItemList() # QueueItemList | QueueItemList that should be updated (optional)

    try:
        # Reposition items in the queue.The id of the list represents the target item id to do an action on.An action is defined in additionalValue and can be 'Before', 'After' or 'Swap'.The items in ther queueitemlist are moved before, after or swapped with the target item.
        api_instance.service_queue_item_handle_items_repositioned(queue_item_list=queue_item_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_handle_items_repositioned: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_item_list** | [**QueueItemList**](QueueItemList.md)| QueueItemList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_play_songs_after_next**
> service_queue_item_play_songs_after_next(song_list=song_list)

Enqueues multiple songs to play immediately after the next track. This function allows users to add new songs to the queue without interrupting the currently playing song, ensuring the newly added songs are played right after the upcoming one.

### Example


```python
import mymusik_client
from mymusik_client.models.song_list import SongList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    song_list = mymusik_client.SongList() # SongList | SongList that should be updated (optional)

    try:
        # Enqueues multiple songs to play immediately after the next track. This function allows users to add new songs to the queue without interrupting the currently playing song, ensuring the newly added songs are played right after the upcoming one.
        api_instance.service_queue_item_play_songs_after_next(song_list=song_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_play_songs_after_next: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **song_list** | [**SongList**](SongList.md)| SongList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_play_songs_next**
> service_queue_item_play_songs_next(song_list=song_list)

Adds multiple songs to the front of the queue, making them the next to play. This action shifts the current queue back, allowing for an immediate update to the listening order with the new selections.

### Example


```python
import mymusik_client
from mymusik_client.models.song_list import SongList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    song_list = mymusik_client.SongList() # SongList | SongList that should be updated (optional)

    try:
        # Adds multiple songs to the front of the queue, making them the next to play. This action shifts the current queue back, allowing for an immediate update to the listening order with the new selections.
        api_instance.service_queue_item_play_songs_next(song_list=song_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_play_songs_next: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **song_list** | [**SongList**](SongList.md)| SongList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_remove_multiple**
> service_queue_item_remove_multiple(queue_item_list=queue_item_list)

Removes multiple items from the queue.

### Example


```python
import mymusik_client
from mymusik_client.models.queue_item_list import QueueItemList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    queue_item_list = mymusik_client.QueueItemList() # QueueItemList | QueueItemList that should be updated (optional)

    try:
        # Removes multiple items from the queue.
        api_instance.service_queue_item_remove_multiple(queue_item_list=queue_item_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_remove_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_item_list** | [**QueueItemList**](QueueItemList.md)| QueueItemList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_set_queue_with_albums**
> service_queue_item_set_queue_with_albums(album_list=album_list)

Replaces the current queue with a new set of albums.

### Example


```python
import mymusik_client
from mymusik_client.models.album_list import AlbumList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    album_list = mymusik_client.AlbumList() # AlbumList | AlbumList that should be updated (optional)

    try:
        # Replaces the current queue with a new set of albums.
        api_instance.service_queue_item_set_queue_with_albums(album_list=album_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_set_queue_with_albums: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **album_list** | [**AlbumList**](AlbumList.md)| AlbumList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_set_queue_with_songs**
> service_queue_item_set_queue_with_songs(song_list=song_list)

Replaces the current queue with a new set of songs.

### Example


```python
import mymusik_client
from mymusik_client.models.song_list import SongList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    song_list = mymusik_client.SongList() # SongList | SongList that should be updated (optional)

    try:
        # Replaces the current queue with a new set of songs.
        api_instance.service_queue_item_set_queue_with_songs(song_list=song_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_set_queue_with_songs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **song_list** | [**SongList**](SongList.md)| SongList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_shuffle**
> service_queue_item_shuffle()

Randomizes the order of songs in the current queue without changing its contents.

### Example


```python
import mymusik_client
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)

    try:
        # Randomizes the order of songs in the current queue without changing its contents.
        api_instance.service_queue_item_shuffle()
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_shuffle: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Action successfully completed |  -  |
**400** | Action execution failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_skip_items_up_to**
> service_queue_item_skip_items_up_to(queue_item_list=queue_item_list)

Skips items up to the selected item, removing the items before it from the queue.

### Example


```python
import mymusik_client
from mymusik_client.models.queue_item_list import QueueItemList
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    queue_item_list = mymusik_client.QueueItemList() # QueueItemList | QueueItemList that should be updated (optional)

    try:
        # Skips items up to the selected item, removing the items before it from the queue.
        api_instance.service_queue_item_skip_items_up_to(queue_item_list=queue_item_list)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_skip_items_up_to: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_item_list** | [**QueueItemList**](QueueItemList.md)| QueueItemList that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_queue_item_update**
> service_queue_item_update(id, queue_item=queue_item)

Updates an QueueItem using an id

### Example


```python
import mymusik_client
from mymusik_client.models.queue_item import QueueItem
from mymusik_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:7790/api
# See configuration.py for a list of all supported configuration parameters.
configuration = mymusik_client.Configuration(
    host = "http://localhost:7790/api"
)


# Enter a context with an instance of the API client
with mymusik_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = mymusik_client.QueueItemApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    queue_item = mymusik_client.QueueItem() # QueueItem | QueueItem that should be updated (optional)

    try:
        # Updates an QueueItem using an id
        api_instance.service_queue_item_update(id, queue_item=queue_item)
    except Exception as e:
        print("Exception when calling QueueItemApi->service_queue_item_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **queue_item** | [**QueueItem**](QueueItem.md)| QueueItem that should be updated | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Entity updated |  -  |
**404** | Could not update entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

