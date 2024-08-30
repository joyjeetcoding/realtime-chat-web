import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  console.log(userName);
  console.log(password);

  return (
    <div className="text-white flex flex-col items-center justify-center relative h-screen w-full">
      <div className="absolute top-1/2 -translate-x-1/2 -translate-y-[100%] md:-translate-y-1/2 left-1/2 flex justify-center items-center flex-col backdrop-filter backdrop-blur-lg bg-opacity-0 p-4 rounded-2xl">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login 
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </label>

            {/* <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            /> */}
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </label>

            {/* <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> */}
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account ?
          </Link>

          <div>
            <button disabled={loading} className="btn btn-block btn-sm mt-2">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-[8%] backdrop-filter backdrop-blur-lg bg-opacity-0 px-5 text-center">
        <p className="py-4">If you don't want to Sign Up, you can use Username: "deadpool" and password: "12345678"</p>
        
        <a href="https://drive.google.com/file/d/15nYaCe0G7WPQ9xU8LmgDZD5qwCImf3Rh/view?usp=sharing" target="_blank">
          <p className="md:text-xl font-extrabold hover:text-yellow-500">Click Here To see a quick Demo</p>
        </a>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR THIS FILE
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500">ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text" Username>
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Don't have an account ?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
