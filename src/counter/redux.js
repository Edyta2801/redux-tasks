// Action:
// {
//   type: 'COUNTER_ADD',
//   payload: 123
// }

const COUNTER_INC = "counter/COUNTER_INC";
const COUNTER_DEC = "counter/COUNTER_DEC";
const COUNTER_RESET = "counter/COUNTER_RESET";


//action creatory
export function inc() {
  return {
    type: COUNTER_INC
  };
}

export function dec() {
  return {
    type: COUNTER_DEC
  };
}

//zapis ten sam co w dec i inc tylko z uzyciem const
export const reset = () => ({ type: COUNTER_RESET });


const INITIAL_STATE = {
  count: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_INC:
      return { ...state, count: state.count + 1 };
    case COUNTER_DEC:
      return { ...state, count: state.count - 1 };
    case COUNTER_RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }


  //Należy zwrócić nowy okiekt, żeby nowa referencja w pamięci powstała, 
  //ponieważ const INITIAL_STATE jest obiektem (typem złożonym)

  // export default function reducer(state = INITIAL_STATE, action) {
  // if (action.type === COUNTER_INC) {
  //   return {...state, counter: state.counter + 1 }
  //   // return Object.assign({}, { counter: state.counter + 1 });
  // }
  // return state;
}