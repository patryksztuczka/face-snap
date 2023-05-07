import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { makeRedirectUri, startAsync } from 'expo-auth-session';

import { signUpScreenStyles } from './SignUpScreen.styles';
import IconBox from '../../components/IconBox/IconBox';
import LeftArrowIcon from '../../assets/icons/LeftArrowIcon';
import Input from '../../components/Input/Input';
import PolicyCheckbox from '../../components/PolicyCheckbox/PolicyCheckbox';
import { ISignUpFormValues } from '../../types/FormsTypes';
import { supabase, supabaseUrl } from '../../supabaseClient';

const SignUpScreen = () => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
  });
  const { auth } = supabase;

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={signUpScreenStyles.signUpScreenWrapper}>
      <Link href="/">
        <IconBox>
          <LeftArrowIcon />
        </IconBox>
      </Link>
      <Text style={{ ...signUpScreenStyles.title, fontFamily: 'DM Sans 500' }}>Rejestracja</Text>
      <Text style={{ ...signUpScreenStyles.paragraph, fontFamily: 'DM Sans 400' }}>
        Podaj swój adres e-mail by założyć konto w Lorem Ipsum.
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
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              type="text"
              placeholder="Wpisz swój adres e-mail..."
              value={value}
              onChange={onChange}
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
            <Input type="password" placeholder="Wpisz hasło..." value={value} onChange={onChange} />
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
            />
          )}
        />
      </View>
      <PolicyCheckbox />
      <Button title="Zarejstruj się" onPress={handleSubmit(onSubmit)} />
      <Button title="google" onPress={handleSignInWithGoogle} />
    </View>
  );
};

export default SignUpScreen;
