export class Post {
  #_id;
  #_props;

  constructor({id, text, userId}) {
    this.#_id = id;
    this.#_props = {
      text,
      userId,
    };
  }

  get id() {
    return this.#_id;
  }

  static create = ({
                     id,
                     text,
                     userId,
                   }) => {
    return new Post({id, text, userId});
  };

  unmarshal = () => {
    return {
      id: this.#_id,
      text: this.#_props.text,
      userId: this.#_props.userId,
    };
  };
}