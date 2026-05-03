# mymusik_client.FilePayloadApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_file_payload_erase**](FilePayloadApi.md#service_file_payload_erase) | **DELETE** /filepayload/{id} | Deletes an FilePayload using an id
[**service_file_payload_get**](FilePayloadApi.md#service_file_payload_get) | **GET** /filepayload/{id} | Returns an FilePayload using an id
[**service_file_payload_get_in_progress_count**](FilePayloadApi.md#service_file_payload_get_in_progress_count) | **GET** /filepayload/getinprogresscount | Return count of files in progress
[**service_file_payload_get_page**](FilePayloadApi.md#service_file_payload_get_page) | **GET** /filepayload | Returns FilePayload(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_file_payload_get_pending_count**](FilePayloadApi.md#service_file_payload_get_pending_count) | **GET** /filepayload/getpendingcount | Return count of pending files
[**service_file_payload_insert**](FilePayloadApi.md#service_file_payload_insert) | **POST** /filepayload | Creates an FilePayload. You can pass an empty id, it will then create one.
[**service_file_payload_update**](FilePayloadApi.md#service_file_payload_update) | **PUT** /filepayload/{id} | Updates an FilePayload using an id


# **service_file_payload_erase**
> service_file_payload_erase(id)

Deletes an FilePayload using an id

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
    api_instance = mymusik_client.FilePayloadApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an FilePayload using an id
        api_instance.service_file_payload_erase(id)
    except Exception as e:
        print("Exception when calling FilePayloadApi->service_file_payload_erase: %s\n" % e)
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

# **service_file_payload_get**
> FilePayload service_file_payload_get(id)

Returns an FilePayload using an id

### Example


```python
import mymusik_client
from mymusik_client.models.file_payload import FilePayload
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
    api_instance = mymusik_client.FilePayloadApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an FilePayload using an id
        api_response = api_instance.service_file_payload_get(id)
        print("The response of FilePayloadApi->service_file_payload_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilePayloadApi->service_file_payload_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**FilePayload**](FilePayload.md)

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

# **service_file_payload_get_in_progress_count**
> int service_file_payload_get_in_progress_count()

Return count of files in progress

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
    api_instance = mymusik_client.FilePayloadApi(api_client)

    try:
        # Return count of files in progress
        api_response = api_instance.service_file_payload_get_in_progress_count()
        print("The response of FilePayloadApi->service_file_payload_get_in_progress_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilePayloadApi->service_file_payload_get_in_progress_count: %s\n" % e)
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

# **service_file_payload_get_page**
> List[FilePayload] service_file_payload_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns FilePayload(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.file_payload import FilePayload
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
    api_instance = mymusik_client.FilePayloadApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns FilePayload(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_file_payload_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of FilePayloadApi->service_file_payload_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilePayloadApi->service_file_payload_get_page: %s\n" % e)
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

[**List[FilePayload]**](FilePayload.md)

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

# **service_file_payload_get_pending_count**
> int service_file_payload_get_pending_count()

Return count of pending files

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
    api_instance = mymusik_client.FilePayloadApi(api_client)

    try:
        # Return count of pending files
        api_response = api_instance.service_file_payload_get_pending_count()
        print("The response of FilePayloadApi->service_file_payload_get_pending_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilePayloadApi->service_file_payload_get_pending_count: %s\n" % e)
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

# **service_file_payload_insert**
> service_file_payload_insert(file_payload=file_payload)

Creates an FilePayload. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.file_payload import FilePayload
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
    api_instance = mymusik_client.FilePayloadApi(api_client)
    file_payload = mymusik_client.FilePayload() # FilePayload | FilePayload that should be updated (optional)

    try:
        # Creates an FilePayload. You can pass an empty id, it will then create one.
        api_instance.service_file_payload_insert(file_payload=file_payload)
    except Exception as e:
        print("Exception when calling FilePayloadApi->service_file_payload_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_payload** | [**FilePayload**](FilePayload.md)| FilePayload that should be updated | [optional] 

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

# **service_file_payload_update**
> service_file_payload_update(id, file_payload=file_payload)

Updates an FilePayload using an id

### Example


```python
import mymusik_client
from mymusik_client.models.file_payload import FilePayload
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
    api_instance = mymusik_client.FilePayloadApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    file_payload = mymusik_client.FilePayload() # FilePayload | FilePayload that should be updated (optional)

    try:
        # Updates an FilePayload using an id
        api_instance.service_file_payload_update(id, file_payload=file_payload)
    except Exception as e:
        print("Exception when calling FilePayloadApi->service_file_payload_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **file_payload** | [**FilePayload**](FilePayload.md)| FilePayload that should be updated | [optional] 

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

