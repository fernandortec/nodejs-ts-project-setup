import { nanoid } from 'nanoid';

class User {
  id: string;

  constructor() {
    if (!this.id) {
      this.id = nanoid();
    }
  }
}

export { User };
