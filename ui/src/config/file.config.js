
angular
.module(
    'marble.file.config',
    [
        'marble.file.service'
    ]
)
.config(FileConfig);

FileConfig.$inject = [
    'API_BASE',
    'FileServiceProvider'
];

function FileConfig (API_BASE, FileServiceProvider) {
    'use strict';

    FileServiceProvider.setUploadPath(API_BASE + '/file/upload/');
}
