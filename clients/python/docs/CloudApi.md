# mymusik_client.CloudApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_cloud_count**](CloudApi.md#service_cloud_count) | **GET** /cloud/count | Get the total count of items.
[**service_cloud_erase_all_data**](CloudApi.md#service_cloud_erase_all_data) | **POST** /cloud/{id}/erasealldata | Using an erase request id, erasing all data from the cloud.
[**service_cloud_erase_files**](CloudApi.md#service_cloud_erase_files) | **POST** /cloud/erasefiles | Erase a list of cloud entities. Provide in the fileidentifier.id the id of the cloud entity you want to delete.
[**service_cloud_get**](CloudApi.md#service_cloud_get) | **GET** /cloud/{id} | Returns an Cloud using an id
[**service_cloud_get_page**](CloudApi.md#service_cloud_get_page) | **GET** /cloud | Returns Cloud(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_cloud_initialize_password**](CloudApi.md#service_cloud_initialize_password) | **POST** /cloud/initializepassword | Initialize the password for the cloud. Use fileIdentifier property
[**service_cloud_insert**](CloudApi.md#service_cloud_insert) | **POST** /cloud | Creates an Cloud. You can pass an empty id, it will then create one.
[**service_cloud_is_password_initialized**](CloudApi.md#service_cloud_is_password_initialized) | **GET** /cloud/ispasswordinitialized | Check if the password is initialized.
[**service_cloud_request_erase_cloud_link**](CloudApi.md#service_cloud_request_erase_cloud_link) | **POST** /cloud/requesterasecloudlink | Send a link to erase your files to your email address..
[**service_cloud_trigger_save_dialog**](CloudApi.md#service_cloud_trigger_save_dialog) | **POST** /cloud/{id}/triggersavedialog | Downloads a file from cloud by opening a save file dialog.
[**service_cloud_upload**](CloudApi.md#service_cloud_upload) | **POST** /cloud/upload | Uploads a file to the cloud asynchronously, ensuring the UI remains responsive.


# **service_cloud_count**
> int service_cloud_count()

Get the total count of items.

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
    api_instance = mymusik_client.CloudApi(api_client)

    try:
        # Get the total count of items.
        api_response = api_instance.service_cloud_count()
        print("The response of CloudApi->service_cloud_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_count: %s\n" % e)
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

# **service_cloud_erase_all_data**
> service_cloud_erase_all_data(id)

Using an erase request id, erasing all data from the cloud.

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
    api_instance = mymusik_client.CloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Using an erase request id, erasing all data from the cloud.
        api_instance.service_cloud_erase_all_data(id)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_erase_all_data: %s\n" % e)
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
**200** | Action successfully completed |  -  |
**400** | Action execution failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_cloud_erase_files**
> service_cloud_erase_files(file_identifier_list=file_identifier_list)

Erase a list of cloud entities. Provide in the fileidentifier.id the id of the cloud entity you want to delete.

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
    api_instance = mymusik_client.CloudApi(api_client)
    file_identifier_list = mymusik_client.FileIdentifierList() # FileIdentifierList | FileIdentifierList that should be updated (optional)

    try:
        # Erase a list of cloud entities. Provide in the fileidentifier.id the id of the cloud entity you want to delete.
        api_instance.service_cloud_erase_files(file_identifier_list=file_identifier_list)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_erase_files: %s\n" % e)
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

# **service_cloud_get**
> Cloud service_cloud_get(id)

Returns an Cloud using an id

### Example


```python
import mymusik_client
from mymusik_client.models.cloud import Cloud
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
    api_instance = mymusik_client.CloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an Cloud using an id
        api_response = api_instance.service_cloud_get(id)
        print("The response of CloudApi->service_cloud_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**Cloud**](Cloud.md)

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

# **service_cloud_get_page**
> List[Cloud] service_cloud_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns Cloud(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.cloud import Cloud
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
    api_instance = mymusik_client.CloudApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns Cloud(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_cloud_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of CloudApi->service_cloud_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_get_page: %s\n" % e)
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

[**List[Cloud]**](Cloud.md)

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

# **service_cloud_initialize_password**
> service_cloud_initialize_password(file_identifier=file_identifier)

Initialize the password for the cloud. Use fileIdentifier property

### Example


```python
import mymusik_client
from mymusik_client.models.file_identifier import FileIdentifier
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
    api_instance = mymusik_client.CloudApi(api_client)
    file_identifier = mymusik_client.FileIdentifier() # FileIdentifier | FileIdentifier that should be updated (optional)

    try:
        # Initialize the password for the cloud. Use fileIdentifier property
        api_instance.service_cloud_initialize_password(file_identifier=file_identifier)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_initialize_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_identifier** | [**FileIdentifier**](FileIdentifier.md)| FileIdentifier that should be updated | [optional] 

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

# **service_cloud_insert**
> service_cloud_insert(cloud=cloud)

Creates an Cloud. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.cloud import Cloud
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
    api_instance = mymusik_client.CloudApi(api_client)
    cloud = mymusik_client.Cloud() # Cloud | Cloud that should be updated (optional)

    try:
        # Creates an Cloud. You can pass an empty id, it will then create one.
        api_instance.service_cloud_insert(cloud=cloud)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloud** | [**Cloud**](Cloud.md)| Cloud that should be updated | [optional] 

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

# **service_cloud_is_password_initialized**
> int service_cloud_is_password_initialized()

Check if the password is initialized.

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
    api_instance = mymusik_client.CloudApi(api_client)

    try:
        # Check if the password is initialized.
        api_response = api_instance.service_cloud_is_password_initialized()
        print("The response of CloudApi->service_cloud_is_password_initialized:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_is_password_initialized: %s\n" % e)
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

# **service_cloud_request_erase_cloud_link**
> service_cloud_request_erase_cloud_link()

Send a link to erase your files to your email address..

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
    api_instance = mymusik_client.CloudApi(api_client)

    try:
        # Send a link to erase your files to your email address..
        api_instance.service_cloud_request_erase_cloud_link()
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_request_erase_cloud_link: %s\n" % e)
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

# **service_cloud_trigger_save_dialog**
> service_cloud_trigger_save_dialog(id)

Downloads a file from cloud by opening a save file dialog.

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
    api_instance = mymusik_client.CloudApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Downloads a file from cloud by opening a save file dialog.
        api_instance.service_cloud_trigger_save_dialog(id)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_trigger_save_dialog: %s\n" % e)
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
**200** | Action successfully completed |  -  |
**400** | Action execution failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_cloud_upload**
> service_cloud_upload(file_identifier=file_identifier)

Uploads a file to the cloud asynchronously, ensuring the UI remains responsive.

### Example


```python
import mymusik_client
from mymusik_client.models.file_identifier import FileIdentifier
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
    api_instance = mymusik_client.CloudApi(api_client)
    file_identifier = mymusik_client.FileIdentifier() # FileIdentifier | FileIdentifier that should be updated (optional)

    try:
        # Uploads a file to the cloud asynchronously, ensuring the UI remains responsive.
        api_instance.service_cloud_upload(file_identifier=file_identifier)
    except Exception as e:
        print("Exception when calling CloudApi->service_cloud_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_identifier** | [**FileIdentifier**](FileIdentifier.md)| FileIdentifier that should be updated | [optional] 

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

