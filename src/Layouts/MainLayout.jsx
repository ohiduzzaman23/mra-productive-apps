import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Navbar */}
      <Navbar />

      {/* Loading Spinner */}
      {isLoading && <LoadingSpinner />}

      {/* Main Content — পেজ নিজে তার কন্টেইনার সেট করবে */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
