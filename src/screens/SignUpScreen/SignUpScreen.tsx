import { useState, useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Link, useRouter } from 'expo-router';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { makeRedirectUri, startAsync } from 'expo-auth-session';

import { signUpScreenStyles } from './SignUpScreen.styles';
import { ISignUpFormValues } from '../../types/FormsTypes';
import { supabase, supabaseUrl } from '../../supabaseClient';
import { emailRegex } from '../../constants';
import IconBox from '../../components/IconBox/IconBox';
import LeftArrowIcon from '../../assets/icons/LeftArrowIcon';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const SignUpScreen = () => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
  });

  const router = useRouter();

  const { auth } = supabase;

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [isPasswordDifferent, setIsPasswordDifferent] = useState(false);

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormValues>();

  const onSubmit: SubmitHandler<ISignUpFormValues> = async ({
    email,
    password,
    confirmPassword,
  }) => {
    try {
      if (password !== confirmPassword) return;
      setIsLoading(true);
      const { data, error } = await auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      router.push('login');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    const redirectUrl = makeRedirectUri({
      path: '/auth/callback',
    });

    const authResponse = await startAsync({
      authUrl: `${supabaseUrl}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`,
      returnUrl: redirectUrl,
    });

    if (authResponse.type === 'success') {
      supabase.auth.setSession({
        access_token: authResponse.params.access_token,
        refresh_token: authResponse.params.refresh_token,
      });
    }
  };

  useEffect(() => {
    const { email, password, confirmPassword } = watch();

    if (email && password && confirmPassword) {
      setIsSubmitButtonDisabled(false);
    } else {
      setIsSubmitButtonDisabled(true);
    }

    if (password !== confirmPassword) {
      setIsPasswordDifferent(true);
      setIsSubmitButtonDisabled(true);
    } else {
      setIsPasswordDifferent(false);
    }
  }, [watch('email'), watch('password'), watch('confirmPassword')]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={signUpScreenStyles.signUpScreenWrapper}>
        <Link href="/">
          <IconBox>
            <LeftArrowIcon />
          </IconBox>
        </Link>
        <Text style={{ ...signUpScreenStyles.title, fontFamily: 'DM Sans 500' }}>Rejestracja</Text>
        <Text style={{ ...signUpScreenStyles.paragraph, fontFamily: 'DM Sans 400' }}>
          Utwórz konto i zacznij korzystać z aplikacji.
        </Text>
        <View style={signUpScreenStyles.inputsWrapper}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: {
                value: true,
                message: 'Pole wymagane',
              },
              pattern: {
                value: emailRegex,
                message: 'Podany adres e-mail jest niepoprawny.',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                placeholder="Wpisz swój adres e-mail..."
                value={value}
                onChange={onChange}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: {
                value: true,
                message: 'Pole wymagane',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                placeholder="Wpisz hasło..."
                value={value}
                onChange={onChange}
                error={errors.password?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: {
                value: true,
                message: 'Pole wymagane',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                placeholder="Powtórz hasło..."
                value={value}
                onChange={onChange}
                error={errors.confirmPassword?.message}
              />
            )}
          />
          {isPasswordDifferent && <ErrorMessage error="Podane hasła różnią się od siebie." />}
        </View>
        <Text style={{ ...signUpScreenStyles.policyText, fontFamily: 'DM Sans 400' }}>
          Przechodząc dalej akceptujesz <Text style={signUpScreenStyles.link}>regulamin</Text> i{' '}
          <Text style={signUpScreenStyles.link}>politykę prywatności</Text>.
        </Text>
        <Button
          text="Dalej"
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitButtonDisabled}
          isLoading={isLoading}
        />
        <Text style={{ ...signUpScreenStyles.or, fontFamily: 'DM Sans 400' }}>lub</Text>
        <Button
          text="Kontynuuj z Google"
          onPress={handleSignInWithGoogle}
          icon={GoogleIcon}
          secondary
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
