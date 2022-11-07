import { Request, Response } from "express";
import ffprobe from "../commands/ffprobe";
import { ffprobeDTO } from "../dtos/ffprobeDTO";
import { toDTO } from "../mappers/ffprobeMap";
import { validationResult } from "express-validator";

export const getMetaData = async (req: Request, res: Response) => {

    try {
        const { url } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: errors.array() });
        }

        /* execute ffprobe command and retrieve video meta data */
        const metaData = await ffprobe(url);
        /* map the ffprobe results into a DTO */
        const dto: ffprobeDTO = toDTO(metaData);
        /* return the DTO as JSON */
        return res.json(dto);
    } catch (e) {
        const {statusCode, message} = e
        return res.status(statusCode).json({message});
    }
};
