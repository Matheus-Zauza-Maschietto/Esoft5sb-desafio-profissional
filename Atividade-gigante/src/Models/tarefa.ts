import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Categoria } from "./categoria";
import { Status } from "./status";
import { Tipo } from "./tipo";

@Entity()
export class Tarefa{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    dataCriacao: Date;

    @Column()
    dataConclusao: Date;

    @OneToOne(() => User)
    @JoinColumn()
    responsavel: User;

    @OneToOne(() => Categoria, {nullable: true})
    @JoinColumn()
    categoria: Categoria;

    @OneToOne(() => Status)
    @JoinColumn()
    status: Status;

    @OneToOne(() => Tipo)
    @JoinColumn()
    tipo: Tipo;
}