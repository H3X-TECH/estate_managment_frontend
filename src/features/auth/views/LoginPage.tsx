import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-2xl font-semibold mb-6">Welcome back!</h4>
        <LoginForm />
      </div>
    </div>
  );
}
