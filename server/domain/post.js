export class Post {
  #_id;
  #_props;

  constructor({id, text}) {
    this.#_id = id;
    this.#_props = {
      text,
    };
  }

  get id() {
    return this.#_id;
  }

  static create = ({
                     id,
                     text,
                   }) => {
    return new Post({id, text});
  };

  unmarshal = () => {
    return {
      id: this.#_id,
      text: this.#_props.text,
    };
  };
}