# mymusik_client.AiMusicVoiceCommandApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_ai_music_voice_command_count**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_count) | **GET** /aimusicvoicecommand/count | Get the count of voice commands.
[**service_ai_music_voice_command_current_duration**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_current_duration) | **GET** /aimusicvoicecommand/currentduration | Get current recording duration in seconds.
[**service_ai_music_voice_command_erase**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_erase) | **DELETE** /aimusicvoicecommand/{id} | Deletes an AiMusicVoiceCommand using an id
[**service_ai_music_voice_command_get**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_get) | **GET** /aimusicvoicecommand/{id} | Returns an AiMusicVoiceCommand using an id
[**service_ai_music_voice_command_get_page**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_get_page) | **GET** /aimusicvoicecommand | Returns AiMusicVoiceCommand(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_ai_music_voice_command_insert**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_insert) | **POST** /aimusicvoicecommand | Creates an AiMusicVoiceCommand. You can pass an empty id, it will then create one.
[**service_ai_music_voice_command_report**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_report) | **POST** /aimusicvoicecommand/report | Report a voice command result.
[**service_ai_music_voice_command_retry_script_generation**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_retry_script_generation) | **POST** /aimusicvoicecommand/{id}/retryscriptgeneration | Retry script generation from the stored transcript.
[**service_ai_music_voice_command_start_voice_recording**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_start_voice_recording) | **POST** /aimusicvoicecommand/startvoicerecording | Start recording audio for a voice command id.
[**service_ai_music_voice_command_stop_and_delete_voice_recording**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_stop_and_delete_voice_recording) | **POST** /aimusicvoicecommand/stopanddeletevoicerecording | Cancel recording and mark the current voice command as cancelled.
[**service_ai_music_voice_command_stop_voice_recording**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_stop_voice_recording) | **POST** /aimusicvoicecommand/stopvoicerecording | Stop recording and continue transcription and script generation.
[**service_ai_music_voice_command_update**](AiMusicVoiceCommandApi.md#service_ai_music_voice_command_update) | **PUT** /aimusicvoicecommand/{id} | Updates an AiMusicVoiceCommand using an id


# **service_ai_music_voice_command_count**
> int service_ai_music_voice_command_count()

Get the count of voice commands.

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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)

    try:
        # Get the count of voice commands.
        api_response = api_instance.service_ai_music_voice_command_count()
        print("The response of AiMusicVoiceCommandApi->service_ai_music_voice_command_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_count: %s\n" % e)
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

# **service_ai_music_voice_command_current_duration**
> int service_ai_music_voice_command_current_duration()

Get current recording duration in seconds.

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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)

    try:
        # Get current recording duration in seconds.
        api_response = api_instance.service_ai_music_voice_command_current_duration()
        print("The response of AiMusicVoiceCommandApi->service_ai_music_voice_command_current_duration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_current_duration: %s\n" % e)
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

# **service_ai_music_voice_command_erase**
> service_ai_music_voice_command_erase(id)

Deletes an AiMusicVoiceCommand using an id

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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an AiMusicVoiceCommand using an id
        api_instance.service_ai_music_voice_command_erase(id)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_erase: %s\n" % e)
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

# **service_ai_music_voice_command_get**
> AiMusicVoiceCommand service_ai_music_voice_command_get(id)

Returns an AiMusicVoiceCommand using an id

### Example


```python
import mymusik_client
from mymusik_client.models.ai_music_voice_command import AiMusicVoiceCommand
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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an AiMusicVoiceCommand using an id
        api_response = api_instance.service_ai_music_voice_command_get(id)
        print("The response of AiMusicVoiceCommandApi->service_ai_music_voice_command_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**AiMusicVoiceCommand**](AiMusicVoiceCommand.md)

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

# **service_ai_music_voice_command_get_page**
> List[AiMusicVoiceCommand] service_ai_music_voice_command_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns AiMusicVoiceCommand(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.ai_music_voice_command import AiMusicVoiceCommand
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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns AiMusicVoiceCommand(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_ai_music_voice_command_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of AiMusicVoiceCommandApi->service_ai_music_voice_command_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_get_page: %s\n" % e)
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

[**List[AiMusicVoiceCommand]**](AiMusicVoiceCommand.md)

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

# **service_ai_music_voice_command_insert**
> service_ai_music_voice_command_insert(ai_music_voice_command=ai_music_voice_command)

Creates an AiMusicVoiceCommand. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.ai_music_voice_command import AiMusicVoiceCommand
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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    ai_music_voice_command = mymusik_client.AiMusicVoiceCommand() # AiMusicVoiceCommand | AiMusicVoiceCommand that should be updated (optional)

    try:
        # Creates an AiMusicVoiceCommand. You can pass an empty id, it will then create one.
        api_instance.service_ai_music_voice_command_insert(ai_music_voice_command=ai_music_voice_command)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ai_music_voice_command** | [**AiMusicVoiceCommand**](AiMusicVoiceCommand.md)| AiMusicVoiceCommand that should be updated | [optional] 

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

# **service_ai_music_voice_command_report**
> service_ai_music_voice_command_report(report=report)

Report a voice command result.

### Example


```python
import mymusik_client
from mymusik_client.models.report import Report
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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    report = mymusik_client.Report() # Report | Report that should be updated (optional)

    try:
        # Report a voice command result.
        api_instance.service_ai_music_voice_command_report(report=report)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report** | [**Report**](Report.md)| Report that should be updated | [optional] 

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

# **service_ai_music_voice_command_retry_script_generation**
> service_ai_music_voice_command_retry_script_generation(id)

Retry script generation from the stored transcript.

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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Retry script generation from the stored transcript.
        api_instance.service_ai_music_voice_command_retry_script_generation(id)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_retry_script_generation: %s\n" % e)
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

# **service_ai_music_voice_command_start_voice_recording**
> service_ai_music_voice_command_start_voice_recording(ai_music_voice_command=ai_music_voice_command)

Start recording audio for a voice command id.

### Example


```python
import mymusik_client
from mymusik_client.models.ai_music_voice_command import AiMusicVoiceCommand
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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    ai_music_voice_command = mymusik_client.AiMusicVoiceCommand() # AiMusicVoiceCommand | AiMusicVoiceCommand that should be updated (optional)

    try:
        # Start recording audio for a voice command id.
        api_instance.service_ai_music_voice_command_start_voice_recording(ai_music_voice_command=ai_music_voice_command)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_start_voice_recording: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ai_music_voice_command** | [**AiMusicVoiceCommand**](AiMusicVoiceCommand.md)| AiMusicVoiceCommand that should be updated | [optional] 

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

# **service_ai_music_voice_command_stop_and_delete_voice_recording**
> service_ai_music_voice_command_stop_and_delete_voice_recording()

Cancel recording and mark the current voice command as cancelled.

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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)

    try:
        # Cancel recording and mark the current voice command as cancelled.
        api_instance.service_ai_music_voice_command_stop_and_delete_voice_recording()
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_stop_and_delete_voice_recording: %s\n" % e)
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

# **service_ai_music_voice_command_stop_voice_recording**
> service_ai_music_voice_command_stop_voice_recording()

Stop recording and continue transcription and script generation.

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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)

    try:
        # Stop recording and continue transcription and script generation.
        api_instance.service_ai_music_voice_command_stop_voice_recording()
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_stop_voice_recording: %s\n" % e)
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

# **service_ai_music_voice_command_update**
> service_ai_music_voice_command_update(id, ai_music_voice_command=ai_music_voice_command)

Updates an AiMusicVoiceCommand using an id

### Example


```python
import mymusik_client
from mymusik_client.models.ai_music_voice_command import AiMusicVoiceCommand
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
    api_instance = mymusik_client.AiMusicVoiceCommandApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    ai_music_voice_command = mymusik_client.AiMusicVoiceCommand() # AiMusicVoiceCommand | AiMusicVoiceCommand that should be updated (optional)

    try:
        # Updates an AiMusicVoiceCommand using an id
        api_instance.service_ai_music_voice_command_update(id, ai_music_voice_command=ai_music_voice_command)
    except Exception as e:
        print("Exception when calling AiMusicVoiceCommandApi->service_ai_music_voice_command_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **ai_music_voice_command** | [**AiMusicVoiceCommand**](AiMusicVoiceCommand.md)| AiMusicVoiceCommand that should be updated | [optional] 

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

