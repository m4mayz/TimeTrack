import { FontAwesome } from "@expo/vector-icons";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import styles, { COLORS } from "../style/styles";

// Feature Icon Component
type FeatureIconProps = {
    icon: any;
    label: string;
    bgColor?: string;
    isSpecial?: boolean;
};

const FeatureIcon = ({ icon, label, bgColor, isSpecial }: FeatureIconProps) => (
    <TouchableOpacity style={styles.featureIcon}>
        <View
            style={[
                styles.featureIconContainer,
                { backgroundColor: bgColor || COLORS.secondary },
                isSpecial && styles.specialIconContainer,
            ]}
        >
            <Image source={icon} style={styles.featureIconImage} />
            {isSpecial && (
                <View style={styles.newBadge}>
                    <Text style={styles.newBadgeText}>NEW</Text>
                </View>
            )}
        </View>
        <Text style={styles.featureLabel}>{label}</Text>
    </TouchableOpacity>
);

// History Card Component
type HistoryCardProps = {
    title: string;
    imageSource: { uri: string } | number;
    onPress: () => void;
};

const HistoryCard = ({ title, imageSource, onPress }: HistoryCardProps) => (
    <TouchableOpacity style={styles.historyCard} onPress={onPress}>
        <Image source={imageSource} style={styles.historyCardImage} />
        <View style={styles.historyCardTextContainer}>
            <Text style={styles.historyCardTitle} numberOfLines={3}>
                {title}
            </Text>
        </View>
    </TouchableOpacity>
);

const DashboardScreen = () => {
    return (
        <View style={styles.NavMenuSafeArea}>
            {/* Enhanced Header */}
            <View>
                {/* Top Header with Notification */}
                <View style={styles.topHeader}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.welcomeText}>Selamat Datang</Text>
                        <Text style={styles.userNameText}>Sejarahwan!</Text>
                    </View>

                    <View style={styles.headerActions}>
                        {/* Coin Reward Button */}
                        <TouchableOpacity style={styles.coinRewardButton}>
                            <Image
                                source={require("../assets/img/coin.png")}
                                style={styles.headerCoinIcon}
                            />
                            <Text style={styles.headerCoinText}>100.000</Text>
                            <FontAwesome
                                name="chevron-right"
                                size={12}
                                color={COLORS.secondary}
                                style={{ marginLeft: 4, marginTop: 2 }}
                            />
                        </TouchableOpacity>

                        {/* Notification Button */}
                        <TouchableOpacity style={styles.notificationButton}>
                            <FontAwesome
                                name="bell"
                                size={20}
                                color={COLORS.white}
                            />
                            <View style={styles.notificationBadge}>
                                <Text style={styles.notificationBadgeText}>
                                    3
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Enhanced Search Bar */}
                <View style={styles.searchBarWrapper}>
                    <View style={styles.searchBarContainer}>
                        <FontAwesome
                            name="search"
                            size={16}
                            color={COLORS.primary}
                            style={styles.searchIcon}
                        />
                        <TextInput
                            style={styles.searchBarInput}
                            placeholder="Jelajahi sejarah menarik..."
                            placeholderTextColor={COLORS.gray}
                        />
                        <TouchableOpacity style={styles.filterButton}>
                            <FontAwesome
                                name="filter"
                                size={14}
                                color={COLORS.primary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.dashboardContainer}>
                {/* Feature Icons */}
                <View style={styles.contentContainer}>
                    <View style={styles.featuresGrid}>
                        <FeatureIcon
                            icon={require("../assets/img/012-book.png")}
                            label="Jelajahi Sejarah"
                        />
                        <FeatureIcon
                            icon={require("../assets/img/023-map.png")}
                            label="Peta Sejarah"
                        />
                        <FeatureIcon
                            icon={require("../assets/img/045-papyrus-1.png")}
                            label="Quiz Sejarah"
                        />
                        <FeatureIcon
                            icon={require("../assets/img/032-pantheon.png")}
                            label="Market Place"
                        />
                    </View>
                </View>

                {/* History Section */}
                <View style={styles.historySection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>
                            Sejarah Indonesia
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllLink}>Lihat Semua</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.historyGrid}>
                        <HistoryCard
                            title="Masa Praaksara - Periode kehidupan manusia sebelum mengenal tulisan"
                            imageSource={{
                                uri: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                            }}
                            onPress={() => alert("Membuka Masa Praaksara...")}
                        />
                        <HistoryCard
                            title="Kerajaan Hindu-Buddha - Era kejayaan Sriwijaya dan Majapahit"
                            imageSource={{
                                uri: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
                            }}
                            onPress={() =>
                                alert("Membuka Kerajaan Hindu-Buddha...")
                            }
                        />
                        <HistoryCard
                            title="Kerajaan Islam - Penyebaran agama Islam di Nusantara"
                            imageSource={{
                                uri: "https://images.unsplash.com/photo-1564769662454-4ae47aadc62b?w=400&h=300&fit=crop",
                            }}
                            onPress={() => alert("Membuka Kerajaan Islam...")}
                        />
                        <HistoryCard
                            title="Masa Kolonial - Kedatangan bangsa Eropa hingga kemerdekaan"
                            imageSource={{
                                uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&h=300&fit=crop",
                            }}
                            onPress={() => alert("Membuka Masa Kolonial...")}
                        />
                        <HistoryCard
                            title="Masa Kolonial - Kedatangan bangsa Eropa hingga kemerdekaan"
                            imageSource={{
                                uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&h=300&fit=crop",
                            }}
                            onPress={() => alert("Membuka Masa Kolonial...")}
                        />
                        <HistoryCard
                            title="Masa Kolonial - Kedatangan bangsa Eropa hingga kemerdekaan"
                            imageSource={{
                                uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&h=300&fit=crop",
                            }}
                            onPress={() => alert("Membuka Masa Kolonial...")}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default DashboardScreen;
