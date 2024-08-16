import { Button } from "@nextui-org/button";
import InputPWStyled, { InputUsrStyled } from "../component/InputStyled";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const SignInSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(8),
});

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  const navigate = useNavigate();

  const loginUser = (data) => {
    if (
      data.username === "username" &&
      data.password === "bismillahirrahmanirrahim"
    ) {
      navigate("/example");
    } else {
      alert("Login Gagal");
    }
  };

  return (
    <div className="flex bg-base-200 items-center justify-center h-[93vh]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-title prose flex flex-col justify-start items-start pl-6 pt-5">
          <h2 className="mb-[-3px]">Login</h2>
          <p>Sign In to your account</p>
        </div>
        <div className="divider mb-[-5px] mt-0"></div>
        <div className="card-body p-4">
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(loginUser)}
          >
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <InputUsrStyled
                  field={field}
                  isInvalid={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <InputPWStyled
                  field={field}
                  isInvalid={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <Button type="submit" color="primary">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
