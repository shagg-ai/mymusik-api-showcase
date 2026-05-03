# mymusik_client.CloudSearchApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_cloud_search_erase**](CloudSearchApi.md#service_cloud_search_erase) | **DELETE** /cloudsearch/{id} | Deletes an CloudSearch using an id
[**service_cloud_search_get**](CloudSearchApi.md#service_cloud_search_get) | **GET** /cloudsearch/{id} | Returns an CloudSearch using an id
[**service_cloud_search_get_page**](CloudSearchApi.md#service_cloud_search_get_page) | **GET** /cloudsearch | Returns CloudSearch(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_cloud_search_insert**](CloudSearchApi.md#service_cloud_search_insert) | **POST** /cloudsearch | Creates an CloudSearch. You can pass an empty id, it will then create one.


# **service_cloud_search_erase**
> service_cloud_search_erase(id)

Deletes an CloudSearch using an id

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
    api_instance = mymusik_client.CloudSearchApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an CloudSearch using an id
        api_instance.service_cloud_search_erase(id)
    except Exception as e:
        print("Exception when calling CloudSearchApi->service_cloud_search_erase: %s\n" % e)
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

# **service_cloud_search_get**
> CloudSearch service_cloud_search_get(id)

Returns an CloudSearch using an id

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
    api_instance = mymusik_client.CloudSearchApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an CloudSearch using an id
        api_response = api_instance.service_cloud_search_get(id)
        print("The response of CloudSearchApi->service_cloud_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudSearchApi->service_cloud_search_get: %s\n" % e)
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

# **service_cloud_search_get_page**
> List[CloudSearch] service_cloud_search_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns CloudSearch(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

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
    api_instance = mymusik_client.CloudSearchApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns CloudSearch(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_cloud_search_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of CloudSearchApi->service_cloud_search_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudSearchApi->service_cloud_search_get_page: %s\n" % e)
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

[**List[CloudSearch]**](CloudSearch.md)

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

# **service_cloud_search_insert**
> service_cloud_search_insert(file_identifier_list=file_identifier_list)

Creates an CloudSearch. You can pass an empty id, it will then create one.

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
    api_instance = mymusik_client.CloudSearchApi(api_client)
    file_identifier_list = mymusik_client.FileIdentifierList() # FileIdentifierList | FileIdentifierList that should be updated (optional)

    try:
        # Creates an CloudSearch. You can pass an empty id, it will then create one.
        api_instance.service_cloud_search_insert(file_identifier_list=file_identifier_list)
    except Exception as e:
        print("Exception when calling CloudSearchApi->service_cloud_search_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_identifier_list** | [**FileIdentifierList**](FileIdentifierList.md)| FileIdentifierList that should be updated | [optional] 

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

