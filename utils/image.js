/**
 * ファイルの拡張子を取得
 * @param { string } encodedData image base64
 * @returns ファイル拡張子
 */
export const getFileExtension = (encodedData) => {
  const fileExtension = encodedData
    .toString()
    .slice(encodedData.indexOf("/") + 1, encodedData.indexOf(";"));

  return fileExtension;
};

/**
 * 画像のリサイズ
 * @param { any } ev vue model
 * @param { number } width  画像のwidth
 * @param { number } height 画像のheight
 * @param { string } fileExtension ファイル拡張子
 * @returns リサイズ後のimage base64
 */
export const resize = (ev, width, height, fileExtension) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(ev, 0, 0, width, height, 0, 0, width, height);
  const base = canvas.toDataURL(`image/${fileExtension}`);

  return base;
};
