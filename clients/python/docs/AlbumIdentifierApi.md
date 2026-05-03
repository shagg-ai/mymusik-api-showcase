# mymusik_client.AlbumIdentifierApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_album_identifier_download_artist_images_for_song**](AlbumIdentifierApi.md#service_album_identifier_download_artist_images_for_song) | **POST** /albumidentifier/downloadartistimagesforsong | Download artist images of a song.
[**service_album_identifier_download_image_for_music_element**](AlbumIdentifierApi.md#service_album_identifier_download_image_for_music_element) | **POST** /albumidentifier/{id}/downloadimageformusicelement | Download an image for an music element, playlists are not supported.
[**service_album_identifier_erase**](AlbumIdentifierApi.md#service_album_identifier_erase) | **DELETE** /albumidentifier/{id} | Deletes an AlbumIdentifier using an id
[**service_album_identifier_get**](AlbumIdentifierApi.md#service_album_identifier_get) | **GET** /albumidentifier/{id} | Returns an AlbumIdentifier using an id
[**service_album_identifier_get_page**](AlbumIdentifierApi.md#service_album_identifier_get_page) | **GET** /albumidentifier | Returns AlbumIdentifier(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property


# **service_album_identifier_download_artist_images_for_song**
> service_album_identifier_download_artist_images_for_song(song=song)

Download artist images of a song.

### Example


```python
import mymusik_client
from mymusik_client.models.song import Song
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
    api_instance = mymusik_client.AlbumIdentifierApi(api_client)
    song = mymusik_client.Song() # Song | Song that should be updated (optional)

    try:
        # Download artist images of a song.
        api_instance.service_album_identifier_download_artist_images_for_song(song=song)
    except Exception as e:
        print("Exception when calling AlbumIdentifierApi->service_album_identifier_download_artist_images_for_song: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **song** | [**Song**](Song.md)| Song that should be updated | [optional] 

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

# **service_album_identifier_download_image_for_music_element**
> service_album_identifier_download_image_for_music_element(id)

Download an image for an music element, playlists are not supported.

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
    api_instance = mymusik_client.AlbumIdentifierApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Download an image for an music element, playlists are not supported.
        api_instance.service_album_identifier_download_image_for_music_element(id)
    except Exception as e:
        print("Exception when calling AlbumIdentifierApi->service_album_identifier_download_image_for_music_element: %s\n" % e)
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
**200** | Action successfully completed |  -  |
**400** | Action execution failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_album_identifier_erase**
> service_album_identifier_erase(id)

Deletes an AlbumIdentifier using an id

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
    api_instance = mymusik_client.AlbumIdentifierApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an AlbumIdentifier using an id
        api_instance.service_album_identifier_erase(id)
    except Exception as e:
        print("Exception when calling AlbumIdentifierApi->service_album_identifier_erase: %s\n" % e)
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

# **service_album_identifier_get**
> AlbumIdentifier service_album_identifier_get(id)

Returns an AlbumIdentifier using an id

### Example


```python
import mymusik_client
from mymusik_client.models.album_identifier import AlbumIdentifier
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
    api_instance = mymusik_client.AlbumIdentifierApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an AlbumIdentifier using an id
        api_response = api_instance.service_album_identifier_get(id)
        print("The response of AlbumIdentifierApi->service_album_identifier_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumIdentifierApi->service_album_identifier_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**AlbumIdentifier**](AlbumIdentifier.md)

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

# **service_album_identifier_get_page**
> List[AlbumIdentifier] service_album_identifier_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns AlbumIdentifier(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.album_identifier import AlbumIdentifier
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
    api_instance = mymusik_client.AlbumIdentifierApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns AlbumIdentifier(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_album_identifier_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of AlbumIdentifierApi->service_album_identifier_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumIdentifierApi->service_album_identifier_get_page: %s\n" % e)
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

[**List[AlbumIdentifier]**](AlbumIdentifier.md)

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

