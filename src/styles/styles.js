import { StyleSheet } from 'react-native';

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
    height: 200,
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

  // Dashboard Styles
  NavMenuSafeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  dashboardContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    backgroundColor: COLORS.background,
    elevation: 1,
    marginBottom: 25,
    padding: 15,
    borderRadius: 10,
  },
  dashboardHeader: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  dashboardHeaderTitle: {
    fontFamily: FONTS.bold,
    fontSize: 28,
    color: COLORS.white,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBarWrapper: {
    backgroundColor: COLORS.white,
    borderTopEndRadius: 25,
    paddingHorizontal: 10,
    borderTopStartRadius: 25,
  },
  searchBarInput: {
    flex: 1,
    fontSize: 12,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
  headerButton: {
    padding: 8,
  },
  headerRightIcons: {
    flexDirection: 'row',
    gap: 5,
  },
  userGreeting: {
    backgroundColor: 'rgba(233, 226, 206, 0.2)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 15,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  greetingText: {
    flex: 1,
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
  },
  coinIcon: {
    width: 25,
    height: 25,
    marginRight: 2,
  },
  pointsBadge: {
    backgroundColor: COLORS.accent2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    flexDirection: 'row',
  },
  pointsText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: FONTS.bold,
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 25,
    // paddingHorizontal: 5,
  },
  featureIcon: {
    alignItems: 'center',
    flex: 1,
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  specialIconContainer: {
    backgroundColor: COLORS.accent1,
  },
  newBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ef4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  newBadgeText: {
    color: COLORS.white,
    fontSize: 8,
    fontFamily: FONTS.bold,
  },
  featureLabel: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 8,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    lineHeight: 14,
  },
  historySection: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLORS.primary,
  },
  viewAllLink: {
    color: COLORS.accent2,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  historyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  historyCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  historyCardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  historyCardTextContainer: {
    padding: 12,
  },
  historyCardTitle: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    color: COLORS.primary,
    lineHeight: 18,
  },
  bottomNav: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
    width: '25%',
    paddingVertical: 10,
  },
  navIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconActive: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.secondary,
  },
  navIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '25%',
    height: 3,
    backgroundColor: COLORS.secondary,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: FONTS.regular,
  },
  navLabelActive: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  navLabelInactive: {
    color: COLORS.secondary,
  },
});

export default styles;
