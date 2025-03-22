// import AddNote from "./AddNote";
import Notes from "./Notes";

//context is likely an object that contains both the current state (notes) and a function (setNotes) to modify that state.
//The useContext hook retrieves this object from the noteContext, making notes and setNotes available in the component where this code is used.

const Home = () => {

  return (
    <>
      
      <Notes/>
    </>
  );
};
  
export default Home;
