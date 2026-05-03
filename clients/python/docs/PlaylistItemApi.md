# mymusik_client.PlaylistItemApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_playlist_item_add**](PlaylistItemApi.md#service_playlist_item_add) | **POST** /playlistitem/add | Adds multiple items to a playlist.
[**service_playlist_item_add_album**](PlaylistItemApi.md#service_playlist_item_add_album) | **POST** /playlistitem/addalbum | Adds multiple albums to a playlist.
[**service_playlist_item_count**](PlaylistItemApi.md#service_playlist_item_count) | **GET** /playlistitem/count | Get the count of playlist items.
[**service_playlist_item_erase**](PlaylistItemApi.md#service_playlist_item_erase) | **DELETE** /playlistitem/{id} | Deletes an PlaylistItem using an id
[**service_playlist_item_get**](PlaylistItemApi.md#service_playlist_item_get) | **GET** /playlistitem/{id} | Returns an PlaylistItem using an id
[**service_playlist_item_get_page**](PlaylistItemApi.md#service_playlist_item_get_page) | **GET** /playlistitem | Returns PlaylistItem(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_playlist_item_insert**](PlaylistItemApi.md#service_playlist_item_insert) | **POST** /playlistitem | Creates an PlaylistItem. You can pass an empty id, it will then create one.
[**service_playlist_item_remove_multiple**](PlaylistItemApi.md#service_playlist_item_remove_multiple) | **POST** /playlistitem/removemultiple | Removes multiple items from a playlist.
[**service_playlist_item_set_playlist_items**](PlaylistItemApi.md#service_playlist_item_set_playlist_items) | **POST** /playlistitem/setplaylistitems | Updates a list of playlist items.
[**service_playlist_item_update**](PlaylistItemApi.md#service_playlist_item_update) | **PUT** /playlistitem/{id} | Updates an PlaylistItem using an id


# **service_playlist_item_add**
> service_playlist_item_add(song_list=song_list)

Adds multiple items to a playlist.

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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    song_list = mymusik_client.SongList() # SongList | SongList that should be updated (optional)

    try:
        # Adds multiple items to a playlist.
        api_instance.service_playlist_item_add(song_list=song_list)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_add: %s\n" % e)
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

# **service_playlist_item_add_album**
> service_playlist_item_add_album(album_list=album_list)

Adds multiple albums to a playlist.

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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    album_list = mymusik_client.AlbumList() # AlbumList | AlbumList that should be updated (optional)

    try:
        # Adds multiple albums to a playlist.
        api_instance.service_playlist_item_add_album(album_list=album_list)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_add_album: %s\n" % e)
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

# **service_playlist_item_count**
> int service_playlist_item_count()

Get the count of playlist items.

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
    api_instance = mymusik_client.PlaylistItemApi(api_client)

    try:
        # Get the count of playlist items.
        api_response = api_instance.service_playlist_item_count()
        print("The response of PlaylistItemApi->service_playlist_item_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_count: %s\n" % e)
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

# **service_playlist_item_erase**
> service_playlist_item_erase(id)

Deletes an PlaylistItem using an id

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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an PlaylistItem using an id
        api_instance.service_playlist_item_erase(id)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_erase: %s\n" % e)
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

# **service_playlist_item_get**
> PlaylistItem service_playlist_item_get(id)

Returns an PlaylistItem using an id

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_item import PlaylistItem
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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an PlaylistItem using an id
        api_response = api_instance.service_playlist_item_get(id)
        print("The response of PlaylistItemApi->service_playlist_item_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**PlaylistItem**](PlaylistItem.md)

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

# **service_playlist_item_get_page**
> List[PlaylistItem] service_playlist_item_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns PlaylistItem(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_item import PlaylistItem
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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns PlaylistItem(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_playlist_item_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of PlaylistItemApi->service_playlist_item_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_get_page: %s\n" % e)
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

[**List[PlaylistItem]**](PlaylistItem.md)

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

# **service_playlist_item_insert**
> service_playlist_item_insert(playlist_item=playlist_item)

Creates an PlaylistItem. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_item import PlaylistItem
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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    playlist_item = mymusik_client.PlaylistItem() # PlaylistItem | PlaylistItem that should be updated (optional)

    try:
        # Creates an PlaylistItem. You can pass an empty id, it will then create one.
        api_instance.service_playlist_item_insert(playlist_item=playlist_item)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist_item** | [**PlaylistItem**](PlaylistItem.md)| PlaylistItem that should be updated | [optional] 

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

# **service_playlist_item_remove_multiple**
> service_playlist_item_remove_multiple(playlist_item_list=playlist_item_list)

Removes multiple items from a playlist.

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_item_list import PlaylistItemList
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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    playlist_item_list = mymusik_client.PlaylistItemList() # PlaylistItemList | PlaylistItemList that should be updated (optional)

    try:
        # Removes multiple items from a playlist.
        api_instance.service_playlist_item_remove_multiple(playlist_item_list=playlist_item_list)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_remove_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist_item_list** | [**PlaylistItemList**](PlaylistItemList.md)| PlaylistItemList that should be updated | [optional] 

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

# **service_playlist_item_set_playlist_items**
> service_playlist_item_set_playlist_items(playlist_item_list=playlist_item_list)

Updates a list of playlist items.

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_item_list import PlaylistItemList
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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    playlist_item_list = mymusik_client.PlaylistItemList() # PlaylistItemList | PlaylistItemList that should be updated (optional)

    try:
        # Updates a list of playlist items.
        api_instance.service_playlist_item_set_playlist_items(playlist_item_list=playlist_item_list)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_set_playlist_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist_item_list** | [**PlaylistItemList**](PlaylistItemList.md)| PlaylistItemList that should be updated | [optional] 

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

# **service_playlist_item_update**
> service_playlist_item_update(id, playlist_item=playlist_item)

Updates an PlaylistItem using an id

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_item import PlaylistItem
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
    api_instance = mymusik_client.PlaylistItemApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    playlist_item = mymusik_client.PlaylistItem() # PlaylistItem | PlaylistItem that should be updated (optional)

    try:
        # Updates an PlaylistItem using an id
        api_instance.service_playlist_item_update(id, playlist_item=playlist_item)
    except Exception as e:
        print("Exception when calling PlaylistItemApi->service_playlist_item_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **playlist_item** | [**PlaylistItem**](PlaylistItem.md)| PlaylistItem that should be updated | [optional] 

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

