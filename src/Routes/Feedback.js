import React from "react";

function Feedback() {
  
  const customLink = "riheku";

  // Construct the URL
  const url = `https://formsubmit.co/el/${customLink}/?subject=feedback&next=https://elevate-6j1w.onrender.com/#`;
  return (
    <div
      style={{
        boxShadow:
          "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
      }}
      className="max-w-[500px] min-w-[310px] text-gray-600 mx-auto rounded-md  md:text-lg  flex flex-col max-h-[500px] mb-6 py-3 min-h-[300px] gap-4 border justify-center  items-center text-justify m-6 px-4 "
    >
      <p >
        Your insights matter at 'Elevate.' Our platform is committed to
        elevating your college experience by providing access to a wealth of
        resources. Your feedback is instrumental in helping us raise the
        standards and ensure 'Elevate' remains your go-to destination for
        academic support and networking. Share your thoughts, ideas, and
        suggestions as we work together to make 'Elevate' an even more
        exceptional platform. Thank you for being a valued part of our
        community.
      </p>
      <a href={url} class="bg-green-400 px-3 font-bold py-2 rounded-md  text-xl">Email us</a>
    </div>
  );
}

export default Feedback;
