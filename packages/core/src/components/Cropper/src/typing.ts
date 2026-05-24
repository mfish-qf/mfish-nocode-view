import type Cropper from "cropperjs";

export interface CropperResult {
  imgBase64: string;
  imgInfo: { x: number; y: number; width: number; height: number };
}

export type { Cropper };
