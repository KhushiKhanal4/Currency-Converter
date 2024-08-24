import DropdownComponent from "./components/DropdownComponent";
import { MdSwapVert } from "react-icons/md";


function App() {
  return (
    <>
      <div
        className="fontFamily-poppins w-full h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("night.jpg")`, opacity: 0.7 }}
      >
        <div className="flex justify-center justify-items-center items-center h-full">

          <div className="max-w-xl bg-[#0207287f] p-5 border rounded-xl shadow-md shadow-gray-500">

            <h1 className="text-xl text-center font-semibold text-white">
              Currency Converter
            </h1>

            <div className="flex flex-col gap-3">

              <div>
                <h3 className="text-lg text-white font-semibold tracking-wider py-2 ">From:</h3>

                <DropdownComponent />

              </div>

              <button className="bg-white rounded-md max-w-8 p-1 border-white border shadow-md shadow-white opacity-65 flex justify-self-center mt-3 mx-auto">

                <MdSwapVert className="text-2xl" />

              </button>
               
              <div>

                <h3 className="text-lg text-white font-semibold tracking-wider py-2">To:</h3>

                <DropdownComponent />

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default App;
