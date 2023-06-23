import { useRef } from "react";

function Job() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any submission logic here

    // Reset form fields
    formRef.current.reset();
    // Close the modal
    closeModal();

    // Display success alert
    window.alert("Submitted Successfully!");
  };

  const openModal = () => {
    // Show the modal
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    // Close the modal
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div name="job" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center text-red-800 font-[Poppins]">
          WE ARE HIRING!
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {/* First Card */}
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl hover:bg-yellow-400">
              <div className="card-body">
                <h2 className="card-title text-center py-8 text-3xl font-[Poppins]">
                  Programmer
                </h2>
                <p className="px-2 py-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quae, placeat. Quis explicabo distinctio sequi optio suscipit
                  vitae doloribus dolor labore fugit provident, dolore
                  reiciendis excepturi animi sunt voluptates vel ut repellendus
                  esse magnam numquam sint alias fuga aut aliquid? Vel.
                </p>
                <div className="card-actions justify-end">
                  <div className="flex justify-center">
                    <button
                      className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-8 rounded"
                      onClick={openModal}
                    >
                      Apply Now!
                    </button>
                  </div>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-center lg:modal-middle"
                  >
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="modal-box"
                    >
                      <div className="flex">
                        <div>
                          <h2 className="text-red-800 font-mono">
                            Qualification:
                          </h2>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                        </div>
                        <div className="ml-4">
                          <h2 className="text-red-800 font-mono">
                            Requirement:
                          </h2>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                          <p>
                            •Press ESC key or click the button below to close
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center">
                          <h2 className="text-red-800 font-mono">Benefits:</h2>
                          <p className="ml-4">•Paid Leave Benefit</p>
                          <p className="ml-4">
                            •Rice Allowance upon Regularization
                          </p>
                          <p className="ml-4">•Competitive Salary</p>
                          <p className="ml-4">
                            •SSS, Philhealth, Pag-ibig Benefits
                          </p>
                        </div>
                        <div className="flex items-center mt-4">
                          <textarea
                            className="border border-gray-300 rounded-lg px-2 py-1 h-40 w-full resize-none"
                            placeholder="Tell Me About Yourself..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center">
                        <h2 className="text-red-800 font-mono">Attachments:</h2>
                        <input type="file" className="ml-4" />
                      </div>
                      <div className="modal-action justify-end">
                        <button className="btn mr-4" onClick={closeModal}>
                          Close
                        </button>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card (Duplicate) */}
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl  hover:bg-yellow-400">
              <div className="card-body">
                <h2 className="card-title text-center py-8 text-3xl font-[Poppins]">
                  Training Officer
                </h2>
                <p className="px-2 py-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quae, placeat. Quis explicabo distinctio sequi optio suscipit
                  vitae doloribus dolor labore fugit provident, dolore
                  reiciendis excepturi animi sunt voluptates vel ut repellendus
                  esse magnam numquam sint alias fuga aut aliquid? Vel.
                </p>
                <div className="card-actions justify-end">
                  <div className="flex justify-center">
                    <button
                      className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-8 rounded"
                      onClick={openModal}
                    >
                      Apply Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl  hover:bg-yellow-400">
              <div className="card-body">
                <h2 className="card-title text-center py-8 text-3xl font-[Poppins]">
                  Training Officer
                </h2>
                <p className="px-2 py-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quae, placeat. Quis explicabo distinctio sequi optio suscipit
                  vitae doloribus dolor labore fugit provident, dolore
                  reiciendis excepturi animi sunt voluptates vel ut repellendus
                  esse magnam numquam sint alias fuga aut aliquid? Vel.
                </p>
                <div className="card-actions justify-end">
                  <div className="flex justify-center">
                    <button
                      className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-8"
                      onClick={openModal}
                    >
                      Apply Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl hover:bg-yellow-400">
              <div className="card-body">
                <h2 className="card-title text-center py-8 text-3xl font-[Poppins]">
                  Training Officer
                </h2>
                <p className="px-2 py-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quae, placeat. Quis explicabo distinctio sequi optio suscipit
                  vitae doloribus dolor labore fugit provident, dolore
                  reiciendis excepturi animi sunt voluptates vel ut repellendus
                  esse magnam numquam sint alias fuga aut aliquid? Vel.
                </p>
                <div className="card-actions justify-end">
                  <div className="flex justify-center">
                    <button
                      className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-8  rounded"
                      onClick={openModal}
                    >
                      Apply Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
