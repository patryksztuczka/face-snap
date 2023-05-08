import { Text, View, Image, SafeAreaView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

import { styles } from './WelcomeScreen.styles';
import Button from '../../components/Button/Button';

const WelcomeScreen = () => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  const router = useRouter();

  const handleNavigateToSignUp = () => {
    router.push('signup');
  };

  const handleNavigateToLogIn = () => {
    router.push('login');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.welcomePageWrapper}>
      <ImageBackground source={require('../../assets/images/background.png')} style={styles.image}>
        <SafeAreaView>
          <View style={styles.logoWrapper}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          </View>
          <Text style={{ ...styles.policyText, fontFamily: 'DM Sans 400' }}>
            Przechodząc dalej akceptujesz <Text style={styles.link}>regulamin</Text> i{' '}
            <Text style={styles.link}>politykę prywatności</Text>.
          </Text>
          <View style={styles.buttonsWrapper}>
            <Button text="Dołącz do aplikacji" onPress={handleNavigateToSignUp} />
            <Button text="Zaloguj się" onPress={handleNavigateToLogIn} secondary />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
