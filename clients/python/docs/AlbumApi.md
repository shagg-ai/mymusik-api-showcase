# mymusik_client.AlbumApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_album_count**](AlbumApi.md#service_album_count) | **GET** /album/count | Returns number of albums in library
[**service_album_erase**](AlbumApi.md#service_album_erase) | **DELETE** /album/{id} | Deletes an Album using an id
[**service_album_get**](AlbumApi.md#service_album_get) | **GET** /album/{id} | Returns an Album using an id
[**service_album_get_albums_for_artist**](AlbumApi.md#service_album_get_albums_for_artist) | **GET** /album/getalbumsforartist | Returns a list of albums for the given artist identifier in the value parameter.
[**service_album_get_page**](AlbumApi.md#service_album_get_page) | **GET** /album | Returns Album(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_album_get_song_count**](AlbumApi.md#service_album_get_song_count) | **GET** /album/{id}/getsongcount | Returns number of songs in an album
[**service_album_get_song_list**](AlbumApi.md#service_album_get_song_list) | **GET** /album/{id}/getsonglist | Returns a list of songs for an given album
[**service_album_get_songs_not_available**](AlbumApi.md#service_album_get_songs_not_available) | **GET** /album/{id}/getsongsnotavailable | Returns a list of songs for an given album that are not existing locally
[**service_album_insert**](AlbumApi.md#service_album_insert) | **POST** /album | Creates an Album. You can pass an empty id, it will then create one.
[**service_album_move_songs_to_album**](AlbumApi.md#service_album_move_songs_to_album) | **POST** /album/movesongstoalbum | Moves songs to an different album.
[**service_album_update**](AlbumApi.md#service_album_update) | **PUT** /album/{id} | Updates an Album using an id


# **service_album_count**
> int service_album_count()

Returns number of albums in library

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
    api_instance = mymusik_client.AlbumApi(api_client)

    try:
        # Returns number of albums in library
        api_response = api_instance.service_album_count()
        print("The response of AlbumApi->service_album_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_count: %s\n" % e)
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

# **service_album_erase**
> service_album_erase(id)

Deletes an Album using an id

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
    api_instance = mymusik_client.AlbumApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an Album using an id
        api_instance.service_album_erase(id)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_erase: %s\n" % e)
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

# **service_album_get**
> Album service_album_get(id)

Returns an Album using an id

### Example


```python
import mymusik_client
from mymusik_client.models.album import Album
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
    api_instance = mymusik_client.AlbumApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an Album using an id
        api_response = api_instance.service_album_get(id)
        print("The response of AlbumApi->service_album_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**Album**](Album.md)

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

# **service_album_get_albums_for_artist**
> List[Album] service_album_get_albums_for_artist(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns a list of albums for the given artist identifier in the value parameter.

### Example


```python
import mymusik_client
from mymusik_client.models.album import Album
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
    api_instance = mymusik_client.AlbumApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns a list of albums for the given artist identifier in the value parameter.
        api_response = api_instance.service_album_get_albums_for_artist(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of AlbumApi->service_album_get_albums_for_artist:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_get_albums_for_artist: %s\n" % e)
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

[**List[Album]**](Album.md)

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

# **service_album_get_page**
> List[Album] service_album_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns Album(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.album import Album
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
    api_instance = mymusik_client.AlbumApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns Album(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_album_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of AlbumApi->service_album_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_get_page: %s\n" % e)
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

[**List[Album]**](Album.md)

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

# **service_album_get_song_count**
> int service_album_get_song_count(id)

Returns number of songs in an album

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
    api_instance = mymusik_client.AlbumApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns number of songs in an album
        api_response = api_instance.service_album_get_song_count(id)
        print("The response of AlbumApi->service_album_get_song_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_get_song_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

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

# **service_album_get_song_list**
> SongList service_album_get_song_list(id)

Returns a list of songs for an given album

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
    api_instance = mymusik_client.AlbumApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns a list of songs for an given album
        api_response = api_instance.service_album_get_song_list(id)
        print("The response of AlbumApi->service_album_get_song_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_get_song_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**SongList**](SongList.md)

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

# **service_album_get_songs_not_available**
> SongList service_album_get_songs_not_available(id)

Returns a list of songs for an given album that are not existing locally

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
    api_instance = mymusik_client.AlbumApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns a list of songs for an given album that are not existing locally
        api_response = api_instance.service_album_get_songs_not_available(id)
        print("The response of AlbumApi->service_album_get_songs_not_available:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_get_songs_not_available: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**SongList**](SongList.md)

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

# **service_album_insert**
> service_album_insert(album=album)

Creates an Album. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.album import Album
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
    api_instance = mymusik_client.AlbumApi(api_client)
    album = mymusik_client.Album() # Album | Album that should be updated (optional)

    try:
        # Creates an Album. You can pass an empty id, it will then create one.
        api_instance.service_album_insert(album=album)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **album** | [**Album**](Album.md)| Album that should be updated | [optional] 

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

# **service_album_move_songs_to_album**
> service_album_move_songs_to_album(song_list=song_list)

Moves songs to an different album.

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
    api_instance = mymusik_client.AlbumApi(api_client)
    song_list = mymusik_client.SongList() # SongList | SongList that should be updated (optional)

    try:
        # Moves songs to an different album.
        api_instance.service_album_move_songs_to_album(song_list=song_list)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_move_songs_to_album: %s\n" % e)
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

# **service_album_update**
> service_album_update(id, album=album)

Updates an Album using an id

### Example


```python
import mymusik_client
from mymusik_client.models.album import Album
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
    api_instance = mymusik_client.AlbumApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    album = mymusik_client.Album() # Album | Album that should be updated (optional)

    try:
        # Updates an Album using an id
        api_instance.service_album_update(id, album=album)
    except Exception as e:
        print("Exception when calling AlbumApi->service_album_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **album** | [**Album**](Album.md)| Album that should be updated | [optional] 

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

