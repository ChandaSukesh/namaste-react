/**********************
 * ************
 * For simple h1 tag to render on browser using REACT
 * ************
 **********************/

// first argument is tag name
// here second argument is the (attributes) properties of the object.
// That could be className or stylings objects to tag wih we provide in first argument.
//third argument is the children

// const heading = React.createElement(
//   "h1",
//   //   { id: "heading", style: { color: "red" } },
//   { id: "heading" },
//   "Hello World from React!"
// );
// at the time here heading variable is an just javascript object(React element). i.e ...,
// ReactElement(object) = >HTML (Browser understands), render will do this

// console.log(heading); // it is an object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// the job of render here is to take heading as an object and create h1 tag which browser understands and keep inside root.
// while it render onto the DOM that time this heading object is converted into h1 tag.
// root.render(heading);

/**********************
 * ************
 * For complex structure like nested div to render on browser using REACT
 * ************
 **********************/

// example
/***********
 <div id="parent">
  <div id="child">
    <h1>Im an h1 tag</h1>
    <h2>Im and h2 tag</h2>
  </div>
</div>
 **********/

// here if we have siblings that is h1 and h2 are siblings to child div, so we need to place them in array. Example is down code
// episode 1
// If only one sibling is there then there is no need to keep in array. Example is above code.
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Im an h1 tag"),
//     React.createElement("h2", {}, "Im an h2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// episode 2
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Im an h1 tag"),
//     React.createElement("h2", {}, "Im an h2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// episode 3
// import React from "react";
// import ReactDOM from "react-dom/client";

// jsx example illustration
// const jsxHeading = <h1>This is JSX h1 tag</h1>;
// this jsxHeading object is same as object which we got when we created by using React.createElement
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// react element
// const title = <h1>Hello</h1>;
// const TitleFn = () => <h2>Bye!-Function</h2>;

// functional based component illustration
// const HeadingComp = () => {
//   return (
//     <div>
//       {/* wrapping react element inside component */}
//       {title}
//       {/* below three are same */}
//       <TitleFn />
//       <TitleFn></TitleFn>
//       {TitleFn()}

//       <h1>Sukesh-Functional based Component</h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComp />);

//episode 6

import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* based on route this below body component should be updated */}
      {/* <Body /> */}
      {/* outlet is used because in which page we are based on route then that children element would be called. */}
      <Outlet />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

const rootProvider = <RouterProvider router={appRouter} />;

root.render(rootProvider);
