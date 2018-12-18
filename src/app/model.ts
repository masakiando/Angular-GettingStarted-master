export interface Task {
  id?: number;
  title: string;
  done: boolean;
}

export type TaskListFilterType = 'all' | 'open' | 'done';

export interface Course {
  id?: number;
  title: string;
  watchHref: string;
  authorId: string;
  length: string;
  category: string;
  done: boolean;
}
