export class Follower {
  #_id;
  #_props;

  constructor({id, user_id, follower_id}) {
    this.#_id = id;
    this.#_props = {
      user_id,
      follower_id,
    };
  }

  get id() {
    return this.#_id;
  }

  static create = ({id, user_id, follower_id}) => {
    return new Follower({id, user_id, follower_id});
  };
  unmarshal = () => {
    return {
      id: this.#_id,
      user_id: this.#_props.user_id,
      follower_id: this.#_props.follower_id,
    };
  };
}


