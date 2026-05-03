# mymusik_client.MusicElementApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_music_element_count**](MusicElementApi.md#service_music_element_count) | **GET** /musicelement/count | Returns number of filtered musicelements in library
[**service_music_element_erase**](MusicElementApi.md#service_music_element_erase) | **DELETE** /musicelement/{id} | Deletes an MusicElement using an id
[**service_music_element_get**](MusicElementApi.md#service_music_element_get) | **GET** /musicelement/{id} | Returns an MusicElement using an id
[**service_music_element_get_page**](MusicElementApi.md#service_music_element_get_page) | **GET** /musicelement | Returns MusicElement(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_music_element_insert**](MusicElementApi.md#service_music_element_insert) | **POST** /musicelement | Creates an MusicElement. You can pass an empty id, it will then create one.
[**service_music_element_update**](MusicElementApi.md#service_music_element_update) | **PUT** /musicelement/{id} | Updates an MusicElement using an id
[**service_music_element_upload_cover_to_cloud**](MusicElementApi.md#service_music_element_upload_cover_to_cloud) | **POST** /musicelement/{id}/uploadcovertocloud | Queues the current cover image of the music element for cloud upload.


# **service_music_element_count**
> int service_music_element_count(filter_name=filter_name, values=values)

Returns number of filtered musicelements in library

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
    api_instance = mymusik_client.MusicElementApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)

    try:
        # Returns number of filtered musicelements in library
        api_response = api_instance.service_music_element_count(filter_name=filter_name, values=values)
        print("The response of MusicElementApi->service_music_element_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicElementApi->service_music_element_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_name** | **str**| the name of a Filter resource | [optional] 
 **values** | **str**| input parameter for the filter use &#39;;&#39; to separate values | [optional] 

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

# **service_music_element_erase**
> service_music_element_erase(id)

Deletes an MusicElement using an id

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
    api_instance = mymusik_client.MusicElementApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an MusicElement using an id
        api_instance.service_music_element_erase(id)
    except Exception as e:
        print("Exception when calling MusicElementApi->service_music_element_erase: %s\n" % e)
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

# **service_music_element_get**
> ServiceMusicElementInsertRequest service_music_element_get(id)

Returns an MusicElement using an id

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
    api_instance = mymusik_client.MusicElementApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an MusicElement using an id
        api_response = api_instance.service_music_element_get(id)
        print("The response of MusicElementApi->service_music_element_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicElementApi->service_music_element_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**ServiceMusicElementInsertRequest**](ServiceMusicElementInsertRequest.md)

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

# **service_music_element_get_page**
> List[ServiceAlbumCloudGetMusicElementsForCloudItems200ResponseInner] service_music_element_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns MusicElement(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

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
    api_instance = mymusik_client.MusicElementApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns MusicElement(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_music_element_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of MusicElementApi->service_music_element_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicElementApi->service_music_element_get_page: %s\n" % e)
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

# **service_music_element_insert**
> service_music_element_insert(service_music_element_insert_request=service_music_element_insert_request)

Creates an MusicElement. You can pass an empty id, it will then create one.

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
    api_instance = mymusik_client.MusicElementApi(api_client)
    service_music_element_insert_request = mymusik_client.ServiceMusicElementInsertRequest() # ServiceMusicElementInsertRequest | MusicElement that should be updated (optional)

    try:
        # Creates an MusicElement. You can pass an empty id, it will then create one.
        api_instance.service_music_element_insert(service_music_element_insert_request=service_music_element_insert_request)
    except Exception as e:
        print("Exception when calling MusicElementApi->service_music_element_insert: %s\n" % e)
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

# **service_music_element_update**
> service_music_element_update(id, service_music_element_insert_request=service_music_element_insert_request)

Updates an MusicElement using an id

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
    api_instance = mymusik_client.MusicElementApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    service_music_element_insert_request = mymusik_client.ServiceMusicElementInsertRequest() # ServiceMusicElementInsertRequest | MusicElement that should be updated (optional)

    try:
        # Updates an MusicElement using an id
        api_instance.service_music_element_update(id, service_music_element_insert_request=service_music_element_insert_request)
    except Exception as e:
        print("Exception when calling MusicElementApi->service_music_element_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
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
**204** | Entity updated |  -  |
**404** | Could not update entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_music_element_upload_cover_to_cloud**
> service_music_element_upload_cover_to_cloud(id)

Queues the current cover image of the music element for cloud upload.

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
    api_instance = mymusik_client.MusicElementApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Queues the current cover image of the music element for cloud upload.
        api_instance.service_music_element_upload_cover_to_cloud(id)
    except Exception as e:
        print("Exception when calling MusicElementApi->service_music_element_upload_cover_to_cloud: %s\n" % e)
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

