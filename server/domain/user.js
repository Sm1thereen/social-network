export class User {
  #_id;
  #_props;

  constructor({id, first_name, last_name, email, password}) {
    this.#_id = id;
    this.#_props = {
      first_name,
      last_name,
      email,
      password,
    };
  }

  get id() {
    return this.#_id;
  }

  static create = ({id, first_name, last_name, email, password}) => {
    return new User({id, first_name, last_name, email, password});
  };
  unmarshal = () => {
    return {
      id: this.#_id,
      first_name: this.#_props.first_name,
      last_name: this.#_props.last_name,
      email: this.#_props.email,
    };
  };
}


