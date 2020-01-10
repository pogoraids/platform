import { Table, Column, Model, HasMany, ForeignKey, HasOne, Unique } from 'sequelize-typescript';
import { User } from './user.model';
import { TournamentSettings } from './tournamentSettings.model';
import { Pod } from './pod.model';

@Table({ timestamps: true })
export class Tournament extends Model<Tournament> {
    @Column({ primaryKey: true })
    id: string;

    @Unique
    @Column
    name: string;

    @Column
    tallMode: boolean;

    @Column
    showAdd: boolean;

    @Column
    mechanic: 'PvE' | 'PvP';

    @ForeignKey(() => User)
    @Column
    userId: number;

    @HasMany(() => User)
    members: User[];

    @ForeignKey(() => Pod)
    @Column
    podId: string;

    @HasMany(() => Pod)
    pods: Pod[];

    @HasOne(() => TournamentSettings)
    settings: TournamentSettings;

    @ForeignKey(() => TournamentSettings)
    @Column
    settingsId: string;    
}
