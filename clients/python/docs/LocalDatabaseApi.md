# mymusik_client.LocalDatabaseApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_local_database_get**](LocalDatabaseApi.md#service_local_database_get) | **GET** /localdatabase/{id} | Returns an DatabaseBackup using an id
[**service_local_database_get_page**](LocalDatabaseApi.md#service_local_database_get_page) | **GET** /localdatabase | Returns DatabaseBackup(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_local_database_insert**](LocalDatabaseApi.md#service_local_database_insert) | **POST** /localdatabase | Creates an DatabaseBackup. You can pass an empty id, it will then create one.
[**service_local_database_update**](LocalDatabaseApi.md#service_local_database_update) | **PUT** /localdatabase/{id} | Updates an DatabaseBackup using an id


# **service_local_database_get**
> DatabaseBackup service_local_database_get(id)

Returns an DatabaseBackup using an id

### Example


```python
import mymusik_client
from mymusik_client.models.database_backup import DatabaseBackup
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
    api_instance = mymusik_client.LocalDatabaseApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an DatabaseBackup using an id
        api_response = api_instance.service_local_database_get(id)
        print("The response of LocalDatabaseApi->service_local_database_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocalDatabaseApi->service_local_database_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**DatabaseBackup**](DatabaseBackup.md)

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

# **service_local_database_get_page**
> List[DatabaseBackup] service_local_database_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns DatabaseBackup(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.database_backup import DatabaseBackup
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
    api_instance = mymusik_client.LocalDatabaseApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns DatabaseBackup(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_local_database_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of LocalDatabaseApi->service_local_database_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocalDatabaseApi->service_local_database_get_page: %s\n" % e)
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

[**List[DatabaseBackup]**](DatabaseBackup.md)

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

# **service_local_database_insert**
> service_local_database_insert(database_backup=database_backup)

Creates an DatabaseBackup. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.database_backup import DatabaseBackup
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
    api_instance = mymusik_client.LocalDatabaseApi(api_client)
    database_backup = mymusik_client.DatabaseBackup() # DatabaseBackup | DatabaseBackup that should be updated (optional)

    try:
        # Creates an DatabaseBackup. You can pass an empty id, it will then create one.
        api_instance.service_local_database_insert(database_backup=database_backup)
    except Exception as e:
        print("Exception when calling LocalDatabaseApi->service_local_database_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_backup** | [**DatabaseBackup**](DatabaseBackup.md)| DatabaseBackup that should be updated | [optional] 

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

# **service_local_database_update**
> service_local_database_update(id, database_backup=database_backup)

Updates an DatabaseBackup using an id

### Example


```python
import mymusik_client
from mymusik_client.models.database_backup import DatabaseBackup
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
    api_instance = mymusik_client.LocalDatabaseApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    database_backup = mymusik_client.DatabaseBackup() # DatabaseBackup | DatabaseBackup that should be updated (optional)

    try:
        # Updates an DatabaseBackup using an id
        api_instance.service_local_database_update(id, database_backup=database_backup)
    except Exception as e:
        print("Exception when calling LocalDatabaseApi->service_local_database_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **database_backup** | [**DatabaseBackup**](DatabaseBackup.md)| DatabaseBackup that should be updated | [optional] 

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

