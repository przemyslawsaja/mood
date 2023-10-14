import {hexWithAlpha} from '@/utils/styles';
import styled from 'styled-components';
import {Input} from '@/components/input';
import {Button} from '@/components/button';
import Link from 'next/link';
import {useForm, FieldError} from 'react-hook-form';
import {useRouter} from 'next/navigation';
import {RoutePath} from '@/constants/routing';
import {Loader} from '@/components/loader';
import {useLoader} from '@/hooks/use-loader';
import {signIn} from 'next-auth/react';
import {toast} from 'react-hot-toast';
import {
    AUTH_FORM_FIELDS,
    defaultSignInFormValues, defaultSignUpFormValues,
    SignInForm,
    signInSchema, SignUpForm, signUpSchema,
} from '../../sign-in/constants';
import {apiSignUp} from "@/api/auth";

const SInnerContainer = styled.div`
  background: ${({theme}) => hexWithAlpha(theme.COLOR.NIGHTFALL_300, 50)};
  backdrop-filter: blur(2rem);
  border: ${({theme}) => `0.5px solid ${theme.COLOR.PRIMARY_300}`};
  border-radius: ${({theme}) => theme.BORDER_RADIUS.XL};
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
  border-bottom: 1px solid ${({theme}) => hexWithAlpha(theme.COLOR.PRIMARY_300, 50)};
`;

const SPrimary = styled.span`
  color: ${({theme}) => theme.COLOR.PRIMARY_300};
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: ${({theme}) => theme.Z_INDEX.HIGHEST};
  padding-top: 2rem;
`;

const SDescription = styled.div`
  color: ${({theme}) => theme.COLOR.GRAY_400};
`;

const SLink = styled(Link)`
  margin-top: 0.5rem;
  color: ${({theme}) => theme.COLOR.PRIMARY_100};
  font-size: ${({theme}) => theme.FONT.SIZE.SM};
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  align-self: center;
`;

const SLastInput = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

type Props = {
    register?: boolean
}

export function AuthForm({register}: Props) {
    const { push } = useRouter();
    const { isLoading, stopLoading, startLoading } = useLoader();

    const {
        formState: {errors: signUpError},
        control: signUpControl,
        handleSubmit: signUpHandleSubmit,
    } = useForm<SignUpForm>({
        resolver: signUpSchema,
        defaultValues: defaultSignUpFormValues,
    });

    const {
        formState: {errors: signInErrors},
        control: signInControl,
        handleSubmit: signInHandleSubmit,
    } = useForm<SignInForm>({
        resolver: signInSchema,
        defaultValues: defaultSignInFormValues,
    });

    const control = register ? signUpControl : signInControl;
    const handleSubmit = register ? signUpHandleSubmit : signInHandleSubmit;
    const errors = register ? (signUpError as Record<AUTH_FORM_FIELDS, FieldError>) : (signInErrors as Record<AUTH_FORM_FIELDS, FieldError>);

    const onSubmit = async (form: SignInForm | SignUpForm) => {
        try {
            startLoading();
            if(register){
                await apiSignUp({...form as SignUpForm});
            }
            await signIn('credentials', {...form, redirect: false});
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
                message="Signing you in... Just a moment"
            />
            <SInnerContainer>
                <SContent>
                    <SHeader>
                        <SDescription>
                            Welcome back to
                            {' '}
                            <SPrimary>Mood!</SPrimary>
                            {' '}
                            Log in to access your
                            mindful haven, where focus and serenity await.
                        </SDescription>
                    </SHeader>
                </SContent>
                <SForm onSubmit={handleSubmit(onSubmit)}>
                        {register && <Input
                            label="Name"
                            control={control}
                            name={AUTH_FORM_FIELDS.NAME}
                            error={errors[AUTH_FORM_FIELDS.NAME]}
                        />}
                        <Input
                            label="Email"
                            control={control}
                            name={AUTH_FORM_FIELDS.EMAIL}
                            error={errors[AUTH_FORM_FIELDS.EMAIL]}
                        />
                        <SLastInput>
                            <Input
                                label="Password"
                                control={control}
                                type="password"
                                name={AUTH_FORM_FIELDS.PASSWORD}
                                error={errors[AUTH_FORM_FIELDS.PASSWORD]}
                            />
                            {register && <Input
                                label="Repeat password"
                                control={control}
                                type="password"
                                name={AUTH_FORM_FIELDS.REPEAT_PASSWORD}
                                error={errors[AUTH_FORM_FIELDS.REPEAT_PASSWORD]}
                            />}
                        </SLastInput>
                    <Button type={'submit'}>{register ? 'Sign up' : 'Sign in'}</Button>
                    {register ? <SLink href={RoutePath.SIGN_IN}>
                        Already have an account ? Sing in
                    </SLink> : <SLink href={RoutePath.SIGN_UP}>
                        Don’t have account yet ? Sing up
                    </SLink>}
                </SForm>
            </SInnerContainer>
        </>
    );
}
