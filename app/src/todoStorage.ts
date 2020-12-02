import { TodoItem } from './type/todoItem';

interface Storable {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const STORAGE_KEY = 'vue-ts-todoapp';

export default class TodoStorage {
  // デフォルト引数でローカルストレージを呼び出す
  constructor(private storage: Storable = localStorage) {}

  // 保存処理
  public save(todos: TodoItem[]) {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  // 全件取得
  public fetchAll() {
    const todos = JSON.parse(
      // MEMO: 空の配列が返る可能性があるので考慮
      this.storage.getItem(STORAGE_KEY) || '[]'
    ) as TodoItem[];

    todos.forEach((todo, i) => todo.id = i);

    return todos;
  }

  // IDの連番を振る処理
  public nextId() {
    return this.fetchAll.length + 1;
  }
}
