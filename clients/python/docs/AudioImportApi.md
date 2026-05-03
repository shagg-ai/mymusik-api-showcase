# mymusik_client.AudioImportApi

All URIs are relative to *http://localhost:7790/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_audio_import_erase**](AudioImportApi.md#service_audio_import_erase) | **DELETE** /audioimport/{id} | Deletes an AudioImport using an id
[**service_audio_import_get**](AudioImportApi.md#service_audio_import_get) | **GET** /audioimport/{id} | Returns an AudioImport using an id
[**service_audio_import_get_page**](AudioImportApi.md#service_audio_import_get_page) | **GET** /audioimport | Returns AudioImport(s) using an filter.       Add an filter by using the &#39;/filter&#39; and &#39;/condition&#39; paths.      You can sort them by an property
[**service_audio_import_import_audio_folder_path**](AudioImportApi.md#service_audio_import_import_audio_folder_path) | **POST** /audioimport/importaudiofolderpath | Returns to the previous track in the history.
[**service_audio_import_insert**](AudioImportApi.md#service_audio_import_insert) | **POST** /audioimport | Creates an AudioImport. You can pass an empty id, it will then create one.
[**service_audio_import_open_audio_file_dialog_for_song**](AudioImportApi.md#service_audio_import_open_audio_file_dialog_for_song) | **POST** /audioimport/openaudiofiledialogforsong | Open Audio File Selection Dialog. You can select a audio file to add to a song.
[**service_audio_import_open_audio_folder_dialog**](AudioImportApi.md#service_audio_import_open_audio_folder_dialog) | **POST** /audioimport/openaudiofolderdialog | Open Audio Folder Selection Dialog. You can select multiple audio folders and files.
[**service_audio_import_open_audio_folder_dialog_for_album**](AudioImportApi.md#service_audio_import_open_audio_folder_dialog_for_album) | **POST** /audioimport/openaudiofolderdialogforalbum | Open Audio Folder Selection Dialog. You can select multiple audio folders and files that are getting added to your album.
[**service_audio_import_update**](AudioImportApi.md#service_audio_import_update) | **PUT** /audioimport/{id} | Updates an AudioImport using an id


# **service_audio_import_erase**
> service_audio_import_erase(id)

Deletes an AudioImport using an id

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
    api_instance = mymusik_client.AudioImportApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Deletes an AudioImport using an id
        api_instance.service_audio_import_erase(id)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_erase: %s\n" % e)
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

# **service_audio_import_get**
> AudioImport service_audio_import_get(id)

Returns an AudioImport using an id

### Example


```python
import mymusik_client
from mymusik_client.models.audio_import import AudioImport
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
    api_instance = mymusik_client.AudioImportApi(api_client)
    id = 'id_example' # str | The identifier of a resource

    try:
        # Returns an AudioImport using an id
        api_response = api_instance.service_audio_import_get(id)
        print("The response of AudioImportApi->service_audio_import_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 

### Return type

[**AudioImport**](AudioImport.md)

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

# **service_audio_import_get_page**
> List[AudioImport] service_audio_import_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)

Returns AudioImport(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property

### Example


```python
import mymusik_client
from mymusik_client.models.audio_import import AudioImport
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
    api_instance = mymusik_client.AudioImportApi(api_client)
    filter_name = 'filter_name_example' # str | the name of a Filter resource (optional)
    values = 'values_example' # str | input parameter for the filter use ';' to separate values (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_index = 56 # int |  (optional)

    try:
        # Returns AudioImport(s) using an filter.       Add an filter by using the '/filter' and '/condition' paths.      You can sort them by an property
        api_response = api_instance.service_audio_import_get_page(filter_name=filter_name, values=values, sort_by=sort_by, order_by=order_by, page_index=page_index)
        print("The response of AudioImportApi->service_audio_import_get_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_get_page: %s\n" % e)
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

[**List[AudioImport]**](AudioImport.md)

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

# **service_audio_import_import_audio_folder_path**
> service_audio_import_import_audio_folder_path(audio_folder_payload=audio_folder_payload)

Returns to the previous track in the history.

### Example


```python
import mymusik_client
from mymusik_client.models.audio_folder_payload import AudioFolderPayload
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
    api_instance = mymusik_client.AudioImportApi(api_client)
    audio_folder_payload = mymusik_client.AudioFolderPayload() # AudioFolderPayload | AudioFolderPayload that should be updated (optional)

    try:
        # Returns to the previous track in the history.
        api_instance.service_audio_import_import_audio_folder_path(audio_folder_payload=audio_folder_payload)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_import_audio_folder_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audio_folder_payload** | [**AudioFolderPayload**](AudioFolderPayload.md)| AudioFolderPayload that should be updated | [optional] 

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

# **service_audio_import_insert**
> service_audio_import_insert(file_payload=file_payload)

Creates an AudioImport. You can pass an empty id, it will then create one.

### Example


```python
import mymusik_client
from mymusik_client.models.file_payload import FilePayload
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
    api_instance = mymusik_client.AudioImportApi(api_client)
    file_payload = mymusik_client.FilePayload() # FilePayload | FilePayload that should be updated (optional)

    try:
        # Creates an AudioImport. You can pass an empty id, it will then create one.
        api_instance.service_audio_import_insert(file_payload=file_payload)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_payload** | [**FilePayload**](FilePayload.md)| FilePayload that should be updated | [optional] 

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

# **service_audio_import_open_audio_file_dialog_for_song**
> service_audio_import_open_audio_file_dialog_for_song(song=song)

Open Audio File Selection Dialog. You can select a audio file to add to a song.

### Example


```python
import mymusik_client
from mymusik_client.models.song import Song
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
    api_instance = mymusik_client.AudioImportApi(api_client)
    song = mymusik_client.Song() # Song | Song that should be updated (optional)

    try:
        # Open Audio File Selection Dialog. You can select a audio file to add to a song.
        api_instance.service_audio_import_open_audio_file_dialog_for_song(song=song)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_open_audio_file_dialog_for_song: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **song** | [**Song**](Song.md)| Song that should be updated | [optional] 

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

# **service_audio_import_open_audio_folder_dialog**
> service_audio_import_open_audio_folder_dialog()

Open Audio Folder Selection Dialog. You can select multiple audio folders and files.

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
    api_instance = mymusik_client.AudioImportApi(api_client)

    try:
        # Open Audio Folder Selection Dialog. You can select multiple audio folders and files.
        api_instance.service_audio_import_open_audio_folder_dialog()
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_open_audio_folder_dialog: %s\n" % e)
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

# **service_audio_import_open_audio_folder_dialog_for_album**
> service_audio_import_open_audio_folder_dialog_for_album(album=album)

Open Audio Folder Selection Dialog. You can select multiple audio folders and files that are getting added to your album.

### Example


```python
import mymusik_client
from mymusik_client.models.album import Album
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
    api_instance = mymusik_client.AudioImportApi(api_client)
    album = mymusik_client.Album() # Album | Album that should be updated (optional)

    try:
        # Open Audio Folder Selection Dialog. You can select multiple audio folders and files that are getting added to your album.
        api_instance.service_audio_import_open_audio_folder_dialog_for_album(album=album)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_open_audio_folder_dialog_for_album: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **album** | [**Album**](Album.md)| Album that should be updated | [optional] 

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

# **service_audio_import_update**
> service_audio_import_update(id, audio_import=audio_import)

Updates an AudioImport using an id

### Example


```python
import mymusik_client
from mymusik_client.models.audio_import import AudioImport
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
    api_instance = mymusik_client.AudioImportApi(api_client)
    id = 'id_example' # str | The identifier of a resource
    audio_import = mymusik_client.AudioImport() # AudioImport | AudioImport that should be updated (optional)

    try:
        # Updates an AudioImport using an id
        api_instance.service_audio_import_update(id, audio_import=audio_import)
    except Exception as e:
        print("Exception when calling AudioImportApi->service_audio_import_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of a resource | 
 **audio_import** | [**AudioImport**](AudioImport.md)| AudioImport that should be updated | [optional] 

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

