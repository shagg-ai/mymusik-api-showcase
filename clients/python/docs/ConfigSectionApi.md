# mymusik_client.ConfigSectionApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_config_section_erase**](ConfigSectionApi.md#service_config_section_erase) | **DELETE** /configsection/{id} | Deletes an ConfigSection using an id
[**service_config_section_get**](ConfigSectionApi.md#service_config_section_get) | **GET** /configsection/{id} | Returns an ConfigSection using an id
[**service_config_section_get_page**](ConfigSectionApi.md#service_config_section_get_page) | **GET** /configsection | Returns ConfigSection(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_config_section_insert**](ConfigSectionApi.md#service_config_section_insert) | **POST** /configsection | Creates an ConfigSection. You can pass an empty id, it will then create one.
[**service_config_section_update**](ConfigSectionApi.md#service_config_section_update) | **PUT** /configsection/{id} | Updates an ConfigSection using an id


# **service_config_section_erase**
> service_config_section_erase(id)

Deletes an ConfigSection using an id

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
    api_instance = mymusik_client.ConfigSectionApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an ConfigSection using an id
        api_instance.service_config_section_erase(id)
    except Exception as e:
        print("Exception when calling ConfigSectionApi->service_config_section_erase: %s\n" % e)
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

# **service_config_section_get**
> ConfigSection service_config_section_get(id)

Returns an ConfigSection using an id

### Example


```python
import mymusik_client
from mymusik_client.models.config_section import ConfigSection
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
    api_instance = mymusik_client.ConfigSectionApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an ConfigSection using an id
        api_response = api_instance.service_config_section_get(id)
        print("The response of ConfigSectionApi->service_config_section_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigSectionApi->service_config_section_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**ConfigSection**](ConfigSection.md)

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

# **service_config_section_get_page**
> List[ConfigSection] service_config_section_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns ConfigSection(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.config_section import ConfigSection
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
    api_instance = mymusik_client.ConfigSectionApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns ConfigSection(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_config_section_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of ConfigSectionApi->service_config_section_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigSectionApi->service_config_section_get_page: %s\n" % e)
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

[**List[ConfigSection]**](ConfigSection.md)

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

# **service_config_section_insert**
> service_config_section_insert(config_section=config_section)

Creates an ConfigSection. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.config_section import ConfigSection
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
    api_instance = mymusik_client.ConfigSectionApi(api_client)
    config_section = mymusik_client.ConfigSection() # ConfigSection | ConfigSection that should be updated (optional)

    try:
        # Creates an ConfigSection. You can pass an empty id, it will then create one.
        api_instance.service_config_section_insert(config_section=config_section)
    except Exception as e:
        print("Exception when calling ConfigSectionApi->service_config_section_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_section** | [**ConfigSection**](ConfigSection.md)| ConfigSection that should be updated | [optional] 

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

# **service_config_section_update**
> service_config_section_update(id, config_section=config_section)

Updates an ConfigSection using an id

### Example


```python
import mymusik_client
from mymusik_client.models.config_section import ConfigSection
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
    api_instance = mymusik_client.ConfigSectionApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    config_section = mymusik_client.ConfigSection() # ConfigSection | ConfigSection that should be updated (optional)

    try:
        # Updates an ConfigSection using an id
        api_instance.service_config_section_update(id, config_section=config_section)
    except Exception as e:
        print("Exception when calling ConfigSectionApi->service_config_section_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **config_section** | [**ConfigSection**](ConfigSection.md)| ConfigSection that should be updated | [optional] 

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

