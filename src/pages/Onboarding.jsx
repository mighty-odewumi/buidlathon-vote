/* eslint-disable react/prop-types */
import { Form, Link } from "react-router-dom";
import email from "../assets/image1.svg";
import password from "../assets/image2.svg";
import name from "../assets/image3.svg";

export default function Onboarding({ errors, navigation, queryString, pathname }) {

  return (
    <>
      <div className="font-inter p-6 md:w-96 md:m-auto">
        

        <h1 className="font-bold text-2xl mb-8 mt-10">
          {
            pathname === "/signin" 
              ? "Login"
              : "Register"
          }
        </h1>

        {(queryString) 
          && <h3 className="mt-4 mb-4 text-xl text-red-800">
            {queryString}
          </h3>
        }

        <Form method="post" replace>
          <div className="relative mb-4">
            <img 
              src={email} 
              alt="email icon" 
              className="w-4 absolute top-3 left-3"
            />
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email"
              className="bg-gray-100 w-full  py-2 px-9 rounded-md"
            />

            {
              errors?.email 
                && <span className="text-sm ">{errors.email}</span>
            }
          </div>
          
          <div className="relative mb-4">
            <img 
              src={password} 
              alt="password icon" 
              className="w-4 absolute top-3 left-3"
            />
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password"
              className="bg-gray-100 w-full py-2 px-9 rounded-md"
            />
            {
              errors?.password 
                && <span className="text-sm ">{errors.password}</span>
            }
          </div>

          <div className="relative mb-4">
            <img 
              src={name} 
              alt="name icon" 
              className="w-4 absolute top-3 left-3"
            />
            <input 
              type="name" 
              name="name" 
              id="name" 
              placeholder="Your name"
              className="bg-gray-100 w-full py-2 px-9 rounded-md"
            />
            {
              errors?.name 
                && <span className="text-sm ">{errors.name}</span>
            }
          </div>

          <button 
            className="rounded-md bg-blue-500 text-white py-2 px-4 w-full mb-4 hover:bg-bluegradient transition-all"
            disabled={navigation.state === "submitting"}
          >
            {pathname === "/signin" 
              ? (navigation.state === "submitting" 
                  ? "Signing in..."
                  : "Sign in"
                )
              : (navigation.state === "submitting"
                  ? "Signing up..."
                  : "Sign up"
                )
            }
          
          </button>

          {
            errors?.firebaseErr 
              && <span className="text-red-800 text-xl mb-2 block">{errors.firebaseErr}</span>
          }
        </Form>

        <p className="text-center">
          {
            pathname === "/signin" 
              ? (
                  <>
                    <span>
                      Don&apos;t have an account?
                    </span>  
                    
                    <Link 
                      to="/signup"
                      className="text-bluegradient "
                    >
                      &nbsp;Sign up
                    </Link>  
                  </>
                )

              : (
                  <>
                    <span>Already have an account?</span> 
                    <Link 
                      to="/signin"
                      className="text-bluegradient "
                    >
                    &nbsp;Log in
                    </Link>
                  </>
                )
          }
        </p>
      </div>
    </>
  )
}

