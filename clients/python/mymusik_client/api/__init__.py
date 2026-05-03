# flake8: noqa

if __import__("typing").TYPE_CHECKING:
    # import apis into api package
    from mymusik_client.api.ai_music_voice_command_api import AiMusicVoiceCommandApi
    from mymusik_client.api.ai_user_api import AiUserApi
    from mymusik_client.api.album_api import AlbumApi
    from mymusik_client.api.album_bookmark_api import AlbumBookmarkApi
    from mymusik_client.api.album_cloud_api import AlbumCloudApi
    from mymusik_client.api.album_identifier_api import AlbumIdentifierApi
    from mymusik_client.api.album_metrics_api import AlbumMetricsApi
    from mymusik_client.api.app_event_api import AppEventApi
    from mymusik_client.api.artist_api import ArtistApi
    from mymusik_client.api.artist_metrics_api import ArtistMetricsApi
    from mymusik_client.api.audio_edit_api import AudioEditApi
    from mymusik_client.api.audio_file_api import AudioFileApi
    from mymusik_client.api.audio_import_api import AudioImportApi
    from mymusik_client.api.ban_notification_api import BanNotificationApi
    from mymusik_client.api.class_type_condition_api import ClassTypeConditionApi
    from mymusik_client.api.cloud_api import CloudApi
    from mymusik_client.api.cloud_download_api import CloudDownloadApi
    from mymusik_client.api.cloud_search_api import CloudSearchApi
    from mymusik_client.api.cloud_storage_api import CloudStorageApi
    from mymusik_client.api.cloud_upload_api import CloudUploadApi
    from mymusik_client.api.comment_api import CommentApi
    from mymusik_client.api.condition_api import ConditionApi
    from mymusik_client.api.config_section_api import ConfigSectionApi
    from mymusik_client.api.device_api import DeviceApi
    from mymusik_client.api.download_api import DownloadApi
    from mymusik_client.api.event_api import EventApi
    from mymusik_client.api.file_payload_api import FilePayloadApi
    from mymusik_client.api.filter_api import FilterApi
    from mymusik_client.api.image_file_api import ImageFileApi
    from mymusik_client.api.image_url_import_api import ImageUrlImportApi
    from mymusik_client.api.license_info_api import LicenseInfoApi
    from mymusik_client.api.local_database_api import LocalDatabaseApi
    from mymusik_client.api.local_storage_api import LocalStorageApi
    from mymusik_client.api.login_api import LoginApi
    from mymusik_client.api.lyric_api import LyricApi
    from mymusik_client.api.model_usage_api import ModelUsageApi
    from mymusik_client.api.music_element_api import MusicElementApi
    from mymusik_client.api.music_element_list_api import MusicElementListApi
    from mymusik_client.api.music_search_api import MusicSearchApi
    from mymusik_client.api.number_condition_api import NumberConditionApi
    from mymusik_client.api.play_history_api import PlayHistoryApi
    from mymusik_client.api.play_log_api import PlayLogApi
    from mymusik_client.api.player_api import PlayerApi
    from mymusik_client.api.playlist_api import PlaylistApi
    from mymusik_client.api.playlist_item_api import PlaylistItemApi
    from mymusik_client.api.playlist_metrics_api import PlaylistMetricsApi
    from mymusik_client.api.queue_item_api import QueueItemApi
    from mymusik_client.api.setting_api import SettingApi
    from mymusik_client.api.song_api import SongApi
    from mymusik_client.api.song_identifier_api import SongIdentifierApi
    from mymusik_client.api.song_metrics_api import SongMetricsApi
    from mymusik_client.api.string_condition_api import StringConditionApi
    from mymusik_client.api.synchronisation_api import SynchronisationApi
    from mymusik_client.api.tag_api import TagApi
    from mymusik_client.api.temporary_message_api import TemporaryMessageApi
    from mymusik_client.api.token_api import TokenApi
    from mymusik_client.api.user_profile_api import UserProfileApi
    from mymusik_client.api.webhook_api import WebhookApi
    
else:
    from lazy_imports import LazyModule, as_package, load

    load(
        LazyModule(
            *as_package(__file__),
            """# import apis into api package
from mymusik_client.api.ai_music_voice_command_api import AiMusicVoiceCommandApi
from mymusik_client.api.ai_user_api import AiUserApi
from mymusik_client.api.album_api import AlbumApi
from mymusik_client.api.album_bookmark_api import AlbumBookmarkApi
from mymusik_client.api.album_cloud_api import AlbumCloudApi
from mymusik_client.api.album_identifier_api import AlbumIdentifierApi
from mymusik_client.api.album_metrics_api import AlbumMetricsApi
from mymusik_client.api.app_event_api import AppEventApi
from mymusik_client.api.artist_api import ArtistApi
from mymusik_client.api.artist_metrics_api import ArtistMetricsApi
from mymusik_client.api.audio_edit_api import AudioEditApi
from mymusik_client.api.audio_file_api import AudioFileApi
from mymusik_client.api.audio_import_api import AudioImportApi
from mymusik_client.api.ban_notification_api import BanNotificationApi
from mymusik_client.api.class_type_condition_api import ClassTypeConditionApi
from mymusik_client.api.cloud_api import CloudApi
from mymusik_client.api.cloud_download_api import CloudDownloadApi
from mymusik_client.api.cloud_search_api import CloudSearchApi
from mymusik_client.api.cloud_storage_api import CloudStorageApi
from mymusik_client.api.cloud_upload_api import CloudUploadApi
from mymusik_client.api.comment_api import CommentApi
from mymusik_client.api.condition_api import ConditionApi
from mymusik_client.api.config_section_api import ConfigSectionApi
from mymusik_client.api.device_api import DeviceApi
from mymusik_client.api.download_api import DownloadApi
from mymusik_client.api.event_api import EventApi
from mymusik_client.api.file_payload_api import FilePayloadApi
from mymusik_client.api.filter_api import FilterApi
from mymusik_client.api.image_file_api import ImageFileApi
from mymusik_client.api.image_url_import_api import ImageUrlImportApi
from mymusik_client.api.license_info_api import LicenseInfoApi
from mymusik_client.api.local_database_api import LocalDatabaseApi
from mymusik_client.api.local_storage_api import LocalStorageApi
from mymusik_client.api.login_api import LoginApi
from mymusik_client.api.lyric_api import LyricApi
from mymusik_client.api.model_usage_api import ModelUsageApi
from mymusik_client.api.music_element_api import MusicElementApi
from mymusik_client.api.music_element_list_api import MusicElementListApi
from mymusik_client.api.music_search_api import MusicSearchApi
from mymusik_client.api.number_condition_api import NumberConditionApi
from mymusik_client.api.play_history_api import PlayHistoryApi
from mymusik_client.api.play_log_api import PlayLogApi
from mymusik_client.api.player_api import PlayerApi
from mymusik_client.api.playlist_api import PlaylistApi
from mymusik_client.api.playlist_item_api import PlaylistItemApi
from mymusik_client.api.playlist_metrics_api import PlaylistMetricsApi
from mymusik_client.api.queue_item_api import QueueItemApi
from mymusik_client.api.setting_api import SettingApi
from mymusik_client.api.song_api import SongApi
from mymusik_client.api.song_identifier_api import SongIdentifierApi
from mymusik_client.api.song_metrics_api import SongMetricsApi
from mymusik_client.api.string_condition_api import StringConditionApi
from mymusik_client.api.synchronisation_api import SynchronisationApi
from mymusik_client.api.tag_api import TagApi
from mymusik_client.api.temporary_message_api import TemporaryMessageApi
from mymusik_client.api.token_api import TokenApi
from mymusik_client.api.user_profile_api import UserProfileApi
from mymusik_client.api.webhook_api import WebhookApi

""",
            name=__name__,
            doc=__doc__,
        )
    )
