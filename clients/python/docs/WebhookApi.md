# mymusik_client.WebhookApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_webhook_erase**](WebhookApi.md#service_webhook_erase) | **DELETE** /webhook/{id} | Deletes an Webhook using an id
[**service_webhook_get**](WebhookApi.md#service_webhook_get) | **GET** /webhook/{id} | Returns an Webhook using an id
[**service_webhook_get_page**](WebhookApi.md#service_webhook_get_page) | **GET** /webhook | Returns Webhook(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_webhook_insert**](WebhookApi.md#service_webhook_insert) | **POST** /webhook | Creates an Webhook. You can pass an empty id, it will then create one.
[**service_webhook_update**](WebhookApi.md#service_webhook_update) | **PUT** /webhook/{id} | Updates an Webhook using an id


# **service_webhook_erase**
> service_webhook_erase(id)

Deletes an Webhook using an id

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
    api_instance = mymusik_client.WebhookApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an Webhook using an id
        api_instance.service_webhook_erase(id)
    except Exception as e:
        print("Exception when calling WebhookApi->service_webhook_erase: %s\n" % e)
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

# **service_webhook_get**
> Webhook service_webhook_get(id)

Returns an Webhook using an id

### Example


```python
import mymusik_client
from mymusik_client.models.webhook import Webhook
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
    api_instance = mymusik_client.WebhookApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an Webhook using an id
        api_response = api_instance.service_webhook_get(id)
        print("The response of WebhookApi->service_webhook_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->service_webhook_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**Webhook**](Webhook.md)

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

# **service_webhook_get_page**
> List[Webhook] service_webhook_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns Webhook(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.webhook import Webhook
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
    api_instance = mymusik_client.WebhookApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns Webhook(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_webhook_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of WebhookApi->service_webhook_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->service_webhook_get_page: %s\n" % e)
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

[**List[Webhook]**](Webhook.md)

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

# **service_webhook_insert**
> service_webhook_insert(webhook=webhook)

Creates an Webhook. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.webhook import Webhook
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
    api_instance = mymusik_client.WebhookApi(api_client)
    webhook = mymusik_client.Webhook() # Webhook | Webhook that should be updated (optional)

    try:
        # Creates an Webhook. You can pass an empty id, it will then create one.
        api_instance.service_webhook_insert(webhook=webhook)
    except Exception as e:
        print("Exception when calling WebhookApi->service_webhook_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)| Webhook that should be updated | [optional] 

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

# **service_webhook_update**
> service_webhook_update(id, webhook=webhook)

Updates an Webhook using an id

### Example


```python
import mymusik_client
from mymusik_client.models.webhook import Webhook
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
    api_instance = mymusik_client.WebhookApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    webhook = mymusik_client.Webhook() # Webhook | Webhook that should be updated (optional)

    try:
        # Updates an Webhook using an id
        api_instance.service_webhook_update(id, webhook=webhook)
    except Exception as e:
        print("Exception when calling WebhookApi->service_webhook_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **webhook** | [**Webhook**](Webhook.md)| Webhook that should be updated | [optional] 

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

