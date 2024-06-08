export class Comment {
  #_id;
  #_props;

  constructor({id, content, user_id, post_id}) {
    this.#_id = id;
    this.#_props = {
      content,
      user_id,
      post_id,
    };
  }

  get id() {
    return this.#_id;
  }

  static create({id, content, user_id, post_id}) {
    return new Comment({id, content, user_id, post_id});
  }

  unmarshal = () => {
    return {
      id: this.#_id,
      content: this.#_props.content,
      user_id: this.#_props.user_id,
      post_id: this.#_props.post_id,
    };
  };
}