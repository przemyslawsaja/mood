import { hexWithAlpha } from "@/utils/styles";
import styled from "styled-components";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  defaultSignInFormValues,
  SIGN_IN_FORM_FIELDS,
  SignInForm,
  signInSchema,
} from "../../sign-in/constants";
import { useRouter } from "next/navigation";
import { RoutePath } from "@/constants/routing";
import { Loader } from "@/components/loader";
import { useLoader } from "@/hooks/use-loader";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { apiSignIn, SignInPayload } from "@/api/auth";

const SInnerContainer = styled.div`
  background: ${({ theme }) => hexWithAlpha(theme.COLOR.NIGHTFALL_300, 50)};
  backdrop-filter: blur(2rem);
  border: ${({ theme }) => `0.5px solid ${theme.COLOR.PRIMARY_300}`};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  width: 30rem;
  position: relative;
  margin-bottom: 2rem;
  padding: 2rem;
`;

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid
    ${({ theme }) => hexWithAlpha(theme.COLOR.PRIMARY_300, 50)};
`;

const SPrimary = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_300};
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHEST};
  padding-top: 2rem;
`;

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
`;

const SLink = styled(Link)`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.COLOR.PRIMARY_100};
  font-size: ${({ theme }) => theme.FONT.SIZE.SM};
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  align-self: center;
`;

export const AuthForm = () => {
  const { push } = useRouter();
  const { isLoading, stopLoading, startLoading } = useLoader();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<SignInForm>({
    resolver: signInSchema,
    defaultValues: defaultSignInFormValues,
  });

  const onSubmit = async (form: SignInForm) => {
    try {
      startLoading();
      await signIn("credentials", { ...form, redirect: false });
      toast.success("Success! You're in. Welcome back!");
      push(RoutePath.DASHBOARD);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <Loader
        isLoading={isLoading}
        message={"Signing you in... Just a moment"}
      />
      <SInnerContainer>
        <SContent>
          <SHeader>
            <SDescription>
              Welcome back to <SPrimary>Mood!</SPrimary> Log in to access your
              mindful haven, where focus and serenity await.
            </SDescription>
          </SHeader>
        </SContent>
        <SForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={"Email"}
            control={control}
            name={SIGN_IN_FORM_FIELDS.EMAIL}
            error={errors[SIGN_IN_FORM_FIELDS.EMAIL]}
          />
          <Input
            label={"Password"}
            control={control}
            type="password"
            name={SIGN_IN_FORM_FIELDS.PASSWORD}
            error={errors[SIGN_IN_FORM_FIELDS.PASSWORD]}
          />
          <Button type="submit">Sign in</Button>
          <SLink href="#">Don’t have account yet ? Sing up</SLink>
        </SForm>
      </SInnerContainer>
    </>
  );
};
