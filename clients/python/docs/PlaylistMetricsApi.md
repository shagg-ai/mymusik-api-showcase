# mymusik_client.PlaylistMetricsApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_playlist_metrics_erase**](PlaylistMetricsApi.md#service_playlist_metrics_erase) | **DELETE** /playlistmetrics/{id} | Deletes an PlaylistMetrics using an id
[**service_playlist_metrics_get**](PlaylistMetricsApi.md#service_playlist_metrics_get) | **GET** /playlistmetrics/{id} | Returns an PlaylistMetrics using an id
[**service_playlist_metrics_get_chart_data**](PlaylistMetricsApi.md#service_playlist_metrics_get_chart_data) | **GET** /playlistmetrics/getchartdata | Get playlist metrics chart data
[**service_playlist_metrics_get_page**](PlaylistMetricsApi.md#service_playlist_metrics_get_page) | **GET** /playlistmetrics | Returns PlaylistMetrics(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property


# **service_playlist_metrics_erase**
> service_playlist_metrics_erase(id)

Deletes an PlaylistMetrics using an id

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
    api_instance = mymusik_client.PlaylistMetricsApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an PlaylistMetrics using an id
        api_instance.service_playlist_metrics_erase(id)
    except Exception as e:
        print("Exception when calling PlaylistMetricsApi->service_playlist_metrics_erase: %s\n" % e)
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

# **service_playlist_metrics_get**
> PlaylistMetrics service_playlist_metrics_get(id)

Returns an PlaylistMetrics using an id

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_metrics import PlaylistMetrics
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
    api_instance = mymusik_client.PlaylistMetricsApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an PlaylistMetrics using an id
        api_response = api_instance.service_playlist_metrics_get(id)
        print("The response of PlaylistMetricsApi->service_playlist_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistMetricsApi->service_playlist_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**PlaylistMetrics**](PlaylistMetrics.md)

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

# **service_playlist_metrics_get_chart_data**
> List[MetricsChartEntry] service_playlist_metrics_get_chart_data(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Get playlist metrics chart data

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
    api_instance = mymusik_client.PlaylistMetricsApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Get playlist metrics chart data
        api_response = api_instance.service_playlist_metrics_get_chart_data(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of PlaylistMetricsApi->service_playlist_metrics_get_chart_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistMetricsApi->service_playlist_metrics_get_chart_data: %s\n" % e)
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

# **service_playlist_metrics_get_page**
> List[PlaylistMetrics] service_playlist_metrics_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns PlaylistMetrics(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.playlist_metrics import PlaylistMetrics
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
    api_instance = mymusik_client.PlaylistMetricsApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns PlaylistMetrics(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_playlist_metrics_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of PlaylistMetricsApi->service_playlist_metrics_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaylistMetricsApi->service_playlist_metrics_get_page: %s\n" % e)
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

[**List[PlaylistMetrics]**](PlaylistMetrics.md)

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

