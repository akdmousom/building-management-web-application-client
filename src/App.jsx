import { Outlet } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout/MainLayout"

function App() {


  return (
    <>
      <MainLayout>
        <Outlet/>
        
      </MainLayout>
    </>
  )
}

export default App
