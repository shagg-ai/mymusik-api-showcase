# mymusik_client.UserProfileApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_user_profile_get**](UserProfileApi.md#service_user_profile_get) | **GET** /userprofile/{id} | Returns an UserProfile using an id
[**service_user_profile_get_cloud_storage**](UserProfileApi.md#service_user_profile_get_cloud_storage) | **GET** /userprofile/getcloudstorage | Returns available tokens for each month
[**service_user_profile_get_page**](UserProfileApi.md#service_user_profile_get_page) | **GET** /userprofile | Returns UserProfile(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_user_profile_get_total_ai_tokens**](UserProfileApi.md#service_user_profile_get_total_ai_tokens) | **GET** /userprofile/gettotalaitokens | Retrieves the total number of AI tokens available for the year.


# **service_user_profile_get**
> UserProfile service_user_profile_get(id)

Returns an UserProfile using an id

### Example


```python
import mymusik_client
from mymusik_client.models.user_profile import UserProfile
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
    api_instance = mymusik_client.UserProfileApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an UserProfile using an id
        api_response = api_instance.service_user_profile_get(id)
        print("The response of UserProfileApi->service_user_profile_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProfileApi->service_user_profile_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**UserProfile**](UserProfile.md)

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

# **service_user_profile_get_cloud_storage**
> int service_user_profile_get_cloud_storage()

Returns available tokens for each month

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
    api_instance = mymusik_client.UserProfileApi(api_client)

    try:
        # Returns available tokens for each month
        api_response = api_instance.service_user_profile_get_cloud_storage()
        print("The response of UserProfileApi->service_user_profile_get_cloud_storage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProfileApi->service_user_profile_get_cloud_storage: %s\n" % e)
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

# **service_user_profile_get_page**
> List[UserProfile] service_user_profile_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns UserProfile(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.user_profile import UserProfile
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
    api_instance = mymusik_client.UserProfileApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns UserProfile(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_user_profile_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of UserProfileApi->service_user_profile_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProfileApi->service_user_profile_get_page: %s\n" % e)
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

[**List[UserProfile]**](UserProfile.md)

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

# **service_user_profile_get_total_ai_tokens**
> int service_user_profile_get_total_ai_tokens()

Retrieves the total number of AI tokens available for the year.

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
    api_instance = mymusik_client.UserProfileApi(api_client)

    try:
        # Retrieves the total number of AI tokens available for the year.
        api_response = api_instance.service_user_profile_get_total_ai_tokens()
        print("The response of UserProfileApi->service_user_profile_get_total_ai_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProfileApi->service_user_profile_get_total_ai_tokens: %s\n" % e)
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

