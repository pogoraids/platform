import { Table, Column, Model, HasOne, ForeignKey, HasMany, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Banlist } from './banlist.model';
import { Tournament } from './tournament.model';

@Table({timestamps: true})
export class TournamentSettings extends Model<TournamentSettings> {
    @Column({ primaryKey: true})
    id: string;

    @Column
    limit: number;

    @Column
    onlySolo: boolean;

    @Column
    scoringType: string;//'custom' | 'ordinal' | 'timeRun';

    @Column
    timeOrder: boolean;

    @Column
    multiPod: boolean;

    @Column
    customScoringModel: string;

    @Column
    masterSheet: string;

    @ForeignKey(() => Banlist)
    @Column
    banlistId: number;

    @HasMany(() => Banlist)
    banlist: Banlist;

    @ForeignKey(() => Tournament)
    @Column
    tournamentId: string;

    @BelongsTo(() => Tournament)
    tournament: Tournament;
}