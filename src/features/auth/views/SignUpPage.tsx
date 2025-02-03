import SignUpForm from "../components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="max-w-[500px] px-4 py-8 w-8/12 rounded-md">
        <h4 className="text-2xl font-semibold">Let&apos;s get started!</h4>
        <h6 className="text-base text-content3-foreground mb-6">
          Create an account below to start your journey.
        </h6>
        <SignUpForm />
      </div>
    </div>
  );
}
