import { makeRedirectUri, startAsync } from 'expo-auth-session';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './LoginScreen.styles';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import LeftArrowIcon from '../../assets/icons/LeftArrowIcon';
import Button from '../../components/Button/Button';
import IconBox from '../../components/IconBox/IconBox';
import Input from '../../components/Input/Input';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import PrimaryParagraph from '../../components/PrimaryParagraph/PrimaryParagraph';
import { emailRegex } from '../../constants';
import { supabase, supabaseUrl } from '../../supabaseClient';
import { ILoginFormValues } from '../../types/FormsTypes';

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(true);

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  const onSubmit = async ({ email, password }: ILoginFormValues) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
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

  useEffect(() => {
    const { email, password } = watch();
    if (email && password) {
      setIsSubmitButtonDisabled(false);
    } else {
      setIsSubmitButtonDisabled(true);
    }
  }, [watch('email'), watch('password')]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.loginScreenWrapper}>
      <SafeAreaView>
        <Link href="/">
          <IconBox>
            <LeftArrowIcon />
          </IconBox>
        </Link>
        <PrimaryHeader text="Witaj ponownie!" />
        <PrimaryParagraph text="Zaloguj się by przejść do aplikacji" />
        <View style={styles.inputsWrapper}>
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
        </View>
        <Button
          text="Dalej"
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitButtonDisabled}
          isLoading={isLoading}
        />
        <Text style={{ ...styles.or, fontFamily: 'DM Sans 400' }}>lub</Text>
        <Button
          text="Kontynuuj z Google"
          onPress={handleSignInWithGoogle}
          icon={GoogleIcon}
          secondary
        />
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
