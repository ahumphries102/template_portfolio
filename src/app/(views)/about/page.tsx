import PhoneInput from "./phoneInput"
export default function page() {
  return (
    <>
      <section className="h-screen bg-[url(https://cdn.prod.website-files.com/640823aed7c2f9caf4efb803/66cbe57e3e1eb259fbf4434e_NWC-MAR24-0070-web.JPG)] bg-cover sepia-60">
        <section className="h-screen flex justify-center items-center">
          <div className="card bg-base-100 w-96 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Schedule a Tasting</h2>
              <form>
                <label className="input">
                  <input
                    type="text"
                    className="grow"
                    placeholder="First & Last name"
                  />
                </label>
                <div className="my-4">
                  <h2>When would you like to visit?</h2>
                  <input type="datetime-local" className="input" />
                </div>
                <PhoneInput />
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Submit</div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
