export class Post {
  #_id;
  #_props;

  constructor({id, text, createdAt, user}) {
    this.#_id = id;
    this.#_props = {
      text,
      createdAt,
      user,
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
                   }) => {
    return new Post({id, text, createdAt, user});
  };

  unmarshal = () => {
    return {
      id: this.#_id,
      text: this.#_props.text,
      createdAt: this.#_props.createdAt,
      user: this.#_props.user,
    };
  };
}