# mymusik_client.MusicElementListApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_music_element_list_create_from_cloud_files**](MusicElementListApi.md#service_music_element_list_create_from_cloud_files) | **POST** /musicelementlist/createfromcloudfiles | Returns the id for a music elements list of an list of cloud items.
[**service_music_element_list_get**](MusicElementListApi.md#service_music_element_list_get) | **GET** /musicelementlist/{id} | Returns an MusicElementList using an id
[**service_music_element_list_get_page**](MusicElementListApi.md#service_music_element_list_get_page) | **GET** /musicelementlist | Returns MusicElementList(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_music_element_list_insert**](MusicElementListApi.md#service_music_element_list_insert) | **POST** /musicelementlist | Creates an MusicElementList. You can pass an empty id, it will then create one.


# **service_music_element_list_create_from_cloud_files**
> service_music_element_list_create_from_cloud_files(cloud_files=cloud_files)

Returns the id for a music elements list of an list of cloud items.

### Example


```python
import mymusik_client
from mymusik_client.models.cloud_files import CloudFiles
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
    api_instance = mymusik_client.MusicElementListApi(api_client)
    cloud_files = mymusik_client.CloudFiles() # CloudFiles | CloudFiles that should be updated (optional)

    try:
        # Returns the id for a music elements list of an list of cloud items.
        api_instance.service_music_element_list_create_from_cloud_files(cloud_files=cloud_files)
    except Exception as e:
        print("Exception when calling MusicElementListApi->service_music_element_list_create_from_cloud_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloud_files** | [**CloudFiles**](CloudFiles.md)| CloudFiles that should be updated | [optional] 

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

# **service_music_element_list_get**
> MusicElementList service_music_element_list_get(id)

Returns an MusicElementList using an id

### Example


```python
import mymusik_client
from mymusik_client.models.music_element_list import MusicElementList
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
    api_instance = mymusik_client.MusicElementListApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an MusicElementList using an id
        api_response = api_instance.service_music_element_list_get(id)
        print("The response of MusicElementListApi->service_music_element_list_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicElementListApi->service_music_element_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**MusicElementList**](MusicElementList.md)

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

# **service_music_element_list_get_page**
> List[MusicElementList] service_music_element_list_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns MusicElementList(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.music_element_list import MusicElementList
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
    api_instance = mymusik_client.MusicElementListApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns MusicElementList(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_music_element_list_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of MusicElementListApi->service_music_element_list_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicElementListApi->service_music_element_list_get_page: %s\n" % e)
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

[**List[MusicElementList]**](MusicElementList.md)

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

# **service_music_element_list_insert**
> service_music_element_list_insert(music_element_list=music_element_list)

Creates an MusicElementList. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.music_element_list import MusicElementList
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
    api_instance = mymusik_client.MusicElementListApi(api_client)
    music_element_list = mymusik_client.MusicElementList() # MusicElementList | MusicElementList that should be updated (optional)

    try:
        # Creates an MusicElementList. You can pass an empty id, it will then create one.
        api_instance.service_music_element_list_insert(music_element_list=music_element_list)
    except Exception as e:
        print("Exception when calling MusicElementListApi->service_music_element_list_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **music_element_list** | [**MusicElementList**](MusicElementList.md)| MusicElementList that should be updated | [optional] 

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

