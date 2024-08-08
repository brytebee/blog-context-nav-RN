import createDataContext from "./createDataContext";

export type BlogPost = {
  name: string;
  age: number;
  role: string;
  id: number;
};

type BlogState = BlogPost[];

export const randNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const blogReducer = (
  state: BlogState,
  action: { type: string; payload?: any }
): BlogState => {
  switch (action.type) {
    case "update_blog":
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
    case "del_blog":
      return state.filter((blog) => blog.id !== action.payload);
    case "add_blog":
      return [...state, action.payload];
    default:
      return state;
  }
};

const addBlog = (dispatch: React.Dispatch<any>) => {
  return () => {
    dispatch({ type: "add_blog" });
  };
};

const delBlog = (dispatch: React.Dispatch<any>) => {
  return () => {
    dispatch({ type: "del_blog" });
  };
};

const editBlog = (dispatch: React.Dispatch<any>) => {
  return () => {
    dispatch({ type: "update_blog" });
  };
};

const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, delBlog, editBlog },
  [
    { id: 423, name: "Samwel", age: 25, role: "Maester" },
    { id: 872, name: "Jon Snow", age: 25, role: "Leader" },
  ]
);

export { Context, Provider };
