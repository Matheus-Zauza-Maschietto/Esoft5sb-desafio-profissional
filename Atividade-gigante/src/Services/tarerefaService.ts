import { Tarefa } from "../Models/tarefa";
import { User } from "../Models/user";
import tarefaRepository, { TarefaRepository } from "../Repositories/tarefaRepository";
import userRepository, { UserRepository } from "../Repositories/userRepository";

export class TarefaService{
    private readonly tarefaRepository: TarefaRepository;
    private readonly userRepository: UserRepository;
    constructor(){
        this.tarefaRepository = tarefaRepository;
        this.userRepository = userRepository;
    }

    public async createTarefa(body: any, user: User): Promise<Tarefa>{
        let newTarefa = new Tarefa();
        newTarefa.descricao = body.descricao;
        newTarefa.titulo = body.titulo;
        newTarefa.dataCriacao = body.dataCriacao;
        newTarefa.dataConclusao = body.dataConclusao;
        newTarefa.categoria = body.categoria;
        newTarefa.status = body.status;
        newTarefa.responsavel = user;
        
        newTarefa = await tarefaRepository.createTarefa(newTarefa);
        if(newTarefa == null){
            throw new Error("Erro ao criar tarefa");
        }
        return newTarefa;
    }

    public async getTarefasByUser(user: User): Promise<Tarefa[]>{
        let tarefas = await tarefaRepository.getTarefasByUser(user);
        return tarefas;
    }

    
    public async getTarefasByUserAndId(user: User, id: string): Promise<Tarefa>{
        let tarefa = await tarefaRepository.getTarefasByUserAndId(user, Number(id));

        if(tarefa == null){
            throw new Error("Tarefa não encontrada.");
        }

        return tarefa;
    }

    public async updateTarefa(body: any, user: User, id: string): Promise<Tarefa>{
        let tarefa = await tarefaRepository.getTarefasByUserAndId(user, Number(id));

        if(tarefa == null){
            throw new Error("Tarefa não encontrada.");
        }

        tarefa.descricao = body.descricao;
        tarefa.titulo = body.titulo;
        tarefa.dataCriacao = body.dataCriacao;
        tarefa.dataConclusao = body.dataConclusao;
        tarefa.categoria = body.categoria;
        tarefa.status = body.status;
        tarefa.responsavel = user;
        
        tarefa = await tarefaRepository.updateTarefa(tarefa);

        return tarefa;
    }

    public async deleteTarefaByUserAndId(user: User, id: string): Promise<Tarefa>{
        let tarefa = await tarefaRepository.getTarefasByUserAndId(user, Number(id));

        if(tarefa == null){
            throw new Error("Tarefa não encontrada.");
        }

        await tarefaRepository.deleteTarefaById(tarefa.id);

        return tarefa;
    }
}
