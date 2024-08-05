import createDataContext from "./createDataContext";

type BlogPost = {
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

const randNum = (min: number, max: number) => {
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
    case "add_blog":
      return [
        ...state,
        {
          name: randString(fakeNames),
          age: randNum(30, 60),
          role: randString(roles),
          id: randNum(1, 9999),
        },
      ];
    default:
      return state;
  }
};

const addBlog = (dispatch: React.Dispatch<any>) => {
  return () => {
    dispatch({ type: "add_blog" });
  };
};

const { Context, Provider } = createDataContext(blogReducer, { addBlog }, []);

export { Context, Provider };
