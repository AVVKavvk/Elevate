import HomeC from "./Home";
import DataProvider from "../context/DataProvide";
function App() {
  return (
    <div >
      <DataProvider>
        <HomeC />
      </DataProvider>
    </div>
  );
}

export default App;