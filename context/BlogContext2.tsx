import createDataContext from "./createDataContext";

export type BlogPost = {
  name: string;
  age: number;
  role: string;
  id: number;
};

type BlogState = BlogPost[];

const roles = [
  "Developer",
  "Nurse",
  "Engineer",
  "Lawyer",
  "Designer",
  "Doctor",
  "Teacher",
  "Clergyman",
  "Clerk",
  "Civil Servant",
];

const fakeNames = [
  "Joe",
  "Dan",
  "Ben",
  "Juan",
  "Shaun",
  "Levi",
  "Hussain",
  "Helen",
  "Matt",
  "Bruce",
  "Latti",
];

export const randNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randString<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const blogReducer = (
  state: BlogState,
  action: { type: string; payload?: any }
): BlogState => {
  switch (action.type) {
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
  return (id: number) => {
    dispatch({ type: "del_blog", payload: id });
  };
};

const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, delBlog },
  []
);

export { Context, Provider };
