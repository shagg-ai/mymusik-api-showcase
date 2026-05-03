# mymusik_client.BanNotificationApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_ban_notification_count**](BanNotificationApi.md#service_ban_notification_count) | **GET** /bannotification/count | Count number of ban notifications
[**service_ban_notification_get**](BanNotificationApi.md#service_ban_notification_get) | **GET** /bannotification/{id} | Returns an BanNotification using an id
[**service_ban_notification_get_page**](BanNotificationApi.md#service_ban_notification_get_page) | **GET** /bannotification | Returns BanNotification(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_ban_notification_looked_at**](BanNotificationApi.md#service_ban_notification_looked_at) | **POST** /bannotification/lookedat | Mark ban notification as seen
[**service_ban_notification_update**](BanNotificationApi.md#service_ban_notification_update) | **PUT** /bannotification/{id} | Updates an BanNotification using an id


# **service_ban_notification_count**
> int service_ban_notification_count()

Count number of ban notifications

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
    api_instance = mymusik_client.BanNotificationApi(api_client)

    try:
        # Count number of ban notifications
        api_response = api_instance.service_ban_notification_count()
        print("The response of BanNotificationApi->service_ban_notification_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BanNotificationApi->service_ban_notification_count: %s\n" % e)
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

# **service_ban_notification_get**
> BanNotification service_ban_notification_get(id)

Returns an BanNotification using an id

### Example


```python
import mymusik_client
from mymusik_client.models.ban_notification import BanNotification
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
    api_instance = mymusik_client.BanNotificationApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an BanNotification using an id
        api_response = api_instance.service_ban_notification_get(id)
        print("The response of BanNotificationApi->service_ban_notification_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BanNotificationApi->service_ban_notification_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**BanNotification**](BanNotification.md)

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

# **service_ban_notification_get_page**
> List[BanNotification] service_ban_notification_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns BanNotification(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.ban_notification import BanNotification
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
    api_instance = mymusik_client.BanNotificationApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns BanNotification(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_ban_notification_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of BanNotificationApi->service_ban_notification_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BanNotificationApi->service_ban_notification_get_page: %s\n" % e)
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

[**List[BanNotification]**](BanNotification.md)

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

# **service_ban_notification_looked_at**
> service_ban_notification_looked_at()

Mark ban notification as seen

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
    api_instance = mymusik_client.BanNotificationApi(api_client)

    try:
        # Mark ban notification as seen
        api_instance.service_ban_notification_looked_at()
    except Exception as e:
        print("Exception when calling BanNotificationApi->service_ban_notification_looked_at: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **service_ban_notification_update**
> service_ban_notification_update(id, ban_notification=ban_notification)

Updates an BanNotification using an id

### Example


```python
import mymusik_client
from mymusik_client.models.ban_notification import BanNotification
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
    api_instance = mymusik_client.BanNotificationApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    ban_notification = mymusik_client.BanNotification() # BanNotification | BanNotification that should be updated (optional)

    try:
        # Updates an BanNotification using an id
        api_instance.service_ban_notification_update(id, ban_notification=ban_notification)
    except Exception as e:
        print("Exception when calling BanNotificationApi->service_ban_notification_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **ban_notification** | [**BanNotification**](BanNotification.md)| BanNotification that should be updated | [optional] 

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

