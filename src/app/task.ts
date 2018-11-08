import { State } from './state.enum';

export type Tasks = Task[];

export interface Task {
    id: number;
    name: string;
    description: string;
    date: Date;
    state: State;
}
