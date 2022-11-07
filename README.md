# Video-metadata
> Metadata for videos

## Install
```
yarn
```

## Start
```
yarn start
```

## Request:

```js
POST /metaData
{"url": "VIDEO_URL"}
```

## Response:

```js
{
    "audio": [
        {
            "bitRate": 123127,
            "channelLayout": "stereo",
            "channels": 2,
            "sampleRate": 44100
        }
    ],
    "video": [
        {
            "bitRate": 919527,
            "frameRate": 24,
            "resolution": {
                "height": 293,
                "width": 720
            }
        }
    ],
    "bitrate": 1048021,
    "duration": 31958.333
}
```

## LICENSE

```
MIT License

Copyright (c) 2022 Arend

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
