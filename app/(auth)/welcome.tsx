import { Button, SafeAreaView, Text, View } from 'react-native';
import { Link } from 'expo-router';

const WelcomePage = () => {
  return (
    <View>
      <Text>Welcome Page</Text>
      <Link href="login" asChild>
        <Button title="Log in" />
      </Link>
      <Link href="signup" asChild>
        <Button title="Sign up" />
      </Link>
      <Link href="/" asChild>
        <Button title="home" />
      </Link>
    </View>
  );
};

export default WelcomePage;
