# mymusik_client.AlbumCloudApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_album_cloud_download**](AlbumCloudApi.md#service_album_cloud_download) | **POST** /albumcloud/{id}/download | Downloads an album
[**service_album_cloud_download_image**](AlbumCloudApi.md#service_album_cloud_download_image) | **POST** /albumcloud/{id}/downloadimage | Downloads only the album image
[**service_album_cloud_erase**](AlbumCloudApi.md#service_album_cloud_erase) | **DELETE** /albumcloud/{id} | Deletes an AlbumCloud using an id
[**service_album_cloud_get**](AlbumCloudApi.md#service_album_cloud_get) | **GET** /albumcloud/{id} | Returns an AlbumCloud using an id
[**service_album_cloud_get_cloud_status**](AlbumCloudApi.md#service_album_cloud_get_cloud_status) | **GET** /albumcloud/{id}/getcloudstatus | Returns the cloud status of this album
[**service_album_cloud_get_cloud_status_for_songs**](AlbumCloudApi.md#service_album_cloud_get_cloud_status_for_songs) | **GET** /albumcloud/{id}/getcloudstatusforsongs | Returns the cloud status of the songs of this album
[**service_album_cloud_get_image_from_cloud_by_description**](AlbumCloudApi.md#service_album_cloud_get_image_from_cloud_by_description) | **GET** /albumcloud/{id}/getimagefromcloudbydescription | Returns the cloud status of an image by description
[**service_album_cloud_get_local_files_status**](AlbumCloudApi.md#service_album_cloud_get_local_files_status) | **GET** /albumcloud/{id}/getlocalfilesstatus | Returns the local files status of this album. The ids of fileIdentifier are the song ids of the album.
[**service_album_cloud_get_music_elements_for_cloud_items**](AlbumCloudApi.md#service_album_cloud_get_music_elements_for_cloud_items) | **GET** /albumcloud/getmusicelementsforclouditems | Returns the music elements of cloud items. The filter is used to get the cloud items, returned are the matching musicelements
[**service_album_cloud_get_page**](AlbumCloudApi.md#service_album_cloud_get_page) | **GET** /albumcloud | Returns AlbumCloud(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_album_cloud_upload**](AlbumCloudApi.md#service_album_cloud_upload) | **POST** /albumcloud/{id}/upload | Uploads an album


# **service_album_cloud_download**
> service_album_cloud_download(id)

Downloads an album

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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Downloads an album
        api_instance.service_album_cloud_download(id)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_download: %s\n" % e)
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

# **service_album_cloud_download_image**
> service_album_cloud_download_image(id)

Downloads only the album image

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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Downloads only the album image
        api_instance.service_album_cloud_download_image(id)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_download_image: %s\n" % e)
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

# **service_album_cloud_erase**
> service_album_cloud_erase(id)

Deletes an AlbumCloud using an id

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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an AlbumCloud using an id
        api_instance.service_album_cloud_erase(id)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_erase: %s\n" % e)
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

# **service_album_cloud_get**
> AlbumCloud service_album_cloud_get(id)

Returns an AlbumCloud using an id

### Example


```python
import mymusik_client
from mymusik_client.models.album_cloud import AlbumCloud
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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an AlbumCloud using an id
        api_response = api_instance.service_album_cloud_get(id)
        print("The response of AlbumCloudApi->service_album_cloud_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**AlbumCloud**](AlbumCloud.md)

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

# **service_album_cloud_get_cloud_status**
> CloudSearch service_album_cloud_get_cloud_status(id)

Returns the cloud status of this album

### Example


```python
import mymusik_client
from mymusik_client.models.cloud_search import CloudSearch
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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns the cloud status of this album
        api_response = api_instance.service_album_cloud_get_cloud_status(id)
        print("The response of AlbumCloudApi->service_album_cloud_get_cloud_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_get_cloud_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**CloudSearch**](CloudSearch.md)

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

# **service_album_cloud_get_cloud_status_for_songs**
> CloudSearch service_album_cloud_get_cloud_status_for_songs(id)

Returns the cloud status of the songs of this album

### Example


```python
import mymusik_client
from mymusik_client.models.cloud_search import CloudSearch
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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns the cloud status of the songs of this album
        api_response = api_instance.service_album_cloud_get_cloud_status_for_songs(id)
        print("The response of AlbumCloudApi->service_album_cloud_get_cloud_status_for_songs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_get_cloud_status_for_songs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**CloudSearch**](CloudSearch.md)

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

# **service_album_cloud_get_image_from_cloud_by_description**
> Cloud service_album_cloud_get_image_from_cloud_by_description(id)

Returns the cloud status of an image by description

### Example


```python
import mymusik_client
from mymusik_client.models.cloud import Cloud
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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns the cloud status of an image by description
        api_response = api_instance.service_album_cloud_get_image_from_cloud_by_description(id)
        print("The response of AlbumCloudApi->service_album_cloud_get_image_from_cloud_by_description:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_get_image_from_cloud_by_description: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**Cloud**](Cloud.md)

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

# **service_album_cloud_get_local_files_status**
> FileIdentifierList service_album_cloud_get_local_files_status(id)

Returns the local files status of this album. The ids of fileIdentifier are the song ids of the album.

### Example


```python
import mymusik_client
from mymusik_client.models.file_identifier_list import FileIdentifierList
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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns the local files status of this album. The ids of fileIdentifier are the song ids of the album.
        api_response = api_instance.service_album_cloud_get_local_files_status(id)
        print("The response of AlbumCloudApi->service_album_cloud_get_local_files_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_get_local_files_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**FileIdentifierList**](FileIdentifierList.md)

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

# **service_album_cloud_get_music_elements_for_cloud_items**
> List[ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner] service_album_cloud_get_music_elements_for_cloud_items(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns the music elements of cloud items. The filter is used to get the cloud items, returned are the matching musicelements

### Example


```python
import mymusik_client
from mymusik_client.models.service_album_cloud_get_music_elements_for_cloud_items200_response_inner import ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner
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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns the music elements of cloud items. The filter is used to get the cloud items, returned are the matching musicelements
        api_response = api_instance.service_album_cloud_get_music_elements_for_cloud_items(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of AlbumCloudApi->service_album_cloud_get_music_elements_for_cloud_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_get_music_elements_for_cloud_items: %s\n" % e)
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

[**List[ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner]**](ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner.md)

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

# **service_album_cloud_get_page**
> List[AlbumCloud] service_album_cloud_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns AlbumCloud(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.album_cloud import AlbumCloud
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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns AlbumCloud(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_album_cloud_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of AlbumCloudApi->service_album_cloud_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_get_page: %s\n" % e)
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

[**List[AlbumCloud]**](AlbumCloud.md)

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

# **service_album_cloud_upload**
> service_album_cloud_upload(id)

Uploads an album

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
    api_instance = mymusik_client.AlbumCloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Uploads an album
        api_instance.service_album_cloud_upload(id)
    except Exception as e:
        print("Exception when calling AlbumCloudApi->service_album_cloud_upload: %s\n" % e)
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

