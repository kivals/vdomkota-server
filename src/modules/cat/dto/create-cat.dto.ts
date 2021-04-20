import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Max,
  MaxLength,
} from 'class-validator';

/**
 * Create Cat DTO Class
 */
export class CreateCatDto {
  /**
   * Name field
   */
  @Matches(/^[a-zA-Z ]+$/)
  @IsNotEmpty()
  name: string;

  /**
   * Info field
   */
  @IsString()
  info: string;

  /**
   * ExtraInfo field
   */
  @IsString()
  extraInfo: string;

  /**
   * Age field
   */
  @IsNumber()
  @Max(360)
  age: number;

  /**
   * HasHome field
   */
  @IsBoolean()
  hasHome: boolean;

  /**
   * Infections field
   */
  @IsString()
  @MaxLength(255)
  infections: string;

  /**
   * IsNeutered field
   */
  @IsBoolean()
  isNeutered: boolean;

  /**
   * Vaccinations field
   */
  @IsString()
  @MaxLength(255)
  vaccinations: string;

  /**
   * ShelterPutDate field
   */
  @IsDate()
  shelterPutDate: Date;
}
