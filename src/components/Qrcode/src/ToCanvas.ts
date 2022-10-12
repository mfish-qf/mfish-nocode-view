import { renderQrCode } from './DrawCanvas';
import { drawLogo } from './DrawLogo';
import { RenderQrCodeParams } from './Typing';
export const toCanvas = (options: RenderQrCodeParams) => {
  return renderQrCode(options)
    .then(() => {
      return options;
    })
    .then(drawLogo) as Promise<string>;
};
