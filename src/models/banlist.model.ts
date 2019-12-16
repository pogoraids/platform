import { Table, Model, Column, BelongsTo, ForeignKey, PrimaryKey } from 'sequelize-typescript';
// import TournamentSettings from './tournamentSettings.model';

@Table({timestamps: true})
export class Banlist extends Model<Banlist> {
    @Column({ primaryKey: true})
    id: number;

    @PrimaryKey
    @Column
    dexId: number;

    @Column
    species: string;

    @Column
    allowed: boolean;

    // @BelongsTo(() => TournamentSettings)
    // fromSetting: TournamentSettings;

    // @ForeignKey(() => TournamentSettings)
    // @Column
    // settingId: number;
}