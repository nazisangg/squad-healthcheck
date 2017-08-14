export class Session {

  public get id() : string {
    var id = localStorage.getItem("session_id");

    if(id == null) {
      id = Math.random().toString().substr(4, 8);

      localStorage.setItem("session_id", id);
    }

    return id;
  }
}
