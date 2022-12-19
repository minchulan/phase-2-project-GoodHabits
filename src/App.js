import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import DrugPage from "./DrugPage";
import NavBar from "./NavBar";
import Search from "./Search";
import DrugForm from "./DrugForm";

function App() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/drugs")
      .then((r) => r.json())
      .then((drugs) => setDrugs(drugs));
  }, []);

  const handleDeleteDrug = (id) => {
    const updatedDrugs = drugs.filter((drug) => drug.id !== id);
    setDrugs(updatedDrugs);
  };

  function handleAddNewDrug(drug) {
    setDrugs([...drugs, drug]);
  }

  return (
    <main className="App">
      <NavBar />
      <Header />
      <Switch>
        <Route exact path="/">
          <DrugPage
            drugs={drugs}
            onAddNewDrug={handleAddNewDrug}
            onDeleteDrug={handleDeleteDrug}
          />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
        <Route path="/new-drug">
          <DrugForm />
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
