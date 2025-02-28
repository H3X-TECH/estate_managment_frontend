import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="py-4 mt-2 bg-neutral-100 border rounded-xl backdrop-blur-md px-4 flex items-center justify-between">
        <h4 className="text-xl italic font-semibold tracking-wider">
          EasyRent
        </h4>
        <div>
          <StyledButton>Login/SignUp</StyledButton>
        </div>
      </header> */}
      <main className="flex-grow flex items-center p-2 h-[100dvh] relative">
        <h6 className="fixed top-8 left-8 italic text-xl font-medium">
          eainsharmal.com
        </h6>
        <section className="basis-3/6 h-full hero-pattern-one rounded-xl flex flex-col items-center justify-center">
          <h5 className="text-5xl banner-font">Find Your Perfect Place</h5>
          <h5 className="text-5xl banner-font">With Us.</h5>
        </section>
        <section className="basis-3/6 rounded-bl-3xl h-full bg-white">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AuthLayout;
