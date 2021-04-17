const ADD = "tasks/ADD";

//{type:'tasks/ADD, payload:{id:5, text:'Ala ma kota'}}
export const add = (task) => ({
  type: ADD,
  payload: task,
});

const INITIAL_STATE = {
  tasks: [],
  isLoading: false,
  hasError: false,
};

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return { ...state, tasks: state.tasks.concat([action.payload]) };

    default:
      return state;
  }
}
