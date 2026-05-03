# mymusik_client.StringConditionApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_string_condition_erase**](StringConditionApi.md#service_string_condition_erase) | **DELETE** /stringcondition/{id} | Deletes an StringCondition using an id
[**service_string_condition_get**](StringConditionApi.md#service_string_condition_get) | **GET** /stringcondition/{id} | Returns an StringCondition using an id
[**service_string_condition_get_page**](StringConditionApi.md#service_string_condition_get_page) | **GET** /stringcondition | Returns StringCondition(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_string_condition_insert**](StringConditionApi.md#service_string_condition_insert) | **POST** /stringcondition | Creates an StringCondition. You can pass an empty id, it will then create one.
[**service_string_condition_update**](StringConditionApi.md#service_string_condition_update) | **PUT** /stringcondition/{id} | Updates an StringCondition using an id


# **service_string_condition_erase**
> service_string_condition_erase(id)

Deletes an StringCondition using an id

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
    api_instance = mymusik_client.StringConditionApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an StringCondition using an id
        api_instance.service_string_condition_erase(id)
    except Exception as e:
        print("Exception when calling StringConditionApi->service_string_condition_erase: %s\n" % e)
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

# **service_string_condition_get**
> StringCondition service_string_condition_get(id)

Returns an StringCondition using an id

### Example


```python
import mymusik_client
from mymusik_client.models.string_condition import StringCondition
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
    api_instance = mymusik_client.StringConditionApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an StringCondition using an id
        api_response = api_instance.service_string_condition_get(id)
        print("The response of StringConditionApi->service_string_condition_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StringConditionApi->service_string_condition_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**StringCondition**](StringCondition.md)

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

# **service_string_condition_get_page**
> List[StringCondition] service_string_condition_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns StringCondition(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.string_condition import StringCondition
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
    api_instance = mymusik_client.StringConditionApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns StringCondition(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_string_condition_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of StringConditionApi->service_string_condition_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StringConditionApi->service_string_condition_get_page: %s\n" % e)
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

[**List[StringCondition]**](StringCondition.md)

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

# **service_string_condition_insert**
> service_string_condition_insert(string_condition=string_condition)

Creates an StringCondition. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.string_condition import StringCondition
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
    api_instance = mymusik_client.StringConditionApi(api_client)
    string_condition = mymusik_client.StringCondition() # StringCondition | StringCondition that should be updated (optional)

    try:
        # Creates an StringCondition. You can pass an empty id, it will then create one.
        api_instance.service_string_condition_insert(string_condition=string_condition)
    except Exception as e:
        print("Exception when calling StringConditionApi->service_string_condition_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_condition** | [**StringCondition**](StringCondition.md)| StringCondition that should be updated | [optional] 

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

# **service_string_condition_update**
> service_string_condition_update(id, string_condition=string_condition)

Updates an StringCondition using an id

### Example


```python
import mymusik_client
from mymusik_client.models.string_condition import StringCondition
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
    api_instance = mymusik_client.StringConditionApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    string_condition = mymusik_client.StringCondition() # StringCondition | StringCondition that should be updated (optional)

    try:
        # Updates an StringCondition using an id
        api_instance.service_string_condition_update(id, string_condition=string_condition)
    except Exception as e:
        print("Exception when calling StringConditionApi->service_string_condition_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **string_condition** | [**StringCondition**](StringCondition.md)| StringCondition that should be updated | [optional] 

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

