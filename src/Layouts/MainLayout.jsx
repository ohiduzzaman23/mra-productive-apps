import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar />

      {isLoading && <LoadingSpinner />}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
