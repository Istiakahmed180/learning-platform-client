import React from "react";

const Blog = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase ">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              <span className="text-[#19C2A3] font-bold">Question No 01: </span>
              what is `cors`?
            </summary>
            <div className="px-4 pb-4">
              <p>
                As you've possibly already come across by now, CORS is an
                acronym for Cross-Origin Resource Sharing, but what does that
                actually mean? What is CORS? Well, if we go by the Wikipedia
                definition, "[CORS] is a mechanism that allows restricted
                resources on a web page to be requested from another domain
                outside the domain from which the first resource was served,"
                then you'd be forgiven if you were more confused than before
                you'd read that sentence.
                <br />
                <br />
                Before we get into defining CORS, it's best to know what came
                before, as it still defines the default behavior and is probably
                why you're reading this now. This precursor to CORS was called
                the "Same-Origin" policy. In short, it dictates that when your
                browser loads a script (like a button handler, or some async
                widget) from a particular (sub)domain that the script can only
                make requests to the (sub)domain that it originated from.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              <span className="text-[#19C2A3] font-bold">Question No 02: </span>
              Why are you using `firebase`? What other options do you have to
              implement authentication?
            </summary>
            <div className="px-4 pb-4">
              <p>
                <span className="text-[#19C2A3] ">
                  Easy sign-in with any platform:-
                </span>
                <br />
                Firebase Authentication aims to make building secure
                authentication systems easy, while improving the sign-in and
                onboarding experience for end users. It provides an end-to-end
                identity solution, supporting email and password accounts, phone
                auth, and Google, Twitter, Facebook, and GitHub login, and more.
                <br />
                <br />
                <span className="text-[#19C2A3] ">
                  Different ways to Authenticate a Web Application:-
                </span>
                <li>Cookie-Based authentication</li>
                <li>Token-Based authentication</li>
                <li>Third party access(OAuth, API-token)</li>
                <li>OpenId</li>
                <li>SAML</li>
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              <span className="text-[#19C2A3] font-bold">Question No 03: </span>
              How does the private route work?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Private Routes in React Router (also called Protected Routes)
                require a user being authorized to visit a route (read: page).
                So if a user is not authorized for a specific page, they cannot
                access it. The most common example is authentication in a React
                application where a user can only access the protected pages
                when they are authorized (which means in this case being
                authenticated). Authorization goes beyond authentication though.
                For example, a user can also have roles and permissions which
                give a user access to specific areas of the application.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              <span className="text-[#19C2A3] font-bold">Question No 04: </span>
              What is Node? How does Node work?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                <span className="text-[#19C2A3] ">What is Node:-</span>
                <br />
                Learn about Node.js, a JavaScript runtime for building
                server-side or desktop applications.
                <br />
                <br />
                <span className="text-[#19C2A3] ">
                  Explain the working of Node.js:-
                </span>
                <br />
                Working of Node.js: Node.js accepts the request from the clients
                and sends the response, while working with the request node.js
                handles them with a single thread. To operate I/O operations or
                requests node.js use the concept of threads. Thread is a
                sequence of instructions that the server needs to perform. It
                runs parallel on the server to provide the information to
                multiple clients. Node.js is an event loop single-threaded
                language. It can handle concurrent requests with a single thread
                without blocking it for one request.
                <br />
                Node.js basically works on two concept
                <br />
                <li>Asynchronous</li>
                <li>Non-blocking I/O</li>
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
