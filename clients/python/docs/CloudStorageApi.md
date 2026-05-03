# mymusik_client.CloudStorageApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_cloud_storage_get**](CloudStorageApi.md#service_cloud_storage_get) | **GET** /cloudstorage/{id} | Returns an CloudStorage using an id
[**service_cloud_storage_get_page**](CloudStorageApi.md#service_cloud_storage_get_page) | **GET** /cloudstorage | Returns CloudStorage(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_cloud_storage_get_storage_left**](CloudStorageApi.md#service_cloud_storage_get_storage_left) | **GET** /cloudstorage/getstorageleft | Retrieves the left storage in bytes available.
[**service_cloud_storage_get_used_storage**](CloudStorageApi.md#service_cloud_storage_get_used_storage) | **GET** /cloudstorage/getusedstorage | Retrieves the total storage in bytes available for the year.


# **service_cloud_storage_get**
> CloudStorage service_cloud_storage_get(id)

Returns an CloudStorage using an id

### Example


```python
import mymusik_client
from mymusik_client.models.cloud_storage import CloudStorage
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
    api_instance = mymusik_client.CloudStorageApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an CloudStorage using an id
        api_response = api_instance.service_cloud_storage_get(id)
        print("The response of CloudStorageApi->service_cloud_storage_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudStorageApi->service_cloud_storage_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**CloudStorage**](CloudStorage.md)

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

# **service_cloud_storage_get_page**
> List[CloudStorage] service_cloud_storage_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns CloudStorage(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.cloud_storage import CloudStorage
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
    api_instance = mymusik_client.CloudStorageApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns CloudStorage(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_cloud_storage_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of CloudStorageApi->service_cloud_storage_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudStorageApi->service_cloud_storage_get_page: %s\n" % e)
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

[**List[CloudStorage]**](CloudStorage.md)

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

# **service_cloud_storage_get_storage_left**
> int service_cloud_storage_get_storage_left()

Retrieves the left storage in bytes available.

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
    api_instance = mymusik_client.CloudStorageApi(api_client)

    try:
        # Retrieves the left storage in bytes available.
        api_response = api_instance.service_cloud_storage_get_storage_left()
        print("The response of CloudStorageApi->service_cloud_storage_get_storage_left:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudStorageApi->service_cloud_storage_get_storage_left: %s\n" % e)
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

# **service_cloud_storage_get_used_storage**
> int service_cloud_storage_get_used_storage()

Retrieves the total storage in bytes available for the year.

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
    api_instance = mymusik_client.CloudStorageApi(api_client)

    try:
        # Retrieves the total storage in bytes available for the year.
        api_response = api_instance.service_cloud_storage_get_used_storage()
        print("The response of CloudStorageApi->service_cloud_storage_get_used_storage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudStorageApi->service_cloud_storage_get_used_storage: %s\n" % e)
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

