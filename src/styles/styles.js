import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

export const COLORS = {
  primary: '#6a453b', // Coklat Tua
  secondary: '#ceaa7a', // Coklat Muda
  background: '#e9e2ce', // Krem
  accent1: '#7399bd', // Biru Muda
  accent2: '#1c477f', // Biru Tua
  white: '#FFFFFF',
  gray: '#A9A9A9',
};

export const FONTS = {
  regular: 'Urbanist-Regular',
  bold: 'Urbanist-Bold',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  logo: {
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Urbanist-Regular',
    fontSize: 20,
    color: '#21262E',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    fontFamily: 'Urbanist-Bold',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#21262E',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  passwordInput: {
    fontFamily: 'Urbanist-Bold',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    padding: 15,
    paddingRight: 50,
    fontSize: 16,
    color: '#21262E',
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
    padding: 5,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Urbanist-Bold',
    color: COLORS.white,
    fontSize: 16,
  },
  dividerText: {
    fontFamily: 'Urbanist-Regular',
    color: '#95A5A6',
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 15,
    borderRadius: 20,
  },
  socialButtonText: {
    fontFamily: 'Urbanist-Bold',
    color: '#21262E',
    fontSize: 16,
    marginLeft: 10,
  },
  linkText: {
    fontFamily: 'Urbanist-Regular',
    marginTop: 25,
    color: '#21262E',
    textAlign: 'center',
  },
  linkBold: {
    fontFamily: 'Urbanist-Bold',
    color: '#1c477f',
  },
  icon: {
    height: 24,
    width: 24,
  },
  linedivider: { flex: 1, height: 1, backgroundColor: '#95A5A6' },
});
export default styles;
