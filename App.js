import * as React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { render } from "react-dom";
import LinearGradient from 'react-native-linear-gradient';
import ModalCard from "./Modal";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const staticData = [
  {
    'id': 1,
    'title': 'Image1',
    'subtitle': 'Subtitle for Image1',
    'descripition': 'Description for Image1',
    'uri': ''
  },
  {
    'id': 2,
    'title': 'Image2',
    'subtitle': 'Subtitle for Image2',
    'descripition': 'Description for Image2',
    'uri': ''
  },
  {
    'id': 3,
    'title': 'Image3',
    'subtitle': 'Subtitle for Image3',
    'descripition': 'Description for Image3',
    'uri': ''
  },
  {
    'id': 4,
    'title': 'Image4',
    'subtitle': 'Subtitle for Image4',
    'descripition': 'Description for Image4',
    'uri': ''
  },
  {
    'id': 5,
    'title': 'Image5',
    'subtitle': 'Subtitle for Image5',
    'descripition': 'Description for Image5',
    'uri': ''
  },
  {
    'id': 6,
    'title': 'Image6',
    'subtitle': 'Subtitle for Image6',
    'descripition': 'Description for Image6',
    'uri': ''
  },
  {
    'id': 7,
    'title': 'Image7',
    'subtitle': 'Subtitle for Image7',
    'descripition': 'Description for Image7',
    'uri': ''
  },
  {
    'id': 8,
    'title': 'Image8',
    'subtitle': 'Subtitle for Image8',
    'descripition': 'Description for Image8',
    'uri': ''
  },
  {
    'id': 9,
    'title': 'Image9',
    'subtitle': 'Subtitle for Image9',
    'descripition': 'Description for Image9',
    'uri': ''
  },
  {
    'id': 10,
    'title': 'Image10',
    'subtitle': 'Subtitle for Image10',
    'descripition': 'Description for Image10',
    'uri': ''
  },
  {
    'id': 11,
    'title': 'Image11',
    'subtitle': 'Subtitle for Image11',
    'descripition': 'Description for Image11',
    'uri': ''
  },
  {
    'id': 12,
    'title': 'Image12',
    'subtitle': 'Subtitle for Image12',
    'descripition': 'Description for Image12',
    'uri': ''
  },
  {
    'id': 13,
    'title': 'Image13',
    'subtitle': 'Subtitle for Image13',
    'descripition': 'Description for Image13',
    'uri': ''
  },
  {
    'id': 14,
    'title': 'Image14',
    'subtitle': 'Subtitle for Image14',
    'descripition': 'Description for Image14',
    'uri': ''
  },
  {
    'id': 15,
    'title': 'Image15',
    'subtitle': 'Subtitle for Image15',
    'descripition': 'Description for Image15',
    'uri': ''
  },
  {
    'id': 16,
    'title': 'Image16',
    'subtitle': 'Subtitle for Image16',
    'descripition': 'Description for Image16',
    'uri': ''
  },
  {
    'id': 17,
    'title': 'Image17',
    'subtitle': 'Subtitle for Image17',
    'descripition': 'Description for Image17',
    'uri': ''
  },
  {
    'id': 18,
    'title': 'Image18',
    'subtitle': 'Subtitle for Image18',
    'descripition': 'Description for Image18',
    'uri': ''
  },
  {
    'id': 19,
    'title': 'Image19',
    'subtitle': 'Subtitle for Image19',
    'descripition': 'Description for Image19',
    'uri': ''
  },
  {
    'id': 20,
    'title': 'Image20',
    'subtitle': 'Subtitle for Image20',
    'descripition': 'Description for Image20',
    'uri': ''
  },
  {
    'id': 21,
    'title': 'Image21',
    'subtitle': 'Subtitle for Image21',
    'descripition': 'Description for Image21',
    'uri': ''
  },
  {
    'id': 22,
    'title': 'Image22',
    'subtitle': 'Subtitle for Image22',
    'descripition': 'Description for Image22',
    'uri': ''
  },
  {
    'id': 23,
    'title': 'Image23',
    'subtitle': 'Subtitle for Image23',
    'descripition': 'Description for Image23',
    'uri': ''
  },
  {
    'id': 24,
    'title': 'Image24',
    'subtitle': 'Subtitle for Image24',
    'descripition': 'Description for Image24',
    'uri': ''
  },
  {
    'id': 25,
    'title': 'Image25',
    'subtitle': 'Subtitle for Image25',
    'descripition': 'Description for Image25',
    'uri': ''
  },
]

const App = () => {
    return (
      <LinearGradient colors={['#eecda3', '#ef629f', '#192f6a']} style={styles.linearGradient}>
        <ScrollView>
          {staticData.map((item) => (
            <>
          <Card style={{margin: 20}}>
            <Card.Title title={item.title} subtitle={item.subtitle} left={LeftContent} />
            <Card.Cover source={{ uri: item.uri }} />
            <Card.Content>
              <Title>Card Description:</Title>
              <Paragraph>{item.descripition}</Paragraph>
            </Card.Content>
          </Card>
          </>
          ))}
          <ModalCard/>
        </ScrollView>
      </LinearGradient>
    );
}

export default App;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});