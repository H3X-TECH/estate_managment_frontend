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
      <main className="flex-grow flex items-center h-[100dvh]">
        <section className="basis-2/5 h-full hero-pattern-one rounded-tr-3xl flex flex-col items-center justify-center">
          <h5 className="text-4xl">Find Your Perfect Place</h5>
          <h5 className="text-4xl">With Us.</h5>
        </section>
        <section className="basis-3/5 rounded-bl-3xl h-full bg-white">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AuthLayout;
