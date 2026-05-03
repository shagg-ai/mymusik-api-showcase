# mymusik_client.TemporaryMessageApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_temporary_message_erase**](TemporaryMessageApi.md#service_temporary_message_erase) | **DELETE** /temporarymessage/{id} | Deletes an TemporaryMessage using an id
[**service_temporary_message_get**](TemporaryMessageApi.md#service_temporary_message_get) | **GET** /temporarymessage/{id} | Returns an TemporaryMessage using an id
[**service_temporary_message_get_page**](TemporaryMessageApi.md#service_temporary_message_get_page) | **GET** /temporarymessage | Returns TemporaryMessage(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_temporary_message_insert**](TemporaryMessageApi.md#service_temporary_message_insert) | **POST** /temporarymessage | Creates an TemporaryMessage. You can pass an empty id, it will then create one.
[**service_temporary_message_update**](TemporaryMessageApi.md#service_temporary_message_update) | **PUT** /temporarymessage/{id} | Updates an TemporaryMessage using an id


# **service_temporary_message_erase**
> service_temporary_message_erase(id)

Deletes an TemporaryMessage using an id

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
    api_instance = mymusik_client.TemporaryMessageApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an TemporaryMessage using an id
        api_instance.service_temporary_message_erase(id)
    except Exception as e:
        print("Exception when calling TemporaryMessageApi->service_temporary_message_erase: %s\n" % e)
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

# **service_temporary_message_get**
> TemporaryMessage service_temporary_message_get(id)

Returns an TemporaryMessage using an id

### Example


```python
import mymusik_client
from mymusik_client.models.temporary_message import TemporaryMessage
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
    api_instance = mymusik_client.TemporaryMessageApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an TemporaryMessage using an id
        api_response = api_instance.service_temporary_message_get(id)
        print("The response of TemporaryMessageApi->service_temporary_message_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemporaryMessageApi->service_temporary_message_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**TemporaryMessage**](TemporaryMessage.md)

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

# **service_temporary_message_get_page**
> List[TemporaryMessage] service_temporary_message_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns TemporaryMessage(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.temporary_message import TemporaryMessage
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
    api_instance = mymusik_client.TemporaryMessageApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns TemporaryMessage(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_temporary_message_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of TemporaryMessageApi->service_temporary_message_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemporaryMessageApi->service_temporary_message_get_page: %s\n" % e)
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

[**List[TemporaryMessage]**](TemporaryMessage.md)

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

# **service_temporary_message_insert**
> service_temporary_message_insert(temporary_message=temporary_message)

Creates an TemporaryMessage. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.temporary_message import TemporaryMessage
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
    api_instance = mymusik_client.TemporaryMessageApi(api_client)
    temporary_message = mymusik_client.TemporaryMessage() # TemporaryMessage | TemporaryMessage that should be updated (optional)

    try:
        # Creates an TemporaryMessage. You can pass an empty id, it will then create one.
        api_instance.service_temporary_message_insert(temporary_message=temporary_message)
    except Exception as e:
        print("Exception when calling TemporaryMessageApi->service_temporary_message_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **temporary_message** | [**TemporaryMessage**](TemporaryMessage.md)| TemporaryMessage that should be updated | [optional] 

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

# **service_temporary_message_update**
> service_temporary_message_update(id, temporary_message=temporary_message)

Updates an TemporaryMessage using an id

### Example


```python
import mymusik_client
from mymusik_client.models.temporary_message import TemporaryMessage
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
    api_instance = mymusik_client.TemporaryMessageApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    temporary_message = mymusik_client.TemporaryMessage() # TemporaryMessage | TemporaryMessage that should be updated (optional)

    try:
        # Updates an TemporaryMessage using an id
        api_instance.service_temporary_message_update(id, temporary_message=temporary_message)
    except Exception as e:
        print("Exception when calling TemporaryMessageApi->service_temporary_message_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **temporary_message** | [**TemporaryMessage**](TemporaryMessage.md)| TemporaryMessage that should be updated | [optional] 

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

