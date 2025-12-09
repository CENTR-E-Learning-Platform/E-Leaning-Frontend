import { useCreateRoom } from "../Hooks/useCreateRoom";

const CreateRoom = () => {
    const {formik} = useCreateRoom();
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#2A2D34] text-[#F9FBFC] p-6 overflow-hidden">
      <div className="bg-[#393D44] p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Room</h2>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit} >
          {/* Start Time */}
          
          <div className="flex flex-col gap-1">
            <label className="text-sm">Start Time</label>
            <input
            name="StartTime"
            onChange={formik.handleChange}
            value={formik.values.StartTime.replace("AM" , "").replace("AM" , "")}
              type="datetime-local"
              className="p-2 rounded-md bg-[#2A2D34] text-[#F9FBFC] outline-none border border-transparent focus:border-green-400 transition w-[80%] mx-auto"
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Duration (Minutes)</label>
            <input
            name="DurationMinutes"
            onChange={formik.handleChange}
            value={formik.values.DurationMinutes}
              type="number"
              className="p-2 rounded-md bg-[#2A2D34] text-[#F9FBFC] outline-none border border-transparent focus:border-green-400 transition w-[80%] mx-auto"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Title</label>
            <input
            name="Title"
            onChange={formik.handleChange}
            value={formik.values.Title}
              type="text"
              className="p-2 rounded-md bg-[#2A2D34] text-[#F9FBFC] outline-none border border-transparent focus:border-green-400 transition w-[80%] mx-auto"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Description</label>
            <textarea
            name="Description"
            onChange={formik.handleChange}
            value={formik.values.Description}
              rows={3}
              className="p-2 rounded-md bg-[#2A2D34] text-[#F9FBFC] outline-none border border-transparent focus:border-green-400 transition w-[80%] mx-auto resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 cursor-pointer  bg-green-500 text-white py-2 rounded-md text-center font-medium hover:bg-green-600 transition w-[80%] mx-auto"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;