import { extname } from 'path';
import { BadRequestException } from '@nestjs/common';

const FILE_LENGTH = 32;
/**
 * Generate random file name
 * @param req request
 * @param file file
 * @param callback
 */
export const imgFileName = (req, file, callback) => {
  const ext = extname(file.originalname);
  const randomName = Array(FILE_LENGTH)
    .fill(null)
    .map(() => Math.round(Math.random() * 8).toString(8))
    .join('');
  callback(null, `${randomName}${ext}`);
};

/**
 * Check file extensions
 * @param req
 * @param file
 * @param callback
 */
export const imgFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
    return callback(
      new BadRequestException('Only image files are allowed!'),
      false,
    );
  }
  callback(null, true);
};
