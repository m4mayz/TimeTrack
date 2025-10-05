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

// Professional Feature Menu Component
type ProfessionalFeatureItemProps = {
    icon: any;
    label: string;
    bgColor?: string;
    isNew?: boolean;
    onPress?: () => void;
};

const ProfessionalFeatureItem = ({
    icon,
    label,
    bgColor,
    isNew,
    onPress,
}: ProfessionalFeatureItemProps) => (
    <TouchableOpacity
        style={styles.professionalFeatureButton}
        onPress={onPress}
    >
        <View
            style={[
                styles.professionalFeatureIconWrapper,
                { backgroundColor: bgColor || COLORS.secondary },
                isNew && styles.professionalFeatureSpecialBackground,
            ]}
        >
            <Image source={icon} style={styles.professionalFeatureIcon} />
            {isNew && (
                <View style={styles.professionalFeatureNewBadge}>
                    <Text style={styles.professionalFeatureNewBadgeText}>
                        NEW
                    </Text>
                </View>
            )}
        </View>
        <Text style={styles.professionalFeatureLabel}>{label}</Text>
    </TouchableOpacity>
);

// Professional Content List Item Component
type ContentListItemProps = {
    thumbnail: { uri: string } | number;
    title: string;
    summary: string;
    onPress: () => void;
};

const ContentListItem = ({
    thumbnail,
    title,
    summary,
    onPress,
}: ContentListItemProps) => (
    <TouchableOpacity style={styles.contentListItem} onPress={onPress}>
        <Image source={thumbnail} style={styles.contentThumbnail} />
        <View style={styles.contentTextContainer}>
            <Text style={styles.contentTitle} numberOfLines={2}>
                {title}
            </Text>
            <Text style={styles.contentSummary} numberOfLines={3}>
                {summary}
            </Text>
        </View>
        <FontAwesome
            name="chevron-right"
            size={16}
            color={COLORS.gray}
            style={styles.contentChevron}
        />
    </TouchableOpacity>
);

// Horizontal Person Card Component
type HorizontalPersonCardProps = {
    thumbnail: { uri: string } | number;
    name: string;
    title: string;
    description: string;
    onPress: () => void;
};

const HorizontalPersonCard = ({
    thumbnail,
    name,
    title,
    description,
    onPress,
}: HorizontalPersonCardProps) => (
    <TouchableOpacity style={styles.horizontalPersonCard} onPress={onPress}>
        <Image source={thumbnail} style={styles.personThumbnail} />
        <View style={styles.personInfoContainer}>
            <Text style={styles.personName} numberOfLines={1}>
                {name}
            </Text>
            <Text style={styles.personTitle} numberOfLines={1}>
                {title}
            </Text>
            <Text style={styles.personDescription} numberOfLines={3}>
                {description}
            </Text>
        </View>
    </TouchableOpacity>
);

// Professional Content Section Component
type ContentSectionProps = {
    title: string;
    bgColor: string;
    items: {
        thumbnail: { uri: string } | number;
        title: string;
        summary: string;
        onPress: () => void;
    }[];
    onViewAll: () => void;
};

const ContentSection = ({
    title,
    bgColor,
    items,
    onViewAll,
}: ContentSectionProps) => (
    <View style={styles.contentSectionContainer}>
        {/* Section Header */}
        <View
            style={[styles.contentSectionHeader, { backgroundColor: bgColor }]}
        >
            <Text style={styles.contentSectionTitle}>{title}</Text>

            {/* Content List */}
            <View style={styles.contentListContainer}>
                {items.map((item, index) => (
                    <ContentListItem
                        key={index}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        summary={item.summary}
                        onPress={item.onPress}
                    />
                ))}

                {/* View All Button */}
                <TouchableOpacity
                    style={styles.viewAllButton}
                    onPress={onViewAll}
                >
                    <Text style={styles.viewAllButtonText}>Lihat Semua</Text>
                    <FontAwesome
                        name="arrow-right"
                        size={14}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

// Horizontal Person Section Component
type HorizontalPersonSectionProps = {
    title: string;
    bgColor: string;
    persons: {
        thumbnail: { uri: string } | number;
        name: string;
        title: string;
        description: string;
        onPress: () => void;
    }[];
    onViewAll: () => void;
};

const HorizontalPersonSection = ({
    title,
    bgColor,
    persons,
    onViewAll,
}: HorizontalPersonSectionProps) => (
    <View style={styles.contentSectionContainer}>
        {/* Section Header */}
        <View
            style={[styles.contentSectionHeader, { backgroundColor: bgColor }]}
        >
            <Text style={styles.contentSectionTitle}>{title}</Text>
        </View>

        {/* Horizontal Scroll Container */}
        <View style={styles.horizontalPersonListContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScrollContent}
            >
                {persons.map((person, index) => (
                    <HorizontalPersonCard
                        key={index}
                        thumbnail={person.thumbnail}
                        name={person.name}
                        title={person.title}
                        description={person.description}
                        onPress={person.onPress}
                    />
                ))}
                {/* View All Button */}
                <TouchableOpacity
                    style={styles.viewAllButtonHorizontal}
                    onPress={onViewAll}
                >
                    <Text style={styles.viewAllButtonText}>Lihat Semua</Text>
                    <FontAwesome
                        name="arrow-right"
                        size={14}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
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
                {/* Professional Features Menu */}
                <View style={styles.professionalFeaturesContainer}>
                    <View style={styles.professionalFeaturesGrid}>
                        <ProfessionalFeatureItem
                            icon={require("../assets/img/012-book.png")}
                            label="Jelajahi Sejarah"
                            bgColor={COLORS.accent1}
                            onPress={() => alert("Fitur Jelajahi Sejarah")}
                        />
                        <ProfessionalFeatureItem
                            icon={require("../assets/img/023-map.png")}
                            label="Peta Sejarah"
                            bgColor={COLORS.accent2}
                            onPress={() => alert("Fitur Peta Sejarah")}
                        />
                        <ProfessionalFeatureItem
                            icon={require("../assets/img/045-papyrus-1.png")}
                            label="Quiz Sejarah"
                            bgColor={"#e67e22"}
                            // isNew={true}
                            onPress={() => alert("Fitur Quiz Sejarah")}
                        />
                        <ProfessionalFeatureItem
                            icon={require("../assets/img/032-pantheon.png")}
                            label="Market Place"
                            bgColor={COLORS.secondary}
                            onPress={() => alert("Fitur Market Place")}
                        />
                    </View>
                </View>

                {/* Professional Content Sections */}
                <View style={styles.allContentSectionsContainer}>
                    {/* Sejarah Indonesia */}
                    <ContentSection
                        title="Sejarah Indonesia"
                        bgColor={COLORS.darkWhite}
                        items={[
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
                                },
                                title: "Masa Praaksara Indonesia",
                                summary:
                                    "Periode kehidupan manusia sebelum mengenal tulisan, dimulai dari zaman batu hingga zaman logam.",
                                onPress: () =>
                                    alert("Membuka Masa Praaksara..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=150&fit=crop",
                                },
                                title: "Kerajaan Hindu-Buddha",
                                summary:
                                    "Era kejayaan Sriwijaya dan Majapahit yang menguasai perdagangan dan budaya di Nusantara.",
                                onPress: () =>
                                    alert("Membuka Kerajaan Hindu-Buddha..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=200&h=150&fit=crop",
                                },
                                title: "Masa Kolonial",
                                summary:
                                    "Kedatangan bangsa Eropa dan perjuangan kemerdekaan Indonesia dari penjajahan.",
                                onPress: () =>
                                    alert("Membuka Masa Kolonial..."),
                            },
                        ]}
                        onViewAll={() => alert("Lihat Semua Sejarah Indonesia")}
                    />

                    {/* Tokoh Nasional dan Dunia - Horizontal Scroll */}
                    <HorizontalPersonSection
                        title="Tokoh Nasional dan Dunia"
                        bgColor={COLORS.background}
                        persons={[
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
                                },
                                name: "Soekarno",
                                title: "Proklamator Kemerdekaan",
                                description:
                                    "Presiden pertama Indonesia dan tokoh proklamator kemerdekaan yang karismatik dan visioner.",
                                onPress: () =>
                                    alert("Membuka Profil Soekarno..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
                                },
                                name: "Cut Nyak Dhien",
                                title: "Pahlawan Wanita Aceh",
                                description:
                                    "Pejuang wanita yang gigih melawan penjajahan Belanda di tanah Aceh dengan semangat pantang menyerah.",
                                onPress: () =>
                                    alert("Membuka Profil Cut Nyak Dhien..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
                                },
                                name: "Mahatma Gandhi",
                                title: "Bapak Bangsa India",
                                description:
                                    "Tokoh perdamaian dunia yang menginspirasi gerakan kemerdekaan tanpa kekerasan di seluruh dunia.",
                                onPress: () =>
                                    alert("Membuka Profil Gandhi..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
                                },
                                name: "Diponegoro",
                                title: "Pangeran Jawa",
                                description:
                                    "Pemimpin Perang Jawa yang melawan kolonialisme Belanda dengan strategi perang gerilya yang brilliant.",
                                onPress: () =>
                                    alert("Membuka Profil Diponegoro..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1494790108755-2616c39ca9cc?w=200&h=200&fit=crop&crop=face",
                                },
                                name: "R.A. Kartini",
                                title: "Pelopor Emansipasi Wanita",
                                description:
                                    "Tokoh emansipasi wanita Indonesia yang memperjuangkan pendidikan dan kesetaraan gender.",
                                onPress: () =>
                                    alert("Membuka Profil Kartini..."),
                            },
                        ]}
                        onViewAll={() =>
                            alert("Lihat Semua Tokoh Nasional dan Dunia")
                        }
                    />

                    {/* Budaya Daerah */}
                    <ContentSection
                        title="Budaya Daerah"
                        bgColor={COLORS.darkWhite}
                        items={[
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1564769662454-4ae47aadc62b?w=200&h=150&fit=crop",
                                },
                                title: "Tari Tradisional Jawa",
                                summary:
                                    "Keindahan gerakan tari klasik Jawa yang sarat makna filosofis dan spiritual.",
                                onPress: () =>
                                    alert("Membuka Tari Tradisional Jawa..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
                                },
                                title: "Arsitektur Rumah Adat",
                                summary:
                                    "Keunikan dan filosofi arsitektur rumah adat dari berbagai daerah di Indonesia.",
                                onPress: () =>
                                    alert("Membuka Arsitektur Rumah Adat..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=150&fit=crop",
                                },
                                title: "Batik Nusantara",
                                summary:
                                    "Warisan budaya batik dengan motif dan makna yang berbeda dari setiap daerah.",
                                onPress: () =>
                                    alert("Membuka Batik Nusantara..."),
                            },
                        ]}
                        onViewAll={() => alert("Lihat Semua Budaya Daerah")}
                    />

                    {/* Sejarah yang Tidak Diketahui */}
                    <ContentSection
                        title="Sejarah yang Tidak Diketahui"
                        bgColor={COLORS.background}
                        items={[
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=150&fit=crop",
                                },
                                title: "Kerajaan Tambora",
                                summary:
                                    "Misteri kerajaan yang hilang akibat letusan gunung berapi dahsyat tahun 1815.",
                                onPress: () =>
                                    alert(
                                        "Membuka Misteri Kerajaan Tambora..."
                                    ),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=200&h=150&fit=crop",
                                },
                                title: "Peradaban Gunung Padang",
                                summary:
                                    "Situs megalitikum tertua di dunia yang masih menyimpan banyak misteri.",
                                onPress: () =>
                                    alert("Membuka Misteri Gunung Padang..."),
                            },
                            {
                                thumbnail: {
                                    uri: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=200&h=150&fit=crop",
                                },
                                title: "Naskah Lontar Kuno",
                                summary:
                                    "Rahasia ilmu pengetahuan dan teknologi masa lalu yang tersimpan dalam lontar.",
                                onPress: () =>
                                    alert("Membuka Misteri Naskah Lontar..."),
                            },
                        ]}
                        onViewAll={() =>
                            alert("Lihat Semua Sejarah Tersembunyi")
                        }
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default DashboardScreen;
