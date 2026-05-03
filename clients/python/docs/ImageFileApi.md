# mymusik_client.ImageFileApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_image_file_content**](ImageFileApi.md#service_image_file_content) | **GET** /imagefile/{id}/content | Returns the content of a file
[**service_image_file_does_exist**](ImageFileApi.md#service_image_file_does_exist) | **POST** /imagefile/{id}/doesexist | Checks if a image File exists locally.
[**service_image_file_download_file**](ImageFileApi.md#service_image_file_download_file) | **POST** /imagefile/downloadfile | Downloads a image file from the cloud asynchronously, allowing other operations to continue in the background.
[**service_image_file_erase**](ImageFileApi.md#service_image_file_erase) | **DELETE** /imagefile/{id} | Deletes an ImageFile using an id
[**service_image_file_get**](ImageFileApi.md#service_image_file_get) | **GET** /imagefile/{id} | Returns an ImageFile using an id
[**service_image_file_get_page**](ImageFileApi.md#service_image_file_get_page) | **GET** /imagefile | Returns ImageFile(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_image_file_insert**](ImageFileApi.md#service_image_file_insert) | **POST** /imagefile | Creates an ImageFile. You can pass an empty id, it will then create one.
[**service_image_file_pick_and_insert_from_device**](ImageFileApi.md#service_image_file_pick_and_insert_from_device) | **POST** /imagefile/pickandinsertfromdevice | Opens the native image picker and inserts the selected image into the image file store.
[**service_image_file_update**](ImageFileApi.md#service_image_file_update) | **PUT** /imagefile/{id} | Updates an ImageFile using an id


# **service_image_file_content**
> str service_image_file_content(id, filename=filename, format=format)

Returns the content of a file

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
    api_instance = mymusik_client.ImageFileApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    filename = 'filename_example' # str |  (optional)
    format = 'format_example' # str |  (optional)

    try:
        # Returns the content of a file
        api_response = api_instance.service_image_file_content(id, filename=filename, format=format)
        print("The response of ImageFileApi->service_image_file_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_content: %s\n" % e)
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

# **service_image_file_does_exist**
> service_image_file_does_exist(id)

Checks if a image File exists locally.

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
    api_instance = mymusik_client.ImageFileApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Checks if a image File exists locally.
        api_instance.service_image_file_does_exist(id)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_does_exist: %s\n" % e)
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

# **service_image_file_download_file**
> service_image_file_download_file(image_file=image_file)

Downloads a image file from the cloud asynchronously, allowing other operations to continue in the background.

### Example


```python
import mymusik_client
from mymusik_client.models.image_file import ImageFile
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
    api_instance = mymusik_client.ImageFileApi(api_client)
    image_file = mymusik_client.ImageFile() # ImageFile | ImageFile that should be updated (optional)

    try:
        # Downloads a image file from the cloud asynchronously, allowing other operations to continue in the background.
        api_instance.service_image_file_download_file(image_file=image_file)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_download_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_file** | [**ImageFile**](ImageFile.md)| ImageFile that should be updated | [optional] 

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

# **service_image_file_erase**
> service_image_file_erase(id)

Deletes an ImageFile using an id

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
    api_instance = mymusik_client.ImageFileApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an ImageFile using an id
        api_instance.service_image_file_erase(id)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_erase: %s\n" % e)
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

# **service_image_file_get**
> ImageFile service_image_file_get(id)

Returns an ImageFile using an id

### Example


```python
import mymusik_client
from mymusik_client.models.image_file import ImageFile
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
    api_instance = mymusik_client.ImageFileApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an ImageFile using an id
        api_response = api_instance.service_image_file_get(id)
        print("The response of ImageFileApi->service_image_file_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**ImageFile**](ImageFile.md)

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

# **service_image_file_get_page**
> List[ImageFile] service_image_file_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns ImageFile(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.image_file import ImageFile
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
    api_instance = mymusik_client.ImageFileApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns ImageFile(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_image_file_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of ImageFileApi->service_image_file_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_get_page: %s\n" % e)
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

[**List[ImageFile]**](ImageFile.md)

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

# **service_image_file_insert**
> service_image_file_insert(body=body)

Creates an ImageFile. You can pass an empty id, it will then create one.

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
    api_instance = mymusik_client.ImageFileApi(api_client)
    body = None # bytearray |  (optional)

    try:
        # Creates an ImageFile. You can pass an empty id, it will then create one.
        api_instance.service_image_file_insert(body=body)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **bytearray**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_image_file_pick_and_insert_from_device**
> service_image_file_pick_and_insert_from_device()

Opens the native image picker and inserts the selected image into the image file store.

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
    api_instance = mymusik_client.ImageFileApi(api_client)

    try:
        # Opens the native image picker and inserts the selected image into the image file store.
        api_instance.service_image_file_pick_and_insert_from_device()
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_pick_and_insert_from_device: %s\n" % e)
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

# **service_image_file_update**
> service_image_file_update(id, body=body)

Updates an ImageFile using an id

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
    api_instance = mymusik_client.ImageFileApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    body = None # bytearray |  (optional)

    try:
        # Updates an ImageFile using an id
        api_instance.service_image_file_update(id, body=body)
    except Exception as e:
        print("Exception when calling ImageFileApi->service_image_file_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **body** | **bytearray**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | schema |  * Location - the location of the newly created resource <br>  |
**404** | Could not insert entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

