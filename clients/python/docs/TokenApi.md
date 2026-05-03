# mymusik_client.TokenApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_token_auth_url**](TokenApi.md#service_token_auth_url) | **GET** /token/{id}/authurl | Generate a url that can be used for authentication
[**service_token_erase**](TokenApi.md#service_token_erase) | **DELETE** /token/{id} | Deletes an Token using an id
[**service_token_get**](TokenApi.md#service_token_get) | **GET** /token/{id} | Returns an Token using an id
[**service_token_get_page**](TokenApi.md#service_token_get_page) | **GET** /token | Returns Token(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_token_insert**](TokenApi.md#service_token_insert) | **POST** /token | Creates an Token. You can pass an empty id, it will then create one.
[**service_token_rotate_secret**](TokenApi.md#service_token_rotate_secret) | **POST** /token/rotatesecret | Rotates the local token secret. Invalidates all tokens.
[**service_token_token_qr_code**](TokenApi.md#service_token_token_qr_code) | **GET** /token/{id}/tokenqrcode | Generate a QR code for the token


# **service_token_auth_url**
> Token service_token_auth_url(id)

Generate a url that can be used for authentication

### Example


```python
import mymusik_client
from mymusik_client.models.token import Token
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
    api_instance = mymusik_client.TokenApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Generate a url that can be used for authentication
        api_response = api_instance.service_token_auth_url(id)
        print("The response of TokenApi->service_token_auth_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->service_token_auth_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**Token**](Token.md)

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

# **service_token_erase**
> service_token_erase(id)

Deletes an Token using an id

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
    api_instance = mymusik_client.TokenApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an Token using an id
        api_instance.service_token_erase(id)
    except Exception as e:
        print("Exception when calling TokenApi->service_token_erase: %s\n" % e)
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

# **service_token_get**
> Token service_token_get(id)

Returns an Token using an id

### Example


```python
import mymusik_client
from mymusik_client.models.token import Token
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
    api_instance = mymusik_client.TokenApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an Token using an id
        api_response = api_instance.service_token_get(id)
        print("The response of TokenApi->service_token_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->service_token_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**Token**](Token.md)

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

# **service_token_get_page**
> List[Token] service_token_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns Token(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.token import Token
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
    api_instance = mymusik_client.TokenApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns Token(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_token_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of TokenApi->service_token_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->service_token_get_page: %s\n" % e)
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

[**List[Token]**](Token.md)

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

# **service_token_insert**
> service_token_insert(token=token)

Creates an Token. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.token import Token
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
    api_instance = mymusik_client.TokenApi(api_client)
    token = mymusik_client.Token() # Token | Token that should be updated (optional)

    try:
        # Creates an Token. You can pass an empty id, it will then create one.
        api_instance.service_token_insert(token=token)
    except Exception as e:
        print("Exception when calling TokenApi->service_token_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**Token**](Token.md)| Token that should be updated | [optional] 

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

# **service_token_rotate_secret**
> service_token_rotate_secret()

Rotates the local token secret. Invalidates all tokens.

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
    api_instance = mymusik_client.TokenApi(api_client)

    try:
        # Rotates the local token secret. Invalidates all tokens.
        api_instance.service_token_rotate_secret()
    except Exception as e:
        print("Exception when calling TokenApi->service_token_rotate_secret: %s\n" % e)
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

# **service_token_token_qr_code**
> str service_token_token_qr_code(id, filename=filename, format=format)

Generate a QR code for the token

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
    api_instance = mymusik_client.TokenApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    filename = 'filename_example' # str |  (optional)
    format = 'format_example' # str |  (optional)

    try:
        # Generate a QR code for the token
        api_response = api_instance.service_token_token_qr_code(id, filename=filename, format=format)
        print("The response of TokenApi->service_token_token_qr_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->service_token_token_qr_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **filename** | **str**|  | [optional] 
 **format** | **str**|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpg

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | image file |  -  |
**404** | Could not find image file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

