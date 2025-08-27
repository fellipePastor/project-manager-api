import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository, UpdateResult } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { ITask } from 'src/domain/interfaces/task.interface';
import { ITasksRepository } from 'src/domain/repositories/tasks-repository.interface';

@Injectable()
export class TasksRepositoryService
	extends Repository<TaskEntity>
	implements ITasksRepository
{
	constructor(dataSource: DataSource) {
		super(TaskEntity, dataSource.createEntityManager());
	}

	findAll(userId: number): Promise<ITask[]> {
		return this.findBy({ user: { id: userId } });
	}

	findById(id: number): Promise<ITask | null> {
		return this.findOneBy({ id });
	}

	add(payload: DeepPartial<ITask>): Promise<ITask> {
		return this.save(payload) as Promise<ITask>;
	}

	updateById(payload: DeepPartial<ITask>): Promise<UpdateResult> {
		if (!payload.id) {
			throw new Error('Id não pode ser nulo!');
		}
		return this.update(payload.id, payload);
	}
}
