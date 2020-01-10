import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { Tournament } from './tournament.model';

@Table({timestamps: true})
export class Pod extends Model<Pod> {
    @Column({ primaryKey: true})
    id: string;

    @ForeignKey(() => Tournament)
    @Column
    tournamentId: string;

    @Column
    name: string;

    @Column
    mechanic: 'PvP' | 'PvE';

    @HasMany(() => User)
    members: User[];

    @ForeignKey(() => User)
    userId: String;

    // @HasMany(() => Submission)
    // submissions: Submission[];

    // @ForeignKey(() => Submission)
    @Column
    subId: number;

    @Column
    iconImageUrl: string;

    @Column
    mechanicFormat: 'Great' | 'Ultra' | 'Master' | 'Solo' | 'Team' | 'Custom';

    @BelongsTo(() => Tournament)
    tournament: Tournament;
}