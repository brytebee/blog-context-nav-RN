import React, { ReactNode, useReducer } from "react";

// Define the type for the blog post
type BlogPost = {
  name: string;
  age: number;
  role: string;
};

// Define the type for the context value
type BlogContextType = {
  blogPosts: BlogPost[];
  addBlog: () => void;
};

// Create the context with a default value
const BlogContext = React.createContext<BlogContextType>({
  blogPosts: [],
  addBlog: () => {},
});

// Define the type for the BlogProvider's props
interface BlogProviderProps {
  children: ReactNode;
}

// Define the type for the actions
type Action = { type: "add_blog" };

const blogReducer = (state: BlogPost[], action: Action): BlogPost[] => {
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

  switch (action.type) {
    case "add_blog": {
      return [
        ...state,
        {
          name: randString(fakeNames),
          age: randNum(30, 60),
          role: randString(roles),
        },
      ];
    }
    default:
      return state;
  }
};

// Create the BlogProvider component
export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlog = () => {
    dispatch({ type: "add_blog" });
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
