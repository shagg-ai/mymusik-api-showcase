# mymusik_client.PlaylistApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_playlist_count**](PlaylistApi.md#service_playlist_count) | **GET** /playlist/count | Returns number of playlist in library
[**service_playlist_create**](PlaylistApi.md#service_playlist_create) | **POST** /playlist/create | Creates a new Playlist based on on a song list.
[**service_playlist_create_from_albums**](PlaylistApi.md#service_playlist_create_from_albums) | **POST** /playlist/createfromalbums | Creates a new Playlist based on albums.
[**service_playlist_erase**](PlaylistApi.md#service_playlist_erase) | **DELETE** /playlist/{id} | Deletes an Playlist using an id
[**service_playlist_get**](PlaylistApi.md#service_playlist_get) | **GET** /playlist/{id} | Returns an Playlist using an id
[**service_playlist_get_page**](PlaylistApi.md#service_playlist_get_page) | **GET** /playlist | Returns Playlist(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_playlist_insert**](PlaylistApi.md#service_playlist_insert) | **POST** /playlist | Creates an Playlist. You can pass an empty id, it will then create one.
[**service_playlist_update**](PlaylistApi.md#service_playlist_update) | **PUT** /playlist/{id} | Updates an Playlist using an id


# **service_playlist_count**
> int service_playlist_count()

Returns number of playlist in library

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
    api_instance = mymusik_client.PlaylistApi(api_client)

    try:
        # Returns number of playlist in library
        api_response = api_instance.service_playlist_count()
        print("The response of PlaylistApi->service_playlist_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_count: %s\n" % e)
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

# **service_playlist_create**
> service_playlist_create(song_list=song_list)

Creates a new Playlist based on on a song list.

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
    api_instance = mymusik_client.PlaylistApi(api_client)
    song_list = mymusik_client.SongList() # SongList | SongList that should be updated (optional)

    try:
        # Creates a new Playlist based on on a song list.
        api_instance.service_playlist_create(song_list=song_list)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_create: %s\n" % e)
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

# **service_playlist_create_from_albums**
> service_playlist_create_from_albums(album_list=album_list)

Creates a new Playlist based on albums.

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
    api_instance = mymusik_client.PlaylistApi(api_client)
    album_list = mymusik_client.AlbumList() # AlbumList | AlbumList that should be updated (optional)

    try:
        # Creates a new Playlist based on albums.
        api_instance.service_playlist_create_from_albums(album_list=album_list)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_create_from_albums: %s\n" % e)
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

# **service_playlist_erase**
> service_playlist_erase(id)

Deletes an Playlist using an id

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
    api_instance = mymusik_client.PlaylistApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an Playlist using an id
        api_instance.service_playlist_erase(id)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_erase: %s\n" % e)
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

# **service_playlist_get**
> Playlist service_playlist_get(id)

Returns an Playlist using an id

### Example


```python
import mymusik_client
from mymusik_client.models.playlist import Playlist
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
    api_instance = mymusik_client.PlaylistApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an Playlist using an id
        api_response = api_instance.service_playlist_get(id)
        print("The response of PlaylistApi->service_playlist_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**Playlist**](Playlist.md)

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

# **service_playlist_get_page**
> List[Playlist] service_playlist_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns Playlist(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.playlist import Playlist
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
    api_instance = mymusik_client.PlaylistApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns Playlist(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_playlist_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of PlaylistApi->service_playlist_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_get_page: %s\n" % e)
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

[**List[Playlist]**](Playlist.md)

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

# **service_playlist_insert**
> service_playlist_insert(playlist=playlist)

Creates an Playlist. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.playlist import Playlist
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
    api_instance = mymusik_client.PlaylistApi(api_client)
    playlist = mymusik_client.Playlist() # Playlist | Playlist that should be updated (optional)

    try:
        # Creates an Playlist. You can pass an empty id, it will then create one.
        api_instance.service_playlist_insert(playlist=playlist)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist** | [**Playlist**](Playlist.md)| Playlist that should be updated | [optional] 

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

# **service_playlist_update**
> service_playlist_update(id, playlist=playlist)

Updates an Playlist using an id

### Example


```python
import mymusik_client
from mymusik_client.models.playlist import Playlist
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
    api_instance = mymusik_client.PlaylistApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    playlist = mymusik_client.Playlist() # Playlist | Playlist that should be updated (optional)

    try:
        # Updates an Playlist using an id
        api_instance.service_playlist_update(id, playlist=playlist)
    except Exception as e:
        print("Exception when calling PlaylistApi->service_playlist_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **playlist** | [**Playlist**](Playlist.md)| Playlist that should be updated | [optional] 

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

