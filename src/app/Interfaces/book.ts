import { VolumeInfo } from "./volumeInfo";
import { AccessInfo } from "./accessInfo";

export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
    accessInfo: AccessInfo;
}