import { ffprobeDTO } from "../dtos/ffprobeDTO";
import {IAudioStream, Iffprobe, IVideoStream} from "../types";

/* map the results from ffprobe command */
export const toDTO = (ffprobe: Iffprobe): ffprobeDTO => {
    const streams = ffprobe.streams;
    const audioStream = streams.find(stream => stream.codec_type === "audio") as IAudioStream | null;
    const videoStream = streams.find(stream => stream.codec_type === "video") as IVideoStream | null;

    return {
        audio: audioStream ? [{
            bitRate: parseInt(audioStream.bit_rate),
            channelLayout: audioStream.channel_layout,
            channels: audioStream.channels,
            sampleRate: parseInt(audioStream.sample_rate)
        }] : null,
        video: videoStream ? [{
            bitRate: parseInt(videoStream.bit_rate),
            frameRate: parseInt(videoStream.avg_frame_rate),
            resolution: {
                height: videoStream.height,
                width: videoStream.width
            }
        }] : null,
        bitrate: parseInt(ffprobe.format.bit_rate),
        duration: parseFloat(ffprobe.format.duration) * 1000
    }
}
