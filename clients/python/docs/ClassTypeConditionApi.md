# mymusik_client.ClassTypeConditionApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_class_type_condition_erase**](ClassTypeConditionApi.md#service_class_type_condition_erase) | **DELETE** /classtypecondition/{id} | Deletes an ClassTypeCondition using an id
[**service_class_type_condition_get**](ClassTypeConditionApi.md#service_class_type_condition_get) | **GET** /classtypecondition/{id} | Returns an ClassTypeCondition using an id
[**service_class_type_condition_insert**](ClassTypeConditionApi.md#service_class_type_condition_insert) | **POST** /classtypecondition | Creates an ClassTypeCondition. You can pass an empty id, it will then create one.
[**service_class_type_condition_update**](ClassTypeConditionApi.md#service_class_type_condition_update) | **PUT** /classtypecondition/{id} | Updates an ClassTypeCondition using an id


# **service_class_type_condition_erase**
> service_class_type_condition_erase(id)

Deletes an ClassTypeCondition using an id

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
    api_instance = mymusik_client.ClassTypeConditionApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an ClassTypeCondition using an id
        api_instance.service_class_type_condition_erase(id)
    except Exception as e:
        print("Exception when calling ClassTypeConditionApi->service_class_type_condition_erase: %s\n" % e)
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

# **service_class_type_condition_get**
> ClassTypeCondition service_class_type_condition_get(id)

Returns an ClassTypeCondition using an id

### Example


```python
import mymusik_client
from mymusik_client.models.class_type_condition import ClassTypeCondition
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
    api_instance = mymusik_client.ClassTypeConditionApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an ClassTypeCondition using an id
        api_response = api_instance.service_class_type_condition_get(id)
        print("The response of ClassTypeConditionApi->service_class_type_condition_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassTypeConditionApi->service_class_type_condition_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**ClassTypeCondition**](ClassTypeCondition.md)

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

# **service_class_type_condition_insert**
> service_class_type_condition_insert(class_type_condition=class_type_condition)

Creates an ClassTypeCondition. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.class_type_condition import ClassTypeCondition
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
    api_instance = mymusik_client.ClassTypeConditionApi(api_client)
    class_type_condition = mymusik_client.ClassTypeCondition() # ClassTypeCondition | ClassTypeCondition that should be updated (optional)

    try:
        # Creates an ClassTypeCondition. You can pass an empty id, it will then create one.
        api_instance.service_class_type_condition_insert(class_type_condition=class_type_condition)
    except Exception as e:
        print("Exception when calling ClassTypeConditionApi->service_class_type_condition_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **class_type_condition** | [**ClassTypeCondition**](ClassTypeCondition.md)| ClassTypeCondition that should be updated | [optional] 

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

# **service_class_type_condition_update**
> service_class_type_condition_update(id, class_type_condition=class_type_condition)

Updates an ClassTypeCondition using an id

### Example


```python
import mymusik_client
from mymusik_client.models.class_type_condition import ClassTypeCondition
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
    api_instance = mymusik_client.ClassTypeConditionApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    class_type_condition = mymusik_client.ClassTypeCondition() # ClassTypeCondition | ClassTypeCondition that should be updated (optional)

    try:
        # Updates an ClassTypeCondition using an id
        api_instance.service_class_type_condition_update(id, class_type_condition=class_type_condition)
    except Exception as e:
        print("Exception when calling ClassTypeConditionApi->service_class_type_condition_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **class_type_condition** | [**ClassTypeCondition**](ClassTypeCondition.md)| ClassTypeCondition that should be updated | [optional] 

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

