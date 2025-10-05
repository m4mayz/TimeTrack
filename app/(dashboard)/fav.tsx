import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles, { COLORS } from "../style/styles";

// Types
interface Reading {
    id: number;
    title: string;
    category: string;
    summary: string;
    readTime: string;
    image: any;
    dateAdded: string;
    tags: string[];
}

// Sample favorite readings data
const favoriteReadings: Reading[] = [
    {
        id: 1,
        title: "Proklamasi Kemerdekaan Indonesia",
        category: "Sejarah Indonesia",
        summary:
            "Peristiwa bersejarah yang menandai kemerdekaan Indonesia pada 17 Agustus 1945...",
        readTime: "5 menit",
        image: require("../assets/img/001-history.png"),
        dateAdded: "2 hari yang lalu",
        tags: ["Kemerdekaan", "Soekarno"],
    },
    {
        id: 2,
        title: "Kerajaan Majapahit: Kejayaan Nusantara",
        category: "Kerajaan Nusantara",
        summary:
            "Majapahit merupakan kerajaan terbesar dalam sejarah Indonesia yang menguasai sebagian besar Nusantara...",
        readTime: "8 menit",
        image: require("../assets/img/032-pantheon.png"),
        dateAdded: "1 minggu yang lalu",
        tags: ["Majapahit", "Gajah Mada"],
    },
    {
        id: 3,
        title: "Raden Ajeng Kartini: Pelopor Emansipasi",
        category: "Tokoh Nasional",
        summary:
            "Kartini adalah sosok perempuan yang memperjuangkan kesetaraan dan pendidikan untuk kaum perempuan...",
        readTime: "6 menit",
        image: require("../assets/img/012-book.png"),
        dateAdded: "3 hari yang lalu",
        tags: ["Kartini", "Emansipasi"],
    },
    {
        id: 4,
        title: "Perang Diponegoro: Perlawanan Heroik",
        category: "Perlawanan",
        summary:
            "Perang Diponegoro adalah perang terbesar yang pernah dialami Hindia Belanda...",
        readTime: "7 menit",
        image: require("../assets/img/035-broom.png"),
        dateAdded: "5 hari yang lalu",
        tags: ["Diponegoro", "Perang Jawa"],
    },
    {
        id: 5,
        title: "Borobudur: Keajaiban Dunia dari Jawa",
        category: "Warisan Budaya",
        summary:
            "Candi Borobudur adalah candi Buddha terbesar di dunia dan salah satu monumen Buddha terbesar...",
        readTime: "4 menit",
        image: require("../assets/img/023-map.png"),
        dateAdded: "1 minggu yang lalu",
        tags: ["Borobudur", "Buddhism"],
    },
];

const FavScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const categories = [
        "Semua",
        "Sejarah Indonesia",
        "Tokoh Nasional",
        "Budaya Daerah",
        "Sejarah yang Tidak Diketahui",
    ];

    const filteredReadings = favoriteReadings.filter((reading) => {
        const matchesSearch =
            reading.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            reading.summary.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "Semua" ||
            reading.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const removeFromFavorites = (id: number) => {
        // In a real app, this would update the favorites list
        console.log(`Removing reading ${id} from favorites`);
    };

    const renderFavoriteItem = (reading: Reading) => (
        <TouchableOpacity key={reading.id} style={styles.favoriteItem}>
            <View style={styles.favoriteItemContent}>
                <Image
                    source={reading.image}
                    style={styles.favoriteItemImage}
                />
                <View style={styles.favoriteItemInfo}>
                    <View style={styles.favoriteItemHeader}>
                        <Text style={styles.favoriteItemCategory}>
                            {reading.category}
                        </Text>
                        <TouchableOpacity
                            style={styles.favoriteRemoveButton}
                            onPress={() => removeFromFavorites(reading.id)}
                        >
                            <Ionicons
                                name="heart"
                                size={20}
                                color={COLORS.accent3}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.favoriteItemTitle}>
                        {reading.title}
                    </Text>
                    <Text style={styles.favoriteItemSummary} numberOfLines={2}>
                        {reading.summary}
                    </Text>
                    <View style={styles.favoriteItemMeta}>
                        <View style={styles.favoriteItemTags}>
                            {reading.tags
                                .slice(0, 2)
                                .map((tag: string, index: number) => (
                                    <View
                                        key={index}
                                        style={styles.favoriteTag}
                                    >
                                        <Text style={styles.favoriteTagText}>
                                            {tag}
                                        </Text>
                                    </View>
                                ))}
                        </View>
                        <View style={styles.favoriteItemFooter}>
                            <Text style={styles.favoriteItemReadTime}>
                                <Ionicons
                                    name="time-outline"
                                    size={12}
                                    color={COLORS.gray}
                                />{" "}
                                {reading.readTime}
                            </Text>
                            <Text style={styles.favoriteItemDate}>
                                {reading.dateAdded}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.NavMenuSafeArea}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.primary}
            />

            {/* Header */}
            <View style={styles.favoriteHeader}>
                <View style={styles.favoriteHeaderTop}>
                    <View>
                        <Text style={styles.favoriteHeaderTitle}>
                            Bacaan Favorit
                        </Text>
                        <Text style={styles.favoriteHeaderSubtitle}>
                            {filteredReadings.length} bacaan tersimpan
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.favoriteHeaderButton}>
                        <Ionicons
                            name="options-outline"
                            size={24}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.favoriteSearchContainer}>
                    <View style={styles.favoriteSearchBar}>
                        <Ionicons
                            name="search-outline"
                            size={20}
                            color={COLORS.gray}
                            style={styles.favoriteSearchIcon}
                        />
                        <TextInput
                            style={styles.favoriteSearchInput}
                            placeholder="Cari bacaan favorit..."
                            placeholderTextColor={COLORS.gray}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        {searchQuery.length > 0 && (
                            <TouchableOpacity
                                onPress={() => setSearchQuery("")}
                            >
                                <Ionicons
                                    name="close-circle"
                                    size={20}
                                    color={COLORS.gray}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* Category Filter */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.favoriteCategoryContainer}
                >
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={[
                                styles.favoriteCategoryButton,
                                selectedCategory === category &&
                                    styles.favoriteCategoryButtonActive,
                            ]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text
                                style={[
                                    styles.favoriteCategoryText,
                                    selectedCategory === category &&
                                        styles.favoriteCategoryTextActive,
                                ]}
                            >
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Favorites List */}
            <ScrollView
                style={styles.favoriteListContainer}
                showsVerticalScrollIndicator={false}
            >
                {filteredReadings.length > 0 ? (
                    <View style={styles.favoriteList}>
                        {filteredReadings.map(renderFavoriteItem)}
                    </View>
                ) : (
                    <View style={styles.favoriteEmptyState}>
                        <Ionicons
                            name="heart-outline"
                            size={64}
                            color={COLORS.gray}
                        />
                        <Text style={styles.favoriteEmptyTitle}>
                            {searchQuery
                                ? "Tidak ada hasil"
                                : "Belum ada favorit"}
                        </Text>
                        <Text style={styles.favoriteEmptySubtitle}>
                            {searchQuery
                                ? "Coba kata kunci lain untuk mencari bacaan favorit"
                                : "Tambahkan bacaan ke favorit untuk melihatnya di sini"}
                        </Text>
                        {searchQuery && (
                            <TouchableOpacity
                                style={styles.favoriteEmptyButton}
                                onPress={() => setSearchQuery("")}
                            >
                                <Text style={styles.favoriteEmptyButtonText}>
                                    Hapus Pencarian
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default FavScreen;
