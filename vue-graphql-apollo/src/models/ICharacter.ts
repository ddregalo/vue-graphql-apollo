import IFilm from '@/models/IFilm';

export default interface ICharacter {
    readonly name: string;
    readonly height: string;
    readonly mass: string;
    readonly birth_year: string;
    readonly gender: string;
    readonly homeworld: string;
    readonly films: IFilm;
}
