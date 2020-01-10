import { Table, Column, Model, HasMany, BelongsTo, ForeignKey, BeforeSave, BelongsToMany } from 'sequelize-typescript';
import { Company } from "./company.model";
import * as bcrypt from 'bcrypt';
import to from 'await-to-js';
import * as jsonwebtoken from'jsonwebtoken';
import { ENV } from '../config';
import { Pod } from './pod.model';
import { Tournament } from './tournament.model';
// import { Pod } from './pod.model';
// import PodUser from './podUser.model';

@Table({timestamps: true})
export class User extends Model<User> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({unique: true})
  email: string;

  @Column
  password: string;

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsTo(() => Pod)
  pods: Pod[];
  
  @ForeignKey(() => Pod)
  @Column
  podId: string;

  @ForeignKey(() => Tournament)
  @Column
  tournamentId: string;

  @BelongsTo(() => Tournament)
  tournaments: Tournament[];

  jwt: string;
  login: boolean;
  @BeforeSave
  static async hashPassword(user: User) {
    let err;
    if (user.changed('password')){
        let salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if(err) {
          throw err;
        }

        [err, hash] = await to(bcrypt.hash(user.password, salt));
        if(err) {
          throw err;
        }
        user.password = hash;
    }
  }

  async comparePassword(pw) {
      let err, pass;
      if(!this.password) {
        throw new Error('Does not have password');
      }

      [err, pass] = await to(bcrypt.compare(pw, this.password));
      if(err) {
        throw err;
      }

      if(!pass) {
        throw 'Invalid password';
      }

      return this;
  };

  getJwt(){
      return 'Bearer ' + jsonwebtoken.sign({
          id: this.id,
      }, ENV.JWT_ENCRYPTION, { expiresIn: ENV.JWT_EXPIRATION });
  }
}