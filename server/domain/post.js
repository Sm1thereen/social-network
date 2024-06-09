export class Post {
  #_id;
  #_props;

  constructor({id, text, createdAt, user, likes}) {
    this.#_id = id;
    this.#_props = {
      text,
      createdAt,
      user,
      likes,
    };
  }

  get id() {
    return this.#_id;
  }

  static create = ({
                     id,
                     text,
                     createdAt,
                     user,
                     likes,
                   }) => {
    return new Post({id, text, createdAt, user, likes});
  };

  unmarshal = () => {
    return {
      id: this.#_id,
      text: this.#_props.text,
      createdAt: this.#_props.createdAt,
      user: this.#_props.user,
      likes: this.#_props.likes,
    };
  };
}