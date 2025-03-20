import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fontSize, spacing} from '../constants/generall';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');
const circleSize = width * 2;

const HomeScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FF7E5F', '#FD3A69']}
          style={styles.gradientCircle}
        />

        <View style={styles.textWrapper}>
          <Text style={styles.topText}>Lanpo</Text>
        </View>

        <Text style={styles.text}>Merhaba Ali 👋</Text>

        <View style={styles.viewWrapper}>
          <Text style={styles.sectionTitle}>Haftalık Karnen</Text>

          {/* 4 Adet Full Width Card */}
          <View style={styles.card}>
            <View>
              <Text style={styles.cardText}>Puan Durumu</Text>
              <Text style={styles.cardTextPoint}>+25</Text>
            </View>
            <MaterialCommunityIcons name="plus-minus" size={28} color={colors.green} />
          </View>
          
          <View style={styles.card}>
            <View>
              <Text style={styles.cardText}>Sıralaman</Text>
              <Text style={styles.cardTextPoint}>+245</Text>
            </View>
            <MaterialCommunityIcons name="trophy" size={28} color="#FFD700" />
          </View>
          
          <View style={styles.card}>
            <View>
              <Text style={styles.cardText}>Bildirim Cevapların</Text>
              <Text style={styles.cardTextPoint}>35 / 24</Text>
            </View>
            <MaterialCommunityIcons name="bell-outline" size={28} color={colors.black2} />
          </View>
          
          <View style={styles.card}>
            <View>
              <Text style={styles.cardText}>Doğru Cevapların</Text>
              <Text style={styles.cardTextPoint}>24 / 21</Text>
            </View>
            <MaterialCommunityIcons name="check-circle-outline" size={28} color={colors.green} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.sm,
  },
  viewWrapper: {
    width: '100%',
    marginTop: spacing.sm,
  },
  gradientCircle: {
    position: 'absolute',
    top: -circleSize / 1.3,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
  },
  textWrapper: {
    position: 'absolute',
    top: circleSize / 9,
    width: '100%',
    alignItems: 'center',
    zIndex: 2,
  },
  topText: {
    fontSize: fontSize.xl,
    fontWeight: 'bold',
    color: colors.white,
  },
  text: {
    fontSize: fontSize.xl,
    width: '100%',
    fontWeight: 'bold',
    color: colors.black2,
    marginTop: circleSize / 4,
  },
  sectionTitle: {
    fontSize: fontSize.md,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  card: {
    width: '100%',
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: spacing.md,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: fontSize.md,
    color: colors.black2,
  },
  cardTextPoint: {
    fontSize: fontSize.sm,
    color: colors.green,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
