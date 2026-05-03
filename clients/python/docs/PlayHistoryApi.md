# mymusik_client.PlayHistoryApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_play_history_erase**](PlayHistoryApi.md#service_play_history_erase) | **DELETE** /playhistory/{id} | Deletes an PlayHistory using an id
[**service_play_history_get**](PlayHistoryApi.md#service_play_history_get) | **GET** /playhistory/{id} | Returns an PlayHistory using an id
[**service_play_history_get_chart_data**](PlayHistoryApi.md#service_play_history_get_chart_data) | **GET** /playhistory/getchartdata | Get play history chart data
[**service_play_history_get_page**](PlayHistoryApi.md#service_play_history_get_page) | **GET** /playhistory | Returns PlayHistory(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_play_history_insert**](PlayHistoryApi.md#service_play_history_insert) | **POST** /playhistory | Creates an PlayHistory. You can pass an empty id, it will then create one.
[**service_play_history_update**](PlayHistoryApi.md#service_play_history_update) | **PUT** /playhistory/{id} | Updates an PlayHistory using an id


# **service_play_history_erase**
> service_play_history_erase(id)

Deletes an PlayHistory using an id

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
    api_instance = mymusik_client.PlayHistoryApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an PlayHistory using an id
        api_instance.service_play_history_erase(id)
    except Exception as e:
        print("Exception when calling PlayHistoryApi->service_play_history_erase: %s\n" % e)
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

# **service_play_history_get**
> PlayHistory service_play_history_get(id)

Returns an PlayHistory using an id

### Example


```python
import mymusik_client
from mymusik_client.models.play_history import PlayHistory
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
    api_instance = mymusik_client.PlayHistoryApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an PlayHistory using an id
        api_response = api_instance.service_play_history_get(id)
        print("The response of PlayHistoryApi->service_play_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayHistoryApi->service_play_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**PlayHistory**](PlayHistory.md)

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

# **service_play_history_get_chart_data**
> List[MetricsChartEntry] service_play_history_get_chart_data(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Get play history chart data

### Example


```python
import mymusik_client
from mymusik_client.models.metrics_chart_entry import MetricsChartEntry
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
    api_instance = mymusik_client.PlayHistoryApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Get play history chart data
        api_response = api_instance.service_play_history_get_chart_data(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of PlayHistoryApi->service_play_history_get_chart_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayHistoryApi->service_play_history_get_chart_data: %s\n" % e)
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

[**List[MetricsChartEntry]**](MetricsChartEntry.md)

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

# **service_play_history_get_page**
> List[PlayHistory] service_play_history_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns PlayHistory(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.play_history import PlayHistory
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
    api_instance = mymusik_client.PlayHistoryApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns PlayHistory(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_play_history_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of PlayHistoryApi->service_play_history_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayHistoryApi->service_play_history_get_page: %s\n" % e)
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

[**List[PlayHistory]**](PlayHistory.md)

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

# **service_play_history_insert**
> service_play_history_insert(play_history=play_history)

Creates an PlayHistory. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.play_history import PlayHistory
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
    api_instance = mymusik_client.PlayHistoryApi(api_client)
    play_history = mymusik_client.PlayHistory() # PlayHistory | PlayHistory that should be updated (optional)

    try:
        # Creates an PlayHistory. You can pass an empty id, it will then create one.
        api_instance.service_play_history_insert(play_history=play_history)
    except Exception as e:
        print("Exception when calling PlayHistoryApi->service_play_history_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **play_history** | [**PlayHistory**](PlayHistory.md)| PlayHistory that should be updated | [optional] 

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

# **service_play_history_update**
> service_play_history_update(id, play_history=play_history)

Updates an PlayHistory using an id

### Example


```python
import mymusik_client
from mymusik_client.models.play_history import PlayHistory
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
    api_instance = mymusik_client.PlayHistoryApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    play_history = mymusik_client.PlayHistory() # PlayHistory | PlayHistory that should be updated (optional)

    try:
        # Updates an PlayHistory using an id
        api_instance.service_play_history_update(id, play_history=play_history)
    except Exception as e:
        print("Exception when calling PlayHistoryApi->service_play_history_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **play_history** | [**PlayHistory**](PlayHistory.md)| PlayHistory that should be updated | [optional] 

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

