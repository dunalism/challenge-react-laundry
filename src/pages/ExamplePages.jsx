import { Link } from "react-router-dom";

export default function ExamplePages() {
  return (
    <div className="flex justify-center items-center flex-col  bg-base-200 h-screen">
      <div className="prose text-center">
        <h1>Bismillah Welcome!</h1>
        <h2>ini homepage</h2>
        <div className="flex justify-center items-center gap-5">
          <Link to="/auth/sign-in">ke halaman login</Link>
          <Link to="/dashboard">ke halaman dashboard</Link>
        </div>
      </div>
    </div>
  );
}
