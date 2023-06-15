import type Cropper from "cropperjs";

export interface CropperResult {
  imgBase64: string;
  imgInfo: Cropper.Data;
}

export type { Cropper };
