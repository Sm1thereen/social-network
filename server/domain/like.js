export class Like {
  #_id;
  #_props;

  constructor({id, user_id, post_id}) {
    this.#_id = id;
    this.#_props = {
      user_id,
      post_id,
    };
  }

  get id() {
    return this.#_id;
  }

  static create({id, user_id, post_id}) {
    return new Like({id, user_id, post_id});
  }

  unmarshal = () => {
    return {
      id: this.#_id,
      user_id: this.#_props.user_id,
      post_id: this.#_props.post_id,
    };
  };
}