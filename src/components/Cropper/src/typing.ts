import type Cropper from "cropperjs";

export interface CropendResult {
  imgBase64: string;
  imgInfo: Cropper.Data;
}
export type ApiFunParams = { file: Blob; name: string; filename: string };
export type { Cropper };
