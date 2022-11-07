export interface IVideoStream {
    codec_type: "video";
    width: number;
    height: number;
    avg_frame_rate: string;
    bit_rate: string;
}

export interface IAudioStream {
    codec_type: "audio";
    sample_rate: string;
    channels: number;
    channel_layout: string;
    bit_rate: string;
}

export interface Iffprobe {
    streams: [] | [IAudioStream] | [IVideoStream] | [IVideoStream, IAudioStream] | [IAudioStream, IVideoStream];
    format:
        {
            duration: string;
            bit_rate: string;
        }
}
