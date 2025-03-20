import {Text, StyleSheet, View, SafeAreaView, Pressable, Modal, TextInput, StatusBar, FlatList, Alert, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {colors, spacing} from '../constants/generall';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MAX_WORDS = 35;

export default class MissionsScreen extends Component {
  state = {
    modalVisible: false,
    wordsModalVisible: false,
    kelime: '',
    okunus: '',
    wordsList: [
      {kelime: 'Apple', okunus: 'Æpəl'},
      {kelime: 'Banana', okunus: 'bəˈnænə'},
      {kelime: 'Orange', okunus: 'ˈɒrɪndʒ'},
      {kelime: 'Pineapple', okunus: 'ˈpaɪnˌæpəl'},
      {kelime: 'Strawberry', okunus: 'ˈstrɔːˌbɛri'},
      {kelime: 'Watermelon', okunus: 'ˈwɔːtəˌmɛlən'},
    ],
  };

  toggleModal = () => {
    if (this.state.wordsList.length >= MAX_WORDS) {
      Alert.alert("Limit Aşıldı", "Maksimum kelime sayısına ulaştınız.");
      return;
    }
    this.setState({modalVisible: !this.state.modalVisible});
  };

  toggleWordsModal = () => {
    this.setState({wordsModalVisible: !this.state.wordsModalVisible});
  };

  handleAddWord = () => {
    const {kelime, okunus, wordsList} = this.state;

    if (kelime.trim() && okunus.trim()) {
      const newWord = {kelime, okunus};
      this.setState({
        wordsList: [...wordsList, newWord],
        kelime: '',
        okunus: '',
        modalVisible: false,
      });
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurunuz.");
    }
  };

  render() {
    const {modalVisible, wordsModalVisible, kelime, okunus, wordsList} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
        
        <View style={styles.header}>
          <Pressable style={styles.addButton} onPress={this.toggleModal}>
            <Text style={styles.addButtonText}>Yeni Kelime Ekle</Text>
          </Pressable>
          <Text 
            style={[
              styles.counter, 
              wordsList.length >= MAX_WORDS ? styles.counterLimit : null
            ]}
          >
            {wordsList.length} / {MAX_WORDS}
          </Text>
        </View>

        {/* Kelime Havuzun */}
        <Text style={styles.sectionTitle}>Kelime Havuzun</Text>
        
        <Pressable style={styles.wordPool} onPress={this.toggleWordsModal}>
          {wordsList.slice(0, 5).map((item, index) => (
            <Text key={index} style={styles.wordItem}>{item.kelime}</Text>
          ))}
          {wordsList.length > 5 && (
            <Text style={styles.viewAll}>Tümünü Gör...</Text>
          )}
        </Pressable>

        {/* Yeni Kelime Ekle Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={this.toggleModal}
        >
          <Pressable style={styles.modalOverlay} onPress={this.toggleModal}>
            <Pressable style={styles.modalContent} onPress={() => {}}>
              <Pressable style={styles.closeButton} onPress={this.toggleModal}>
                <MaterialCommunityIcons name="close" size={24} color={colors.black2} />
              </Pressable>
              <Text style={styles.modalTitle}>Yeni Kelime Ekle</Text>
              
              <TextInput
                style={styles.input}
                placeholder="Kelime"
                value={kelime}
                onChangeText={(text) => this.setState({kelime: text})}
              />
              <TextInput
                style={styles.input}
                placeholder="Okunuşu"
                value={okunus}
                onChangeText={(text) => this.setState({okunus: text})}
              />
              
              <Pressable style={styles.addWordButton} onPress={this.handleAddWord}>
                <Text style={styles.addWordButtonText}>Ekle</Text>
              </Pressable>
            </Pressable>
          </Pressable>
        </Modal>

        {/* Tüm Kelimeler Modal (Scrollable) */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={wordsModalVisible}
          onRequestClose={this.toggleWordsModal}
        >
          <Pressable style={styles.modalOverlay} onPress={this.toggleWordsModal}>
            <Pressable style={styles.fullWordsModal} onPress={() => {}}>
              <Pressable style={styles.closeButton} onPress={this.toggleWordsModal}>
                <MaterialCommunityIcons name="close" size={24} color={colors.black2} />
              </Pressable>
              <Text style={styles.modalTitle}>Tüm Kelimeler</Text>
              <ScrollView>
                {wordsList.map((item, index) => (
                  <View key={index} style={styles.wordRow}>
                    <Text style={styles.wordItem}>{item.kelime}</Text>
                    <Text style={styles.wordPronunciation}>{item.okunus}</Text>
                  </View>
                ))}
              </ScrollView>
            </Pressable>
          </Pressable>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.sm + (StatusBar.currentHeight || 0),
    paddingHorizontal: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  addButton: {
    backgroundColor: colors.green,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  addButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black2,
  },
  counterLimit: {
    color: 'red',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wordPool: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
  },
  wordItem: {
    fontSize: 16,
    color: colors.black2,
  },
  viewAll: {
    color: colors.green,
    marginTop: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
  },
  fullWordsModal: {
    width: '90%',
    height: '30%',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.black2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  addWordButton: {
    backgroundColor: colors.green,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addWordButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  wordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  wordPronunciation: {
    color: colors.black2,
  },
});
