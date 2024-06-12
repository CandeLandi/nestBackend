import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateHeroeDto {


    @IsString()
    superhero: string;

    @IsString()
    publisher: string;

    @IsString()
    alter_ego?: string;

    @IsString()
    characters?: string;

    @IsString()
    first_appearance?: string;

    @IsString()
    @IsOptional()
    alt_img?: string;
}
