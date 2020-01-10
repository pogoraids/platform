import { Table, Model, Column, BelongsTo, ForeignKey, PrimaryKey, Unique, HasOne, AllowNull } from 'sequelize-typescript';
import { TournamentSettings } from './tournamentSettings.model';

@Table({timestamps: true})
export class Banlist extends Model<Banlist> {
    @Column({ primaryKey: true})
    id: number;

    @Column({primaryKey: true})
    dexId: number;

    @Column
    species: string;

    @Column
    allowed: boolean;

    @ForeignKey(() => TournamentSettings)
    @PrimaryKey
    @Column
    settingsId: string;
}