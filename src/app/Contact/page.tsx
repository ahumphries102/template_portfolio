import React from "react"

export default function ContactForm() {
  return (
    <>
      <section className="flex items-center justify-center h-[800px] text-black">
        <div className="bg-white shadow-2xl p-8 w-full max-w-lg h-auto min-h-[500px]">
          <h1 className="text-3xl font-bold text-center mb-5">Say Hello</h1>

          <form action="#" method="POST" className="space-y-6">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="bg-white border-b border-b-black -lg p-3 transition"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-medium-300">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="bg-white-700 border-b -lg p-3 transition"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="subject" className="text-sm font-medium-300">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject_line"
                className="bg-white-700 border-b border-b-white-600 -lg p-3 transition"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="message" className="text-sm font-medium-300">
                Message:
              </label>
              <textarea
                id="message"
                name="user_message"
                required
                rows={5}
                className="bg-white-700 border p-3 resize-none transition"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="
            text-xl
            cursor-pointer 
            relative
            pb-1
            **group** /* FIX: Marks this element as the hover group */
        "
              >
                Send Message
                <span
                  className="
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-0.5 
                bg-black 
                transform   
                scale-x-0      
                
                transition 
                duration-300
                ease-out
                
                group-hover:scale-x-100
                origin-left 
            "
                />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
